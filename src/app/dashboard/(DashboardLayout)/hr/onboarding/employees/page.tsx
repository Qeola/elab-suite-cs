"use client";
import React, { useEffect, useState } from "react";
import BreadcrumbComp from "../../../layout/shared/breadcrumb/BreadcrumbComp";
import CardBox from "@/app/components/shared/CardBox";
import EmployeePaginationTable from "@/app/components/tables/EmployeeTable";
import { employees } from "@/app/context/invoices";
import LinkButton from "@/app/components/resuable/button/LinkButton";
import SearchBar from "@/app/components/resuable/SearchBar";

const OnboardingEmployee = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredEmployees, setFilteredEmployees] = useState(employees);

  useEffect(() => {
    const filtered = employees.filter((employee) =>
      [
        employee.first_name,
        employee.last_name,
        employee.department,
        employee.email,
      ].some((field) => field.toLowerCase().includes(searchTerm.toLowerCase())),
    );
    setFilteredEmployees(filtered);
  }, [searchTerm, employees]);

  const BCrumb = [
    {
      to: "/dashboard/hr/onboarding/employees",
      title: "Employee",
    },
    {
      title: `Employee Details`,
    },
  ];

  return (
    <div>
      <BreadcrumbComp
        title="Employee"
        items={BCrumb}
        image={"/images/crumbs/employee.svg"}
      />
      <CardBox>
        <div className="sm:flex items-center justify-between mb-4">
          <div className="w-full max-w-md">
            <SearchBar onSearchChange={setSearchTerm} />
          </div>
          <div className="mt-2 sm:mt-0">
            <LinkButton link="/dashboard/hr/onboarding/employees/add">
              Add Employee
            </LinkButton>
          </div>
        </div>
        <EmployeePaginationTable tableData={filteredEmployees} />
      </CardBox>
    </div>
  );
};

export default OnboardingEmployee;
