import React from "react";
import Discord from "@/images/discord.svg";
import Github from "@/images/github.svg";
import Linkedin from "@/images/linkedin.svg";
import Twitter from "@/images/twitter.svg";
import Image from "next/image";

const Footer = () => {
  return (
    <div className=" w-full bg-[#4285F4] flex flex-row  items-center  mt-20 p-4 justify-center gap-8">
      <Image src={Github} alt="" className="relative  w-8 h-8" />
      <Image src={Twitter} alt="" className="relative w-8 h-8" />
      <Image src={Linkedin} alt="" className="relative w-8 h-8" />
      <Image src={Discord} alt="" className="relative w-11 h-11" />
    </div>
  );
};

export default Footer;
