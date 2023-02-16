import Sidebar from './Sidebar';
import Head from 'next/head';
import Breadcrumb from '@components/systems/Breadcrumb';
import Navbar from './Navbar';
import Menu from './Menu';
import clsx from 'clsx';

export default function Layout({ children, title, description }) {
  // Fix Warning: A title element received an array with more than 1 element as children.In browsers title Elements can only have Text Nodes as ldren.If the children being rendered output more than a single text node in aggregate the browser will display markup and comments as text in
  // the title and hydration will likely fail and fall back to client rendering
  // https://github.com/vercel/next.js/discussions/38256#discussioncomment-3070196
  let headTitle = `${title} | Desa Digital`;
  let headDescription = `${description ? description + ' - Desa Digital' : title + ' - Desa Digital'}`;

  return (
    <>
      <Head>
        <title>{headTitle}</title>
        <meta name='description' content={headDescription}></meta>
      </Head>

      <div
        className='font-inter min-h-screen w-screen bg-[#F8F9FD] text-sm dark:bg-neutral-900 lg:grid'
        style={{ gridTemplateColumns: 'auto 1fr' }}
      >
        <Sidebar />

        <div className='relative'>
          <Navbar />

          {/* Show on Mobile */}
          <div
            className={clsx(
              'flex items-center justify-between gap-x-4 border-b px-2 py-3 dark:border-neutral-800 sm:px-3 lg:hidden',
              'overflow-x-auto bg-[#F8F9FD]/95 dark:bg-neutral-900/90',
              'scrollbar scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-gray-300 dark:scrollbar-thumb-neutral-800'
            )}
          >
            <Breadcrumb />
          </div>

          {/* Show on Desktop */}
          <div
            className={clsx(
              'hidden items-center justify-between gap-x-4 border-b px-2 py-3 dark:border-neutral-800 sm:px-3 lg:flex',
              'sticky top-0 z-40 bg-[#F8F9FD]/95 supports-[backdrop-filter]:backdrop-blur-sm dark:bg-neutral-900/90'
            )}
          >
            <Breadcrumb />
            <Menu />
          </div>

          <div className='px-4 py-4 sm:px-5'>{children}</div>
        </div>
      </div>
    </>
  );
}
