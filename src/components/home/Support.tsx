import React from "react";
import Image from "next/image";
import { GoDotFill } from "react-icons/go";

const Support = () => {
  return (
    <div className="w-[90%] mx-auto flex lg:justify-between md:justify-between justify-center items-center flex-col lg:flex-row md:flex-row my-20 lg:text-left md:text-left text-center">
      <div className="lg:w-[48%] md:w-[48%] w-[100%] mb-6">
        <Image
          src="https://res.cloudinary.com/dqw6qvymf/image/upload/v1752604690/support_h8e57d.svg"
          alt=""
          width={300}
          height={300}
          className="w-[100%]"
        />
      </div>
      <div className="lg:w-[48%] md:w-[48%] w-[100%] mb-6">
        <div className="inline-flex rounded-full p-[1px] bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.5),_#FFFFFF20)] my-2 ">
          <div className="flex items-center justify-center bg-black lg:px-6 lg:py-2 md:px-4 md:py-4 rounded-full px-2">
            <GoDotFill className="text-3xl text-orange" />
            <span className="lg:text-[14px] md:text-[12px] text-[9px] bg-gradient-to-b from-[#FF8900] to-[#FFBD70] text-transparent bg-clip-text">
              First Consultation is FREE
            </span>
          </div>
        </div>
        <h2 className="text-[36px] lg:text-[56px] md:text-[56px] font-medium lg:leading-16 leading-12 bg-gradient-to-b from-[#F5F4F7] via-[#F3F2F5] to-[#B0ADBF] inline-block text-transparent bg-clip-text ">
          Professional <span className="block">Support & Guidance</span>
        </h2>
        <p className="text-[26px] lg:text-[40px] md:text-[40px] italic font-instrumentSerif">
          Handpicked Wellness Professionals
        </p>
        <p className="font-medium my-10 text-[10px] lg:text-[16px] md:text-[16px]">
          Sometimes you need more than reflection. We help you connect with
          licensed therapists who understand the creative journey — safely,
          privately, and at your own pace.
        </p>
        <button className="bg-gradient-to-r text-[11px] lg:text-[16px] md:text-[16px] from-lightOrange to-orange rounded-xl text-white p-3 font-[500] px-10">
          Find a Vetted Therapist
        </button>
      </div>
    </div>
  );
};

export default Support;
