export default function Heading({ className, h1, h2, h3, children, ...rest }) {
  if (h1) {
    return (
      <h1
        className={`${
          className ? className + " " : ""
        }dark:text-white text-3xl mb-8`}
        {...rest}
      >
        {children}
      </h1>
    );
  } else if (h2) {
    return (
      <h2
        className={`${
          className ? className + " " : ""
        }dark:text-white text-2xl mb-6`}
        {...rest}
      >
        {children}
      </h2>
    );
  } else if (h3) {
    return (
      <h3
        className={`${
          className ? className + " " : ""
        }dark:text-white text-xl mb-4`}
        {...rest}
      >
        {children}
      </h3>
    );
  }
  return (
    <h4
      className={`${
        className ? className + " " : ""
      }dark:text-white text-lg mb-2`}
      {...rest}
    >
      {children}
    </h4>
  );
}
