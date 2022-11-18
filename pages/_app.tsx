import "../styles/globals.css";
import type { AppProps } from "next/app";
import { type GlobalPropsType } from "utils/global-props";
import { Layout } from "components/Layout";
import { Provider } from "jotai";

export default function App({
  Component,
  pageProps,
}: AppProps<{ globalProps: GlobalPropsType }>) {
  return (
    <Provider>
      <Layout {...pageProps.globalProps}>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}
