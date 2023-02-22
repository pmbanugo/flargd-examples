/* eslint-disable @next/next/no-img-element */
import Cookies from "js-cookie";
import { Layout, Page, Text, List, Link, Button } from "@vercel/examples-ui";
import { DISTINCT_ID_COOKIE_NAME } from "@lib/constants";

export default function Index() {
  const resetVariant = () => {
    Cookies.remove(DISTINCT_ID_COOKIE_NAME);
    window.location.reload();
  };

  return (
    <Page>
      <Text variant="h2" className="mb-6">
        AB testing with Flargd
      </Text>
      <Text className="mb-4">
        The about and marketing pages will each render a different version
        depending on the feature flag % of users set within Flargd:
      </Text>
      <List className="mb-4">
        <li>
          <Link href="/about">/about</Link>
        </li>
        <li>
          <Link href="/marketing">/marketing</Link>
        </li>
        <li>
          <Link href="/product">/product</Link>
        </li>
      </List>
      <Text className="text-lg mb-4">
        Click the button below to reset the variants for the current browser
        session.
      </Text>
      <div>
        <Button
          variant="secondary"
          className="mr-2.5"
          onClick={() => resetVariant()}
        >
          Reset feature flags
        </Button>
      </div>
      <div className="mt-4">
        <a href="https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fpmbanugo%2Fflargd-examples%2Ftree%2Fmain%2Fedge-functions%2Fvercel-edge-middleware-nextjs&env=EDGE_FLAGS_HOST,EDGE_FLAGS_APP&envDescription=URL%20to%20your%20self-hosted%20Flargd%20instance&envLink=https%3A%2F%2Fgithub.com%2Fpmbanugo%2Fflargd">
          <img src="https://vercel.com/button" alt="Deploy with Vercel" />
        </a>
      </div>
    </Page>
  );
}

Index.Layout = Layout;
