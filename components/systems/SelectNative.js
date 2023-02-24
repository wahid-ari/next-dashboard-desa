import clsx from 'clsx';

export default function Select({ label, id, name, className, defaultValue, onChange, children, ...props }) {
  return (
    <div className=''>
      {label && (
        <label htmlFor={name} className='block text-sm font-semibold text-neutral-800 dark:text-gray-200'>
          {label}
        </label>
      )}
      <select
        {...props}
        id={id}
        name={name}
        defaultValue={defaultValue}
        onChange={onChange}
        className={clsx(
          className,
          'mt-2 block w-full cursor-pointer rounded-md px-3 py-[0.3rem] text-sm font-medium transition-all dark:text-white',
          'border border-gray-300 bg-white outline-none dark:bg-neutral-900',
          'focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:border-neutral-700 '
        )}
      >
        {children}
      </select>
    </div>
  );
}

Select.option = ({ value, children, ...props }) => {
  return (
    <option value={value} {...props}>
      {children}
    </option>
  );
};
