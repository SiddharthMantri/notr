import { AppProps } from "next/app";
import Head from "next/head";
import "../styles/reset.css";

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <link
        href="https://fonts.googleapis.com/css?family=Roboto+Slab|Source+Sans+Pro:400,600,700&display=swap"
        rel="stylesheet"
      />
    </Head>
    <Component {...pageProps} />
  </>
);

export default App;
