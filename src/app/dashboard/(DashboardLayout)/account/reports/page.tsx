"use client";
import ExpensesPieChart from "@/app/components/resuable/charts/ExpensesPieChart";
import CardBox from "@/app/components/shared/CardBox";
import {
  ChartData,
  ChartData3,
  ChartData4,
  report,
} from "@/app/context/invoices";
import React from "react";
import BreadcrumbComp from "../../layout/shared/breadcrumb/BreadcrumbComp";
import ReportTypeTable from "@/app/components/resuable/reports/ReportTypeTable";
import SessionBarChart from "@/app/components/resuable/charts/SessionBarChart";
import AmountCompo from "@/app/components/resuable/cards/AmountCompo";
import AreaChart from "@/app/components/resuable/charts/AreaChart";

const BCrumb = [
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
          <ReportTypeTable data={report} />
        </CardBox>
      </div>
      <div className="mt-9 grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-8">
          <CardBox>
            <SessionBarChart data={ChartData3} />
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              <div className="lg:col-span-3">
                <AmountCompo
                  icon="solar:pie-chart-2-linear"
                  amount={23450}
                  name="Total"
                  color="primary"
                />
              </div>
              <div className="lg:col-span-3">
                <AmountCompo
                  icon="solar:dollar-minimalistic-linear"
                  amount={23450}
                  name="Profit"
                  color="success"
                />
              </div>
              <div className="lg:col-span-3">
                <AmountCompo
                  icon="solar:database-linear"
                  amount={23450}
                  name="Income"
                  color="info"
                />
              </div>
              <div className="lg:col-span-3">
                <AmountCompo
                  icon="solar:pie-chart-2-linear"
                  amount={23450}
                  name="Expenses"
                  color="error"
                />
              </div>
            </div>
          </CardBox>
        </div>

        <div className="lg:col-span-4">
          <ExpensesPieChart data={ChartData} />
        </div>
        <div className="lg:col-span-12">
          <CardBox>
            <AreaChart data={ChartData4} />
          </CardBox>
        </div>
      </div>
    </div>
  );
};

export default Reports;
