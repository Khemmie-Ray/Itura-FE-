import React from "react";
import Image from "next/image";

const MobExplore = () => {
  const themeColor = "bg-black/5";

  return (
    <div className="flex md:hidden lg:hidden justify-center bg-darkBg rounded-[44px] items-center  p-4 flex-col text-center  relative">
      <div className="w-[100px] h-[100px] bg-linear-to-b from-gradientYellow blur-[80px] to-gradientRed  rounded-full absolute left-10 top-0 "></div>
      <div className="w-[80%] mb-4 ml-auto">
        <Image
          src="https://res.cloudinary.com/dqw6qvymf/image/upload/v1757346064/icon-group_xb0kjr_qze6zn.png"
          alt="Explore page background image"
          width={300}
          height={300}
          priority
          className=" w-[80%] mx-auto"
        />
      </div>
      <div className="flex text-center justify-center items-center mt-4">
        <div
          className={`p-3 border border-white/20 flex items-center justify-center w-[50px] h-[45px] rounded-lg mb-auto mr-4 shadow-lg -rotate-12 ${themeColor}`}
        >
          <Image
            src="https://res.cloudinary.com/dqw6qvymf/image/upload/v1757346064/marklogo_o2ba0x_amnzzt.png"
            alt=""
            width={20}
            height={20}
          />
        </div>
        <h2 className="text-[28px] font-medium">
          See your feelings in
          <span className="font-instrumentSerif italic"> Colours.</span>
        </h2>
        <div
          className={`p-3 border border-white/20 flex items-center justify-center w-[50px] h-[45px] rounded-lg mt-auto mr-4 shadow-lg rotate-12 ${themeColor}`}
        >
          <Image
            src="https://res.cloudinary.com/dqw6qvymf/image/upload/v1757346064/mark_d7c7op_ry2dlo.png"
            alt=""
            width={20}
            height={20}
          />
        </div>
      </div>
      <div>
        <p className="text-[#A39EB6] px-4  my-7 w-[100%] lg:w-[80%] md:w-[80%]">
          Easily track how you&apos;re feeling each day and watch your emotional
          journey unfold in beautiful colours. Spot trends, understand your
          triggers, and nurture your well-being
        </p>
        <button className="bg-gradient-to-r from-lightOrange to-orange rounded-xl text-white p-3 font-[500] px-10">
          Explore Mood Tracking
        </button>
      </div>
    </div>
  );
};

export default MobExplore;
