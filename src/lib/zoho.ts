// src/lib/zoho.ts

const TOKEN_URL = "https://accounts.zoho.com.au/oauth/v2/token";

export type ZohoAgent = {
  id: string;
  Account_Name?: string | null;
  Phone?: string | null;
  Email?: string | null;
  Representative_Contact_Name?: string | null;
  Billing_Street?: string | null;
  Billing_City?: string | null;
  Billing_State?: string | null;
  Country?: string | null;
  Agency_Stage?: string | null;
  Review?: string | null;
  [key: string]: any;
};

/**
 * Uses refresh_token grant to get a Zoho access token.
 * Reads credentials from env:
 *  - ZOHO_CLIENT_ID
 *  - ZOHO_CLIENT_SECRET
 *  - ZOHO_REFRESH_TOKEN
 */
export async function getZohoAccessToken(): Promise<string> {
  const clientId = (process.env.ZOHO_CLIENT_ID || "").trim();
  const clientSecret = (process.env.ZOHO_CLIENT_SECRET || "").trim();
  const refreshToken = (process.env.ZOHO_REFRESH_TOKEN || "").trim();

  if (!clientId || !clientSecret || !refreshToken) {
    console.error("[getZohoAccessToken] Missing env vars", {
      hasClientId: !!clientId,
      hasClientSecret: !!clientSecret,
      hasRefreshToken: !!refreshToken,
    });
    throw new Error("Missing Zoho env vars");
  }

  const body =
    "grant_type=refresh_token" +
    "&refresh_token=" +
    encodeURIComponent(refreshToken) +
    "&client_id=" +
    encodeURIComponent(clientId) +
    "&client_secret=" +
    encodeURIComponent(clientSecret);

  const res = await fetch(TOKEN_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body,
  });

  const raw = await res.text();

  if (!res.ok) {
    console.error("[getZohoAccessToken] Zoho error:", res.status);
    console.error(
      "[getZohoAccessToken] Zoho raw (first 300 chars):",
      raw.slice(0, 300),
    );
    throw new Error(`Zoho token error ${res.status}`);
  }

  let data: { access_token?: string } = {};
  try {
    data = JSON.parse(raw);
  } catch (e) {
    console.error("[getZohoAccessToken] JSON parse error:", e);
    console.error(
      "[getZohoAccessToken] Raw (first 300 chars):",
      raw.slice(0, 300),
    );
    throw new Error("Invalid JSON from Zoho token endpoint");
  }

  if (!data.access_token) {
    console.error("[getZohoAccessToken] No access_token in response:", data);
    throw new Error("No access_token in Zoho response");
  }

  return data.access_token;
}

/**
 * Minimal transform from Zoho Account record to your internal shape.
 */
export function transformAgent(agent: ZohoAgent) {
  const addressParts = [
    agent.Billing_Street,
    agent.Billing_City,
    agent.Billing_State,
    agent.Country,
  ].filter(Boolean);

  return {
    name: agent.Account_Name || null,
    phone: agent.Phone || null,
    email: agent.Email || null,
    agent_name: agent.Representative_Contact_Name || null,
    address: addressParts.join(", "),
    zoho_id: agent.id,
    account_name: agent.Account_Name || null,
    agency_stage: agent.Agency_Stage || null,
    review_link: agent.Review || null,
  };
}
