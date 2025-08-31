import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaPlus } from "react-icons/fa6";
import ProtectedRoute from "@/components/dashboard/ProtectedRoutes";

const Settings = () => {
  const bgColor = "bg-white/10 border-white/20";

  return (
    <ProtectedRoute>
    <main className="lg:relative md:relative w-[90%] lg:w-[80%] md:w-[80%] mx-auto my-8 lg:z-20 md:z-20">
      <h2 className="font-medium text-[24px] lg:text-[32px] md:text-[26px]">
        Account Setting
      </h2>
      <div className="flex items-center lg:mt-12 md:mt-8 mb-3">
        <p className="text-[12px] lg:text-[16px] md:text-[16px]">
          Choose your Ravatar
        </p>
        <Link
          href="/dashboard/settings/ravatar"
          className="text-orange font-light ml-3 text-[12px] lg:text-[16px] md:text-[16px]"
        >
          See more
        </Link>
      </div>
      <div
        className={`flex justify-between items-center flex-wrap border ${bgColor} py-4 lg:px-10 md:px-8 px-4 rounded-2xl`}
      >
        <Image
          src="https://res.cloudinary.com/dqw6qvymf/image/upload/v1752604687/profile2_psbfwx.svg"
          alt="ravatar  user image"
          width={100}
          height={100}
          className="mb-3 w-[24%]"
        />
        <Image
          src="https://res.cloudinary.com/dqw6qvymf/image/upload/v1752604686/profile1_bomasy.svg"
          alt="ravatar  user image"
          width={100}
          height={100}
          className="mb-3 w-[24%]"
        />
        <Image
          src="https://res.cloudinary.com/dqw6qvymf/image/upload/v1752604687/profile3_t7upvy.svg"
          alt="ravatar  user image"
          width={100}
          height={100}
          className="mb-3 w-[24%]"
        />
        <div
          className={`${bgColor} rounded-full w-[24%] border lg:h-[160px] md:h-[130px] h-[60px] flex justify-center items-center`}
        >
          <FaPlus />
        </div>
      </div>
      <div className={`${bgColor} p-4 py-6 lg:p-8 md:p-6 rounded-2xl my-6`}>
        <p className="font-semibold">Account Profile</p>
        <div className="flex justify-between items-center flex-col lg:flex-row md:flex-row my-4">
          <div className="flex flex-col w-[100%] lg:w-[48%] md:w-[48%]">
            <label htmlFor="" className="mb-2 text-[14px]">
              Username
            </label>
            <input
              type="text"
              placeholder="Enter a name"
              className="rounded-full px-5 py-3 border border-white/22 text-[14px] w-[100%] mb-3"
            />
          </div>
          <div className="flex flex-col w-[100%] lg:w-[48%] md:w-[48%]">
            <label htmlFor="" className="mb-2 text-[14px]">
              X handle
            </label>
            <input
              type="text"
              placeholder="Enter your X handle"
              className="rounded-full px-5 py-3 border border-white/22 text-[14px] w-[100%] mb-3"
            />
          </div>
        </div>
        <div className="flex justify-between items-center flex-col lg:flex-row md:flex-row my-4">
          <div className="flex flex-col w-[100%] lg:w-[48%] md:w-[48%]">
            <label htmlFor="" className="mb-2 text-[14px]">
              Email address
            </label>
            <input
              type="text"
              placeholder="Enter an email"
              className="rounded-full px-5 py-3 border border-white/22 text-[14px] w-[100%] mb-3"
            />
          </div>
          <div className="flex flex-col w-[100%] lg:w-[48%] md:w-[48%]">
            <label htmlFor="" className="mb-2 text-[14px]">
              Instagram handle
            </label>
            <input
              type="text"
              placeholder="Enter your IG handle"
              className="rounded-full px-5 py-3 border border-white/22 text-[14px] w-[100%] mb-3"
            />
          </div>
        </div>
        <div className="flex justify-between items-center flex-col lg:flex-row md:flex-row my-4">
          <div className="flex flex-col w-[100%] lg:w-[48%] md:w-[48%]">
            <label htmlFor="" className="mb-2 text-[14px]">
              Other profile
            </label>
            <input
              type="text"
              placeholder="Enter a medium, behance... profile"
              className="rounded-full px-5 py-3 border border-white/22 text-[14px] w-[100%] mb-3"
            />
          </div>
          <div className="flex flex-col w-[100%] lg:w-[48%] md:w-[48%]">
            <label htmlFor="" className="mb-2 text-[14px]">
              LinkedIn handle
            </label>
            <input
              type="text"
              placeholder="Enter your linkedin handle"
              className="rounded-full px-5 py-3 border border-white/22 text-[14px] w-[100%] mb-3"
            />
          </div>
        </div>
        <div className="w-[100%] lg:w-[60%] md:w-[60%] my-4 mx-auto">
          <button className="bg-gradient-to-r from-orange to-lightOrange rounded-xl text-white p-3 w-[100%]">
            Submit
          </button>
        </div>
      </div>
    </main>
    </ProtectedRoute>
  );
};

export default Settings;
