import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@flargd/web";

const EDGE_FLAGS_HOST = process.env.EDGE_FLAGS_HOST!;
const EDGE_FLAGS_APP = process.env.EDGE_FLAGS_APP ?? "default";

const MAINTENANCE_FLAG = "maintenance-mode" as const;

export const config = {
  matcher: ["/big-promo"],
};

export async function middleware(req: NextRequest) {
  if (!EDGE_FLAGS_HOST) {
    req.nextUrl.pathname = `/missing-edge-flag`;
    return NextResponse.rewrite(req.nextUrl);
  }

  try {
    const client = createClient({ host: EDGE_FLAGS_HOST, app: EDGE_FLAGS_APP });
    // Check whether the maintenance page should be shown
    const isInMaintenanceMode = (await client.get(MAINTENANCE_FLAG)).enable;

    // If is in maintenance mode, point the url pathname to the maintenance page
    if (isInMaintenanceMode) {
      req.nextUrl.pathname = `/maintenance`;

      // Rewrite to the url
      return NextResponse.rewrite(req.nextUrl);
    }
  } catch (error) {
    // show the default page if Edge Flag is missing,
    // but log the error to the console
    console.error(error);
  }
}
