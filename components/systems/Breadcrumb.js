import Link from "next/link";
import { useRouter } from "next/router";
import { ChevronRightIcon } from "@heroicons/react/solid";

export default function Breadcrumb() {
  const router = useRouter();
  const paths = router.pathname
    .split("/")
    .slice(1)
    .filter((r) => {
      if (r.includes("_id") || r === "[id]") {
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
    <nav
      className="flex w-full text-xs"
      aria-label="Breadcrumb"
    >
      <ol className="inline-flex whitespace-nowrap flex-nowrap items-center space-x-1 md:space-x-3">
        <li className="inline-flex items-center">
          <Link href="/">
            <a className="transition-all font-semibold inline-flex items-center text-gray-400 dark:text-neutral-500 hover:text-gray-700 dark:hover:text-neutral-400">
              <ChevronRightIcon className="w-5 h-5" />
              Home
            </a>
          </Link>
        </li>
        {paths[0] !== "" &&
          paths.map((path, index) => {
            if (index === paths.length - 1) {
              return (
                <li aria-current="page" key={index}>
                  <a className="flex items-center">
                    <ChevronRightIcon className="w-5 h-5 text-gray-400" />
                    <span className="ml-1 font-semibold text-blue-800 dark:text-sky-500 md:ml-2">
                      {capitalizeFirstLetter(path)}
                    </span>
                  </a>
                </li>
              );
            }
            return (
              <li key={index}>
                <div className="flex items-center">
                  <ChevronRightIcon className="w-5 h-5 text-gray-400" />
                  <Link
                    href={
                      (index !== 0 ? "/" : "") +
                      paths.slice(0, index).join("/") +
                      "/" +
                      path
                    }
                  >
                    <a className="transition-all ml-1 font-semibold text-gray-400 dark:text-neutral-500 hover:text-gray-700 dark:hover:text-neutral-400 md:ml-2">
                      {capitalizeFirstLetter(path)}
                    </a>
                  </Link>
                </div>
              </li>
            );
          })}
      </ol>
    </nav>
  );
}