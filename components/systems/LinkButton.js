import Link from "next/link";

export default function LinkButton({ className, href, children, ...rest }) {
  return (
    <Link href={href} {...rest} className={`${className ? className + " " : ""
      }text-sm transition-all px-3 py-1.5 rounded font-medium bg-blue-700 dark:bg-sky-600 hover:bg-blue-800 dark:hover:bg-sky-700 text-white`}>
      {children}
    </Link>
  );
}

LinkButton.secondary = ({ className, href, children, ...rest }) => {
  return (
    <Link href={href} {...rest}
      className={`${className ? className + " " : ""
        }text-sm transition-all outline-none px-3 py-1.5 rounded font-medium text-neutral-800 dark:text-neutral-300 bg-gray-50 dark:bg-neutral-800 hover:bg-gray-100 dark:hover:bg-neutral-900 border border-neutral-300 dark:border-neutral-800`}
    >
      {children}
    </Link>
  );
};

LinkButton.tertary = ({ className, href, children, ...rest }) => {
  return (
    <Link href={href} {...rest}
      className={`${className ? className + " " : ""
        }text-sm transition-all outline-none px-3 py-1.5 rounded font-medium text-neutral-600 hover:bg-neutral-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:hover:text-neutral-200`}
    >
      {children}
    </Link>
  );
};
