"use client";

import React, { FC } from "react";
import { Icon } from "@iconify/react";

interface ItemProps {
  bg: string;
  color: string;
  icon: string;
  title: string;
  price: string | number;
  link: string;
}

interface ColorBoxesProps {
  item: ItemProps;
}

const ColorBoxes: FC<ColorBoxesProps> = ({ item }) => {
  return (
    <div className="lg:basis-1/5 md:basis-1/4 basis-full lg:shrink shrink-0">
      <div className={`text-center px-5 py-30 rounded-tw ${item.bg}`}>
        <span
          className={`h-12 w-12 mx-auto flex items-center justify-center  rounded-tw ${item.color}`}
        >
          <Icon icon={item.icon} className="text-white" height={24} />
        </span>
        <p className="text-ld font-normal mt-4 mb-2">{item.title}</p>
        <h4 className="text-22">{item.price}</h4>
        {/* <Button
          as={Link}
          href={item.link}
          className="w-fit mx-auto mt-5 bg-white hover:bg-dark text-ld font-semibold hover:text-white shadow-sm py-1 px-1 dark:bg-darkgray dark:hover:bg-dark"
          size="xs"
        >
          View Details
        </Button> */}
      </div>
    </div>
  );
};

export default ColorBoxes;
