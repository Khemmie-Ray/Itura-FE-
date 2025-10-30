import React from "react";
import Image from "next/image";

const SubscriptionModal = () => {
  return (
    <div className="bg-[#2D2B3752]/60 rounded-[21px] lg:p-8 md:p-6 p-4 backdrop-filter-blur w-[100%] border border-white/10">
      <div className="bg-[#2D2B3752]/40 rounded-[21px] lg:p-6 md:p-5 p-4 flex justify-between items-center py-10 flex-col lg:flex-row md:flex-row border border-white/10">
        <div className="w-[100%] md:w-[35%] lg:w-[35%]">
          <Image src="https://res.cloudinary.com/dqw6qvymf/image/upload/v1761166344/Frame_zvcmhn.png" alt="" width={200} height={200} className="w-[100%]" />
        </div>
        <div className="text-center w-[100%] md:w-[61%] lg:w-[61%]">
          <h1 className="lg:text-[32px] md:text-[28px] text-[22px] font-[500] bg-gradient-to-b from-[#F5F4F7] via-[#F3F2F5] to-[#B0ADBF] inline-block text-transparent bg-clip-text leading-10 mb-4">
            Start your journey with Itura -{" "}
            <span className="font-instrumentSerif">free for 7 days.</span>{" "}
          </h1>
          <p className="text-[14px] my-4">
            Discover how your emotions can transform into art and sound. Your
            first 7 days are on us — explore freely, cancel anytime.
          </p>
          <div className="flex justify-center lg:flex-row md:flex-row flex-col">
            <button className="bg-gradient-to-r p-3 px-10 from-orange to-lightOrange rounded-xl text-white text-[12px] mb-3">
              Begin free trial
            </button>
            <button className="rounded-xl lg:ml-3 md:ml-3 border border-white/20 p-3 bg-white/10 shadow-lg text-[12px] px-10 mb-3">
              See Payment plan
            </button>
          </div>
          <p className="text-[12px]">
            No charges today • Cancel anytime • Wellness for your creative flow
          </p>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionModal;
