import { HolidayPopupDocument } from "@/graphql/generated/graphql";
import { runQuery } from "@/graphql/graphql";
import { NextResponse } from "next/server";

export async function GET() {
  const data = await runQuery(HolidayPopupDocument);
  return NextResponse.json(data);
}
