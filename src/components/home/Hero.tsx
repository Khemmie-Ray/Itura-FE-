import React from "react";
import { CiStar } from "react-icons/ci";
import { GoDotFill } from "react-icons/go";
import Lottie from "lottie-react";
import ituraAnimation from "@/constants/itura.json"

const Hero = () => {
  return (
    <div className="flex flex-col lg:flex-row md:flex-row justify-between my-16 items-center">
      <div className="w-[95%] mx-auto lg:w-[45%] md:w-[45%] text-center lg:text-left md:text-left mb-8">
        <div className="inline-flex rounded-full p-[1px] bg-[radial-gradient(circle_at_center,_#FFFFFF80,_#FFFFFF20)]">
          <div className="flex items-center justify-center gap-2 bg-black px-6 py-2 rounded-full">
            <GoDotFill className="text-3xl text-orange" />
            <span className="text-[14px] bg-gradient-to-b from-[#FF8900] to-[#FFBD70] text-transparent bg-clip-text">
              Wellness, powered by Decentralisation.
            </span>
          </div>
        </div>

        <h1 className="text-[48px] lg:text-[71px] md:text-[56px] font-medium">
          Nurture Your{" "}
          <span className="font-instrumentSerif italic"> Creativity</span>, One
          Feeling <span className="font-instrumentSerif italic">at a Time</span>
          .
        </h1>
        <p className="text-textGrey">
          Your mind is your canvas and Itura helps you navigate emotions, find
          clarity, and create with ease— securely built on Starknet, where your
          journey is yours alone.
        </p>
        <div className="my-12">
          <button className="bg-linear-to-r from-orange to-lightOrange rounded-xl text-white p-3 font-[500]">
            Launch the app
          </button>
          <button
            className={`rounded-xl ml-3 px-4 border dark:border-white/10 p-3 font-[500] shadow-lg bg-white/10`}
          >
            Watch demo
          </button>
        </div>
        <div className="flex items-center justify-center lg:justify-start md:justify-start">
          <h2 className="text-[27px] lg:text-[46px] md:text-[34px] flex flex-col text-left lg:text-center md:text-center">
            0k+{" "}
            <span className="text-[10px] lg:text-[16px] md:text-[16px] text-textGrey">
              Daily prompts
            </span>
          </h2>
          <div className="flex flex-col ml-10">
            <h2 className="text-[27px] lg:text-[46px] md:text-[34px] flex font-medium items-center justify-center lg:justify-start md:justify-start">
              0
              <span className=" text-white/40">
                <CiStar className="text-[20px]" />
              </span>
            </h2>
            <p className="text-[10px] lg:text-[16px] md:text-[16px] text-textGrey text-left lg:text-center md:text-center">
              by thousands users
            </p>
          </div>
        </div>
      </div>
      <div className="w-[95%] mx-auto lg:mx-0 md:mx-0 lg:w-[45%] md:w-[45%] mb-8">
        <Lottie
          animationData={ituraAnimation}
          loop={true}
          style={{ width: "100%", height: "100%" }}
        />
      
        </div>
      </div>

  );
};

export default Hero;
