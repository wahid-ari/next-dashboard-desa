export default function Text({ className, children, ...props }) {
  return (
    <p {...props} className={`${className ? className + ' ' : ''}text-sm text-neutral-700 dark:text-neutral-200`}>
      {children}
    </p>
  );
}

Text.light = ({ className, children, ...props }) => {
  return (
    <p
      {...props}
      className={`${className ? className + ' ' : ''}font-light text-sm text-neutral-700 dark:text-neutral-200`}
    >
      {children}
    </p>
  );
};

Text.medium = ({ className, children, ...props }) => {
  return (
    <p
      {...props}
      className={`${className ? className + ' ' : ''}font-medium text-sm text-neutral-700 dark:text-neutral-200`}
    >
      {children}
    </p>
  );
};

Text.semibold = ({ className, children, ...props }) => {
  return (
    <p
      {...props}
      className={`${className ? className + ' ' : ''}font-semibold text-sm text-neutral-700 dark:text-neutral-200`}
    >
      {children}
    </p>
  );
};

Text.bold = ({ className, children, ...props }) => {
  return (
    <p
      {...props}
      className={`${className ? className + ' ' : ''}font-bold text-sm text-neutral-700 dark:text-neutral-200`}
    >
      {children}
    </p>
  );
};

Text.extrabold = ({ className, children, ...props }) => {
  return (
    <p
      {...props}
      className={`${className ? className + ' ' : ''}font-extrabold text-sm text-neutral-700 dark:text-neutral-200`}
    >
      {children}
    </p>
  );
};
