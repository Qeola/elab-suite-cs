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
import FunctionButton from "@/app/components/resuable/button/FunctionButton";
import FileUploadModal from "@/app/components/modals/FileUploadModal";

const ColorboxData = [
  {
    bg: "primary-gradient",
    icon: "healthicons:low-income-level-outline",
    color: "bg-primary",
    title: "Total Income",
    price: "16,689",
    link: "#",
  },
  {
    bg: "warning-gradient",
    icon: "solar:dollar-minimalistic-linear",
    color: "bg-warning",
    title: "Monthly Revenue",
    price: "148",
    link: "#",
  },
  {
    bg: "secondary-gradient",
    icon: "ic:outline-backpack",
    color: "bg-secondary",
    title: "Outstanding Payment",
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
    to: "/dashboard/account/income",
    title: "Income",
  },
  {
    title: "Income Details",
  },
];

const Income = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredExpenses, setFilteredExpenses] = useState(employees);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    const filtered = employees.filter((expense) =>
      [
        expense.first_name,
        expense.last_name,
        expense.department,
        expense.email,
      ].some((field) => field.toLowerCase().includes(searchTerm.toLowerCase())),
    );
    setFilteredExpenses(filtered);
  }, [searchTerm, employees]);

  // const handleDeleteClick = (slug: string) => {
  //   console.log("working...", slug);
  //   setOpenModal(true);
  // };
  const confirmDelete = () => {
    setOpenModal(false);
  };
  return (
    <div>
      <BreadcrumbComp
        title="Income"
        items={BCrumb}
        image="/images/crumbs/income.svg"
      />
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
      {/* <CardBox>
      </CardBox> */}
      <div className="mt-9">
        <CardBox>
          <div className="sm:flex items-center justify-between mb-4">
            <div className="w-full max-w-md">
              <SearchBar onSearchChange={setSearchTerm} />
            </div>
            <div className="mt-2 sm:mt-0">
              <div className="flex gap-4 flex-nowrap">
                <div className="">
                  <FunctionButton
                    click={() => setOpenModal(true)}
                    variant="outlined"
                  >
                    Import Expense
                  </FunctionButton>
                </div>
                <div className="">
                  <LinkButton link="/dashboard/account/income/add">
                    Add Expense
                  </LinkButton>
                </div>
              </div>
            </div>
          </div>
          <ExpensesTable tableData={filteredExpenses} />
        </CardBox>
      </div>
      <div className="mt-9 grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-8">
          <ExpensesCategoryChart
            data={ChartData2}
            title="Income breakdown by account type"
          />
        </div>

        <div className="lg:col-span-4">
          <ExpensesPieChart
            data={ChartData}
            title="Income breakdown by month"
          />
        </div>
      </div>
      <FileUploadModal
        isOpen={openModal}
        onClose={() => setOpenModal(false)}
        onConfirm={confirmDelete}
        title="Income"
      />
    </div>
  );
};

export default Income;
