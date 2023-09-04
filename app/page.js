"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import DashboardLeft from "@/components/DashboardLeft";
import search from "@/images/search.svg";
import vector from "@/images/vector.svg";
import Money from "@/components/Money";
import FirstIcon from "@/images/FistIcon.svg";
import SecondIcon from "@/images/SecondIcon.svg";
import ThirdIcon from "@/images/ThirdIcon.svg";
import FourthIcon from "@/images/FourthIcon.svg";
import Container from "@/components/Container";
import TopProducts from "@/components/TopProducts";
import AddProfile from "@/components/AddProfile";
import { AiOutlineMenu } from "react-icons/ai";
import NavMobile from "@/components/NavMobile";
import Profile from "@/components/Profile";

export default function Home() {
  const [catNavMobile, setCatNavMobile] = useState(false);
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: 0,
    insta: "",
    youtube: "",
  });

  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const { data: session } = useSession();
  // useEffect(() => {
  //   if (!(session && session.user)) {
  //     router.push("/login");
  //   }
  // }, [session, router]);

  return (
    <div className="relative">
      {/* desktop view */}
      {isOpen && (
        <Profile setIsOpen={setIsOpen} setUser={setUser} user={user} />
      )}
      <div className="hidden p-10 lg:grid grid-cols-4 lg:gap-[150px] 2xl:gap-4">
        <div className="col-span-1">
          <DashboardLeft />
        </div>
        <div className="col-span-3 grid font-[Montserrat] grid-rows-12 gap-6">
          <div className="flex row-span-1 justify-around  xl:justify-between  items-center ">
            <div className="font-bold text-[24px]">Dashboard</div>
            <div className="flex  gap-8 items-center">
              <div className="relative">
                <input
                  type="text"
                  className="w-[200px]  p-2 rounded-lg h-[33px] border "
                  placeholder="search..."
                />
                <Image
                  className="absolute top-3 right-3"
                  src={search}
                  alt="search"
                  width={12}
                  height={12}
                />
              </div>
              <Image src={vector} alt="vector" width={18} height={20} />
              {session?.user?.image && (
                <img
                  src={session.user.image}
                  className="w-[30px] h-[30px] rounded-full cursor-pointer"
                  onClick={() => signOut()}
                />
              )}
            </div>
          </div>
          <div className="grid lg:grid-cols-2  row-span-2 2xl:grid-cols-4 gap-2  ">
            <Money
              image={FirstIcon}
              title="Total Revenue"
              price="$2,129,430"
              rate="+2.5%"
              color="bg-[#7FCD93]"
            />
            <Money
              image={SecondIcon}
              title="Total Transaction"
              price="1,150"
              rate="+1.7%"
              color="bg-[#DEBF85]"
            />
            <Money
              image={ThirdIcon}
              title="Total Likes"
              price="9,721"
              rate="+2.7%"
              color="bg-[#ECA4A4]"
            />
            <Money
              image={FourthIcon}
              title="Total Users"
              price="9,721"
              rate="+4.2%"
              color="bg-[#A9B0E5]"
            />
          </div>
          <div className="row-span-5 h-[440px] ">
            <Container />
          </div>

          <div className="grid  mx-auto 2xl:mx-0  grid-cols-1   2xl:grid-cols-2  gap-4 row-span-4 ">
            <div className=" w-[480px] h-[256px]">
              <TopProducts />
            </div>
            <div
              className=" w-[480px] h-[256px]"
              onClick={() => setIsOpen(true)}
            >
              <AddProfile user={user} />
            </div>
          </div>
        </div>
      </div>
      {/* Mobile view */}
      <div className="lg:hidden ">
        {catNavMobile && <NavMobile setCatNavMobile={setCatNavMobile} />}
        <div className="flex  justify-between bg-blue-50  h-[100px]  items-center px-4">
          <div className="font-bold text-[24px]">Board.</div>
          <div className="flex  gap-3 items-center">
            <Image src={vector} alt="vector" width={18} height={20} />
            {session?.user?.image && (
              <img
                src={session.user.image}
                className="w-[30px] h-[30px] rounded-full cursor-pointer"
                onClick={() => signOut()}
              />
            )}
            <AiOutlineMenu
              className="w-6 h-6 cursor-pointer"
              onClick={() => setCatNavMobile(true)}
            />
          </div>
        </div>
        <div className=" grid grid-cols-2  mt-10 gap-4 justify-center px-4">
          <Money
            image={FirstIcon}
            title="Total Revenue"
            price="$2,129,430"
            rate="+2.5%"
            color="bg-[#7FCD93]"
          />
          <Money
            image={SecondIcon}
            title="Total Transaction"
            price="1,150"
            rate="+1.7%"
            color="bg-[#DEBF85]"
          />
          <Money
            image={ThirdIcon}
            title="Total Likes"
            price="9,721"
            rate="+2.7%"
            color="bg-[#ECA4A4]"
          />
          <Money
            image={FourthIcon}
            title="Total Users"
            price="9,721"
            rate="+4.2%"
            color="bg-[#A9B0E5]"
          />
        </div>
        <div className="row-span-5 h-[330px]   sm:h-[440px] px-4 mt-10">
          <Container />
        </div>
        <div className="grid my-10 mx-auto 2xl:mx-0   grid-cols-1 px-4   2xl:grid-cols-2  gap-4 row-span-4 ">
          <div className="w-full lg:w-[480px] h-[256px]">
            <TopProducts />
          </div>
          <div
            className="w-full lg:w-[480px] h-[256px]"
            onClick={() => setIsOpen(true)}
          >
            <AddProfile user={user} />
          </div>
        </div>
      </div>
    </div>
  );
}
