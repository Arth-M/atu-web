import { useTheme } from "../theme/ThemeProvider";
export default function SectionTitle({ children, id = undefined }) {
    const { theme } = useTheme();
    return (
      <h2
        id={id}
        className={`font-bold font-secondary leading-tight ${theme==="colorful" ? "text-shadow-[3px_1px_0px] text-shadow-secondary" : "" } text-primary sm:text-4xl lg:text-[2.75rem] w-fit`}
      >
        {children}
      </h2>
    );
}
