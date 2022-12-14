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
              <Disclosure.Button className="transition-all outline-none w-full pl-3.5 py-3 flex justify-start items-center gap-2 rounded-lg text-gray-500 dark:text-neutral-400 hover:text-blue-600 dark:hover:text-sky-500">
                <div className="flex-grow text-left text-sm">
                  {icon}
                  <span>{title}</span>
                </div>
                <ChevronRightIcon
                  className={`transition-all durat duration-300 w-5 h-5 ${open ? 'transform rotate-90 transition-transform' : 'transition-transform'}`}
                />
              </Disclosure.Button>
              <Transition
                enter="transition-max-height ease-in-out duration-500 overflow-hidden"
                enterFrom="max-h-0"
                enterTo="max-h-screen"
                leave="transition-max-height ease-in-out duration-100 overflow-hidden"
                leaveFrom="max-h-screen"
                leaveTo="max-h-0"
              >
                <Disclosure.Panel className="relative pl-4 transition-all overflow-hidden">
                  {children}
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
        <hr className="dark:border-neutral-800 ml-3" />
      </>
      : ""
  )
}