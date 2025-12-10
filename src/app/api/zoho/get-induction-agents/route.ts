import { NextRequest, NextResponse } from "next/server";
import { getZohoAccessToken, transformAgent, ZohoAgent } from "@/lib/zoho";

const ACCOUNTS_SEARCH_URL =
  "https://www.zohoapis.com.au/crm/v2/Accounts/search";

const PER_PAGE = 200;

// Directus GraphQL
const DIRECTUS_GRAPHQL_URL = "https://cms.churchill.edu.au/graphql";

function checkAuth(req: NextRequest) {
  const providedKey = req.headers.get("x-api-key");
  const expectedKey = process.env.DIRECTUS_CHECK_KEY;
  return !!expectedKey && providedKey === expectedKey;
}

/* -------------------------------------------------------
   FETCH EXISTING zoho_id FROM DIRECTUS
------------------------------------------------------- */
async function fetchExistingZohoIds(): Promise<Set<string>> {
  const query = `
    query {
      induction_agents(limit: -1) {
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
  if (!json?.data?.induction_agents) return new Set();

  const ids = new Set<string>();

  for (const item of json.data.induction_agents) {
    if (!item?.zoho_id) continue;
    ids.add(String(item.zoho_id).trim());
  }

  return ids;
}

/* -------------------------------------------------------
   PAGINATED ZOHO FETCH
------------------------------------------------------- */
async function fetchAllZohoInductionAgents(
  token: string,
): Promise<ZohoAgent[]> {
  const criteriaRaw =
    "((Agency_Stage:equals:Active)" +
    "or(Agency_Stage:equals:Onboarding In Process)" +
    "or(Agency_Stage:equals:Contract In Progress)" +
    "or(Agency_Stage:equals:Reference Check In Progress))";

  const encodedCriteria = encodeURIComponent(criteriaRaw);

  let page = 1;
  const all: ZohoAgent[] = [];

  while (true) {
    const url = `${ACCOUNTS_SEARCH_URL}?criteria=${encodedCriteria}&page=${page}&per_page=${PER_PAGE}`;

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

    // Get Zoho token
    const token = await getZohoAccessToken();

    // Fetch Directus zoho_ids
    const existingZohoIds = await fetchExistingZohoIds();

    // Fetch all induction agents from Zoho
    const zohoAgents = await fetchAllZohoInductionAgents(token);
    const cleaned = zohoAgents.map(transformAgent);

    // Filter by zoho_id dedupe
    const filtered = cleaned.filter((agent) => {
      const id = agent.zoho_id;
      if (!id) return true;
      return !existingZohoIds.has(String(id).trim());
    });

    console.log(
      `[induction-agents] Zoho: ${cleaned.length}, Directus IDs: ${existingZohoIds.size}, New: ${filtered.length}`,
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
