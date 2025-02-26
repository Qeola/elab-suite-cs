import React from "react";
import Logo from "@/app/(DashboardLayout)/layout/shared/logo/Logo";
import AuthLogin from "../../components/authforms/AuthLogin";
import LeftSidebarPart from "../LeftSidebarPart";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Auth - Sign In",
  description: "Generated by create next app",
};

import Link from "next/link";
const Login = () => {
  return (
    <>
      <div className="relative overflow-hidden h-screen">
        <div className="grid grid-cols-12 gap-3 h-screen bg-white dark:bg-darkgray">
          <div className="xl:col-span-8 lg:col-span-6 col-span-12 bg-[#0A2540] dark:bg-dark lg:block hidden relative overflow-hidden">
            <LeftSidebarPart />
          </div>
          <div className="xl:col-span-4 lg:col-span-6 col-span-12 sm:px-12 px-4">
            <div className="flex h-screen items-center px-3 lg:justify-start justify-center">
              <div className="max-w-md w-full mx-auto">
                <Logo />
                <h3 className="text-2xl font-bold my-3 mt-5">Sign In</h3>
                <p className="text-sm font-medium">Your Admin Dashboard</p>
                <AuthLogin />
                <div className="flex gap-2 text-sm dark:text-white font-medium mt-6 items-center justify-start">
                  <p>Don't have an Account?</p>
                  <Link
                    href={"/auth/register"}
                    className="text-primary text-sm font-medium"
                  >
                    Sign Up
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

export default Login;
