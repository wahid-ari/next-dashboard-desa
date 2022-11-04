export default function Section({ style, sx, children }) {
  return (
    <section
      style={style}
      className={`${sx} py-4 xl:py-8 border-b dark:border-neutral-800`}
    >
      {children}
    </section>
  );
}

Section.small = ({ style, sx, children }) => {
  return (
    <section
      style={style}
      className={`${sx} py-2 my-2 border-b dark:border-neutral-800`}
    >
      {children}
    </section>
  );
};
