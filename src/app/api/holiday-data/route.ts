import { NextResponse } from "next/server";
import { HeaderDocument, HeaderQuery } from "@/graphql/generated/graphql";
import { runQuery } from "@/graphql/graphql";

export async function GET() {
  const data = await runQuery(HeaderDocument);

  return NextResponse.json(data);
}
