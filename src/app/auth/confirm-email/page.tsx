import Logo from "@/app/dashboard/(DashboardLayout)/layout/shared/logo/Logo";
import React from "react";
import LeftSidebarPart from "../LeftSidebarPart";
import type { Metadata } from "next";
import AuthConfirmEmail from "@/app/components/authforms/AuthConfirmEmail";
export const metadata: Metadata = {
  title: "Auth - Reset Password",
  description: "Generated by create next app",
};

const ConfirmEmail = () => {
  return (
    <>
      <div className="relative overflow-hidden h-screen">
        <div className="grid grid-cols-12 gap-3 h-screen bg-white dark:bg-darkgray">
          <div className="xl:col-span-8 lg:col-span-6 col-span-12 bg-[#0A2540] dark:bg-dark lg:block hidden relative overflow-hidden">
            <LeftSidebarPart />
          </div>
          <div className="xl:col-span-4 lg:col-span-6 col-span-12 sm:px-12 px-4">
            <div className="flex h-screen items-center px-3 max-w-md mx-auto ">
              <div className="w-full">
                <Logo />
                <h3 className="text-2xl font-bold my-3 mt-5">Confirm Email</h3>
                <AuthConfirmEmail text="Resend Verification Email" />
                {/* <Button
                  color={"lightprimary"}
                  as={Link}
                  href="/auth/signin"
                  className="rounded-md w-full mt-4"
                >
                  Back to Signin
                </Button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConfirmEmail;
