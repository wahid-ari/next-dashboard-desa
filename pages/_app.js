import { Toaster } from "react-hot-toast";
import { GlobalProvider } from "@utils/GlobalContext";
// import { AxiosConfigProvider } from "@utils/useAxiosConfig";
import "../styles/globals.css";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <GlobalProvider>
      {/* <AxiosConfigProvider> */}
      <Toaster />
      <Component {...pageProps} />
      {/* </AxiosConfigProvider> */}
    </GlobalProvider>
  );
}

export default MyApp;
