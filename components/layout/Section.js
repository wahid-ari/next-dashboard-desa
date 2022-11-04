export default function Section({ style, className, children }) {
  return (
    <section
      style={style}
      className={`${className} py-4 xl:py-8 border-b dark:border-neutral-800`}
    >
      {children}
    </section>
  );
}

Section.small = ({ style, className, children }) => {
  return (
    <section
      style={style}
      className={`${className} py-2 my-2 border-b dark:border-neutral-800`}
    >
      {children}
    </section>
  );
};
