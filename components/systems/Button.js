export default function Button({
  className,
  type,
  value,
  onClick,
  disabled,
  children,
  ...rest
}) {
  return (
    <button
      {...rest}
      type={type}
      onClick={onClick}
      value={value}
      className={`${className ? className + " " : ""
        }text-sm transition-all outline-none px-3 py-1.5 rounded font-medium bg-blue-700 dark:bg-sky-600 ${disabled
          ? "cursor-not-allowed"
          : "hover:bg-blue-800 dark:hover:bg-sky-700"
        } text-white`}
    >
      {children}
    </button>
  );
}

Button.secondary = ({
  className,
  type,
  value,
  onClick,
  disabled,
  children,
  ...rest
}) => {
  return (
    <button
      {...rest}
      type={type}
      value={value}
      onClick={onClick}
      disabled={disabled}
      className={`${className ? className + " " : ""
        }text-sm transition-all outline-none px-3 py-1.5 rounded font-medium text-neutral-800 dark:text-neutral-300 bg-gray-50 dark:bg-neutral-800 ${disabled
          ? "cursor-not-allowed"
          : "hover:bg-gray-100 dark:hover:bg-neutral-900"
        } border border-neutral-300 dark:border-neutral-800`}
    >
      {children}
    </button>
  );
};

Button.tertary = ({
  className,
  type,
  value,
  onClick,
  disabled,
  children,
  ...rest
}) => {
  return (
    <button
      {...rest}
      type={type}
      value={value}
      onClick={onClick}
      disabled={disabled}
      className={`${className ? className + " " : ""
        }text-sm transition-all outline-none px-3 py-1.5 rounded font-medium text-neutral-600 ${disabled
          ? "cursor-not-allowed"
          : "hover:bg-neutral-100 dark:hover:bg-neutral-800 dark:hover:text-neutral-200"
        } dark:text-neutral-300`}
    >
      {children}
    </button>
  );
};

Button.success = ({
  className,
  type,
  value,
  onClick,
  disabled,
  children,
  ...rest
}) => {
  return (
    <button
      {...rest}
      type={type}
      onClick={onClick}
      value={value}
      className={`${className ? className + " " : ""
        }text-sm transition-all outline-none px-3 py-1.5 rounded font-medium bg-teal-600 dark:bg-teal-600 ${disabled
          ? "cursor-not-allowed"
          : "hover:bg-teal-700 dark:hover:bg-teal-700"
        } text-white`}
    >
      {children}
    </button>
  );
}

Button.danger = ({
  className,
  type,
  value,
  onClick,
  disabled,
  children,
  ...rest
}) => {
  return (
    <button
      {...rest}
      type={type}
      onClick={onClick}
      value={value}
      className={`${className ? className + " " : ""
        }text-sm transition-all outline-none px-3 py-1.5 rounded font-medium bg-red-600 dark:bg-red-600 ${disabled
          ? "cursor-not-allowed"
          : "hover:bg-red-700 dark:hover:bg-red-700"
        } text-white`}
    >
      {children}
    </button>
  );
}