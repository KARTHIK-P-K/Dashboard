import React from "react";
import DonutChart from "./DonutChart";

const TopProducts = () => {
  const data = {
    datasets: [
      {
        data: [55, 31, 14],
        backgroundColor: ["#98D89E", "#F6DC7D", "#EE8484"],
      },
    ],

    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: ["Basic Tees", "Custom Short Pants", "Super Hoodies"],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: 55,
    plugins: {
      legend: {
        display: false,
        // position: "left", // You can change the position (top, bottom, left, right)
      },
    },
  };
  return (
    <div className="w-full    h-full pt-7 px-10  rounded-xl bg-white shadow-xl  ">
      <div className="flex justify-between">
        <h1 className="font-bold">Top Products</h1>
        <p className="text-[858585] text-[12px]  ">August - Sempember 2023</p>
      </div>
      <div className="flex justify-between items-center">
        <div className="mt-6  " style={{ width: "150px", height: "150px" }}>
          <DonutChart chartData={data} options={options} />
        </div>
        <div className=" flex text-[10px] sm:text-[14px] flex-col justify-center w-full items-center ">
          <div>
            <div className="flex items-center gap-1 justify-around">
              <div className="w-2  h-2 rounded-full bg-[#98D89E]"></div>
              <h1 className="font-bold">Basic Tees</h1>
            </div>
            <p className="text-center text-[#858585]">55%</p>
          </div>
          <div>
            <div className="flex items-center gap-1 justify-between">
              <div className="w-2  h-2 rounded-full bg-[#F6DC7D]"></div>
              <h1 className="font-bold">Custom Short Pants</h1>
            </div>
            <p className="text-center text-[#858585]">31%</p>
          </div>
          <div>
            <div className="flex items-center gap-1 justify-between">
              <div className="w-2  h-2 rounded-full bg-[#EE8484]"></div>
              <h1 className="font-bold">Super Hoodies</h1>
            </div>
            <p className="text-center text-[#858585]">11%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopProducts;
