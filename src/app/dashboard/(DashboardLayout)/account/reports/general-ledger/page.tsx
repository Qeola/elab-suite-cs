"use client";
import CardBox from "@/app/components/shared/CardBox";
import { generalLedger } from "@/app/context/invoices";
import React from "react";
import BreadcrumbComp from "../../../layout/shared/breadcrumb/BreadcrumbComp";
import GeneralLedger from "@/app/components/tables/GeneralLedger";

const BCrumb = [
  {
    to: "/dashboard/account/reports",
    title: "Report",
  },
  {
    title: "General Ledger",
  },
];

const ReportLedger = () => {
  return (
    <div>
      <BreadcrumbComp
        title="Reports"
        items={BCrumb}
        image="/images/crumbs/report.svg"
      />
      <div className="mt-9">
        <CardBox>
          <GeneralLedger tableData={generalLedger} />
        </CardBox>
      </div>
    </div>
  );
};

export default ReportLedger;
