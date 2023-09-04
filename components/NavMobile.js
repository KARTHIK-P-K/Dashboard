"use client";

import React from "react";
import { FiX } from "react-icons/fi";
import Link from "next/link";
import Image from "next/image";
import schedules from "@/images/schedules.svg";
import dash from "@/images/dash.svg";
import transaction from "@/images/transaction.svg";
import settings from "@/images/settings.svg";
import users from "@/images/users.svg";

const NavMobile = ({ setCatNavMobile }) => {
  const data = [
    {
      icon: dash,
      title: "Dashboard",
    },
    {
      icon: transaction,
      title: "Transaction",
    },
    {
      icon: schedules,
      title: "Schedules",
    },
    {
      icon: users,
      title: "Users",
    },
    {
      icon: settings,
      title: "Settings",
    },
  ];
  const divStyle = {
    background: "linear-gradient(180deg, #4285F4 0%, #3C83F9 100%)",
  };
  return (
    <div
      className="absolute top-0 right-0 w-[300px] h-full overflow-hidden p-10   text-white "
      style={divStyle}
    >
      <div
        className="flex justify-end mb-8 cursor-pointer"
        onClick={() => setCatNavMobile(false)}
      >
        <FiX className="text-3xl" />
      </div>
      <div className="flex flex-col gap-y-8 ">
        {data.map((category) => (
          <div className=" flex gap-4">
            <Image src={category.icon} alt="icons" width={18} height={18} />
            {/* {category.icon} */}
            {category.title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default NavMobile;
