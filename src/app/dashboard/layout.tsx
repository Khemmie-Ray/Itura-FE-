"use client"

import React from "react";
import Sidebar from "@/components/dashboard/Sidebar";
import MobileSidebar from "@/components/dashboard/MobileSidebar"
import AuthModal from "@/components/dashboard/AuthModal";

const Layout = ({ children }: { children: React.ReactNode }) => {

  return (
    <div className="flex justify-between relative lg:flex-row md:flex-row flex-col">
      
        <Sidebar />
        <div className="lg:w-[80%] md:w-[80%] w-[100%] py-6 h-auto lg:h-[95vh] md:h-[95vh] lg:max-h-[982px] md:max-h-[960px] overflow-y-scroll relative flex flex-col px-6">
      <div className="mb-10">
        <MobileSidebar />
      </div>
          <div className="lg:w-[706px] md:w-[706px] w-[200px]  lg:h-[353px] md:h-[300px] h-[100px] bg-gradient-to-b from-gradientYellow to-gradientRed lg:blur-[315px] md:blur-[280px] blur-[50px] rounded-bl-full rounded-br-full absolute left-1/2 top-0 transform -translate-x-1/2 z-10"></div>
          <div className="ml-auto pr-10">
          <AuthModal />
          </div>
          {children}
      </div>
    </div>
  );
};

export default Layout;
