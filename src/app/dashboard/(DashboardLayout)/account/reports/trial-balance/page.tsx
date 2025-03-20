"use client";
import CardBox from "@/app/components/shared/CardBox";
import { generalLedger } from "@/app/context/invoices";
import React from "react";
import BreadcrumbComp from "../../../layout/shared/breadcrumb/BreadcrumbComp";
import TrialBalance from "@/app/components/tables/TrialBalance";

const BCrumb = [
  {
    to: "/dashboard/account/reports",
    title: "Report",
  },
  {
    title: "Trial Balance",
  },
];

const TrialBalancePage = () => {
  return (
    <div>
      <BreadcrumbComp
        title="Reports"
        items={BCrumb}
        image="/images/crumbs/report.svg"
      />
      <div className="mt-9">
        <CardBox>
          <TrialBalance tableData={generalLedger} />
        </CardBox>
      </div>
    </div>
  );
};

export default TrialBalancePage;
