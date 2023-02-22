import { Layout, Page, Text, Link } from "@vercel/examples-ui";

export default function Product() {
  return (
    <Page className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
      <Text variant="h2" className="text-2xl mb-6">
        Product page
      </Text>
      <Text className="text-lg mb-4">This is the original product page</Text>
      <Text className="mb-4">
        You&apos;re currently on <b>/product</b>
      </Text>
      <Link href="/" className="text-blue underline">
        Go back to /
      </Link>
    </Page>
  );
}

Product.Layout = Layout;
