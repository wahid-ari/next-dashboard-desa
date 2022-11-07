import { Toaster } from "react-hot-toast";
import { GlobalProvider } from "@utils/GlobalContext";
// import { AxiosConfigProvider } from "@utils/useAxiosConfig";
import "../styles/globals.css";
// import { useRouter } from "next/router";
import { Inter } from '@next/font/google';

const inter = Inter({ subsets: ['latin'] })

function MyApp({ Component, pageProps }) {
  // const router = useRouter();
  return (
    <GlobalProvider>
      {/* <AxiosConfigProvider> */}
      <main className={inter.className}>
        <Toaster />
        <Component {...pageProps} />
      </main>
      {/* </AxiosConfigProvider> */}
    </GlobalProvider>
  );
}

export default MyApp;
