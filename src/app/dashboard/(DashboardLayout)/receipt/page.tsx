"use client";
import React, { useState } from "react";
import CardBox from "../../../components/shared/CardBox";
import { receipt } from "../../../context/invoices";
import BreadcrumbComp from "../layout/shared/breadcrumb/BreadcrumbComp";
import SearchBar from "@/app/components/resuable/SearchBar";
import LinkButton from "@/app/components/resuable/button/LinkButton";
import ReceiptPaginationTable from "@/app/components/tables/ReceiptTable";

const Receipt = () => {
  const BCrumb = [
    {
      title: "Receipt",
    },
  ];
  const [searchTerm, setSearchTerm] = useState("");

  // Search invoice
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const filteredInvoices = receipt.filter((receipt: any) => {
    return (
      receipt.customer_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      receipt.product_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      receipt.handle.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });
  return (
    <>
      <BreadcrumbComp title="Receipt" items={BCrumb} />
      <CardBox>
        {/* <h5 className="card-title mb-3">Sample page 1</h5> */}
        <div className="sm:flex items-center justify-between mb-4">
          <div className="w-full max-w-md">
            <SearchBar onSearchChange={setSearchTerm} />
          </div>
          <div className="mt-2 sm:mt-0">
            <LinkButton link="/dashboard/invoice/add">
              Generate Receipt
            </LinkButton>
          </div>
        </div>

        <ReceiptPaginationTable tableData={filteredInvoices} />
      </CardBox>
    </>
  );
};

export default Receipt;
