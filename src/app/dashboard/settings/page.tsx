"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaPlus } from "react-icons/fa6";
import Profile from "@/components/dashboard/Profile";
import { useGetUserDetails } from "@/hooks/useGetUserDetails";
import { useUpdateUser } from "@/hooks/useUpdateUser";
import { useAuth } from "@/context/AuthContext";
import { toast } from "sonner";

const Settings = () => {
  const bgColor = "bg-white/10 border-white/20";
  const { userId } = useAuth();
  const { data, isLoading, isError } = useGetUserDetails(userId);
  const updateUser = useUpdateUser();

  const [formData, setFormData] = useState({
    userName: "",
    xhandle: "",
    instagramHandle: "",
    figmaHandle: "",
    linkedInHandle: "",
  });

  useEffect(() => {
    if (data?.data) {
      setFormData({
        userName: data?.data.userName === "string" ? "" : data.data.userName,
        xhandle: data?.data.xhandle === "string" ? "" : data.data.xhandle,
        instagramHandle:
          data?.data.instagramHandle === "string"
            ? ""
            : data.data.instagramHandle,
        figmaHandle:
          data?.data.figmaHandle === "string" ? "" : data.data.figmaHandle,
        linkedInHandle:
          data?.data.linkedInHandle === "string"
            ? ""
            : data.data.linkedInHandle,
      });
    }
  }, [data]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userId) return;
  
    updateUser.mutate(
      {
        userId,
        payload: formData,
      },
      {
        onSuccess: (response) => {
          toast.success("✅ Profile updated successfully!");
          console.log("Response:", response);
        },
        onError: (error: any) => {
          toast.error("Failed to update profile. Please try again.");
          console.error(error);
        },
      }
    );
  };  

  if (isLoading) return <p>Loading user details...</p>;
  if (isError) return <p>Failed to load user details.</p>;

  return (
    <main className="lg:relative md:relative w-[90%] lg:w-[80%] md:w-[80%] mx-auto my-8 lg:z-20 md:z-20">
      <Profile />
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

      <form
        onSubmit={handleSubmit}
        className={`${bgColor} p-4 py-6 lg:p-8 md:p-6 rounded-2xl my-6 text-white`}
      >
        <p className="font-semibold">Account Profile</p>

        <div className="flex justify-between items-center flex-col lg:flex-row md:flex-row my-4">
          <div className="flex flex-col w-[100%] lg:w-[48%] md:w-[48%]">
            <label className="mb-2 text-[14px]">Username</label>
            <input
              name="userName"
              value={formData.userName}
              onChange={handleChange}
              type="text"
              placeholder="Enter a name"
              className="rounded-full px-5 py-3 border border-white/15 text-[14px] w-full mb-3 bg-white/10"
            />
          </div>

          <div className="flex flex-col w-[100%] lg:w-[48%] md:w-[48%]">
            <label className="mb-2 text-[14px]">X handle</label>
            <input
              name="xhandle"
              value={formData.xhandle}
              onChange={handleChange}
              type="text"
              placeholder="Enter your X handle"
              className="rounded-full px-5 py-3 border border-white/15 text-[14px] w-full mb-3 bg-white/10"
            />
          </div>
        </div>

        <div className="flex justify-between items-center flex-col lg:flex-row md:flex-row my-4">
          <div className="flex flex-col w-[100%] lg:w-[48%] md:w-[48%]">
            <label className="mb-2 text-[14px]">Instagram handle</label>
            <input
              name="instagramHandle"
              value={formData.instagramHandle}
              onChange={handleChange}
              type="text"
              placeholder="Enter your IG handle"
              className="rounded-full px-5 py-3 border border-white/15 text-[14px] w-full mb-3 bg-white/10"
            />
          </div>

          <div className="flex flex-col w-[100%] lg:w-[48%] md:w-[48%]">
            <label className="mb-2 text-[14px]">LinkedIn handle</label>
            <input
              name="linkedInHandle"
              value={formData.linkedInHandle}
              onChange={handleChange}
              type="text"
              placeholder="Enter your LinkedIn handle"
              className="rounded-full px-5 py-3 border border-white/15 text-[14px] w-full mb-3 bg-white/10"
            />
          </div>
        </div>
        <div className="flex flex-col w-[100%]">
          <label className="mb-2 text-[14px]">Figma URL/Portfolio URL</label>
          <input
            name="figmaHandle"
            value={formData.figmaHandle}
            onChange={handleChange}
            type="text"
            placeholder="Enter your X handle"
            className="rounded-full px-5 py-3 border border-white/15 text-[14px] w-full mb-3 bg-white/10"
          />
        </div>

        <div className="w-full lg:w-[60%] md:w-[60%] my-4 mx-auto">
          <button
            type="submit"
            disabled={updateUser.isPending}
            className="bg-gradient-to-r from-orange to-lightOrange rounded-xl text-white p-3 w-full"
          >
            {updateUser.isPending ? "Updating..." : "Submit"}
          </button>
        </div>
      </form>
    </main>
  );
};

export default Settings;
