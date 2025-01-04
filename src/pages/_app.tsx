import Layout from "@/components/layout";
import { AppProps } from "next/app";
type AppOwnProps = { example: string };

export default function MyApp({
  Component,
  pageProps,
}: AppProps & AppOwnProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
