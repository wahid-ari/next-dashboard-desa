export default function Tab({ className, children }) {
  return (
    <div
      className={`${
        className ? className + " " : ""
      }text-xs border-b border-gray-200 dark:border-neutral-800`}
    >
      <ul className="flex overflow-x-auto whitespace-nowrap flex-nowrap -mb-px">
        {children}
      </ul>
    </div>
  );
}

Tab.item = ({ className, value, onClick, isActive, disabled, children }) => {
  return (
    <li className={`${className ? className + " " : ""}mr-2`}>
      <button
        value={value}
        onClick={onClick}
        className={`text-xs transition-all font-semibold outline-none inline-block py-[0.6rem] px-2 text-center rounded-t-lg border-b-2 ${
          isActive
            ? "border-blue-800 text-blue-800 dark:border-sky-500 dark:text-sky-500"
            : "text-gray-500 dark:text-neutral-500 hover:text-gray-600 dark:hover:text-neutral-400 border-transparent hover:border-gray-300 dark:hover:border-neutral-800"
        } ${disabled ? "cursor-not-allowed" : ""}`}
      >
        {children}
      </button>
    </li>
  );
};
