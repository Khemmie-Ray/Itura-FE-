import React from "react";
import Filter from "@/components/dashboard/Filter";
import SupportCard from "@/components/dashboard/SupportCard";
import Profile from "@/components/dashboard/Profile";

const Support = () => {
  return (
    <div className="w-[95%] mx-auto relative z-30">
       <div className="flex justify-between">
       <div className="mb-10">
        <h1 className="lg:text-[24px] md:text-[22px] text-[18px] font-[500] bg-gradient-to-b from-[#F5F4F7] via-[#F3F2F5] to-[#B0ADBF] inline-block text-transparent bg-clip-text">
          Get Pro Support
        </h1>
        <p className="text-[14px]">
          Consult with specialists in various fields
        </p>
      </div>
        <Profile />
      </div>
      <div className="mb-10">
        <Filter />
      </div>
      <SupportCard />
    </div>
  );
};

export default Support;
