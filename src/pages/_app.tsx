import Layout from "@/components/Layout";
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
