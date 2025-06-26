"use client";
import React from "react";
import Chart from "react-apexcharts";

function PriceChart(props: any) {
  const { apiData } = props;
 const extractClosePrices = (monthlyData: Record<string, any>) => {
  const entries = Object.entries(monthlyData)
    .sort((a, b) => new Date(a[0]).getTime() - new Date(b[0]).getTime()); // oldest to newest

  const categories = entries.map(([date]) => date).slice(0,10);
  const series = entries.map(([, value]) => parseFloat(value["4. close"])).slice(0,10);

  return { categories, series };
};
const { series, categories } = extractClosePrices(apiData);

  const data: any = {
    series: [
      {
        name: "Close Price",
        data: series,
      },
    ],
    options: {
      chart: {
        type: "bar",
        stacked: true,
      },
      plotOptions: {
        bar: {
          borderRadius: 4,
          columnWidth: "35%",
          distributed: true,
        },
      },
      dataLabels: {
        enabled: false,
      },
      colors: ["#7A5AF8", "#F28FA1", "#CBDF46", "#CDA7FF", "#F4C974"],
      xaxis: {
        categories: categories,
        labels: {
          style: {
            colors: "#565666",
          },
        },
      },
      yaxis: {
        labels: {
          style: {
            fontSize: 14,
            colors: "#565666",
          },
        },
      },
      legend: { show: false },
      responsive: [
        {
          breakpoint: 768,
          options: {
            chart: { width: "100%" },
          },
        },
      ],
    },
  };
  return (
    <div className="border rounded-md p-4 w-full">
      <h3 className="font-semibold mb-2">Historical Price Trends</h3>
      <div className="w-full h-auto bg-gray-100 flex items-center justify-center text-sm text-gray-400">
        <Chart
          options={data.options}
          series={data.series}
          type="bar"
          height={200}
          width="300%"
        />
      </div>
    </div>
  );
}

export default PriceChart;
