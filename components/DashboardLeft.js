import React from "react";
import Image from "next/image";
import schedules from "@/images/schedules.svg";
import dash from "@/images/dash.svg";
import transaction from "@/images/transaction.svg";
import settings from "@/images/settings.svg";
import users from "@/images/users.svg";

const DashboardLeft = () => {
  return (
    <div className="border flex flex-col items-between justify-between h-full w-[240px] py-[60px] text-white  rounded-[20px]  bg-gradient-to-r from-blue-500 to-blue-600">
      <div className="flex flex-col ">
        <h1 className="text-[36px] pl-[50px] font-[Montserrat] font-bold">
          Board.
        </h1>
        <div className="flex flex-col pl-[50px] gap-8 mt-10">
          <div className="flex gap-3 ">
            <Image src={dash} alt="dashboard" width={18} height={18} />
            <p className="font-bold">Dashboard</p>
          </div>
          <div className="flex gap-3 ">
            <Image src={transaction} alt="Tarsactions" width={18} height={18} />
            <p>Transactions</p>
          </div>
          <div className="flex gap-3 ">
            <Image src={schedules} alt="schedules" width={18} height={18} />
            <p>Schedules</p>
          </div>
          <div className="flex gap-3 ">
            <Image src={users} alt="Users" width={18} height={18} />
            <p>Users</p>
          </div>
          <div className="flex gap-3 ">
            <Image src={settings} alt="settings" width={18} height={18} />
            <p>Settings</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col text-[12px] text-white mt-96 gap-2 pl-[50px]">
        <h1>Help</h1>
        <h1>Contact us</h1>
      </div>
    </div>
  );
};

export default DashboardLeft;
