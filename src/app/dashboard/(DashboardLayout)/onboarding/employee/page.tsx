import React from "react";
import BreadcrumbComp from "../../layout/shared/breadcrumb/BreadcrumbComp";
import CardBox from "@/app/components/shared/CardBox";
import EmployeePaginationTable from "@/app/components/tables/EmployeeTable";
import { employees } from "@/app/context/invoices";

const OnboardingEmployee = () => {
  const BCrumb = [
    {
      button: "/dashboard/onboarding/employee/add",
      title: "Invite Employee",
    },
  ];
  return (
    <div>
      <BreadcrumbComp title="Employee" items={BCrumb} />
      <CardBox>
        <EmployeePaginationTable tableData={employees} />
      </CardBox>
    </div>
  );
};

export default OnboardingEmployee;
