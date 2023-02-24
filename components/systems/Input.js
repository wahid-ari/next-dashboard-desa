import clsx from 'clsx';

export default function Input({ className, type, name, placeholder, value, onChange, ...props }) {
  return (
    <div className='mb-4'>
      <input
        {...props}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={clsx(
          className,
          'mt-2 w-full rounded-md border bg-white px-4 py-[0.6rem] text-sm font-medium outline-none dark:bg-neutral-900',
          'border-gray-300 transition-all dark:border-neutral-800 dark:text-neutral-100',
          'focus:border-blue-500 focus:ring-1 focus:ring-blue-500 dark:focus:border-sky-500 dark:focus:ring-sky-500'
        )}
        autoComplete='off'
        required
      />
    </div>
  );
}

Input.disabled = ({ className, type, name, placeholder, defaultValue, ...props }) => {
  return (
    <div className='mb-4'>
      <input
        {...props}
        type={type}
        name={name}
        placeholder={placeholder}
        defaultValue={defaultValue}
        className={clsx(
          className,
          'mt-2 w-full cursor-not-allowed rounded-md border border-gray-300 bg-gray-100 px-4 py-[0.6rem] text-sm font-medium',
          'outline-none transition-all dark:border-neutral-800 dark:bg-neutral-800 dark:text-neutral-500'
        )}
        disabled
      />
    </div>
  );
};
