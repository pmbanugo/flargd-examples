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
    <Page className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
      <Text variant="h2" className="text-3xl mb-6">
        AB testing with Flargd
      </Text>
      <Text className="mb-4">
        The about and marketing pages will each render a different version
        depending on the feature flag % of users set within Flargd:
      </Text>
      <List className="mb-4">
        <li>
          <Link className="text-blue underline" href="/about">
            /about
          </Link>
        </li>
        <li>
          <Link className="text-blue underline" href="/marketing">
            /marketing
          </Link>
        </li>
        <li>
          <Link className="text-blue underline" href="/product">
            /product
          </Link>
        </li>
      </List>
      <Text className="text-lg mb-4">
        Click the button below to reset the variants for the current browser
        session.
      </Text>
      <div>
        <Button className="mr-2.5 bg-red-500" onClick={() => resetVariant()}>
          Reset feature flags
        </Button>
      </div>
    </Page>
  );
}

Index.Layout = Layout;
