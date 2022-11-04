export default function Layout({ children }) {
  return (
    <div className="text-xs font-cool font-medium dark:bg-neutral-900">
      <div
        className="min-h-screen w-screen xl:grid"
        style={{ gridTemplateColumns: "auto 1fr" }}
      >
        {children}
      </div>
    </div>
  );
}
