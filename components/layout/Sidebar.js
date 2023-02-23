import { useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import { GlobalContext } from '@utils/GlobalContext';
import { XIcon, LogoutIcon, ViewGridIcon, CogIcon, CashIcon, TemplateIcon } from '@heroicons/react/outline';
import NavLink from '@components/systems/NavLink';
import NavAccordion from '@components/systems/NavAccordion';
import clsx from 'clsx';
import ThemeChanger from './ThemeChanger';

export default function Sidebar() {
  const router = useRouter();
  const { showNav, setShowNav } = useContext(GlobalContext);

  const hideMenu = () => {
    setShowNav(false);
  };

  useEffect(() => {
    setShowNav(false);
  }, [router.pathname, setShowNav]);

  return (
    <div
      className={`${
        showNav ? 'fixed lg:relative' : 'top-0 hidden lg:sticky lg:flex'
      } z-50 flex h-screen max-h-screen w-screen flex-col flex-nowrap border-r bg-white dark:border-neutral-800 dark:bg-neutral-900 lg:w-60`}
    >
      <div className='flex items-center justify-between gap-2 px-5'>
        <button
          className='rounded focus-visible:outline-none focus-visible:ring focus-visible:ring-sky-500 lg:hidden'
          onClick={hideMenu}
          id='closemenu'
          aria-label='Close Menu'
        >
          <XIcon className='h-5 w-5 text-gray-500 transition-all hover:text-gray-700 dark:text-neutral-400 dark:hover:text-neutral-200' />
        </button>
        <p className='py-2.5 text-left text-base font-semibold tracking-wide text-neutral-800 dark:text-neutral-100'>
          Desa Digital
        </p>
        <div className='cursor-pointer pt-1'>
          <ThemeChanger />
        </div>
      </div>

      <div
        className={clsx(
          'flex flex-grow flex-col flex-nowrap gap-1 overflow-auto border-t px-4 pt-4 dark:border-neutral-800',
          'scrollbar scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-gray-300 dark:scrollbar-thumb-neutral-800'
        )}
      >
        <NavLink isHome href='/' icon={<ViewGridIcon className='h-4 w-4' />}>
          Dashboard
        </NavLink>

        <NavAccordion title='Design' routeName='design'>
          <NavLink href='/design' icon={<TemplateIcon className='h-4 w-4' />}>
            Example
          </NavLink>
        </NavAccordion>

        <NavAccordion title='Keuangan' routeName='keuangan'>
          <NavLink href='/keuangan' icon={<CashIcon className='h-4 w-4' />}>
            Dana Desa
          </NavLink>
        </NavAccordion>

        <NavLink href='/settings' icon={<CogIcon className='h-4 w-4' />} className='mt-1'>
          Settings
        </NavLink>
      </div>

      <hr className='dark:border-neutral-800' />
      <div className='px-4 py-2'>
        <button
          onClick={() => router.push('/login')}
          className={clsx(
            'flex w-full items-center justify-start gap-2 px-4 py-2 text-sm font-semibold transition-all',
            'rounded text-red-600 hover:bg-red-100 dark:hover:bg-neutral-800',
            'focus-visible:outline-none focus-visible:ring focus-visible:ring-red-500'
          )}
        >
          <LogoutIcon className='h-4 w-4' />
          Log out
        </button>
      </div>
    </div>
  );
}
