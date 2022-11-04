export default function Text({ className, children, ...rest }) {
  return (
    <p
      {...rest}
      className={`${
        className ? className + " " : ""
      }text-xs text-neutral-800 dark:text-neutral-300`}
    >
      {children}
    </p>
  );
}

Text.semibold = ({ className, children, ...rest }) => {
  return (
    <p
      {...rest}
      className={`${
        className ? className + " " : ""
      }font-semibold text-xs text-neutral-800 dark:text-neutral-300`}
    >
      {children}
    </p>
  );
};

Text.bold = ({ className, children, ...rest }) => {
  return (
    <p
      {...rest}
      className={`${
        className ? className + " " : ""
      }font-bold text-xs text-neutral-800 dark:text-neutral-300`}
    >
      {children}
    </p>
  );
};

Text.extrabold = ({ className, children, ...rest }) => {
  return (
    <p
      {...rest}
      className={`${
        className ? className + " " : ""
      }font-extrabold text-xs text-neutral-800 dark:text-neutral-300`}
    >
      {children}
    </p>
  );
};
