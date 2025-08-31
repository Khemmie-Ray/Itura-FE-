import React, { useEffect, useState } from "react";
import Image from "next/image";
import { SlideItem } from "../shared/interface";

const CarouselFeatures = () => {  
  const slideItem: SlideItem[] = [
    {
      id: 1,
      title: "Remix Your Mind, Reimagine Your Art",
      image:
        "https://res.cloudinary.com/dqw6qvymf/image/upload/v1752604884/carousel3_a6phci.svg",
      icon: "https://res.cloudinary.com/dqw6qvymf/image/upload/v1752604817/icon1_tdhgww.svg",
      details:
        "Play around with thoughts and feelings, then turn them into something beautiful and new!",
    },
    {
      id: 2,
      title: "Find Your Flow with Custom Sound Journeys",
      image:
        "https://res.cloudinary.com/dqw6qvymf/image/upload/v1752604874/carousel2_ushvpx.svg",
      icon: "https://res.cloudinary.com/dqw6qvymf/image/upload/v1752604817/icon2_cv9wy0.svg",
      details:
        "Chill out, focus up, or spark ideas with sounds made just for your mood.",
    },
    {
      id: 3,
      title: "Connect & Share Securely",
      image:
        "https://res.cloudinary.com/dqw6qvymf/image/upload/v1752604877/carousel5_yfxb4v.svg",
      icon: "https://res.cloudinary.com/dqw6qvymf/image/upload/v1752604818/icon5_ndktig.svg",
      details:
        "Play around with thoughts and feelings, then turn them into something beautiful and new!",
    },
    {
      id: 4,
      title: "Turn Feelings into Art",
      image:
        "https://res.cloudinary.com/dqw6qvymf/image/upload/v1752604883/carousel6_i02lfz.svg",
      icon: "https://res.cloudinary.com/dqw6qvymf/image/upload/v1752604818/icon4_udcsqh.svg",
      details:
        "Let your emotions lead the way with drawing, collages, and photo art. Your feelings, your masterpiece!",
    },
    {
      id: 5,
      title: "Journal Guidance for Your Creative Well-being",
      image:
        "https://res.cloudinary.com/dqw6qvymf/image/upload/v1752604868/carousel1_y3lt8o.svg",
      icon: "https://res.cloudinary.com/dqw6qvymf/image/upload/v1752604818/icon5_ndktig.svg",
      details:
        "Chat with your smart AI buddy for cool insights, fresh prompts, and personalised wellness tips.",
    },
    {
      id: 6,
      title: "See Your Feelings in Colour",
      image:
        "https://res.cloudinary.com/dqw6qvymf/image/upload/v1752604886/carousel4_c2ryyh.svg",
      icon: "https://res.cloudinary.com/dqw6qvymf/image/upload/v1752604819/icon6_y0sdba.svg",
      details:
        "Chill out, focus up, or spark ideas with sounds made just for your mood.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slideItem.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    // <Element name="feature">
    <>
      <div className="w-[90%] mx-auto lg:my-40 md:my-30 my-10 hidden lg:block md:block">
        <div className="flex text-center justify-center items-center mb-12">
          <div
            className={`p-3 border border-white/20 flex items-center justify-center w-[50px] h-[45px] rounded-lg mb-auto mr-4 shadow-lg -rotate-12 bg-darkBg/5`}
          >
            <Image
              src="https://res.cloudinary.com/dqw6qvymf/image/upload/v1752604684/marklogo_o2ba0x.svg"
              alt=""
              width={20}
              height={20}
            />
          </div>
          <h2 className="text-[28px] lg:text-[56px] md:text-[40px] font-medium leading-14">
            What you can do, <br className="hidden lg:block md:block" /> with{" "}
            <span className="font-instrumentSerif italic"> Itura.</span>
          </h2>
          <div
            className={`p-3 border border-white/20 flex items-center justify-center w-[50px] h-[45px] rounded-lg mt-auto mr-4 shadow-lg rotate-12 bg-darkBg/5`}
          >
            <Image
              src="https://res.cloudinary.com/dqw6qvymf/image/upload/v1752604683/mark_roa5ys.svg"
              alt=""
              width={20}
              height={20}
            />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row md:flex-row gap-10 items-center">
          <div className="lg:w-[40%] md:w-[33%] w-[100%] transition-all duration-500 ease-in-out">
            <Image
              src={slideItem[activeIndex].image}
              alt="Active feature"
              width={300}
              height={300}
              className="w-[100%] rounded-xl"
            />
          </div>
          <div className="lg:w-[58%] md:w-[64%] lg:flex md:flex hidden flex-wrap justify-between relative">
            {slideItem.map((info, index) => {
              const isActive = index === activeIndex;

              return (
                <div
                  key={info.id}
                  className={`transition-all duration-500 border border-white/20 rounded-3xl lg:py-6 w-[48%] mb-3 ${
                    isActive
                      ? "scale-105 opacity-100 z-10"
                      : "opacity-40 blur-[1px]"
                  } bg-darkBg/5`}
                >
                  <div className="flex justify-between p-4 items-center">
                    <div className="lg:h-[60px] lg:w-[60px] md:h-[40px] md:w-[40px] rounded-full bg-white/10 flex justify-center items-center mr-4">
                      <Image
                        src={info.icon}
                        alt=""
                        width={20}
                        height={20}
                        className="lg:h-[30px] lg:w-[30px] h-[20px] w-[20px]"
                      />
                    </div>
                    <h3 className="font-medium w-[70%]">{info.title}</h3>
                  </div>
                  <div className="border-white/20 border-t">
                    <p className="text-white/65 font-light text-center p-4">
                      {info.details}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="w-[90%] md:hidden lg:hidden flex flex-col items-start mx-auto my-16 relative">
        {slideItem.map((info) => (
          <div
            key={info.id}
            className="group transition-all duration-300 border border-white/20 rounded-3xl w-full mb-3"
          >
            <div className="flex justify-between p-4 items-center">
              <div className="h-[90px] w-[90px] rounded-full bg-white/10 flex justify-center items-center mr-4">
                <img src={info.icon} alt="" className="h-[50px] w-[50px]" />
              </div>
              <h3 className="font-medium w-[70%] text-white">{info.title}</h3>
            </div>
            <div className="border-t border-white/20 opacity-0 max-h-0 overflow-hidden group-hover:opacity-100 group-hover:max-h-40 transition-all duration-500 ease-in-out">
              <p className="text-white/65 font-light text-center p-4">
                {info.details}
              </p>
            </div>
          </div>
        ))}
      </div>
      </>
    // </Element>
  );
};

export default CarouselFeatures;
