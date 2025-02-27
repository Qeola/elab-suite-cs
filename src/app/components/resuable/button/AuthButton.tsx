import { Button } from "flowbite-react";
import { ReactNode } from "react";

const AuthButton = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <Button
      color={"primary"}
      size="md"
      type="submit"
      className={`rounded-md w-full py-2 font-bold ${className}`}
    >
      {children}
    </Button>
  );
};

export default AuthButton;
