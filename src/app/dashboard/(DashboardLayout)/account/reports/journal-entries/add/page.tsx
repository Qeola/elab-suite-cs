import JournalEntriesForm from "@/app/components/Forms/JournalEntries";
import CardBox from "@/app/components/shared/CardBox";
import BreadcrumbComp from "@/app/dashboard/(DashboardLayout)/layout/shared/breadcrumb/BreadcrumbComp";
import React from "react";

const BCrumb = [
  {
    to: "/dashboard/account/reports",
    title: "Report",
  },
  {
    to: "/dashboard/account/reports/trial-balance",
    title: "Journal Entries",
  },
  {
    title: "Add Journal Entries",
  },
];

const AddJournalEntries = () => {
  return (
    <div>
      <BreadcrumbComp
        title="Reports"
        items={BCrumb}
        image="/images/crumbs/report.svg"
      />
      <div className="mt-9">
        <CardBox>
          <JournalEntriesForm />
        </CardBox>
      </div>
    </div>
  );
};

export default AddJournalEntries;
