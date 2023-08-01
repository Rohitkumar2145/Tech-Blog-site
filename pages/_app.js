import { Fragment } from "react";
import "../styles/globals.css";
import MainNavigation from "../components/MainNavigation";
import NextTopLoader from "nextjs-toploader";

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <NextTopLoader />
      <MainNavigation />
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
