import Image from "next/image";
import { Layout, Text, Page, Code, Link, Snippet } from "@vercel/examples-ui";

import board from "../public/board.jpg";

function Home() {
  return (
    // flex flex-col gap-12
    <Page className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
      <section className="flex flex-col gap-6">
        <Text variant="h1" className="text-3xl">
          Maintenance page usage example
        </Text>
        <Text>
          When we do a release, promotion, event, etc. that might bring more
          attention than usual to a page; Its a good idea to have a backup plan
          that includes showing a different page to the users in case something
          fails. If this page receives a lot of traffic, we can use the edge, a
          previously generated static page and the feature flag to give the
          users dynamic at the speed of static ⚡️.
        </Text>
        <Image src={board} alt="Graph showing how to use middleware" />
        <Text>
          This will let us change the flow of the traffic quickly in case
          something fails.
        </Text>
      </section>

      <section className="flex flex-col gap-3">
        <Text variant="h2">How to do it?</Text>
        <Text>
          You can add a <Code>middleware.js</Code> file in the root of your
          project. Inside <Code>middleware.js</Code> you can do something like
          this:
        </Text>
        <Snippet>{`import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@flargd/web";

const EDGE_FLAGS_HOST = process.env.EDGE_FLAGS_HOST!;
const EDGE_FLAGS_APP = process.env.EDGE_FLAGS_APP ?? "default";

const MAINTENANCE_FLAG = "maintenance-mode" as const;

export const config = {
  matcher: ["/big-promo"],
};

export async function middleware(req: NextRequest) {
  if (!EDGE_FLAGS_HOST) {
    req.nextUrl.pathname = "/missing-edge-flag";
    return NextResponse.rewrite(req.nextUrl);
  }

  try {
    const client = createClient({ host: EDGE_FLAGS_HOST, app: EDGE_FLAGS_APP });
    // Check whether the maintenance page should be shown
    const isInMaintenanceMode = (await client.get(MAINTENANCE_FLAG)).enable;

    // If is in maintenance mode, point the url pathname to the maintenance page
    if (isInMaintenanceMode) {
      req.nextUrl.pathname = "/maintenance";

      // Rewrite to the url
      return NextResponse.rewrite(req.nextUrl);
    }
  } catch (error) {
    // show the default page if Edge Flag is missing,
    // but log the error to the console
    console.error(error);
  }
}
`}</Snippet>
        <Text>
          If you want to see how this maintenance page works, check the{" "}
          <Link href="/big-promo">
            <Code className="text-blue underline">/big-promo</Code>
          </Link>{" "}
          route.
        </Text>
      </section>
    </Page>
  );
}

// Home.Layout = Layout;

export default Home;
