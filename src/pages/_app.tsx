import Layout from "@/components/layout/layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="My Blog" />
        <title>My Blog</title>
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}
