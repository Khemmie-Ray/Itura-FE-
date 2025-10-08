import React from "react";
import { FaPlay } from "react-icons/fa";

const DemoCard = () => {
  return (
    <div className="bg-white/10 rounded-[21px] p-8 backdrop-filter-blur w-[90%] mx-auto">
      <div className="bg-darkBg rounded-[21px] p-6 z-20 relative py-10">
        <div className="text-center">
          <h1 className="lg:text-[64px] md:text-[52px] text-[48px] font-[500] bg-gradient-to-b from-[#F5F4F7] via-[#F3F2F5] to-[#B0ADBF] inline-block text-transparent bg-clip-text">
            Welcome to <span className="font-instrumentSerif">Itura!</span>{" "}
          </h1>
          <h3 className="lg:text-[28px] md:text-[26px] text-[20px] leading-8">
            Not Sure Where{" "}
            <span className="font-instrumentSerif italic">to Begin</span>?
          </h3>
          <p className="text-[14px]">Get the full picture in just a minute. Watch the video or check out our guide to see how Itura works.</p>
        </div>
        <div
          className="mt-10 rounded-4xl p-6 bg-[#080514]/40 border border-white/20 rounded-[34px] lg:w-[70%] md:w-[80%] w-[90%] mx-auto"
        >
          <div className="w-[100%] bg-white/10 flex justify-center items-center h-[150px] mb-5 rounded-[34px]">
            <FaPlay className="text-xl"/>
          </div>
            <div className="flex justify-center">
              <button className="bg-gradient-to-r p-3 px-10 from-orange to-lightOrange rounded-xl text-white text-[12px]">
                Play Video
              </button>
              <button className="rounded-xl ml-3 border border-white/20 p-3 bg-white/10 shadow-lg text-[12px] px-10">
                View Guides
              </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemoCard;
