import React from "react";
import Image from "next/image";

const Money = ({ image, title, price, rate, color }) => {
  return (
    <div className="w-full  lg:w-[237px]  pt-5 px-6 h-[120px] rounded-xl bg-white shadow-xl border ">
      <Image
        src={image}
        alt={title}
        width={35}
        height={25}
        className={`rounded-full p-[6px] ${color}`}
      />
      <h1 className="font-[Lato] ">{title}</h1>
      <div className="flex gap-4 items-center justify-between">
        <p className="font-bold text-sm">{price}</p>
        <div className="text-center font-[Figtree] rounded-3xl px-2 py-1 text-[#3CC952] bg-[#E9F9EB]">
          {rate}
        </div>
      </div>
    </div>
  );
};

export default Money;
