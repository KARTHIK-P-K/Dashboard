import React from "react";
import Image from "next/image";
import LeftSide from "@/images/left-side.svg";
import Discord from "@/images/discord.svg";
import Github from "@/images/Github.svg";
import Linkedin from "@/images/Linkedin.svg";
import Twitter from "@/images/Twitter.svg";

const LeftSection = () => {
  return (
    <div className="relative w-[500px] xl:w-[720px]">
      <Image
        src={LeftSide}
        className=" relative w-full  overflow-hidden  "
        alt="Left side"
      />
      <p className="absolute top-10 left-10 text-[24px] text-white font-[poppins]">
        LOGO
      </p>
      <b className="absolute font-[Montserrat] top-[40%] left-24 xl:left-44 2xl:left-48 text-[54px] xl:text-[72px] text-white">
        Board.
      </b>

      <div className="absolute bottom-10 left-10 xl:left-36 w-[299px] flex flex-row items-center justify-between">
        <Image
          src={Github}
          alt=""
          className="relative w-8 h-8  xl:w-11 xl:h-11"
        />
        <Image
          src={Twitter}
          alt=""
          className="relative w-8 h-8  xl:w-11 xl:h-11"
        />
        <Image
          src={Linkedin}
          alt=""
          className="relative w-8 h-8  xl:w-11 xl:h-11"
        />
        <Image
          src={Discord}
          alt=""
          className="relative w-11 h-11 xl:w-14 xl:h-14"
        />
      </div>
    </div>
  );
};

export default LeftSection;
