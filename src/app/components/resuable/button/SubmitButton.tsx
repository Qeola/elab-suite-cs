import { Button } from "flowbite-react";
import { ReactNode } from "react";

const SubmitButton = ({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <Button
      color="primary"
      size="md"
      type="submit"
      className={`rounded-md w-full py-1.5 font-bold bg-[var(--color-primary)] hover:bg-[var(--color-primary-emphasis)] transition-colors duration-300 ${className}`}
    >
      {children}
    </Button>
  );
};

export default SubmitButton;