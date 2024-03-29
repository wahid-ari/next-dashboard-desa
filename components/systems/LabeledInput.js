import clsx from 'clsx';

export default function LabeledInput({ id, className, label, type, name, placeholder, value, onChange, ...props }) {
  return (
    <div className='mb-4'>
      <label className='block text-sm text-gray-800 dark:text-neutral-300' htmlFor={name}>
        {label}
      </label>
      <input
        {...props}
        id={id}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={clsx(
          className,
          'mt-2 w-full rounded-md px-4 py-[0.6rem] text-sm font-medium transition-all dark:text-neutral-100',
          'border-gray-300 bg-white outline-none dark:border-neutral-800 dark:bg-neutral-900',
          'border focus:border-blue-500 focus:ring-1 focus:ring-blue-500 dark:focus:border-sky-500 dark:focus:ring-sky-500'
        )}
        autoComplete='off'
        required
      />
    </div>
  );
}

LabeledInput.disabled = ({ className, label, type, name, placeholder, defaultValue, ...props }) => {
  return (
    <div className='mb-4'>
      <label className='block text-sm text-gray-500 dark:text-neutral-300' htmlFor={name}>
        {label}
      </label>
      <input
        {...props}
        type={type}
        name={name}
        placeholder={placeholder}
        defaultValue={defaultValue}
        className={clsx(
          className,
          'mt-2 w-full cursor-not-allowed rounded-md border border-gray-300 bg-gray-100 px-4 py-[0.6rem] text-sm',
          'font-medium outline-none transition-all dark:border-neutral-800 dark:bg-neutral-800 dark:text-neutral-500'
        )}
        disabled
      />
    </div>
  );
};
