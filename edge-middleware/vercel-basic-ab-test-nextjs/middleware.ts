import { NextRequest, NextResponse } from "next/server";
import { DISTINCT_ID_COOKIE_NAME, FLAGS } from "@lib/constants";
import {
  type FlagsMatcher,
  getFeatureFlagVariant,
  getFeatureFlag,
} from "@lib/api";

const flagsByPath: FlagsMatcher = {
  "/product": {
    name: FLAGS.NEW_PRODUCT_PAGE,
    rewrite: (value) => (value ? "/product/a" : "/product"),
  },
  "/marketing": {
    name: FLAGS.NEW_MARKETING_PAGE,
    rewrite: (value) => (value ? "/marketing/b" : "/marketing"),
  },
  "/about": {
    name: FLAGS.NEW_ABOUT_PAGE,
    rewrite: (value) => (value ? "/about/b" : "/about"),
  },
};

export const config = {
  matcher: ["/product", "/about", "/marketing"],
};

export default async function middleware(req: NextRequest) {
  const url = req.nextUrl;
  const flag = flagsByPath[url.pathname];

  if (!flag) return;

  let distinctUserID = req.cookies.get(DISTINCT_ID_COOKIE_NAME)?.value;

  if (!distinctUserID) {
    distinctUserID = crypto.randomUUID();
  }

  const variantValue = await getFeatureFlagVariant(flag.name, distinctUserID);
  url.pathname = flag.rewrite(variantValue);

  // Rewrite path based on the variant value or default to fallback
  // return NextResponse.rewrite(url);
  let res = NextResponse.rewrite(url);

  if (!req.cookies.has(DISTINCT_ID_COOKIE_NAME)) {
    // Saving distinct identifier in the cookie so that the decision sticks for subsequent visits.
    // Alternatively, request the flag without an identifier and skip saving the identifier in the cookie. This will put the user in a different bucket for each request
    res.cookies.set(DISTINCT_ID_COOKIE_NAME, distinctUserID);
  }

  return res;
}
