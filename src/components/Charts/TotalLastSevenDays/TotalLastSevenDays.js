import React from "react";
import { Line } from "react-chartjs-2";

const data = {
  labels: ["1", "2", "3", "4", "5", "6"],
  datasets: [
    {
      label: "n plays",
      data: [500000, 502000, 505000, 526000, 535000, 545000, 559000],
      fill: false,
      backgroundColor: "#ffc107",
      borderColor: "#ffc107",
    },
  ],
};

const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};

export default function TotalLastSevenDays() {
  return <Line data={data} options={options} />;
}
