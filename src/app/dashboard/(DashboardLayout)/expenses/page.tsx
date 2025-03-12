"use client";
import LinkButton from "@/app/components/resuable/button/LinkButton";
import ColorBoxes from "@/app/components/resuable/cards/expenses/ColorBoxes";
import ExpensesCategoryChart from "@/app/components/resuable/charts/ExpensesCategoryChart";
import ExpensesPieChart from "@/app/components/resuable/charts/ExpensesPieChart";
import SearchBar from "@/app/components/resuable/SearchBar";
import CardBox from "@/app/components/shared/CardBox";
import ExpensesTable from "@/app/components/tables/ExpensesTable";
import { ChartData, ChartData2, employees } from "@/app/context/invoices";
import React, { useEffect, useState } from "react";

const ColorboxData = [
  {
    bg: "primary-gradient",
    icon: "solar:dollar-minimalistic-linear",
    color: "bg-primary",
    title: "Total Orders",
    price: "16,689",
    link: "#",
  },
  {
    bg: "warning-gradient",
    icon: "solar:recive-twice-square-linear",
    color: "bg-warning",
    title: "Return Item",
    price: "148",
    link: "#",
  },
  {
    bg: "secondary-gradient",
    icon: "ic:outline-backpack",
    color: "bg-secondary",
    title: "Annual Budget",
    price: "$156K",
    link: "#",
  },
  {
    bg: "error-gradient",
    icon: "ic:baseline-sync-problem",
    color: "bg-error",
    title: "Cancel Orders",
    price: "64",
    link: "#",
  },
  {
    bg: "success-gradient",
    icon: "ic:outline-forest",
    color: "bg-success",
    title: "Total Income ",
    price: "$36,715",
    link: "#",
  },
];

const page = () => {
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
  return (
    <div>
      <CardBox>
        <div className="grid grid-cols-12 gap-6">
          <div className="lg:col-span-3 md:col-span-5 col-span-12">
            <ColorBoxes item={ColorboxData[0]} />
          </div>
          <div className="lg:col-span-3 md:col-span-5 col-span-12">
            <ColorBoxes item={ColorboxData[1]} />
          </div>
          <div className="lg:col-span-3 md:col-span-5 col-span-12">
            <ColorBoxes item={ColorboxData[2]} />
          </div>
        </div>
      </CardBox>
      <div className="mt-9">
        <CardBox>
          <div className="sm:flex items-center justify-between mb-4">
            <div className="w-full max-w-md">
              <SearchBar onSearchChange={setSearchTerm} />
            </div>
            <div className="mt-2 sm:mt-0">
              <LinkButton link="/dashboard/expenses/add">
                Add Expense
              </LinkButton>
            </div>
          </div>
          <ExpensesTable tableData={filteredEmployees} />
        </CardBox>
      </div>
      <div className="mt-9">
        <ExpensesCategoryChart data={ChartData2} />
      </div>
      <div className="mt-9">
        <ExpensesPieChart data={ChartData} />
      </div>
    </div>
  );
};

export default page;
