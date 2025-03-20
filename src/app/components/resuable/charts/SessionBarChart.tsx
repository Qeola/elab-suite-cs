"use client";
import React from "react";
import dynamic from "next/dynamic";
import CardBox from "../../shared/CardBox";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

interface ChartProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any;
}

const SessionBarChart: React.FC<ChartProps> = ({ data }) => {
  return (
    <>
      <div className="rounded-bars">
        <Chart
          options={data}
          series={data.series}
          type="bar"
          height="295px"
          width="100%"
        />
      </div>
    </>
  );
};

export default SessionBarChart;
