import React from "react";
import { FaPlay } from "react-icons/fa";

const DemoCard = () => {
   
  return (
    <div className={`w-[90%] lg:w-[60%] md:w-[60%] mx-auto mt-10 rounded-4xl p-8 flex justify-between flex-col lg:flex-row md:flex-row bg-[#080514]/40 border border-white/20 rounded-2xl`}>
      <div className="w-[100%] lg:w-[38%] md:w-[38%] bg-white/50 rounded-xl flex justify-center items-center h-[150px] lg:h-auto md:h-auto my-3">
        <FaPlay />
      </div>
      <div className="w-[100%] lg:w-[60%] md:w-[60%] my-3">
        <h3 className="lg:text-[28px] md:text-[26px] text-[20px]">Not Sure Where <span className="font-instrumentSerif italic">to Begin</span>?</h3>
        <p className="text-[14px] mt-2 mb-5">
          Get the full picture in just a minute. Watch the video or check out
          our guide to see how Itura works.
        </p>
        <div className="">
          <button className="bg-gradient-to-r p-3 from-orange to-lightOrange rounded-xl text-white text-[12px]">
            Play Video
          </button>
          <button
            className="rounded-xl ml-3 px-4 border border-white/20 p-3 bg-white/10 shadow-lg text-[12px]"
          >
            View Guides
          </button>
        </div>
      </div>
    </div>
  );
};

export default DemoCard;
