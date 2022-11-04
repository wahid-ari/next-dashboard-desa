import Breadcrumb from "@components/systems/Breadcrumb";
import Head from "next/head";
import Navbar from "./Navbar";

export default function Shell({ title, children }) {
  return (
    <div className="bg-[#F8F9FD] dark:bg-neutral-900">
      <Head>
        <title>{title} | Desa Digital</title>
      </Head>
      <Navbar />
      <div className="flex gap-x-4 items-center justify-between border-b dark:border-neutral-800 px-2 py-3 sticky top-0 bg-[#F8F9FD]/95 dark:bg-neutral-900/90 supports-[backdrop-filter]:backdrop-blur-sm z-[49] overflow-x-auto scrollbar scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-gray-300 dark:scrollbar-thumb-neutral-700">
        <Breadcrumb />
        <p className="whitespace-nowrap pr-3 text-gray-500 dark:text-neutral-500">Admin</p>
      </div>
      <div className="px-2 pt-2 pb-[26rem] xl:px-4 xl:pt-4">
        {children}
      </div>
    </div>
  );
}
