import { useContext } from "react";
import { MenuIcon } from "@heroicons/react/solid";
import { GlobalContext } from "@utils/GlobalContext";
import { MoonIcon, SunIcon } from "@heroicons/react/outline";
import Menu from './Menu'

export default function Navbar() {
  const { setShowNav } = useContext(GlobalContext);
  const { darkMode, setDarkMode } = useContext(GlobalContext);

  const showMenu = () => {
    setShowNav(true);
  };

  return (
    <div className="xl:hidden h-11 bg-white dark:bg-neutral-900 dark:text-neutral-50 w-full flex justify-between items-center gap-4 pl-2 pr-3 sm:pl-3 sm:pr-4 border-b dark:border-neutral-800">
      <div className="flex gap-x-4">
        <button className="outline-none" id="menu" aria-label="Menu">
          <MenuIcon className="h-5 w-5" onClick={showMenu} />
        </button>
        <p className="text-sm text-center font-bold xl:text-2xl text-neutral-800 dark:text-neutral-100">Desa Digital</p>
      </div>
      
      <div className="flex items-center gap-3">

        <div className="cursor-pointer pt-1">
          {darkMode ?
            <button onClick={() => setDarkMode(!darkMode)} aria-label="Light">
              <SunIcon className="h-5 w-5 text-neutral-400 hover:text-neutral-200 transition-all" />
            </button>
            :
            <button onClick={() => setDarkMode(!darkMode)} aria-label="Dark">
              <MoonIcon className="h-5 w-5 text-gray-500 hover:text-gray-700 transition-all" />
            </button>
          }
        </div>

        <Menu className="sm:hidden" />

      </div>
    </div>
  );
}
