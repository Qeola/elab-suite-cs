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
import BreadcrumbComp from "../../layout/shared/breadcrumb/BreadcrumbComp";

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

const BCrumb = [
  {
    to: "/dashboard/account/reports",
    title: "Report",
  },
  {
    title: "Financial Report",
  },
];

const Reports = () => {
  return (
    <div>
      <BreadcrumbComp
        title="Reports"
        items={BCrumb}
        image="/images/crumbs/report.svg"
      />
      <div className="mt-9">
        <CardBox>
          <ExpensesTable tableData={employees} />
        </CardBox>
      </div>
      <div className="mt-9 grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-8">
          <ExpensesCategoryChart data={ChartData2} />
        </div>

        <div className="lg:col-span-4">
          <ExpensesPieChart data={ChartData} />
        </div>
      </div>
    </div>
  );
};

export default Reports;
