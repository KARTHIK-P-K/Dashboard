"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Google from "@/images/google.svg";
import Apple from "@/images/apple.svg";
import LeftSection from "@/components/LeftSide";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const Login = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  if (session && session.user) {
    router.push("/");
  }

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };
  const onSignin = async (e) => {
    e.preventDefault();
    alert("Sign In using Google");
  };

  useEffect(() => {
    const checkScreenWidth = () => {
      setIsLargeScreen(window.innerWidth >= 1024); // Adjust the breakpoint as needed
    };

    // Initial check on component mount
    checkScreenWidth();

    // Attach a listener for window resize events
    window.addEventListener("resize", checkScreenWidth);

    // Cleanup the listener on component unmount
    return () => {
      window.removeEventListener("resize", checkScreenWidth);
    };
  }, []);
  return (
    <div className="lg:flex lg:justify-between   w-full lg:overflow-hidden h-screen font-montserrat">
      {isLargeScreen && <LeftSection />}
      {!isLargeScreen && <Header />}
      <div className="w-full max-w-[500px] px-4 lg:p-0 lg:w-[425px] my-auto mx-auto  ">
        <div className=" flex flex-col gap-4">
          <h1 className="font-bold text-[36px] font-[Montserrat]">Sign In</h1>
          <p className="font-normal font-[Lato]">Sign In to your account</p>
          <div className="flex gap-4  text-[#858585] text-[12px] font-[Montserrat]">
            <div
              className="flex gap-2 bg-white p-2 rounded-[10px] cursor-pointer"
              onClick={() => signIn()}
            >
              <Image src={Google} alt="google" width={"13px"} height={"15px"} />
              <p>Sign In with Google</p>
            </div>
            <div
              className="flex gap-2 bg-white p-2 rounded-[10px]  cursor-pointer"
              onClick={() => alert("Sign In using Google")}
            >
              <Image src={Apple} alt="apple" width={"13px"} height={"15px"} />
              <p>Sign In with Apple</p>
            </div>
          </div>
          <div className=" rounded-xl font-[Lato] text-black bg-white py-[32px] p-4  flex flex-col">
            <form onSubmit={onSignin}>
              <div className="flex flex-col">
                <label htmlFor="email">Email address</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="johndoe@gmail.com"
                  className="bg-[#F5F5F5] my-[10px] p-3 rounded-[10px]"
                  onChange={handleChange}
                />
              </div>
              <div className="mt-[20px] flex flex-col">
                <label htmlFor="password">Password</label>
                <input
                  id="password"
                  type="password"
                  name="password"
                  placeholder="password..."
                  className="bg-[#F5F5F5] my-[10px] p-3 rounded-[10px]"
                  onChange={handleChange}
                />
              </div>
              <p className="text-[#346BD4] text-[16px]">Forgot password?</p>
              <button className="font-[Montserrat] bg-[#4285F4] font-bold mt-[30px] text-white w-full p-3 rounded-[10px] flex justify-center items-center">
                Sign In
              </button>
            </form>
          </div>
          <p className="text-center text-[#858585] font-[Lato] ">
            Don't have an account?
            <span className="text-[#346BD4] text-[16px] cursor-pointer ">
              <Link href="/register"> Register Here</Link>
            </span>
          </p>
        </div>
      </div>
      {!isLargeScreen && <Footer />}
    </div>
  );
};

export default Login;
