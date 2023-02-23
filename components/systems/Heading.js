export default function Heading({ className, h1, h2, h3, children, ...props }) {
  if (h1) {
    return (
      <h1
        className={`${
          className ? className + ' ' : ''
        }text-neutral-800 mb-4 text-3xl font-medium dark:text-neutral-100`}
        {...props}
      >
        {children}
      </h1>
    );
  } else if (h2) {
    return (
      <h2
        className={`${
          className ? className + ' ' : ''
        }text-neutral-800 mb-4 text-2xl font-medium dark:text-neutral-100`}
        {...props}
      >
        {children}
      </h2>
    );
  } else if (h3) {
    return (
      <h3
        className={`${className ? className + ' ' : ''}text-neutral-800 mb-4 text-xl font-medium dark:text-neutral-100`}
        {...props}
      >
        {children}
      </h3>
    );
  }
  return (
    <h4
      className={`${className ? className + ' ' : ''}text-neutral-800 mb-4 text-lg font-medium dark:text-neutral-100`}
      {...props}
    >
      {children}
    </h4>
  );
}
