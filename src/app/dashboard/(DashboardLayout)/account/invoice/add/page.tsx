import GenerateInvoiceForm from "@/app/components/Forms/GenerateInvoiceForm";
import React from "react";
import BreadcrumbComp from "../../../layout/shared/breadcrumb/BreadcrumbComp";

const InvoiceCreate = () => {
  const BCrumb = [
    {
      to: "/dashboard/account/income",
      title: "Income",
    },
    {
      title: "Income Details",
    },
  ];
  return (
    <div>
      <BreadcrumbComp
        title="Invoice"
        items={BCrumb}
        image="/images/crumbs/invoice.svg"
      />
      <GenerateInvoiceForm />
    </div>
  );
};

export default InvoiceCreate;
