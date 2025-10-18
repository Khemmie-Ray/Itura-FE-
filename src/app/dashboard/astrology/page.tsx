import React from "react";
import Image from "next/image";
import Profile from "@/components/dashboard/Profile";
import { CgAsterisk } from "react-icons/cg";

const Astrology = () => {
  return (
    <div className="w-[90%] mx-auto mb-8 relative z-20">
      <div className="flex justify-between">
        <div className="mb-10">
          <h1 className="lg:text-[24px] md:text-[22px] text-[18px] font-[500] bg-gradient-to-b from-[#F5F4F7] via-[#F3F2F5] to-[#B0ADBF] inline-block text-transparent bg-clip-text">
            Astrology Reading
          </h1>
          <p className="text-[14px]">
            Gain insights into your personality & strengths
          </p>
        </div>
        <Profile />
      </div>
      <div className="flex flex-col justify-center text-center items-center">
        <div className="inline-flex items-center rounded-full p-[2px] bg-[radial-gradient(circle_at_center,_#FFFFFF80,_#FFFFFF10)]">
          <div className="bg-black flex items-center px-4 py-2 rounded-full">
            <div className="rounded-full bg-[#FFE1BE] p-1 flex items-center justify-center w-[30px] h-[30px] mr-2">
              <Image
                src="https://res.cloudinary.com/dqw6qvymf/image/upload/v1752604684/marklogo_o2ba0x.svg"
                alt=""
                width={20}
                height={20}
                className="w-full h-full object-contain"
              />
            </div>
            <p className="text-[16px] lg:text-[20px] md:text-[20px] font-medium bg-gradient-to-b from-[#FF8900] to-[#FFBD70] text-transparent bg-clip-text">
              Itura
            </p>
          </div>
        </div>
        <h1 className="lg:text-[70px] md:text-[52px] text-[24px] font-[500] bg-gradient-to-b from-[#F5F4F7] via-[#F3F2F5] to-[#B0ADBF] block text-transparent bg-clip-text">
          What the Stars Say About You
        </h1>
        <p className="text-[14px]">Input your information to get started.</p>
      </div>
      <div className="my-10 relative z-20">
        <div className="flex justify-between items-center lg:flex-row md:flex-row flex-col">
          <div className="lg:w-[22%] md:w-[22%] mb-3 w-[100%]">
            <p className="flex mb-2">Name <span className="mb-auto text-red-500"><CgAsterisk /></span></p>
            <input
              type="text"
              className="p-3 rounded-[18px] bg-white/10 shadow-2xl border border-white/15  w-[100%] mb-3 focus:outline-none"
            />
          </div>
          <div className="lg:w-[22%] md:w-[22%] mb-3 w-[100%]">
            <p className="flex mb-2">Email <span className="mb-auto text-red-500"><CgAsterisk /></span></p>
            <input
              type="text"
              className="p-3 rounded-[18px] bg-white/10 shadow-2xl border border-white/15 w-[100%] mb-3 focus:outline-none"
            />
          </div>
          <div className="lg:w-[22%] md:w-[22%] mb-3 w-[100%]">
            <p className="flex mb-2">Time of Birth<span className="mb-auto text-red-500"><CgAsterisk /></span></p>
            <input
              type="text"
              className="p-3 rounded-[18px] bg-white/10 shadow-2xl border border-white/15  w-[100%] mb-3 focus:outline-none"
            />
          </div>
          <div className="lg:w-[22%] md:w-[22%] mb-3 w-[100%]">
            <p className="flex mb-2">Place of Birth<span className="mb-auto text-red-500"><CgAsterisk /></span></p>
            <input
              type="text"
              className="p-3 rounded-[18px] bg-white/10 shadow-2xl border border-white/15 w-[100%] mb-3 focus:outline-none"
            />
        </div>
        </div>
        <div className="flex justify-center">
        <button className="rounded-xl px-8 border border-white/20 p-3 font-[500] shadow-2xl bg-black/30 lg:w-[30%] md:w-[30%] w-[100%]">Generate My Chart</button>
      </div>
      </div>
    </div>
  );
};

export default Astrology;
