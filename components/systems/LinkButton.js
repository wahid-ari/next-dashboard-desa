import Link from "next/link";

export default function LinkButton({ className, href, children, ...rest }) {
  return (
    <Link href={href}>
      <a
        {...rest}
        className={`${
          className ? className + " " : ""
        }text-xs transition-all px-4 py-2 rounded font-semibold bg-blue-800 dark:bg-sky-600 hover:bg-blue-900 dark:hover:bg-sky-700 text-white`}
      >
        {children}
      </a>
    </Link>
  );
}

LinkButton.secondary = ({ className, href, children, ...rest }) => {
  return (
    <Link href={href}>
      <a
        {...rest}
        className={`${
          className ? className + " " : ""
        }text-xs transition-all outline-none px-4 py-2 rounded font-semibold text-neutral-800 dark:text-neutral-300 bg-gray-50 dark:bg-neutral-800 hover:bg-gray-100 dark:hover:bg-neutral-900 border border-neutral-300 dark:border-neutral-800`}
      >
        {children}
      </a>
    </Link>
  );
};

LinkButton.tertary = ({ className, href, children, ...rest }) => {
  return (
    <Link href={href}>
      <a
        {...rest}
        className={`${
          className ? className + " " : ""
        }text-xs transition-all outline-none px-4 py-2 rounded font-semibold text-neutral-600 hover:bg-neutral-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:hover:text-neutral-200`}
      >
        {children}
      </a>
    </Link>
  );
};
