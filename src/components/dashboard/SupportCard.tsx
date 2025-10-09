import React from 'react'
import { GoDotFill } from "react-icons/go";
import Link from "next/link";

const SupportCard = () => {
  return (
    <div className="lg:w-[48%] md:w-[48%] w-[100%] rounded-[21px] lg:p-8 md:p-8 p-4 border border-white/20 bg-black/15 relative z-20 my-3 ">
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
          <Link
            href="/dashboard/support/id"
            className="text-center rounded-xl border border-white/20 p-3 bg-white/10 shadow-lg text-[12px] w-[48%]"
          >
            View Details
          </Link>
          <button className="bg-gradient-to-r p-3 from-orange to-lightOrange rounded-xl text-white text-[12px] w-[48%]">
            Contact
          </button>
        </div>
      </div>
  )
}

export default SupportCard