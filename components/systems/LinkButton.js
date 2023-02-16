import Link from 'next/link';

export default function LinkButton({ className, href, children, ...rest }) {
  return (
    <Link
      href={href}
      {...rest}
      className={`${
        className ? className + ' ' : ''
      }text-sm rounded bg-blue-700 px-3 py-1.5 font-medium text-white transition-all hover:bg-blue-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 dark:bg-sky-600 dark:hover:bg-sky-700`}
    >
      {children}
    </Link>
  );
}

LinkButton.secondary = ({ className, href, children, ...rest }) => {
  return (
    <Link
      href={href}
      {...rest}
      className={`${
        className ? className + ' ' : ''
      }text-sm rounded border border-neutral-300 bg-gray-50 px-3 py-1.5 font-medium text-neutral-800 outline-none transition-all hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 dark:border-neutral-800 dark:bg-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-900`}
    >
      {children}
    </Link>
  );
};

LinkButton.tertary = ({ className, href, children, ...rest }) => {
  return (
    <Link
      href={href}
      {...rest}
      className={`${
        className ? className + ' ' : ''
      }text-sm rounded px-3 py-1.5 font-medium text-neutral-600 outline-none transition-all hover:bg-neutral-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:hover:text-neutral-200`}
    >
      {children}
    </Link>
  );
};
