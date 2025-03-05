"use client";
import Image from "next/image";
import React from "react";
import Bgimg from "/public/images/logos/logo-icon.svg";

const LeftSidebarPart = () => {
  return (
    <>
      <div className="circle-top"></div>
      <div className="flex xl:justify-start justify-center xl:ps-80 h-screen items-center z-10 relative">
        <div className="max-w-md">
          <Image src={Bgimg} alt="materilm" className="circle-bottom" />
          <h2 className="text-white text-[40px] font-bold leading-[normal]">
            Welcome to
            <br></br>
            eLab Suite
          </h2>
          <p className="opacity-75 text-white my-4 text-base font-medium">
            Streamline your workflows, boost your efficiency!
          </p>
          <Image
            src={"/images/backgrounds/auth-bg.png"}
            alt="illustration"
            width={800}
            height={800}
          />
        </div>
      </div>
    </>
  );
};

export default LeftSidebarPart;
