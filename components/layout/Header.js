export default function Header({ sx, children }) {
  return (
    <div
      className={`${sx} px-4 xl:px-8 pt-4 xl:pt-8 pb-4 xl:pb-8 border-b dark:border-neutral-800`}
    >
      {children}
    </div>
  );
}
