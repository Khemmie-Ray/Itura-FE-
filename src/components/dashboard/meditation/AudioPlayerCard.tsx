"use client";

import React, { useRef, useState, useEffect } from "react";
import {
  FaPlay,
  FaPause,
  FaStepBackward,
  FaStepForward,
  FaHeart,
  FaRedoAlt,
  FaRandom,
  FaVolumeDown,
  FaVolumeUp,
} from "react-icons/fa";

interface CustomAudioPlayerProps {
  title: string;
  src: string;
  duration: number;
}

const AudioPlayerCard: React.FC<CustomAudioPlayerProps> = ({
  title,
  src,
  duration,
}) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolume] = useState(0.5);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    const audio = audioRef.current;
    if (audio) setCurrentTime(audio.currentTime);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = Number(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) audioRef.current.volume = newVolume;
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60)
      .toString()
      .padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.volume = volume;
    }
  }, [volume]);

  return (
    <div className="flex flex-col gap-2 bg-transparent text-white font-medium w-full my-8">
      <audio
        ref={audioRef}
        src={src}
        onTimeUpdate={handleTimeUpdate}
        onEnded={() => setIsPlaying(false)}
      />

      <div className="flex items-center justify-between lg:flex-row md:flex-row flex-col ">
        <div className="flex items-center justify-between lg:w-[15%] md:w-[24%] w-[100%] lg:order-1 md:order-1 order-2 mb-3">
          <button className="hover:text-gray-400 transition">
            <FaStepBackward size={20} />
          </button>

          <button
            onClick={togglePlay}
            className="w-12 h-12 rounded-full bg-[#2A273F] flex items-center justify-center hover:bg-[#3B3758] transition"
          >
            {isPlaying ? <FaPause size={20} /> : <FaPlay size={20} />}
          </button>

          <button className="hover:text-gray-400 transition">
            <FaStepForward size={20} />
          </button>
        </div>

        <div className="flex flex-col flex-grow mx-6  lg:w-[45%] md:w-[45%] w-[100%] lg:order-2 md:order-2 order-1 mb-3">
          <span className="text-sm mb-1 text-gray-300">{title}</span>
          <div className="flex items-center gap-3">
            <span className="text-xs text-gray-400">
              {formatTime(currentTime)}
            </span>
            <div className="relative flex-grow h-1 bg-gray-700 rounded-full">
              <div
                className="absolute top-0 left-0 h-1 bg-white rounded-full"
                style={{
                  width: `${(currentTime / duration) * 100}%`,
                }}
              />
              <div
                className="absolute w-3 h-3 bg-white rounded-full -top-1 transform"
                style={{
                  left: `calc(${(currentTime / duration) * 100}% - 6px)`,
                }}
              />
            </div>
            <span className="text-xs text-gray-400">
              {formatTime(duration)}
            </span>
          </div>
        </div>

        <div className="flex items-center justify-between lg:w-[30%] md:w-[24%] w-[100%] mb-3 order-3">
          <button className="hover:text-gray-400 transition">
            <FaHeart size={16} />
          </button>
          <button className="hover:text-gray-400 transition">
            <FaRedoAlt size={16} />
          </button>
          <button className="hover:text-gray-400 transition">
            <FaRandom size={16} />
          </button>

          <div className="flex items-center gap-2 w-32">
            <FaVolumeDown size={16} className="text-gray-400" />
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={volume}
              onChange={handleVolumeChange}
              className="w-full accent-pink-400"
            />
            <FaVolumeUp size={16} className="text-gray-400" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AudioPlayerCard;
