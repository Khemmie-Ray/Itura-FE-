"use client";

import React, { useState, useEffect } from "react";
import { FaCircleDot } from "react-icons/fa6";

const MoodBoard = () => {
  const [currentDay, setCurrentDay] = useState("");

  useEffect(() => {
    const today = new Date();
    const options: Intl.DateTimeFormatOptions = { weekday: "short" };
    const dayOfWeek = today.toLocaleDateString("en-US", options);
    setCurrentDay(dayOfWeek);
  }, []);

  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  return (
    <div>
      <div className="flex w-[90%] items-center justify-between lg:w-[80%] md:w-[80%] mx-auto my-20">
        {days.map((listedDay) => (
          <div
            key={listedDay}
            className={`flex flex-col items-center lg:px-4 md:px-2 px-1 py-2 rounded-xl 
            ${
              listedDay === currentDay
                ? "bg-orange text-white lg:py-4 md:py-4 py-2 rounded-[22px]"
                : "bg-transparent text-white"
            }`}
          >
            <FaCircleDot
              className={`mb-1 lg:text-2xl md:text-xl text-lg ${
                listedDay === currentDay ? "text-white" : "text-orange"
              }`}
            />
            <p className="text-[9px] lg:text-[16px] md:text-[16px] font-medium">
              {listedDay}
            </p>
          </div>
        ))}
      </div>
      <div className="bg-white/10 border rounded-2xl border-white/10 flex justify-center items-center p-4">
        <div className="bg-[#16A987] h-[140px] w-[100%] rounded-2xl flex items-center justify-center">
          <div className="bg-white text-2xl rounded-full p-4 h-[50px] w-[50px] flex justify-center items-center">
            <p>😤</p>
          </div>
          <div className="">
            <h3 className="lg:text-[28px] md:text-[20px] text-[12px] font-semibold ml-2">
              Angry
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoodBoard;
