import React from "react";
import { GoDotFill } from "react-icons/go";
import Image from "next/image";
import SupportCard from "@/components/dashboard/SupportCard";

const Supportdetails = () => {
  return (
    <div className="w-[95%] lg:w-[80%] md:w-[80%] mx-auto lg:py-10 md:py-8 py-6 text-[12px]">
      <div className="flex justify-between lg:flex-row md:flex-row flex-col bg-[#08051466] rounded-[34px] border border-white/20 lg:px-10 md:px-8 px-6 py-6 relative z-20 mb-6">
        <div className="w-[100%] lg:w-[40%] md:w-[40%] lg:order-1 md:order-1 order-2">
          <h1 className="lg:text-[42px] md:text-[32px] text-[24px] font-[500] bg-gradient-to-b from-[#F5F4F7] via-[#F3F2F5] to-[#C3C1CE] inline-block text-transparent bg-clip-text">
            Consultation <br />
            with <span className="font-instrumentSerif">Jo Edor!</span>
          </h1>
          <p className="text-[10px] my-6">
            Providing a safe, confidential space for you to navigate stress,
            anxiety, and life transitions.
          </p>
          <div className="flex items-center">
            <p className="flex items-center text-[10px] font-[700]">
              <GoDotFill /> Wellness coach
            </p>
            <p className="flex items-center text-[10px] font-[700]">
              <GoDotFill className="text-green-600 ml-4" /> Available
            </p>
          </div>
          <button className="bg-gradient-to-r p-3 from-orange to-lightOrange rounded-xl text-white text-[12px] lg:w-[48%] md:w-[48%] w-[100%] mt-4">
            Contact Professional
          </button>
        </div>
        <div className="absolute right-0 w-[50%] -top-20 hidden lg:inline-flex md:inline-flex">
          <Image
            src="https://res.cloudinary.com/dqw6qvymf/image/upload/v1759964160/WhatsApp_Image_2025-07-20_at_23.56.46_6_1_ttesbp.png"
            alt=""
            className="w-[100%]"
            width={300}
            height={300}
          />
        </div>
        <div className="w-[100%] order-1 lg:hidden md:hidden block mb-4">
          <Image
            src="https://res.cloudinary.com/dqw6qvymf/image/upload/v1759964160/WhatsApp_Image_2025-07-20_at_23.56.46_6_1_ttesbp.png"
            alt=""
            className="w-[100%]"
            width={300}
            height={300}
          />
        </div>
      </div>
      <div className="mb-6">
      <div className="mb-4 flex items-center justify-between">
        <p className="lg:w-[15%] md:w-[15%] w-auto">Experience:</p>
        <div className="bg-[#211E2C] p-6 w-[83%] rounded-full">
          <p>8+ years in mental health counseling</p>
        </div>
      </div>
      <div className="mb-4 flex items-center justify-between">
        <p className="lg:w-[15%] md:w-[15%] w-auto">Location:</p>
        <div className="bg-[#211E2C] p-6 w-[83%] rounded-full">
          <p>Remote & in-person (Kaduna, Nigeria)</p>
        </div>
      </div>
      <div className="mb-4 flex items-center justify-between">
        <p className="lg:w-[15%] md:w-[15%] w-auto">Specialties:</p>
        <div className="bg-[#211E2C] p-6 w-[83%] rounded-full flex items-center flex-wrap">
          <p className="flex items-center mr-3">
            <GoDotFill className="text-[#423F4D] mr-2" />
            Stress management{" "}
          </p>
          <p className="flex items-center mr-3">
            <GoDotFill className="text-[#423F4D] mr-2"  />
            Anxiety{" "}
          </p>
          <p className="flex items-center mr-3">
            <GoDotFill className="text-[#423F4D] mr-2"  />
            Trauma recovery{" "}
          </p>
          <p className="flex items-center mr-3">
            <GoDotFill className="text-[#423F4D] mr-2"  />
            Relationship therapy{" "}
          </p>
        </div>
      </div>
      <div className="mb-4 flex items-center justify-between">
        <p className="lg:w-[15%] md:w-[15%] w-auto">Approach:</p>
        <div className="bg-[#211E2C] p-6 w-[83%] rounded-full">
          <p>Cognitive Behavioral Therapy (CBT), holistic healing methods</p>
        </div>
      </div>
      <div className="mb-4 flex items-center justify-between">
        <p className="lg:w-[15%] md:w-[15%] w-auto">Language:</p>
        <div className="bg-[#211E2C] p-6 w-[83%] rounded-full flex items-center">
        <p className="flex items-center mr-3">
            <GoDotFill className="text-[#423F4D] mr-2" />
            English{" "}
          </p>
          <p className="flex items-center mr-3 flex-wrap">
            <GoDotFill className="text-[#423F4D] mr-2"  />
            Hausa{" "}
          </p>
        </div>
        </div>
      </div>
      <div className="my-14">
      <h2 className="text-[16px] font-[500] bg-gradient-to-b from-[#F5F4F7] via-[#F3F2F5] to-[#C3C1CE] inline-block text-transparent bg-clip-text mb-4">More Pros to check out</h2>
      <SupportCard />
      </div>
    </div>
  );
};

export default Supportdetails;
