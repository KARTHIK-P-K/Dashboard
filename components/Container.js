"use client";

import React, { useState } from "react";
import { UserData } from "@/components/Data";
import BarChart from "./BarChart";

const Container = () => {
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.week),
    datasets: [
      {
        label: "Users Gained",
        data: UserData.map((data) => data.userGain),
        backgroundColor: ["#98D89E"],
        borderColor: "#98D89E",
        borderWidth: 1,
        borderRadius: 5,
        categoryPercetage: 100,
      },
      {
        label: "Users Lost",
        data: UserData.map((data) => data.userLost),
        backgroundColor: ["#EE8484"],
        borderColor: "#EE8484",
        borderWidth: 1,
        borderRadius: 5,
        categoryPercetage: 100,
      },
    ],
  });

  const [options, setOptions] = useState({
    scales: {
      maintainAspectRatio: false,
      x: {
        barThickness: 20, // Adjust the width of individual bars
        categorySpacing: 10, // Adjust the spacing between bars
      },
      y: {
        beginAtZero: true,
      },
    },
  });
  return (
    <div className="w-full   h-full pt-7 px-10  rounded-xl bg-white shadow-xl  ">
      <h1 className="font-bold"> Activities</h1>
      <p className="text-[#858585] text-[14px]">August-September 2023</p>
      <div className="" style={{ height: 350 }}>
        <BarChart chartData={userData} options={options} />
      </div>
    </div>
  );
};

export default Container;
