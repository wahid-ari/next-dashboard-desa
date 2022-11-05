import Sidebar from "./Sidebar";
import Head from "next/head";
import Breadcrumb from "@components/systems/Breadcrumb";
import Navbar from "./Navbar";
import Menu from './Menu'

export default function Layout({ children, title, description }) {
  // Fix Warning: A title element received an array with more than 1 element as children.In browsers title Elements can only have Text Nodes as ldren.If the children being rendered output more than a single text node in aggregate the browser will display markup and comments as text in
  // the title and hydration will likely fail and fall back to client rendering
  // https://github.com/vercel/next.js/discussions/38256#discussioncomment-3070196
  let headTitle = `${title} | Desa Digital`
  let headDescription = `${description ? description + " - Desa Digital" : title + " - Desa Digital"}`

  return (
    <>
      <Head>
        <title>{headTitle}</title>
        <meta name="description" content={headDescription}></meta>
      </Head>

      <div className="min-h-screen w-screen xl:grid text-xs font-cool font-medium bg-[#F8F9FD] dark:bg-neutral-900"
        style={{ gridTemplateColumns: "auto 1fr" }}>

        <Sidebar />

        <div>

          <Navbar />

          {/* Show on Mobile */}
          <div className="sm:hidden flex gap-x-4 items-center justify-between border-b dark:border-neutral-800 pl-1 pr-3 sm:px-2 py-3 sticky top-0 bg-[#F8F9FD]/95 dark:bg-neutral-900/90 supports-[backdrop-filter]:backdrop-blur-sm z-[49] overflow-x-auto scrollbar scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-gray-300 dark:scrollbar-thumb-neutral-700">
            <Breadcrumb />
          </div>

          {/* Show on Desktop */}
          <div className="hidden sm:flex gap-x-4 items-center justify-between border-b dark:border-neutral-800 pl-1 pr-3 sm:px-2 py-3 sticky top-0 bg-[#F8F9FD]/95 dark:bg-neutral-900/90 supports-[backdrop-filter]:backdrop-blur-sm z-[49]">
            <Breadcrumb />
            <Menu />
          </div>

          <div className="pl-2 pr-4 sm:pl-4 sm:pr-6 py-5">
            {children}
          </div>

        </div>
      </div>
    </>
  );
}
