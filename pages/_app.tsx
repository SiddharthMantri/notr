import { AppProps } from "next/app";
import "../styles/reset.css";

const App = ({ Component, pageProps }: AppProps) => (
  <Component {...pageProps} />
);

export default App;
