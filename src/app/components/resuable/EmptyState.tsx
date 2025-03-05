import Image from "next/image";
import React, { FC } from "react";
import { Button } from "flowbite-react";

interface Props {
  text: string;
  title?: string;
  button?: string;
  link?: string;
}

const EmptyState: FC<Props> = ({ text, title, button, link }) => {
  return (
    <div className="flex flex-col items-center justify-center text-center py-4 px-2">
      <Image
        src="/icons/empty-state.svg"
        width={115}
        height={70}
        alt="Empty state image"
        className="object-cover"
      />
      {title && <h6 className="text-lg font-semibold mt-2 mb-1">{title}</h6>}
      <p className="text-gray-500 mb-2">{text}</p>
      {button && link && (
        <Button href={link} color="blue" className="mt-2">
          {button}
        </Button>
      )}
    </div>
  );
};

export default EmptyState;
