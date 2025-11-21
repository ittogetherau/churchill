import axios from "axios";
import fs from "fs";
import path from "path";

let currentAccessToken = null;

// Function to read access token from a file
function readAccessToken() {
  const token = process.env.ACCESS_TOKEN;
  return token;
}

// Function to write access token to a file
function writeAccessToken(token) {
  process.env.ACCESS_TOKEN = token;
  currentAccessToken = token;
}

// Initialize access token from the file (or set to null if file doesn't exist)
currentAccessToken = readAccessToken();

export async function POST(request) {
  const { firstName, lastName, email, id, subject } = await request.json();

  async function getNewAccessToken() {
    const response = await axios.post(
      "https://accounts.zoho.com.au/oauth/v2/token",
      null,
      {
        params: {
          refresh_token: process.env.REFRESH_TOKEN,
          client_id: process.env.CLIENT_ID,
          client_secret: process.env.CLIENT_SECRET,
          grant_type: "refresh_token",
          redirect_uri: process.env.REDIRECT_URI,
          scope: "Desk.tickets.ALL",
        },
      }
    );
    const newAccessToken = response.data.access_token;
    writeAccessToken(newAccessToken);
    return newAccessToken;
  }

  async function createTicket(accessToken) {
    try {
      const response = await axios.post(
        "https://desk.zoho.com.au/api/v1/tickets",
        {
          departmentId: process.env.STUDENT_SUPPORT_TEAM_DEPARTMENT,
          contact: {
            firstName: firstName,
            lastName: lastName,
            email: email,
          },
          cf: {
            cf_student_id: id,
          },
          subject: subject,
          status: "Open",
        },
        {
          headers: {
            "Content-Type": "application/json",
            orgId: process.env.ORG_ID,
            Authorization: `Zoho-oauthtoken ${accessToken}`,
          },
        }
      );

      return new Response(JSON.stringify(response.data), { status: 200 });
    } catch (error) {
      if (error.response && error.response.data.errorCode === "INVALID_OAUTH") {
        const newAccessToken = await getNewAccessToken();
        return await createTicket(newAccessToken);
      } else {
        return new Response(JSON.stringify(error.response.data), {
          status: error.response.status,
        });
      }
    }
  }

  if (!currentAccessToken) {
    currentAccessToken = await getNewAccessToken();
  }

  return await createTicket(currentAccessToken);
}
