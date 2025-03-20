"use client";
import React from "react";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

interface AreaChartProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any;
}

const AreaChart: React.FC<AreaChartProps> = ({ data }) => {
  return (
    <div>
      <Chart
        options={data}
        series={data.series}
        type="area"
        height="300px"
        width="100%"
      />
    </div>
  );
};

export default AreaChart;
