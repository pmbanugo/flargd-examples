import { Layout, Page, Text, Link } from "@vercel/examples-ui";

export default function Marketing() {
  return (
    <Page className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
      <Text variant="h2" className="text-2xl mb-6">
        Marketing page
      </Text>
      <Text className="text-lg mb-4">This is the original marketing page</Text>
      <Text className="mb-4">
        You&apos;re currently on <b>/marketing</b>
      </Text>
      <Link href="/" className="text-blue underline">
        Go back to /
      </Link>
    </Page>
  );
}

Marketing.Layout = Layout;
