export default function Input({
  className,
  type,
  name,
  placeholder,
  value,
  onChange,
  ...rest
}) {
  return (
    <div className="mb-4">
      <input
        {...rest}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`${
          className ? className + " " : ""
        }text-sm transition-all font-medium dark:text-neutral-100 bg-white dark:bg-neutral-900 w-full px-4 py-[0.6rem] rounded-md mt-2 border border-gray-300 dark:border-neutral-800 focus:ring-1 focus:ring-blue-500 dark:focus:ring-sky-500 focus:border-blue-500 dark:focus:border-sky-500 outline-none`}
        autoComplete="off"
        required
      />
    </div>
  );
}

Input.disabled = ({
  className,
  type,
  name,
  placeholder,
  defaultValue,
  ...rest
}) => {
  return (
    <div className="mb-4">
      <input
        {...rest}
        type={type}
        name={name}
        placeholder={placeholder}
        defaultValue={defaultValue}
        className={`${
          className ? className + " " : ""
        }text-sm transition-all font-medium dark:text-neutral-500 bg-gray-100 dark:bg-neutral-800 w-full px-4 py-[0.6rem] rounded-md mt-2 border border-gray-300 dark:border-neutral-800 outline-none cursor-not-allowed`}
        disabled
      />
    </div>
  );
};
