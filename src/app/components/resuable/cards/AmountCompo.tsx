import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";

interface AmountCompoProps {
  name: string;
  amount: number;
  icon: string;
  color: string;
}

const AmountCompo: React.FC<AmountCompoProps> = ({
  name,
  amount,
  icon,
  color,
}) => {
  return (
    <div>
      <div className="md:basis-1/3 basis-full">
        <div className="flex gap-3 items-center">
          <span
            className={`h-12 w-12 flex-shrink-0 flex items-center justify-center bg-light${color} rounded-tw`}
          >
            <Icon icon={icon} className={`text-${color}`} height={24} />
          </span>
          <div>
            <p>{name}</p>
            <h5 className="font-medium text-lg">{amount}</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AmountCompo;
