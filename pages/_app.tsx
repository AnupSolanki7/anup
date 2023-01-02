import "../styles/globals.css";
import type { AppProps } from "next/app";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/mycss.css";
import Header from "../src/components/Header";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <Header/>
      <Component {...pageProps} />
    </>
  );
}
