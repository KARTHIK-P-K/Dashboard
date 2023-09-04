import React from "react";
import Image from "next/image";
import add from "@/images/add.svg";
import whatsapp from "@/images/whatsapp.svg";
import mail from "@/images/mail.svg";
import youtube from "@/images/youtube.svg";
import insta from "@/images/insta.svg";

const AddProfile = ({ user }) => {
  return (
    <div className="w-full gap-4 flex flex-col justify-center items-center  h-full pt-7 px-10  rounded-xl bg-white shadow-xl  ">
      {!(user?.name && user?.email && user?.phone) && (
        <Image
          className="rounded-full border bg-white cursor-pointer"
          src={add}
          alt="add "
          width={51}
          height={51}
        />
      )}
      {!(user?.name && user?.email && user?.phone) && (
        <p className="text-[858585] text-[16px]">Add Profile</p>
      )}
      {user?.name && user?.email && user?.phone && (
        <div>
          <h1 className="font-bold mb-10 text-[24px]">{user?.name}</h1>
          <div className="flex gap-10">
            <div className="flex flex-col gap-6">
              <div className="flex gap-4">
                <Image src={whatsapp} alt="whatsapp" width={17} height={17} />
                <p className="underline">{user?.phone}</p>
              </div>
              <div className="flex gap-4">
                <Image src={mail} alt="mail" width={24} height={24} />
                <p className="underline">{user?.email}</p>
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <div className="flex gap-4">
                <Image src={insta} alt="insta" width={18} height={18} />
                <p className="underline">{user?.insta}</p>
              </div>
              <div className="flex gap-4 ">
                <Image src={youtube} alt="youtube" width={17} height={17} />
                <p className="underline">{user?.youtube}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddProfile;
