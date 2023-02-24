import clsx from 'clsx';

export default function Label({ className, children, ...props }) {
  return (
    <label {...props} className={clsx(className, 'block text-gray-800 dark:text-neutral-300')}>
      {children}
    </label>
  );
}
