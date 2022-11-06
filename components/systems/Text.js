export default function Text({ className, children, ...rest }) {
  return (
    <p
      {...rest}
      className={`${
        className ? className + " " : ""
      }text-xs text-neutral-700 dark:text-neutral-200`}
    >
      {children}
    </p>
  );
}

Text.light = ({ className, children, ...rest }) => {
  return (
    <p
      {...rest}
      className={`${
        className ? className + " " : ""
      }font-light text-xs text-neutral-700 dark:text-neutral-200`}
    >
      {children}
    </p>
  );
};

Text.medium = ({ className, children, ...rest }) => {
  return (
    <p
      {...rest}
      className={`${
        className ? className + " " : ""
      }font-medium text-xs text-neutral-700 dark:text-neutral-200`}
    >
      {children}
    </p>
  );
};

Text.semibold = ({ className, children, ...rest }) => {
  return (
    <p
      {...rest}
      className={`${
        className ? className + " " : ""
      }font-semibold text-xs text-neutral-700 dark:text-neutral-200`}
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
      }font-bold text-xs text-neutral-700 dark:text-neutral-200`}
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
      }font-extrabold text-xs text-neutral-700 dark:text-neutral-200`}
    >
      {children}
    </p>
  );
};
