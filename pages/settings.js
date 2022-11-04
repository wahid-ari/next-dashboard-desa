import Head from "next/head";
import { useContext } from "react";
import { GlobalContext } from "@utils/GlobalContext";
import Header from "@components/layout/Header";
import Shell from "@components/layout/Shell";
import Breadcrumb from "@components/systems/Breadcrumb";
import Text from "@components/systems/Text";
import Title from "@components/systems/Title";

export default function Settings() {
  const { darkMode, setDarkMode } = useContext(GlobalContext);

  const handleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Shell
      header={
        <Header>
          <Title>Settings</Title>
          <br />
          <Breadcrumb />
        </Header>
      }
    >
      <Head>
        <title>Settings | Desa Digital</title>
      </Head>
      <Text>Dark Mode</Text>
      <br />
      <div
        onClick={handleDarkMode}
        className="transition-all cursor-pointer w-16 h-8 dark:bg-sky-600 bg-neutral-300 rounded-full relative"
      >
        <div className="h-6 w-6 bg-white rounded-full absolute top-1 transition-all dark:left-9 left-1"></div>
      </div>
    </Shell>
  );
}
