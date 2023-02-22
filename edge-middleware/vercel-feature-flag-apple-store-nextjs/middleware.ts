import { NextRequest, NextResponse } from "next/server";
import { get } from "lib/feature-flags";
import { FLAG } from "lib/constants";

export const config = {
  matcher: "/",
};

export async function middleware(req: NextRequest) {
  // for this demo purposes, warn when there is no EDGE_FLAGS_HOST environmentvariable set
  if (!process.env.EDGE_FLAGS_HOST) {
    req.nextUrl.pathname = "/missing-edge-flag";
    return NextResponse.rewrite(req.nextUrl);
  }

  try {
    if (await get(FLAG)) {
      req.nextUrl.pathname = `/_closed`;
      return NextResponse.rewrite(req.nextUrl);
    }
  } catch (error) {
    console.error(error);
  }
}
