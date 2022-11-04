import Link from "next/link";
import { useRouter } from "next/router";
export default function NavLink({ sx, href, icon, isHome, children }) {
  const router = useRouter();
  return (
    <Link href={href}>
      <a
        className={`${sx} transition-all w-full px-4 py-2 mb-1 flex justify-start items-center gap-3 rounded text-xs font-semibold ${
          router.pathname.includes(href) && !isHome
            ? "bg-gray-100 dark:bg-neutral-800 text-blue-800 dark:text-neutral-400"
            : router.pathname === href && isHome
            ? "bg-gray-100 dark:bg-neutral-800 text-blue-800 dark:text-neutral-400"
            : "text-gray-500 dark:text-neutral-500"
        } hover:text-blue-800 hover:bg-gray-100 dark:hover:bg-neutral-800 dark:hover:text-neutral-400`}
      >
        {icon}
        <span>{children}</span>
      </a>
    </Link>
  );
}

NavLink.logout = ({ href, icon, sx, children }) => {
  return (
    <Link href={href}>
      <a
        className={`${sx} transition-all w-full px-4 py-2 flex justify-start items-center gap-3 text-xs font-semibold rounded hover:bg-red-100 dark:hover:bg-neutral-800 text-red-800 dark:text-red-500 dark:hover:text-red-400`}
      >
        {icon}
        <span>{children}</span>
      </a>
    </Link>
  );
};
