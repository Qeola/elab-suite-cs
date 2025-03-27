"use client";
import React from "react";
import dynamic from "next/dynamic";
import CardBox from "../../shared/CardBox";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

interface ChartProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any;
  title: string;
}

const ExpensesCategoryChart: React.FC<ChartProps> = ({ data, title }) => {
  return (
    <CardBox>
      <h2 className="font-bold mb-3 text-xl">{title}</h2>
      <Chart
        options={data}
        series={data.series}
        type="bar"
        height="300px"
        width="100%"
      />
    </CardBox>
  );
};

export default ExpensesCategoryChart;
