import { Button } from "flowbite-react";
import { ReactNode } from "react";

const FunctionButton = ({
  children,
  className = "",
  click = () => {},
  variant = "contained", // Default to 'contained'
}: {
  children: ReactNode;
  className?: string;
  click?: () => void;
  variant?: "contained" | "outlined" | "text";
}) => {
  const baseClasses =
    "rounded-md w-full font-bold transition-colors duration-300";
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
      onClick={click}
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

export default FunctionButton;
