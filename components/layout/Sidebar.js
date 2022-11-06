import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import { GlobalContext } from "@utils/GlobalContext";
import {
  XIcon,
  LogoutIcon,
  ViewGridIcon,
  ArrowSmRightIcon,
  CogIcon,
  CashIcon,
  SunIcon,
  MoonIcon,
  TemplateIcon,
} from "@heroicons/react/outline";
import NavLink from "@components/systems/NavLink";
import NavAccordion from "@components/systems/NavAccordion";
import clsx from "clsx";

export default function Sidebar() {
  const router = useRouter();
  const { showNav, setShowNav } = useContext(GlobalContext);
  const { darkMode, setDarkMode } = useContext(GlobalContext);

  const hideMenu = () => {
    setShowNav(false);
  };

  useEffect(() => {
    setShowNav(false);
  }, [router.pathname, setShowNav]);

  return (
    <div
      className={`${showNav ? "fixed xl:relative" : "hidden xl:flex xl:sticky top-0"
        } z-50 w-screen xl:w-60 flex flex-nowrap flex-col bg-white dark:bg-neutral-900 border-r dark:border-neutral-800 max-h-screen h-screen`}
    >

      <div className="flex justify-between items-center gap-2 px-4">
        <button className="xl:hidden" onClick={hideMenu} id="closemenu" aria-label="Close Menu">
          <XIcon className="w-5 h-5 dark:text-white" />
        </button>
        <p className="text-sm text-left font-bold py-3 text-neutral-800 dark:text-neutral-100">
          Desa Digital
        </p>
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
      </div>

      <div className={clsx("pt-4 px-4 border-t dark:border-neutral-800 flex flex-nowrap flex-col flex-grow overflow-auto",
        "scrollbar scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-gray-300 dark:scrollbar-thumb-neutral-700"
      )}>

        <NavLink isHome href="/" icon={<ViewGridIcon className="w-4 h-4" />}>
          Dashboard
        </NavLink>

        <NavAccordion title="Design" routeName="design">
          <NavLink
            href="/design"
            icon={<TemplateIcon className="w-4 h-4" />}
          >
            Example
          </NavLink>
        </NavAccordion>

        <NavAccordion title="Keuangan" routeName="keuangan">
          <NavLink
            href="/keuangan"
            icon={<CashIcon className="w-4 h-4" />}
          >
            Dana Desa
          </NavLink>
        </NavAccordion>

        <NavLink href="/settings" icon={<CogIcon className="w-4 h-4" />} className="mt-3">
          Settings
        </NavLink>

      </div>

      <hr className="dark:border-neutral-800" />
      <div className="px-4 py-2">
        <button
          onClick={() => router.push('/login')}
          className={clsx("transition-all w-full px-4 py-2 flex justify-start items-center gap-2 text-xs font-semibold",
            "rounded hover:bg-red-100 dark:hover:bg-neutral-800 text-red-600")}
        >
          <LogoutIcon className="w-4 h-4" />
          Log out
        </button>
      </div>

    </div>
  );
}
