"use client"

import React from "react";
import Sidebar from "@/components/dashboard/Sidebar";
import MobileSidebar from "@/components/dashboard/MobileSidebar";
import ProtectedRoute from "@/components/dashboard/ProtectedRoute";
import Image from "next/image";
import { useAuth } from "@/context/AuthContext";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { user, logout } = useAuth();

  const formatWalletAddress:any = (address: string): string => {
    if (!address) return "";
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  }

  const Profile =  () => (
    <div className="flex items-center mb-10">
      <Image
        src="https://res.cloudinary.com/dqw6qvymf/image/upload/v1752604688/ravatar_zs1bzd.svg"
        alt="User ravatar"
        width={50}
        height={50}
      />
      <p className="text-[12px] ml-3">
        Jo Edor <br />
        <span className="text-white/60">
          {user ? formatWalletAddress(user) : ""}
        </span>
      </p>
      <button className="rounded-xl ml-3 px-4 border border-white/20 p-2 font-[300] shadow-lg bg-darkBg/70" onClick={logout}>Disconnect</button>
    </div>
  );

  return (
    <ProtectedRoute>
    <div className="flex justify-between relative lg:flex-row md:flex-row flex-col">
      <Sidebar />
      <div className="lg:w-[80%] md:w-[80%] w-[100%] py-6 h-auto lg:h-[95vh] md:h-[95vh] lg:max-h-[982px] md:max-h-[960px] overflow-y-scroll relative flex flex-col px-6">
        <div className="mb-10">
          <MobileSidebar />
        </div>
        <div className="lg:w-[706px] md:w-[706px] w-[200px]  lg:h-[353px] md:h-[300px] h-[100px] bg-gradient-to-b from-gradientYellow to-gradientRed lg:blur-[315px] md:blur-[280px] blur-[50px] rounded-bl-full rounded-br-full absolute left-1/2 top-0 transform -translate-x-1/2 z-10"></div>
        <div className="ml-auto">
        <Profile />
        </div>
        {children}
      </div>
    </div>
    </ProtectedRoute>
  );
};

export default Layout;
