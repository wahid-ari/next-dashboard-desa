export default function Card({ sx, children }) {
  return (
    <div
      className={`${sx} p-3 xl:p-6 rounded-lg border dark:border-neutral-800`}
    >
      {children}
    </div>
  );
}
