import { CheckIcon } from '@heroicons/react/outline';

export default function Radio({ label, name, value, onChange, checked, ...props }) {
  return (
    <div className='mb-3 text-sm'>
      <label className='group relative cursor-pointer select-none pl-6 pb-0.5 text-gray-800 dark:text-neutral-300'>
        {label}
        <input
          {...props}
          name={name}
          value={value}
          onChange={onChange}
          checked={checked}
          type='radio'
          className='peer absolute h-0 w-0 cursor-pointer opacity-0'
        />
        <span className='absolute -top-0.5 left-0 mt-0.5 h-4 w-4 rounded-full border border-neutral-300 transition-all group-hover:border-blue-800 peer-checked:border-blue-800 peer-checked:bg-blue-800 group-hover:peer-checked:border-neutral-300 dark:border-neutral-800 dark:group-hover:border-sky-500 dark:peer-checked:border-sky-500 dark:peer-checked:bg-sky-500 dark:group-hover:peer-checked:border-neutral-800'></span>
        <CheckIcon className='absolute top-[0.05rem] left-[0.05rem] mt-[0.05rem] hidden h-3.5 w-3.5 text-white peer-checked:block' />
      </label>
    </div>
  );
}

Radio.disabled = ({ name, checked, ...props }) => {
  return (
    <div className='mb-3 cursor-not-allowed text-sm'>
      <label className='pointer-events-none relative select-none pl-6 pb-0.5 text-gray-800 dark:text-neutral-300'>
        {name}
        <input {...props} checked={checked} type='radio' className='peer absolute h-0 w-0 opacity-0' />
        <span className='absolute -top-0.5 left-0 mt-0.5 h-4 w-4 rounded-full border border-neutral-300 transition-all peer-checked:border-blue-800 peer-checked:bg-blue-800 dark:border-neutral-800 dark:peer-checked:border-sky-500 dark:peer-checked:bg-sky-500'></span>
        <CheckIcon className='absolute top-[0.05rem] left-[0.05rem] mt-[0.05rem] hidden h-3.5 w-3.5 text-white peer-checked:block' />
      </label>
    </div>
  );
};
