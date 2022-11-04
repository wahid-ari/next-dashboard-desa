import { useContext } from "react";
import { MenuIcon } from "@heroicons/react/solid";
import { GlobalContext } from "@utils/GlobalContext";

export default function Navbar() {
  const { setShowNav } = useContext(GlobalContext);
  const { darkMode, setDarkMode } = useContext(GlobalContext);

  const handleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const showMenu = () => {
    setShowNav(true);
  };

  return (
    <div className="h-11 bg-white dark:bg-neutral-900 dark:text-neutral-50 w-full flex justify-between xl:hidden items-center gap-4 pl-3 pr-4 border-b dark:border-neutral-800">
      <div className="flex gap-x-4">
        <button className="outline-none">
          <MenuIcon className="h-5 w-5" onClick={showMenu} />
        </button>
        <p className="text-sm text-center font-bold xl:text-2xl">Desa Digital</p>
      </div>
      <div
        onClick={handleDarkMode}
        className=" transition-all cursor-pointer w-10 h-6 dark:bg-sky-600 bg-neutral-300 rounded-full relative"
      >
        <div className="h-4 w-4 bg-white rounded-full absolute top-1 transition-all dark:left-5 left-1"></div>
      </div>
    </div>
  );
}
