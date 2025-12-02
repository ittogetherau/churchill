import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

interface TokenResponse {
  access_token: string;
  token_type: string;
  expires_in: number;
}

interface Contact {
  firstName: string;
  lastName: string;
  email: string;
}

interface TicketData {
  departmentId: string;
  contact: Contact;
  cf: {
    cf_student_id: string;
  };
  subject: string;
  status: "Open" | "Closed" | "On Hold" | "In Progress";
}

interface ZohoError {
  errorCode: string;
  message: string;
}

interface CreateTicketResponse {
  id: string;
  ticketNumber: string;
  subject: string;
  [key: string]: any;
}

let currentAccessToken: string | null = null;

// Function to read access token from a file
function readAccessToken(): string | null {
  const token = process.env.ACCESS_TOKEN;
  return token || null;
}

// Function to write access token to a file
function writeAccessToken(token: string): void {
  process.env.ACCESS_TOKEN = token;
  currentAccessToken = token;
}

// Initialize access token from the file (or set to null if file doesn't exist)
currentAccessToken = readAccessToken();

export async function POST(request: NextRequest) {
  const { firstName, lastName, email, id, subject } = await request.json();

  async function getNewAccessToken(): Promise<string> {
    const response = await axios.post<TokenResponse>(
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

  async function createTicket(accessToken: string): Promise<NextResponse> {
    try {
      const response = await axios.post<CreateTicketResponse>(
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

      return NextResponse.json(response.data, { status: 200 });
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        const zohoError = error.response.data as ZohoError;

        if (zohoError.errorCode === "INVALID_OAUTH") {
          const newAccessToken = await getNewAccessToken();
          return await createTicket(newAccessToken);
        } else {
          return NextResponse.json(zohoError, {
            status: error.response.status,
          });
        }
      }

      // Return a generic error response for non-Axios errors
      return NextResponse.json(
        { errorCode: "UNKNOWN_ERROR", message: "An unknown error occurred" },
        { status: 500 }
      );
    }
  }

  if (!currentAccessToken) {
    currentAccessToken = await getNewAccessToken();
  }

  return await createTicket(currentAccessToken);
}
