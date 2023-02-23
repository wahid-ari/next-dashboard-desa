export default function Label({ className, children, ...props }) {
  return (
    <label {...props} className={`${className ? className + ' ' : ''}block text-gray-800 dark:text-neutral-300`}>
      {children}
    </label>
  );
}
