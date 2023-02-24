import clsx from 'clsx';

export default function Heading({ className, h1, h2, h3, children, ...props }) {
  if (h1) {
    return (
      <h1 {...props} className={clsx(className, 'mb-4 text-3xl font-medium text-neutral-800 dark:text-neutral-100')}>
        {children}
      </h1>
    );
  } else if (h2) {
    return (
      <h2 {...props} className={clsx(className, 'mb-4 text-2xl font-medium text-neutral-800 dark:text-neutral-100')}>
        {children}
      </h2>
    );
  } else if (h3) {
    return (
      <h3 {...props} className={clsx(className, 'mb-4 text-xl font-medium text-neutral-800 dark:text-neutral-100')}>
        {children}
      </h3>
    );
  }
  return (
    <h4 {...props} className={clsx(className, 'mb-4 text-lg font-medium text-neutral-800 dark:text-neutral-100')}>
      {children}
    </h4>
  );
}
