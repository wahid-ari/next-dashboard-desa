import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Disclosure, Transition } from "@headlessui/react";
import { ChevronRightIcon } from "@heroicons/react/solid";

export default function NavAccordion({ title, routeName, icon, children }) {

  const [isOpen, setIsOpen] = useState(false)
  const [cek, setCek] = useState(false)
  const router = useRouter();

  // set sidebar nav accordion open or close based on route 
  useEffect(() => {
    if (router.pathname.includes(routeName)) {
      setIsOpen(true)
    } else {
      setIsOpen(false)
    }
    setCek(true)
  }, [router.pathname])

  return (
    cek ?
      <>
        <Disclosure defaultOpen={isOpen}>
          {({ open }) => (
            <>
              <Disclosure.Button className="transition-all outline-none w-full px-4 py-3 flex justify-start items-center gap-2 rounded-lg font-bold text-gray-500 dark:text-neutral-500 hover:text-blue-800 dark:hover:text-neutral-400">
                <div className="flex-grow text-left font-bold text-xs">
                  {icon}
                  <span>{title}</span>
                </div>
                <ChevronRightIcon
                  className={`transition-all duration-300 w-5 h-5 ${open ? 'transform rotate-90 transition-transform' : 'transition-transform'}`}
                />
              </Disclosure.Button>
              <Transition
                enter="transition ease-in-out duration-300"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in-out duration-100"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Disclosure.Panel className="relative pl-4 transition-all overflow-hidden">
                  {children}
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
        <hr className="dark:border-neutral-800" />
      </>
      : ""
  )
}