"use client";

import React from "react";
import Profile from "@/components/dashboard/Profile";
import { BsSearch } from "react-icons/bs";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { FaPlay, FaPause } from "react-icons/fa6";
import Image from "next/image";
import AudioPlayerCard from "@/components/dashboard/meditation/AudioPlayerCard";

const Meditation = () => {
  type MusicItem = {
    title: string;
    description: string;
    status: "play" | "pause" | "stopped"; // restricts allowed values
    duration: string; // could also be number if you store seconds instead
  };

  const musicData: MusicItem[] = [
    {
      title: "Morning Stillness",
      description: "Gentle wind and piano for grounding your thoughts.",
      status: "play",
      duration: "3.04",
    },
  ];

  return (
    <div className="w-[90%] mx-auto relative z-20">
      <div className="flex justify-between">
        <div className="mb-10">
          <h1 className="lg:text-[24px] md:text-[22px] text-[18px] font-[500] bg-gradient-to-b from-[#F5F4F7] via-[#F3F2F5] to-[#B0ADBF] inline-block text-transparent bg-clip-text">
            Meditation Sounds
          </h1>
          <p className="text-[14px]">Find calm. Focus your mind. Breathe.</p>
        </div>
        <Profile />
      </div>
      <div className="w-[90%] mr-auto">
        <div className="flex items-center justify-between">
          <div className="lg:w-[88%] md:w-[88%] w-[100%] mb-3">
            <InputGroup className="rounded-full border-white/30 px-4 py-5">
              <InputGroupInput placeholder="search meditation sounds..." />
              <InputGroupAddon>
                <BsSearch />
              </InputGroupAddon>
            </InputGroup>
          </div>
          <div className=" w-[10%]">
            <Select>
              <SelectTrigger className="rounded-full border-white/30 py-5 px-4 mb-3">
                <SelectValue placeholder="All" />
              </SelectTrigger>
              <SelectContent className="bg-black/50 rounded-[34px] p-4 border-white/10 text-white hover:bg-black">
                <SelectGroup>
                  <SelectLabel>All</SelectLabel>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
      <div className="w-[90%] mr-auto">
        <div>
          {musicData.map((info, index) => (
            <div key={index} className="flex justify-between items-center py-3">
              <div className="w-[100%] lg:w-[49%] md:w-[49%] bg-black/20 rounded-[21px] p-8 border border-white/15 mb-auto">
                <div className="flex justify-between border-b border-white/15 py-4">
                  <div className="w-[80%]">
                    <h3 className="font-medium">{info.title}</h3>
                    <p className="text-[#8695A0] text-[10px]">
                      {info.description}
                    </p>
                  </div>
                  <div className="flex items-center flex-col text-white">
                    <p className="text-[10px]">{info.duration}</p>
                    {info.status === "play" ? (
                      <FaPause className="cursor-pointer text-2xl my-2" />
                    ) : (
                      <FaPlay className="cursor-pointer text-2xl my-2" />
                    )}
                  </div>
                </div>
              </div>
              <div className="w-[100%] lg:w-[49%] md:w-[49%] ">
                <Image
                  src="https://res.cloudinary.com/dqw6qvymf/image/upload/v1760789279/Rectangle_161124569_xpamar.png"
                  alt=""
                  width={200}
                  height={200}
                  className="w-[100%]"
                />
              </div>
            </div>
          ))}
        </div>

        <AudioPlayerCard
          title="Morning Stillness"
          src="/audio/morning-stillness.mp3"
          duration={250}
        />
      </div>
    </div>
  );
};

export default Meditation;
