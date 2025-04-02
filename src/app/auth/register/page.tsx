import React from "react";
import Logo from "@/app/dashboard/(DashboardLayout)/layout/shared/logo/Logo";
import AuthRegister from "../../components/authforms/AuthRegister";
import LeftSidebarPart from "../LeftSidebarPart";
import Link from "next/link";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Auth - Sign Up",
  description: "Generated by create next app",
};
const Register = () => {
  return (
    <>
      <div className="relative overflow-hidden h-screen">
        <div className="grid grid-cols-12 gap-3 h-screen bg-white dark:bg-darkgray">
          <div className="xl:col-span-8 lg:col-span-6 col-span-12 bg-[#060016] lg:block hidden relative overflow-hidden">
            <LeftSidebarPart image="/images/backgrounds/auth-bg.svg" />
          </div>
          <div className="xl:col-span-4 lg:col-span-6 col-span-12 sm:px-12 px-4">
            <div className="flex h-screen items-center px-3 max-w-md mx-auto">
              <div className="w-full">
                <Logo />
                <h3 className="text-2xl font-bold my-3 mt-5">Sign Up</h3>
                <p className="text-sm font-medium">Your Admin Dashboard</p>
                <AuthRegister />
                <div className="flex gap-2 text-sm dark:text-white font-medium mt-6 items-center justify-start">
                  <p>Already have an Account?</p>
                  <Link
                    href={"/auth/signin"}
                    className="text-primary text-sm font-medium"
                  >
                    Sign In
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
