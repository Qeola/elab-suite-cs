import { Button, Spinner } from "flowbite-react";
import { ReactNode } from "react";

const AuthLoadingButton = ({ children }: { children: ReactNode }) => {
  return (
    <Button
      color={"primary"}
      size="large"
      type="submit"
      className="rounded-md w-full py-4 font-bold"
    >
      {children}
      <Spinner size="sm" />
    </Button>
  );
};

export default AuthLoadingButton;
