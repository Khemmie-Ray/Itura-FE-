import React, { useState, useEffect } from "react";
import OverviewCard from "./OverviewCard";
import Lottie from "lottie-react";
import featureAnimation from "@/constants/feature.json";

const Features = () => {
  const bgClass = "bg-white/10";

  interface Data {
    id: number;
    image: string;
    title: string;
    text: string;
  }

  const data:Data[] = [
    {
      id: 1,
      image: "https://res.cloudinary.com/dqw6qvymf/image/upload/v1752604819/img-1_wuj6aw.svg",
      title: " A Doorway.",
      text: " Helping you reflect, express, and find balance.",
    },
    {
      id: 2,
      image: "https://res.cloudinary.com/dqw6qvymf/image/upload/v1752604817/feat2_zx1cc2.svg",
      title: "A Safe Space.",
      text: "Chat with Itura to gain insights.",
    },
    {
      id: 3,
      image: "https://res.cloudinary.com/dqw6qvymf/image/upload/v1752604685/pause_exjxh8.svg",
      title: "Quick Boosts.",
      text: "Your Daily Inspiration & Insights..",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % data.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="lg:w-[95%] md:w-[95%] w-[90%] mx-auto my-18 scroll-mt-20" id="#feature">
      <div className="lg:flex md:flex hidden justify-between">
        {data.map((info) => (
          <div
            className={`lg:w-[32%] md:w-[32%] w-[100%] rounded-xl border border-white/20 mb-4 ${bgClass} px-4`}
          key={info.id}>
            <img src={info.image} alt="" className="w-[80%] mx-auto h-[200px] object-contain object-center" />
            <h3 className="bg-gradient-to-r from-[#F5F4F7] via-[#F3F2F5] to-[#B0ADBF] text-[28px] font-medium inline-block mt-4 bg-clip-text px-3 text-transparent">
              {info.title}
            </h3>
            <p className="text-[14px] px-3 text-white/60 mb-8">
              {info.text}
            </p>
          </div>
        ))}
      </div>
      <div className="lg:hidden md:hidden block justify-between">
          <div
            className={`lg:w-[32%] md:w-[32%] w-[100%] rounded-xl border border-white/20 mb-4 ${bgClass} px-4 transition-all duration-500 ease-in-out`}
          >
            <img src={data[activeIndex].image} alt="" className="w-[80%] mx-auto h-[200px] object-contain object-center" />
            <h3 className="bg-gradient-to-r from-[#F5F4F7] via-[#F3F2F5] to-[#B0ADBF] text-[28px] font-medium inline-block mt-4 bg-clip-text px-3 text-transparent">
              {data[activeIndex].title}
            </h3>
            <p className="text-[14px] px-3 text-white/60 mb-8">
              {data[activeIndex].text}
            </p>
          </div>
        </div>
      <div className="flex justify-between flex-col lg:flex-row md:flex-row mt-4 items-center">
        <div className="lg:w-[40%] md:w-[38%] w-[100%] mb-4">
            <Lottie
              animationData={featureAnimation}
              loop={true}
              style={{
                width: "100%",
                height: "100%",
              }}
            />
        </div>
        <OverviewCard />
      </div>
    </div>
  );
};

export default Features;
