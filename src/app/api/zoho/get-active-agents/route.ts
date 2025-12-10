import { NextRequest, NextResponse } from "next/server";
import { getZohoAccessToken, transformAgent, ZohoAgent } from "@/lib/zoho";

const ACCOUNTS_SEARCH_URL =
  "https://www.zohoapis.com.au/crm/v2/Accounts/search";

const PER_PAGE = 200;

// Directus endpoint
const DIRECTUS_GRAPHQL_URL = "https://cms.churchill.edu.au/graphql";

function checkAuth(req: NextRequest) {
  const providedKey = req.headers.get("x-api-key");
  const expectedKey = process.env.DIRECTUS_CHECK_KEY;
  return !!expectedKey && providedKey === expectedKey;
}

/* -------------------------------------------------------
   FETCH EXISTING ZOHO IDS FROM DIRECTUS
------------------------------------------------------- */
async function fetchExistingZohoIds(): Promise<Set<string>> {
  const query = `
    query {
      active_agents(limit: -1) {
        zoho_id
      }
    }
  `;

  const res = await fetch(DIRECTUS_GRAPHQL_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query }),
  });

  if (!res.ok) return new Set();

  const json = await res.json().catch(() => null);
  if (!json?.data?.active_agents) return new Set();

  const ids = new Set<string>();
  for (const item of json.data.active_agents) {
    if (!item?.zoho_id) continue;
    ids.add(String(item.zoho_id).trim());
  }

  return ids;
}

/* -------------------------------------------------------
   PAGINATED FETCH FROM ZOHO
------------------------------------------------------- */
async function fetchAllZohoAgents(token: string): Promise<ZohoAgent[]> {
  const criteria = encodeURIComponent("(Agency_Stage:equals:Active)");

  let page = 1;
  const all: ZohoAgent[] = [];

  while (true) {
    const url =
      `${ACCOUNTS_SEARCH_URL}?criteria=${criteria}` +
      `&page=${page}&per_page=${PER_PAGE}`;

    const res = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Zoho-oauthtoken ${token}`,
        "Content-Type": "application/json",
      },
    });

    if (res.status === 204) break;
    if (!res.ok) {
      const body = await res.text();
      throw new Error(`Zoho error ${res.status}: ${body}`);
    }

    const json = (await res.json()) as {
      data?: ZohoAgent[];
      info?: { more_records?: boolean };
    };

    const batch = Array.isArray(json.data) ? json.data : [];
    if (batch.length === 0) break;

    all.push(...batch);

    if (!json.info?.more_records) break;

    page += 1;
  }

  return all;
}

/* -------------------------------------------------------
   ROUTE HANDLER
------------------------------------------------------- */
export async function POST(req: NextRequest) {
  try {
    if (!checkAuth(req)) {
      return NextResponse.json(
        { error: true, message: "Unauthorized" },
        { status: 401 },
      );
    }

    const token = await getZohoAccessToken();

    // Fetch zoho_ids already stored in Directus
    const existingZohoIds = await fetchExistingZohoIds();

    // Fetch all agents from Zoho (paginated)
    const zohoAgents = await fetchAllZohoAgents(token);
    const cleaned = zohoAgents.map(transformAgent);

    // Filter out items already in DB by zoho_id
    const filtered = cleaned.filter((agent) => {
      const id = agent.zoho_id;
      if (!id) return true;
      return !existingZohoIds.has(String(id).trim());
    });

    console.log(
      `[active-agents] Zoho: ${cleaned.length}, Directus IDs: ${existingZohoIds.size}, New: ${filtered.length}`,
    );

    return NextResponse.json(
      { agents: filtered, count: filtered.length },
      { status: 200 },
    );
  } catch (err: any) {
    return NextResponse.json(
      { error: true, message: err?.message || "Unknown error" },
      { status: 500 },
    );
  }
}
