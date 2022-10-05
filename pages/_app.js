import "../styles/globals.css";
import Head from "next/head";
import Category from "../components/Category";
import { AppProvider } from "../context/AppContext";

function MyApp({ Component, pageProps }) {
  return (
    <AppProvider>
      <Head>
        <title>Quiz Game</title>
      </Head>
      <div className="container">
        <Category />
      </div>

      <div>
        <Component {...pageProps} />
      </div>
    </AppProvider>
  );
}

export default MyApp;
