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
      <Text className="mt-5 mb-2">Dark Mode</Text>
      <div onClick={handleDarkMode} className="transition-all cursor-pointer w-14 h-7 dark:bg-sky-600 bg-neutral-300 rounded-full relative">
        <div className="h-5 w-5 bg-white rounded-full absolute top-1 transition-all dark:left-8 left-1"></div>
      </div>
    </Layout>
  );
}
