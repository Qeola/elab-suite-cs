import { Button } from "flowbite-react";
import { ReactNode } from "react";

const FunctionButton = ({
  children,
  className = "",
  click = () => {},
}: {
  children: ReactNode;
  className?: string;
  click?: () => void;
}) => {
  return (
    <Button
      color="primary"
      size="md"
      onClick={click}
      className={`rounded-md w-full py-2 font-bold bg-[var(--color-primary)] hover:bg-[var(--color-primary-emphasis)] transition-colors duration-300 ${className}`}
    >
      {children}
    </Button>
  );
};

export default FunctionButton;
