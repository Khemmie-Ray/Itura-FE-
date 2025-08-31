"use client"

import Header from "@/components/home/Header";
import Link from "next/link";
import Image from "next/image";

const Error = () => {
  const bgClass = "bg-black/10 border-white/20";

  return (
    <div className="relative">
      <Header />
      <div className="w-[706px] h-[353px] bg-linear-to-b from-gradientYellow to-gradientRed blur-[315px] rounded-bl-full rounded-br-full absolute left-1/2 top-0 transform -translate-x-1/2 -z-10"></div>
      <section className="w-[90%] lg:w-[80%] md:w-[80%] mx-auto lg:my-24 md:my-18 my-14">
        <div className="flex flex-col lg:flex-row md:flex-row">
          <div className="flex lg:flex-col md:flex-col flex-row justify-between items-center">
            <div
              className={`p-3 border  flex items-center  w-[50px] h-[45px] rounded-lg mb-auto mr-4 shadow-lg rotate-12 ${bgClass} my-auto`}
            >
              <Image
                src="https://res.cloudinary.com/dqw6qvymf/image/upload/v1752604684/marklogo_o2ba0x.svg"
                alt=""
                width={20}
                height={20}
              />
            </div>
            <div
              className={`p-3 border  inline-flex items-center justify-center rounded-lg mr-4 shadow-lg -rotate-12 ${bgClass}`}
            >
              <p className="text-[14px]"> 😮‍💨Just take a breath</p>
            </div>
          </div>
          <h2 className="lg:text-[266px] md:text-[200px] text-[120px] lg:leading-52 md:leading-56 text-center">
            Oops.
          </h2>
          <div className="flex lg:flex-col md:flex-col flex-row justify-between items-center">
            <div
              className={`p-3 border inline-flex items-center justify-center rounded-lg mr-4 my-auto shadow-lg rotate-12 ${bgClass}`}
            >
              <p className="text-[14px]"> We&apos;re glad you&apos;re here🎉</p>
            </div>
            <div
              className={`p-3 border  flex items-center justify-center w-[50px] h-[45px] rounded-lg mt-auto mr-4 shadow-lg -rotate-12 ${bgClass}`}
            >
              <Image
                src="https://res.cloudinary.com/dqw6qvymf/image/upload/v1752604683/mark_roa5ys.svg"
                alt=""
                width={20}
                height={20}
              />
            </div>
          </div>
        </div>
        <div className="text-center my-10">
          <p className="text-[30px] font-medium lg:text-[40px] md:text-[40px]">
            This page is floating somewhere else.
          </p>
          <p className="font-instrumentSerif italic text-[24px] lg:text-[32px] md:text-[32px] lg:my-20 md:my-18 my-10">
            “But hey — getting a little lost can be part of the journey.”
          </p>
        </div>
        <div className="my-12 w-[100%] lg:w-[35%] md:w-[50%] mx-auto flex flex-col lg:flex-row md:flex-row justify-between">
          <Link
            href="/"
            className="bg-gradient-to-r from-orange to-lightOrange rounded-xl text-center text-white p-3  w-[100%] lg:w-[45%] md:w-[45% mb-4"
          >
            Go Back Home
          </Link>
          <button
            className={`p-3 rounded-xl px-4 border shadow-lg  w-[100%] lg:w-[52%] md:w-[52%] mb-4 ${bgClass}`}
          >
            Try a Guided Session
          </button>
        </div>
      </section>
    </div>
  );
};

export default Error;
