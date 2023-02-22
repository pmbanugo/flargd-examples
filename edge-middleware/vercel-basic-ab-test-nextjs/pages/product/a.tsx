import { Layout, Page, Text, Code, Link } from "@vercel/examples-ui";

export default function Product() {
  return (
    <Page className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
      <Text variant="h2" className="text-2xl mb-6">
        Product Variant
      </Text>
      <Text className="text-lg mb-4">
        You&apos;re currently looking at the variant of the product page under{" "}
        <Code>pages/product/a.tsx</Code>
      </Text>
      <Link href="/" className="text-blue underline">
        Go back to /
      </Link>
    </Page>
  );
}

Product.Layout = Layout;
