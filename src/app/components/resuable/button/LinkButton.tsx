import { Button } from "flowbite-react";
import { ReactNode } from "react";

const LinkButton = ({
  children,
  className = "",
  color = "primary",
  link = "",
  variant = "contained",
}: {
  children: ReactNode;
  className?: string;
  color?: string;
  link: string;
  variant?: "contained" | "outlined" | "text";
}) => {
  const baseClasses =
    "rounded-md w-full font-bold transition-colors duration-300";
  const containedClasses = `bg-[var(--color-${color})] hover:bg-[var(--color-${color}-emphasis)] text-white`;
  const outlinedClasses = `border border-[var(--color-${color})] text-[var(--color-${color})] hover:bg-[var(--color-${color})] hover:text-white`;
  const textClasses = `text-[var(--color-${color})] hover:underline hover:text-[var(--color-${color}-emphasis)] bg-transparent`;

  return (
    <Button
      color={color}
      size="md"
      href={link}
      className={`${baseClasses} ${
        variant === "outlined"
          ? outlinedClasses
          : variant === "text"
            ? textClasses
            : containedClasses
      } ${className}`}
    >
      {children}
    </Button>
  );
};

export default LinkButton;
