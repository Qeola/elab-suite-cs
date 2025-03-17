import ViewReceiptCard from "@/app/components/resuable/cards/ViewReceiptCard";
import React from "react";
import BreadcrumbComp from "../../../layout/shared/breadcrumb/BreadcrumbComp";

const ReceiptView = () => {
  const BCrumb = [
    {
      to: "/dashboard/account/receipt",
      title: "Receipt",
    },
    {
      title: "See a list of all your receipt",
    },
  ];
  return (
    <div>
      <BreadcrumbComp
        title="Receipt"
        items={BCrumb}
        image="/images/crumbs/receipt.svg"
      />
      <ViewReceiptCard />
    </div>
  );
};

export default ReceiptView;
