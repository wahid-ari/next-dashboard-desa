import clsx from 'clsx';

export default function Button({ className, type, value, onClick, disabled, children, ...props }) {
  return (
    <button
      {...props}
      type={type}
      onClick={onClick}
      value={value}
      className={clsx(
        className,
        disabled ? 'cursor-not-allowed' : 'hover:bg-sky-700 dark:hover:bg-sky-700',
        'rounded bg-sky-600 px-3 py-1.5 text-sm font-medium text-white outline-none transition-all',
        'focus:ring-2 focus:ring-sky-400 dark:bg-sky-600'
      )}
    >
      {children}
    </button>
  );
}

Button.secondary = ({ className, type, value, onClick, disabled, children, ...props }) => {
  return (
    <button
      {...props}
      type={type}
      value={value}
      onClick={onClick}
      disabled={disabled}
      className={clsx(
        className,
        disabled ? 'cursor-not-allowed' : 'hover:bg-gray-100 dark:hover:bg-neutral-900',
        'rounded bg-gray-50 px-3 py-1.5 text-sm font-medium text-neutral-800 outline-none transition-all',
        'border border-neutral-300 dark:border-neutral-800',
        'focus:ring-2 focus:ring-sky-400 dark:bg-neutral-800 dark:text-neutral-300'
      )}
    >
      {children}
    </button>
  );
};

Button.tertary = ({ className, type, value, onClick, disabled, children, ...props }) => {
  return (
    <button
      {...props}
      type={type}
      value={value}
      onClick={onClick}
      disabled={disabled}
      className={clsx(
        className,
        disabled ? 'cursor-not-allowed' : 'hover:bg-neutral-100 dark:hover:bg-neutral-800 dark:hover:text-neutral-200',
        'rounded px-3 py-1.5 text-sm font-medium text-neutral-600 outline-none transition-all dark:text-neutral-300',
        'focus:ring-2 focus:ring-sky-400'
      )}
    >
      {children}
    </button>
  );
};

Button.success = ({ className, type, value, onClick, disabled, children, ...props }) => {
  return (
    <button
      {...props}
      type={type}
      onClick={onClick}
      value={value}
      className={clsx(
        className,
        disabled ? 'cursor-not-allowed' : 'hover:bg-teal-700 dark:hover:bg-teal-700',
        'rounded bg-teal-600 px-3 py-1.5 text-sm font-medium text-white outline-none transition-all dark:bg-teal-600',
        'focus:ring-2 focus:ring-emerald-400 '
      )}
    >
      {children}
    </button>
  );
};

Button.danger = ({ className, type, value, onClick, disabled, children, ...props }) => {
  return (
    <button
      {...props}
      type={type}
      onClick={onClick}
      value={value}
      className={clsx(
        className,
        disabled ? 'cursor-not-allowed' : 'hover:bg-red-700 dark:hover:bg-red-700',
        'rounded bg-red-600 px-3 py-1.5 text-sm font-medium text-white outline-none transition-all dark:bg-red-600',
        'focus:ring-2 focus:ring-red-400'
      )}
    >
      {children}
    </button>
  );
};
