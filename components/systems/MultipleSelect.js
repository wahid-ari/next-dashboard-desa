import { useEffect, useRef } from 'react';
import { ChevronDownIcon } from '@heroicons/react/outline';

export default function MultipleSelect({ label, show, value, onClick, onBlur, children }) {
  const buttonRef = useRef(null);
  const ref = useRef(null);
  const setBlur = (e) => {
    if (show && ref.current && !ref.current.contains(e.target)) {
      onBlur(buttonRef.current);
    }
  };

  useEffect(() => {
    document.addEventListener('click', setBlur);
    document.addEventListener('keydown', setBlur);
    return () => {
      document.removeEventListener('click', setBlur);
      document.removeEventListener('keydown', setBlur);
    };
  });
  return (
    <div className='relative mb-4' ref={ref}>
      <div className='mb-1'>
        <label className='block text-gray-800 dark:text-neutral-300'>{label}</label>
        <button
          aria-label='multiple select'
          ref={buttonRef}
          onBlur={setBlur}
          onClick={onClick}
          className='group mt-2 flex w-full items-center justify-between rounded-md border border-gray-300 bg-white px-4 py-[0.6rem] font-medium outline-none ring-gray-300 transition-all focus:border-blue-800 focus:ring-1 focus:ring-blue-800 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-100 dark:ring-neutral-600 dark:focus:border-sky-300 dark:focus:ring-sky-900'
        >
          <div className='flex flex-wrap gap-y-2 text-sm'>{value}</div>
          <ChevronDownIcon
            className={`h-4 w-4 text-gray-400 transition-all dark:text-neutral-600 ${show ? 'rotate-180' : 'rotate-0'}`}
          />
        </button>
      </div>
      <div
        className={`${
          show ? 'max-h-64 border dark:border-neutral-800' : 'max-h-0 border-transparent'
        } absolute z-50 w-full overflow-y-auto rounded-md bg-white shadow-sm transition-all scrollbar scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-gray-300 dark:bg-neutral-900 dark:scrollbar-thumb-neutral-800`}
      >
        {children}
      </div>
    </div>
  );
}

MultipleSelect.item = ({ children, ...props }) => {
  return (
    <div className='flex'>
      <button
        className='flex flex-grow cursor-pointer items-center gap-2 border-b px-4 py-[0.6rem] outline-none hover:bg-gray-50 dark:border-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-800'
        {...props}
      >
        {children}
      </button>
    </div>
  );
};
