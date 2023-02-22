import { Text, Page, Button } from "@vercel/examples-ui";
import { useRouter } from "next/router";

function Home() {
  const { reload } = useRouter();

  return (
    <Page className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
      <section className="flex flex-col gap-6">
        <Text variant="h1" className="text-3xl text-red">
          Under Maintenance ☣️
        </Text>
        <Text>
          You can try to refresh the page to see if the issue is resolved.
        </Text>
        <Button onClick={reload} className="py-2 bg-blue text-white">
          Refresh
        </Button>
      </section>
    </Page>
  );
}

export default Home;
