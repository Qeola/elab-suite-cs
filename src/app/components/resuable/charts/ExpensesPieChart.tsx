"use client";
import React from "react";
import dynamic from "next/dynamic";
import CardBox from "../../shared/CardBox";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

interface ChartProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any;
}

const ExpensesPieChart: React.FC<ChartProps> = ({ data }) => {
  return (
    <CardBox>
      <div className="grid grid-cols-12 gap-[30px]">
        {/* <div className="md:col-span-6 col-span-12">
          <TitleCard title="Donut Chart">
            <Chart
              options={ChartData1}
              series={ChartData1.series}
              type="donut"
              height="300px"
              width="100%"
            />
          </TitleCard>
        </div> */}
        <div className="col-span-12">
          <Chart
            options={data}
            series={data.series}
            type="pie"
            height="300px"
            width="100%"
          />
        </div>
      </div>
    </CardBox>
  );
};

export default ExpensesPieChart;
