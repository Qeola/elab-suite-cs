"use client";
import React, { useState } from "react";
import CardBox from "../../../components/shared/CardBox";
import InvoicePaginationTable from "../../../components/tables/InvoicePagination";
import InvoiceHeaderCard from "../../../components/resuable/cards/InvoiceHeaderCard";
import { invoices } from "../../../context/invoices";
import BreadcrumbComp from "../layout/shared/breadcrumb/BreadcrumbComp";
import SearchBar from "@/app/components/resuable/SearchBar";
import LinkButton from "@/app/components/resuable/button/LinkButton";

const Invoice = () => {
  const BCrumb = [
    {
      title: "Generate Invoice",
    },
  ];
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("All");

  const handleTabClick = (tabName: string) => {
    setActiveTab(tabName);
  };

  // Search invoice
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const filteredInvoices = invoices.filter((invoice: any) => {
    return (
      (invoice.customer_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        invoice.product_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        invoice.handle.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (activeTab === "All" || invoice.status === activeTab.toLowerCase())
    );
  });

  // Calculate the counts for different statuses
  const Shipped = invoices.filter(
    (t: { status: string }) => t.status === "shipped",
  ).length;
  const Paid = invoices.filter(
    (t: { status: string }) => t.status === "paid",
  ).length;
  const Pending = invoices.filter(
    (t: { status: string }) => t.status === "pending",
  ).length;
  return (
    <>
      <BreadcrumbComp title="Invoice" items={BCrumb} />
      <CardBox>
        <h5 className="card-title mb-3">Sample page 1</h5>
        <div className="sm:flex items-center justify-between mb-4">
          <div className="w-full max-w-md">
            <SearchBar onSearchChange={setSearchTerm} />
          </div>
          <div className="mt-2 sm:mt-0">
            <LinkButton link="/dashboard/invoice/add">
              Generate Invoice
            </LinkButton>
          </div>
        </div>
        <div className="flex justify-between overflow-x-auto mb-8 gap-6 ">
          <InvoiceHeaderCard
            activeTab={activeTab}
            handleTabClick={handleTabClick}
            icon="solar:tag-horizontal-broken"
            color="primary"
            invoice={invoices.length}
            type="All"
            amount={2634}
          />
          <InvoiceHeaderCard
            activeTab={activeTab}
            handleTabClick={handleTabClick}
            icon="solar:map-point-wave-linear"
            color="success"
            invoice={Paid}
            type="Paid"
            amount={8370}
          />
          <InvoiceHeaderCard
            activeTab={activeTab}
            handleTabClick={handleTabClick}
            icon="solar:map-point-wave-linear"
            color="success"
            invoice={Shipped}
            type="Shipped"
            amount={8370}
          />
          <InvoiceHeaderCard
            activeTab={activeTab}
            handleTabClick={handleTabClick}
            icon="solar:camera-rotate-broken"
            color="warning"
            invoice={Pending}
            type="Pending"
            amount={234}
          />
        </div>

        <InvoicePaginationTable tableData={filteredInvoices} />
      </CardBox>
    </>
  );
};

export default Invoice;
