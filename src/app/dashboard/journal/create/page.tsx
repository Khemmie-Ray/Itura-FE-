import React from "react";
import Profile from "@/components/dashboard/Profile";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select";

const Create = () => {
  return (
    <div>
      <div className="flex justify-between">
        <div className="mb-10">
          <h1 className="lg:text-[24px] md:text-[22px] text-[18px] font-[500] bg-gradient-to-b from-[#F5F4F7] via-[#F3F2F5] to-[#B0ADBF] inline-block text-transparent bg-clip-text">
            Journal
          </h1>
          <p className="text-[14px]">
            Your private space to reflect, release, and grow.
          </p>
        </div>
        <Profile />
      </div>
      <div>
      <div className="lg:w-[90%] md:w-[90%] w-[100%] lg:mr-auto md:mr-auto mx-auto lg:ml-0 md:ml-0 mr-0">
          <div className="flex items-center justify-between">
          
            <div className="w-[20%]">
              <Select defaultValue="filter">
                <SelectTrigger className="rounded-full border-white/30 py-5 px-4 mb-3">
                  <SelectValue placeholder="Filter" />
                </SelectTrigger>
                <SelectContent className="bg-black/50 rounded-[34px] p-4 border-white/10 text-white hover:bg-black">
                  <SelectGroup>
                    <SelectLabel>Filter</SelectLabel>
                    <SelectItem value="na">Na</SelectItem>
                    <SelectItem value="na">Na</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className="w-[25%] mb-3">
              <button className="bg-gradient-to-r from-orange to-lightOrange rounded-xl hover:from-orange/10 hover:to-lightOrange/10 hover:border-orange/40 hover:border hover:text-orange text-white p-3 font-medium disabled:opacity-50 mx-auto w-[100%] transition-all duration-300 flex items-center justify-center">
                 Save Draft
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Create;
