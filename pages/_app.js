import { Loader } from "../components/Loader";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Loader />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
