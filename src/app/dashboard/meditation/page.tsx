"use client";

import React, { useState, useRef } from "react";
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
import { FaPause } from "react-icons/fa6";
import Image from "next/image";
import AudioPlayerCard from "@/components/dashboard/meditation/AudioPlayerCard";

const Meditation = () => {
  type MusicItem = {
    id: number;
    title: string;
    description: string;
    duration: number;
    source: string;
    tone: "female" | "male";
  };

  const musicData: MusicItem[] = [
    {
      id: 1,
      source:
        "https://res.cloudinary.com/dqw6qvymf/video/upload/v1760954949/GuidedMeditation_2_Gratitude_revised031518Female_sybulw.mp3",
      title: "Gratitude",
      tone: "female",
      duration: 538,
      description: "Gentle wind and piano for grounding your thoughts.",
    },
    {
      id: 2,
      source:
        "https://res.cloudinary.com/dqw6qvymf/video/upload/v1760954987/GuidedMeditation_5_Gratitude__Male_Voice_f0v8o3.mp3",
      title: "Gratitude",
      tone: "male",
      duration: 639,
      description:
        "A calm male voice guides you through reflections of appreciation and balance.",
    },
    {
      id: 3,
      source:
        "https://res.cloudinary.com/dqw6qvymf/video/upload/v1760954985/GuidedMeditation_3_BodyScan_revised031518Female_ks537v.mp3",
      title: "Body Scan",
      tone: "female",
      duration: 534,
      description:
        "A soothing scan through your body’s sensations to release tension and restore focus.",
    },
    {
      id: 4,
      source:
        "https://res.cloudinary.com/dqw6qvymf/video/upload/v1760954999/GuidedMeditation_6_Body_Scan__Male_Voice_gzjkpe.mp3",
      title: "Body Scan",
      tone: "male",
      duration: 750,
      description:
        "A grounded male narration guiding you to connect with each part of your body in still awareness.",
    },
    {
      id: 5,
      source:
        "https://res.cloudinary.com/dqw6qvymf/video/upload/v1760955013/GuidedMeditation-LovingKindness_FIXED_qvvwsm.mp3",
      title: "Loving Kindness",
      tone: "female",
      duration: 666,
      description:
        "A warm female voice leads you to open your heart toward compassion and self-acceptance.",
    },
    {
      id: 6,
      source:
        "https://res.cloudinary.com/dqw6qvymf/video/upload/v1760955002/GuidedMeditation_4-Loving_Kindess__Male_Voice_cnd7vr.mp3",
      title: "Loving Kindness",
      tone: "male",
      duration: 823,
      description:
        "A serene male guide helps cultivate empathy and forgiveness with mindful breathing.",
    },
  ];

  const [voicePreference, setVoicePreference] = useState<"female" | "male">(
    "female"
  );
  const [selectedAudio, setSelectedAudio] = useState<MusicItem | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const filteredMusic = musicData.filter(
    (item) => item.tone === voicePreference
  );

  const handleSelectAudio = (item: MusicItem) => {
    if (selectedAudio?.id === item.id && isPlaying) {
      audioRef.current?.pause();
      setIsPlaying(false);
      setSelectedAudio(null);
    } else {
      setSelectedAudio(item);
      setIsPlaying(true);
      setTimeout(() => {
        audioRef.current?.play();
      }, 200);
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60)
      .toString()
      .padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  return (
    <div className="relative z-30">
      <div className="flex justify-between">
        <div className="mb-10">
          <h1 className="lg:text-[24px] md:text-[22px] text-[18px] font-[500] bg-gradient-to-b from-[#F5F4F7] via-[#F3F2F5] to-[#B0ADBF] inline-block text-transparent bg-clip-text">
            Meditation Sounds
          </h1>
          <p className="text-[14px]">Find calm. Focus your mind. Breathe.</p>
        </div>
        <Profile />
      </div>
      <div className="w-[90%] mx-auto">
        <div className="lg:w-[90%] md:w-[90%] w-[100%] lg:mr-auto md:mr-auto mx-auto lg:ml-0 md:ml-0 mr-0">
          <div className="flex items-center justify-between">
            <div className="lg:w-[68%] md:w-[68%] w-[100%] mb-3">
              <InputGroup className="rounded-full border-white/30 px-4 py-5">
                <InputGroupInput placeholder="search meditation sounds..." />
                <InputGroupAddon>
                  <BsSearch />
                </InputGroupAddon>
              </InputGroup>
            </div>
            <div className="w-[30%]">
              <Select
                defaultValue="female"
                onValueChange={(val) =>
                  setVoicePreference(val as "female" | "male")
                }
              >
                <SelectTrigger className="rounded-full border-white/30 py-5 px-4 mb-3">
                  <SelectValue placeholder="Voice Preference" />
                </SelectTrigger>
                <SelectContent className="bg-black/50 rounded-[34px] p-4 border-white/10 text-white hover:bg-black">
                  <SelectGroup>
                    <SelectLabel>Select a voice</SelectLabel>
                    <SelectItem value="female">Female</SelectItem>
                    <SelectItem value="male">Male</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
        <div className="lg:w-[90%] md:w-[90%] w-[100%] lg:mr-auto md:mr-auto mx-auto lg:ml-0 md:ml-0 mr-0">
          <div className="flex justify-between flex-wrap">
            <div className="flex flex-col w-[100%] lg:w-[49%] md:w-[49%] bg-black/20 rounded-[21px] p-8 border border-white/15">
              {filteredMusic.map((info) => (
                <div
                  key={info.id}
                  className="flex justify-between border-b border-white/15 py-4 cursor-pointer last:border-b-0"
                  onClick={() => handleSelectAudio(info)}
                >
                  <div className="w-[80%]">
                    <h3 className="font-medium">{info.title}</h3>
                    <p className="text-[#8695A0] text-[10px]">
                      {info.description}
                    </p>
                  </div>
                  <div className="flex items-center flex-col text-white">
                    <p className="text-[10px]">{formatTime(info.duration)}</p>
                    {selectedAudio?.id === info.id && isPlaying && (
                      <FaPause className="text-2xl my-2 text-white" />
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="w-[100%] lg:w-[49%] md:w-[49%] hidden lg:inline-flex md:inline-flex">
              <Image
                src="https://res.cloudinary.com/dqw6qvymf/image/upload/v1760789279/Rectangle_161124569_xpamar.png"
                alt="Meditation visual"
                width={200}
                height={200}
                className="w-[100%]"
              />
            </div>
          </div>

          {selectedAudio ? (
            <div className="mt-6">
              <AudioPlayerCard
                title={selectedAudio.title}
                src={selectedAudio.source}
                duration={selectedAudio.duration}
              />
            </div>
          ) : (
            <div className="mt-6">
              <AudioPlayerCard title="" src="" duration={0} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Meditation;
