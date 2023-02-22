export const EDGE_FLAGS_HOST = process.env.EDGE_FLAGS_HOST!;
export const EDGE_FLAGS_APP = process.env.EDGE_FLAGS_APP!;

if (!EDGE_FLAGS_HOST && typeof window === undefined) {
  throw new Error("The environment variable EDGE_FLAGS_HOST is missing.");
}

if (!EDGE_FLAGS_APP && typeof window === undefined) {
  throw new Error("The environment variable EDGE_FLAGS_APP is missing.");
}

export const DISTINCT_ID_COOKIE_NAME = "distinct_id";

/**
 * List of known active Feature Flags
 */
export const FLAGS = {
  NEW_ABOUT_PAGE: "New_About_Page",
  NEW_MARKETING_PAGE: "New_Marketing_Page",
  NEW_PRODUCT_PAGE: "New_Product_Page",
} as const;

export type Flags = typeof FLAGS[keyof typeof FLAGS];
