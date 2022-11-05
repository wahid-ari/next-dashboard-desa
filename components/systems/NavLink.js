import Link from "next/link";
import { useRouter } from "next/router";
export default function NavLink({ className, href, icon, isHome, children }) {
  const router = useRouter();
  return (
    <Link passHref href={href} className={`${className} transition-all w-full px-3 py-2 mb-1 flex justify-start items-center gap-2 rounded text-xs font-semibold ${router.pathname.includes(href) && !isHome
      ? "bg-gray-100 dark:bg-neutral-800 text-blue-600 dark:text-sky-500"
      : router.pathname === href && isHome
        ? "bg-gray-100 dark:bg-neutral-800 text-blue-600 dark:text-sky-500 dark:hover:text-sky-500"
        : "text-gray-500 dark:text-neutral-400 dark:hover:text-sky-500"
      } hover:text-blue-600 hover:bg-gray-100 dark:hover:bg-neutral-800`}
    >
      {icon}
      <span>{children}</span>
    </Link>
  );
}

NavLink.logout = ({ href, icon, className, children }) => {
  return (
    <Link passHref href={href} className={`${className} transition-all w-full px-4 py-2 flex justify-start items-center gap-3 text-xs font-semibold rounded hover:bg-red-100 dark:hover:bg-neutral-800 text-red-800 dark:text-red-500 dark:hover:text-red-400`}>
      {icon}
      <span>{children}</span>
    </Link>
  );
};
