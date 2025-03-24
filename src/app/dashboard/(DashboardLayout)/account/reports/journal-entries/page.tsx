"use client";
import CardBox from "@/app/components/shared/CardBox";
import { journalEntries } from "@/app/context/invoices";
import React from "react";
import BreadcrumbComp from "../../../layout/shared/breadcrumb/BreadcrumbComp";
import JournalEntriesTable from "@/app/components/tables/JournalEntries";

const BCrumb = [
  {
    to: "/dashboard/account/reports",
    title: "Report",
  },
  {
    title: "Journal Entries",
  },
];

const JournalEntries = () => {
  return (
    <div>
      <BreadcrumbComp
        title="Reports"
        items={BCrumb}
        image="/images/crumbs/report.svg"
      />
      <div className="mt-9">
        <CardBox>
          <JournalEntriesTable tableData={journalEntries} />
        </CardBox>
      </div>
    </div>
  );
};

export default JournalEntries;
