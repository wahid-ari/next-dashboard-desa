import Link from 'next/link';
import { useRouter } from 'next/router';
import { ChevronRightIcon } from '@heroicons/react/solid';
import clsx from 'clsx';

export default function Breadcrumb() {
  const router = useRouter();
  const paths = router.pathname
    .split('/')
    .slice(1)
    .filter((r) => {
      if (r.includes('_id') || r === '[id]') {
        return false;
      }
      return true;
    });
  // const paths = router.asPath
  //   .split("/")
  //   .slice(1)
  //   .filter((r) => {
  //     if (r.includes("_id") || r === "[id]") {
  //       return false;
  //     }
  //     return true;
  //   });

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <nav className='flex w-full text-sm' aria-label='Breadcrumb'>
      <ol className='inline-flex flex-nowrap items-center space-x-1 whitespace-nowrap md:space-x-1'>
        <li className='-ml-0.5 inline-flex items-center'>
          <Link
            href='/'
            passHref
            className={clsx(
              'inline-flex items-center rounded transition-all',
              'text-gray-700 hover:text-gray-900 dark:text-neutral-300 dark:hover:text-neutral-100',
              'focus-visible:outline-none focus-visible:ring focus-visible:ring-sky-500'
            )}
          >
            <ChevronRightIcon className='mr-1 h-5 w-5 text-gray-500 dark:text-neutral-400' />
            Home
          </Link>
        </li>
        {paths[0] !== '' &&
          paths.map((path, index) => {
            if (index === paths.length - 1) {
              return (
                <li aria-current='page' key={index} className='flex items-center'>
                  <ChevronRightIcon className='h-5 w-5 text-gray-500 dark:text-neutral-400' />
                  <span className='ml-1 mr-4 text-blue-600 dark:text-sky-500'>{capitalizeFirstLetter(path)}</span>
                </li>
              );
            }
            return (
              <li key={index}>
                <div className='flex items-center'>
                  <ChevronRightIcon className='h-5 w-5 text-gray-400' />
                  <Link
                    href={(index !== 0 ? '/' : '') + paths.slice(0, index).join('/') + '/' + path}
                    className={clsx(
                      'ml-1 rounded text-gray-400 transition-all hover:text-gray-700 dark:text-neutral-500 dark:hover:text-neutral-400',
                      'focus-visible:outline-none focus-visible:ring focus-visible:ring-sky-500'
                    )}
                  >
                    {capitalizeFirstLetter(path)}
                  </Link>
                </div>
              </li>
            );
          })}
      </ol>
    </nav>
  );
}
