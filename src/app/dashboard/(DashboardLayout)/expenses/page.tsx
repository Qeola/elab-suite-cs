import ColorBoxes from "@/app/components/resuable/cards/expenses/ColorBoxes";
import React from "react";

const ColorboxData = [
  {
    bg: "primary-gradient",
    icon: "solar:dollar-minimalistic-linear",
    color: "bg-primary",
    title: "Total Orders",
    price: "16,689",
    link: "#",
  },
  {
    bg: "warning-gradient",
    icon: "solar:recive-twice-square-linear",
    color: "bg-warning",
    title: "Return Item",
    price: "148",
    link: "#",
  },
  {
    bg: "secondary-gradient",
    icon: "ic:outline-backpack",
    color: "bg-secondary",
    title: "Annual Budget",
    price: "$156K",
    link: "#",
  },
  {
    bg: "error-gradient",
    icon: "ic:baseline-sync-problem",
    color: "bg-error",
    title: "Cancel Orders",
    price: "64",
    link: "#",
  },
  {
    bg: "success-gradient",
    icon: "ic:outline-forest",
    color: "bg-success",
    title: "Total Income ",
    price: "$36,715",
    link: "#",
  },
];

const page = () => {
  return (
    <div>
      <ColorBoxes item={ColorboxData[0]} />
    </div>
  );
};

export default page;
