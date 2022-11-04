import { useContext } from "react";
import { GlobalContext } from "@utils/GlobalContext";
import Layout from "@components/layout/Layout";
import Text from "@components/systems/Text";
import Title from "@components/systems/Title";

export default function Settings() {
  const { darkMode, setDarkMode } = useContext(GlobalContext);

  const handleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Layout title="Settings">
      <Title>Settings</Title>
      <Text className="mt-5">Dark Mode</Text>
      <br />
      <div onClick={handleDarkMode} className="transition-all cursor-pointer w-16 h-8 dark:bg-sky-600 bg-neutral-300 rounded-full relative">
        <div className="h-6 w-6 bg-white rounded-full absolute top-1 transition-all dark:left-9 left-1"></div>
      </div>
    </Layout>
  );
}
