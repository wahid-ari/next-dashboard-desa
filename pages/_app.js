import { Toaster } from "react-hot-toast";
import { GlobalProvider } from "@utils/GlobalContext";
// import { AxiosConfigProvider } from "@utils/useAxiosConfig";
import Layout from "@components/layout/Layout";
import Sidebar from "@components/layout/Sidebar";
import "../styles/globals.css";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <GlobalProvider>
      {/* <AxiosConfigProvider> */}
        {router.pathname !== "/login" ? (
          <Layout>
            <Toaster />
            <Sidebar />
            <Component {...pageProps} />
          </Layout>
        ) : (
          <>
            <Toaster />
            <Component {...pageProps} />
          </>
        )}
      {/* </AxiosConfigProvider> */}
    </GlobalProvider>
  );
}

export default MyApp;
