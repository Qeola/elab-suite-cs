import Logo from "@/app/dashboard/(DashboardLayout)/layout/shared/logo/Logo";
import React from "react";
import LeftSidebarPart from "../LeftSidebarPart";
import AuthForgotPassword from "../../components/authforms/AuthForgotPassword";
import { Button } from "flowbite-react";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Auth - Forgot Password",
  description: "Generated by create next app",
};

const Forgotpwd = () => {
  return (
    <>
      <div className="relative overflow-hidden h-screen">
        <div className="grid grid-cols-12 gap-3 h-screen bg-white dark:bg-darkgray">
          <div className="xl:col-span-8 lg:col-span-6 col-span-12 bg-[#eefafc] lg:block hidden relative overflow-hidden">
            <LeftSidebarPart image="/images/backgrounds/reset.svg" />
          </div>
          <div className="xl:col-span-4 lg:col-span-6 col-span-12 sm:px-12 px-4">
            <div className="flex h-screen items-center px-3 max-w-md mx-auto ">
              <div className="w-full">
                <Logo />
                <h3 className="text-2xl font-bold my-3 mt-5">
                  Forgot Password
                </h3>
                <p className="text-ld opacity-80 dark:text-white/60 text-sm font-medium">
                  Please enter the email address associated with your account
                  and we will email you a link to reset your password.
                </p>
                <AuthForgotPassword />
                <Button
                  color={"lightprimary"}
                  // as={Link}
                  href="/auth/sign-in"
                  size="md"
                  className="rounded-md w-full font-bold transition-colors duration-300 mt-4 py-2"
                >
                  Back to Sign In
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Forgotpwd;
