import React from "react";
import Filter from "@/components/dashboard/Filter";
import { GoDotFill } from "react-icons/go";

const Support = () => {
  const bioData = [
    {
      name: "Adeolu joseph",
      header:
        "Certified fitness specialist focused on weight loss, strength training, and overall body wellness.",
      status: "available",
      category: "fitness",
      experience: "8+ years in mental health counseling",
      language: ["english", "hausa"],
      location: "Remote & in-person (Kaduna, Nigeria)",
      specialty: [
        "Stress management",
        "Anxiety",
        "Trauma recovery",
        "Relationship therapy",
      ],
    },
  ];
  return (
    <div className="w-[90%] mx-auto">
      <div className="mb-10">
        <h1 className="lg:text-[24px] md:text-[22px] text-[18px] font-[500] bg-gradient-to-b from-[#F5F4F7] via-[#F3F2F5] to-[#B0ADBF] inline-block text-transparent bg-clip-text">
          Get Pro Support
        </h1>
        <p className="text-[14px]">
          Consult with specialists in various fields
        </p>
      </div>
      <div className="mb-10">
        <Filter />
      </div>
      <div className="lg:w-[48%] md:w-[48%] w-[100%] rounded-[21px] p-8 border border-white/20 bg-black/15 relative z-20 mb-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className="w-[50px] h-[50px] rounded-full bg-pink-300"></div>
            <p className="font-[500] ml-2 leading-5">
              David <br />{" "}
              <span className="text-[10px] font-[400]">Availability</span>
            </p>
          </div>
          <div className="flex items-center rounded-full py-2 px-5 border border-white/10 text-[10px]">
            <GoDotFill className="text-green-600 text-xl" />
            <p> Fitness</p>
          </div>
        </div>
        <p className="text-[#C8C8C8] my-8 text-[12px]">
          Certified fitness specialist focused on weight loss, strength
          training, and overall body wellness.
        </p>
        <div className="flex justify-between">
        <button className="rounded-xl border border-white/20 p-3 bg-white/10 shadow-lg text-[12px] lg:w-[48%] md:w-[48%] w-[100%]">
            View Details
          </button>
          <button className="bg-gradient-to-r p-3 from-orange to-lightOrange rounded-xl text-white text-[12px] lg:w-[48%] md:w-[48%] w-[100%]">
            Contact
          </button>
          
        </div>
      </div>
    </div>
  );
};

export default Support;
