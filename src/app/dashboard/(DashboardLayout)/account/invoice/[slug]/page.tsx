import InvoiceCardDetails from "@/app/components/resuable/cards/PDFInvoiceCard";
import React from "react";
import BreadcrumbComp from "../../../layout/shared/breadcrumb/BreadcrumbComp";

const InvoiceView = () => {
  const BCrumb = [
    {
      to: "/dashboard/account/invoice",
      title: "Invoice",
    },
    {
      title: "See a list of all your invoice",
    },
  ];
  return (
    <div>
      <BreadcrumbComp
        title="Invoice"
        items={BCrumb}
        image="/images/crumbs/invoice.svg"
      />
      {/* <InvoiceCardDetail /> */}
      <InvoiceCardDetails />
    </div>
  );
};

export default InvoiceView;
