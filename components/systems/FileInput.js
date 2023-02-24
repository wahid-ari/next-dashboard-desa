import { PlusIcon } from '@heroicons/react/solid';
import clsx from 'clsx';
import { useRef } from 'react';
import Button from './Button';

export default function FileInput({ id, className, label, type = 'file', name, value, onChange, ...props }) {
  const ref = useRef();

  const handleClick = () => {
    ref.current.click();
  };

  return (
    <div className='mb-4'>
      <label className='block text-sm text-gray-800 dark:text-neutral-300' htmlFor={name}>
        {label}
      </label>
      <Button.secondary onClick={handleClick} className='mt-2 w-full truncate'>
        {value !== '' ? (
          value
        ) : (
          <span>
            <PlusIcon className='inline h-4 w-4' /> File
          </span>
        )}
      </Button.secondary>
      <input
        ref={ref}
        {...props}
        id={id}
        type={type}
        name={name}
        value=''
        onChange={onChange}
        className={clsx(
          className,
          'mt-2 hidden w-full rounded-md bg-white px-4 py-[0.6rem] text-sm font-medium transition-all dark:bg-neutral-900 dark:text-neutral-100',
          'border border-gray-300 outline-none focus:border-blue-800 dark:border-neutral-800 dark:focus:border-sky-300',
          'ring-gray-300 focus:ring-1 focus:ring-blue-800 dark:ring-neutral-600 dark:focus:ring-sky-900'
        )}
        required
      />
    </div>
  );
}
