import { Button } from "flowbite-react";
import { ReactNode } from "react";

const AuthButton = ({ children }: { children: ReactNode }) => {
  return (
    <Button
      color={"primary"}
      size="large"
      type="submit"
      className="rounded-md w-full py-4 font-bold"
    >
      {children}
    </Button>
  );
};

export default AuthButton;
