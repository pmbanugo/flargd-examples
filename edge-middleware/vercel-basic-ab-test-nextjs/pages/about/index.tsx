import { useEffect } from "react";
import { Layout, Page, Text, Link } from "@vercel/examples-ui";

export default function About() {
  return (
    <Page className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
      <Text variant="h2" className="text-2xl mb-6">
        About page
      </Text>
      <Text className="text-lg mb-4">This is the original about page</Text>
      <Text className="mb-4">
        You&apos;re currently on <b>/about</b>
      </Text>
      <Link href="/" className="text-blue underline">
        Go back to /
      </Link>
    </Page>
  );
}

About.Layout = Layout;
