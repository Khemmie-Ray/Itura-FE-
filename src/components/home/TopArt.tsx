import React from "react";
import Slider from "./Slider";
import Image from "next/image";
import { FaCircleArrowUp } from "react-icons/fa6";

const TopArt = () => {
  return (
    <div className="lg:w-[80%] md:w-[80%] w-[90%] mx-auto">
      <Slider />
      <div className="flex flex-col justify-center items-center">
        <div className="inline-flex items-center rounded-full p-[2px] bg-[radial-gradient(circle_at_center,_#FFFFFF80,_#FFFFFF10)]">
          <div className="bg-black flex items-center px-4 py-2 rounded-full">
          <div className="rounded-full bg-[#FFE1BE] p-1 flex items-center justify-center w-[30px] h-[30px] mr-2">
          <Image 
            src="https://res.cloudinary.com/dqw6qvymf/image/upload/v1752604684/marklogo_o2ba0x.svg"
            alt=''
            width={20}
            height={20}
            className='w-full h-full object-contain'
            />
          </div>
            <p className="text-[16px] lg:text-[20px] md:text-[20px] font-medium bg-gradient-to-b from-[#FF8900] to-[#FFBD70] text-transparent bg-clip-text">
              Itura
            </p>
            </div>
        </div>
        <h3 className="text-[40px] bg-gradient-to-b from-[#F5F4F7] via-[#F3F2F5] to-[#B0ADBF] inline-block text-transparent bg-clip-text lg:text-[70px] md:text-[70px] font-medium text-center lg:leading-20 md:leading-18 leading-12">
          Community <br /> Creations
        </h3>
        <p className="my-2 text-white/80 text-center lg:text-left md:text-left">See what other creatives are making, and share your own!</p>
        <button className="bg-gradient-to-r mt-10 from-orange to-lightOrange rounded-xl text-white py-3 px-8 font-[500]">
            Explore
          </button>
      </div>
      <div className="flex justify-between my-8">
        <div>
        <Image 
            src="https://res.cloudinary.com/dqw6qvymf/image/upload/v1752604686/People_p3hg15.svg"
            alt=''
            width={50}
            height={50}
            />
          <div className="flex items-center">
            <h2 className="text-[20px] bg-gradient-to-b from-[#F5F4F7] via-[#F3F2F5] to-[#B0ADBF] inline-block text-transparent bg-clip-text lg:text-[28px] md:text-[28px] font-medium">
              0+{" "}
            </h2>
            <p className="text-[12px] font-normal text-white/60 mr-2">Users </p>
            <FaCircleArrowUp className="text-xs text-red-400 my-auto" />
          </div>
        </div>
        <div>
          <h2 className="text-[30px] bg-gradient-to-b from-[#F5F4F7] via-[#F3F2F5] to-[#B0ADBF] inline-block text-transparent bg-clip-text lg:text-[46px] md:text-[46px] font-medium">
            0+
          </h2>
          <p className="text-[20px] leading-3"> Artworks</p>
        </div>
      </div>
    </div>
  );
};

export default TopArt;
