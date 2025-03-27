import { Button } from "flowbite-react";
import { ReactNode } from "react";

const LinkButton = ({
  children,
  className = "",
  link = "",
  variant = "contained", // Default to 'contained'
}: {
  children: ReactNode;
  className?: string;
  link: string;
  variant?: "contained" | "outlined" | "text";
}) => {
  const baseClasses =
    "rounded-md w-full py-1.5 font-bold transition-colors duration-300";
  const containedClasses =
    "bg-[var(--color-primary)] hover:bg-[var(--color-primary-emphasis)] text-white";
  const outlinedClasses =
    "border border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white";
  const textClasses =
    "text-[var(--color-primary)] hover:underline hover:text-[var(--color-primary-emphasis)] bg-transparent";

  return (
    <Button
      // color="primary"
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
