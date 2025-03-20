"use client";
import React, { useState } from "react";
import CardBox from "../../components/shared/CardBox";
import PaginationTable from "../../components/tables/InvoicePagination";
import InvoiceHeaderCard from "../../components/resuable/cards/InvoiceHeaderCard";
import { invoices } from "../../context/invoices";
import BreadcrumbComp from "./layout/shared/breadcrumb/BreadcrumbComp";
import SearchBar from "@/app/components/resuable/SearchBar";

const Dashboard = () => {
  const BCrumb = [
    {
      to: "/dashboard/account/invoice",
      title: "Invoice",
    },
    {
      title: "See a list of all your invoice",
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
      <BreadcrumbComp
        title="Invoice"
        items={BCrumb}
        image="/images/crumbs/invoice.svg"
      />
      <CardBox>
        <h5 className="card-title mb-3">Sample Dashboard 1</h5>
        <SearchBar onSearchChange={setSearchTerm} />
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

        <PaginationTable tableData={filteredInvoices} />
      </CardBox>
    </>
  );
};

export default Dashboard;
