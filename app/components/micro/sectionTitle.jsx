export default function SectionTitle({ children, id = undefined }) {
    return (
      <h2
        id={id}
        className="font-secondary font-bold leading-tight text-primary sm:text-4xl lg:text-[2.75rem] w-fit"
      >
        {children}
      </h2>
    );
}
