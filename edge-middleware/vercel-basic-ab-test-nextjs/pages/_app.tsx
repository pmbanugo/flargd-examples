import type { AppProps } from "next/app";
import type { LayoutProps } from "@vercel/examples-ui/layout";
import { getLayout } from "@vercel/examples-ui";
import "@vercel/examples-ui/globals.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  const Layout = getLayout<LayoutProps>(Component);

  return (
    // <Layout
    //   title="AB testing with Flargd"
    //   path="https://edge-functions/feature-flag-flargd"
    //   deployButton={{
    //     env: ["NEXT_PUBLIC_EDGE_FLAGS_HOST", "NEXT_PUBLIC_EDGE_FLAGS_APP"],
    //   }}
    // >
    //   <Component {...pageProps} />
    // </Layout>
    <Component {...pageProps} />
  );
}
