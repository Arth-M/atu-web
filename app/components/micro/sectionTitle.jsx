import { useTheme } from "../theme/ThemeProvider";
export default function SectionTitle({ children, id = undefined }) {
  const { theme } = useTheme();
  return (
    <h3
      id={id}
      className={`font-bold font-secondary leading-tight ${theme === "colorful" ? "text-shadow-[3px_1px_0px] text-shadow-secondary" : ""} text-primary w-fit`}
    >
      {children}
    </h3>
  );
}
