import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/outline";
import clsx from "clsx";

export default function Akun({ className }) {
  return (
    <Menu as="div" className={`relative ${className && className}`}>
      {({ open }) => (
        <>
          <Menu.Button className={clsx("inline-flex items-center w-full justify-center rounded-md pr-1.5 sm:pr-3",
            "font-semibold text-gray-500 hover:text-gray-700 dark:text-neutral-400 dark:hover:text-neutral-200 focus:outline-none")}>
            Admin
            <ChevronDownIcon className={`${open ? 'rotate-180' : 'rotate-0'} ml-1 h-5 w-4 pb-0.5 transition-all duration-200`} aria-hidden="true" />
          </Menu.Button>
          <Transition
            enter="transition ease-in-out duration-300"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in-out duration-100"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="w-32 absolute z-50 right-4 mt-2 origin-top-right bg-white dark:bg-neutral-800 shadow-md rounded-md focus:outline-none">
              <div className="px-2 py-2">
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${active ? 'bg-gray-100 text-blue-600 dark:text-sky-500 dark:bg-neutral-900 transition-all'
                        : 'text-gray-500 dark:text-neutral-300'
                        } flex w-full rounded px-2 py-1.5 text-xs mb-1`}
                    >
                      Edit
                    </button>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${active ? 'bg-gray-100 text-blue-600 dark:text-sky-500 dark:bg-neutral-900 transition-all'
                        : 'text-gray-500 dark:text-neutral-300'
                        } flex w-full rounded px-2 py-1.5 text-xs`}
                    >
                      Setting
                    </button>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  )
}