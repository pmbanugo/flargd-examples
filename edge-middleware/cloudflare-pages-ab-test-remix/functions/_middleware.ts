import { createClient } from "@flargd/web";

const abTest: PagesFunction = async ({ request, next, env }) => {
  //   console.log(JSON.stringify(env, null, 2));

  if ("EDGE_FLAGS_HOST" in env) {
    const url = new URL(request.url);
    const flag = flagsByPath[url.pathname];

    if (flag) {
      let cookie = request.headers.get("cookie");
      let distinctId = getCookie(cookie, DISTINCT_ID_COOKIE_NAME);

      // is cookie set?
      if (distinctId) {
        console.log("I have a cookie: ", distinctId);

        const feature = await getFeatureFlag(
          env.EDGE_FLAGS_HOST as string,
          distinctId,
          flag.name
        );

        // set the path to use
        url.pathname = flag.rewrite(feature.enable);
        console.log({ url });
        return env.ASSETS.fetch(url);
      }
      console.log("I have no cookie");

      distinctId = crypto.randomUUID();
      //   const client = createClient({
      //     host: env.EDGE_FLAGS_HOST as string,
      //     distinctId: distinctId,
      //   });
      //   const feature = await client.get(flag.name);
      const feature = await getFeatureFlag(
        env.EDGE_FLAGS_HOST as string,
        distinctId,
        flag.name
      );

      url.pathname = flag.rewrite(feature.enable);
      console.log({ url });
      // get the static file from ASSETS, and attach a cookie
      const asset = await env.ASSETS.fetch(url);
      let response = new Response(asset.body, asset);
      response.headers.append(
        "Set-Cookie",
        `${DISTINCT_ID_COOKIE_NAME}=${distinctId}; path=/`
      );
      return response;
    }
  }
  return next();
};

export const onRequest = [abTest];

const DISTINCT_ID_COOKIE_NAME = "ab-test-cookie";

/**
 * List of known active Feature Flags
 */
export const FLAGS = {
  NEW_ABOUT_PAGE: "New_About_Page",
  NEW_PRODUCT_PAGE: "New_Product_Page",
} as const;

type FlagsMatcher = {
  [x: string]:
    | {
        name: typeof FLAGS[keyof typeof FLAGS];
        rewrite(value: boolean): string;
      }
    | undefined;
};

const flagsByPath: FlagsMatcher = {
  "/product": {
    name: FLAGS.NEW_PRODUCT_PAGE,
    rewrite: (value: boolean) => (value ? "/product/b" : "/product"),
  },
  "/about": {
    name: FLAGS.NEW_ABOUT_PAGE,
    rewrite: (value: boolean) => (value ? "/about/b" : "/about"),
  },
} as const;

function getCookie(cookieString: string | null, key: string) {
  if (cookieString) {
    const allCookies = cookieString.split("; ");
    const targetCookie = allCookies.find((cookie) => cookie.includes(key));
    if (targetCookie) {
      const [, value] = targetCookie.split("=");
      return value;
    }
  }
}

async function getFeatureFlag(
  host: string,
  distinctId: string,
  featureName: string
) {
  const client = createClient({
    host: host,
    distinctId: distinctId,
  });
  const feature = await client.get(featureName);

  return feature;
}
