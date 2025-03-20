"use client";
import CardBox from "@/app/components/shared/CardBox";
import { generalLedgerDetail } from "@/app/context/invoices";
import React from "react";
import BreadcrumbComp from "@/app/dashboard/(DashboardLayout)/layout/shared/breadcrumb/BreadcrumbComp";
import DetailGeneralLedger from "@/app/components/tables/DetailGeneralLedger";

const BCrumb = [
  {
    to: "/dashboard/account/reports",
    title: "Report",
  },
  {
    to: "/dashboard/account/reports/general-ledger",
    title: "General Ledger",
  },
  {
    title: "Detail",
  },
];

const ViewGeneralLedger = () => {
  return (
    <div>
      <BreadcrumbComp
        title="Reports"
        items={BCrumb}
        image="/images/crumbs/report.svg"
      />
      <div className="mt-9">
        <CardBox>
          <DetailGeneralLedger tableData={generalLedgerDetail} />
        </CardBox>
      </div>
    </div>
  );
};

export default ViewGeneralLedger;
