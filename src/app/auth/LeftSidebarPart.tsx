"use client";
import Image from "next/image";
import React from "react";
import Bgimg from "/public/images/logos/logo-icon.svg";

const LeftSidebarPart = ({ image }: { image: string }) => {
  return (
    <>
      <div className="circle-top"></div>
      <div className="flex xl:justify-start justify-center xl:px-40 xl:pt-30  h-screen items-center z-10 relative w-full">
        <div className="flex flex-col h-full w-full">
          {/* Content Section */}
          <div>
            <Image src={Bgimg} alt="materilm" className="circle-bottom" />
            <h2 className="text-white text-[40px] font-bold leading-[normal]">
              Welcome to
              <br />
              eLab Suite
            </h2>
            <p className="opacity-75 text-white my-4 text-base font-medium">
              Streamline your workflows, boost your efficiency!
            </p>
          </div>

          {/* Image should fit in completely without being cut */}
          <div className="flex-grow relative w-full">
            <Image
              src={image}
              alt="illustration"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default LeftSidebarPart;
