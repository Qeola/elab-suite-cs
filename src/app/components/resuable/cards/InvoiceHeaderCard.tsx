import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";

const InvoiceHeaderCard = ({
  activeTab,
  handleTabClick,
  invoice,
  icon,
  type,
  color,
  amount,
  className,
}: {
  activeTab: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  handleTabClick: any;
  invoice: number;
  icon: string;
  type: string;
  color: string;
  amount: number;
  className?: string;
}) => {
  return (
    <div
      className={`flex gap-3 items-center sm:w-3/12 w-full mb-2 cursor-pointer p-5 rounded-lg hover:bg-muted dark:hover:bg-darkmuted ${
        activeTab == type ? "bg-muted dark:bg-darkmuted" : null
      }   `}
      onClick={() => handleTabClick(type.toString())}
    >
      <div
        className={`h-14 w-14 rounded-full border-2 !border-${color} text-${color} flex justify-center items-center ${className}`}
      >
        <Icon icon={icon} height={25} />
      </div>
      <div>
        <h5 className="text-base">{type}</h5>
        <p className="text-ld opacity-80 block">{invoice} invoices</p>
        <h6 className="text-sm">{amount}</h6>
      </div>
    </div>
  );
};

export default InvoiceHeaderCard;
