import { Fragment } from "react";
import { Transition } from "@headlessui/react";
import * as DialogRadix from "@radix-ui/react-dialog";
import { ExclamationIcon, InformationCircleIcon, XIcon } from "@heroicons/react/outline";
import clsx from "clsx";
import Button from "./Button";

export default function Dialog({ open, setOpen, title, children, isDanger, onClose, onConfirm, showIcon }) {
  return (
    <DialogRadix.Root open={open} onOpenChange={setOpen}>
      <Transition.Root show={open}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <DialogRadix.Overlay
            forceMount
            className="fixed inset-0 z-50 bg-black/40 transition-opacity"
          />
        </Transition.Child>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <DialogRadix.Content
            forceMount
            className={clsx(
              "fixed z-50",
              "rounded-lg w-[90%] max-w-lg",
              "top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]",
              "bg-white dark:bg-neutral-900"
            )}
          >
            
            <DialogRadix.Close className={"absolute top-3.5 right-3.5 p-1"}>
              <XIcon className="h-4 w-4 text-gray-500 hover:text-gray-700 dark:text-gray-500 dark:hover:text-gray-400" />
            </DialogRadix.Close>

            <div className="sm:flex p-5 sm:gap-4">

              {showIcon ?
                isDanger ? (
                  <div className="mx-auto sm:mx-0 flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100">
                    <ExclamationIcon className="h-6 w-6 text-red-600" aria-hidden="true" />
                  </div>
                ) : (
                  <div className="mx-auto sm:mx-0 flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-100">
                    <InformationCircleIcon className="h-6 w-6 text-blue-600" aria-hidden="true" />
                  </div>
                )
                : null
              }
              <div className="mt-3 text-center sm:mt-0 sm:text-left">
                <DialogRadix.Title className="text-lg font-medium text-neutral-800 dark:text-neutral-100">
                  {title}
                </DialogRadix.Title>
                <div className="mt-2 font-normal tracking-wide text-sm text-neutral-600 dark:text-neutral-300">
                  {children}
                </div>
              </div>
            </div>

            <div className="px-5 pb-5 sm:flex gap-3 justify-end">
              <Button.secondary className="sm:w-auto w-full mb-2 sm:mb-0 focus:ring-2" onClick={onClose} >
                Cancel
              </Button.secondary>
              {isDanger ?
                <Button.danger className="sm:w-auto w-full focus:ring-2 focus:ring-red-500" onClick={onConfirm} >
                  Delete
                </Button.danger>
                :
                <Button className="sm:w-auto w-full focus:ring-2 focus:bg-red-600" onClick={onConfirm} >
                  Confirm
                </Button>
              }
            </div>

          </DialogRadix.Content>
        </Transition.Child>
      </Transition.Root>
    </DialogRadix.Root>
  )
}