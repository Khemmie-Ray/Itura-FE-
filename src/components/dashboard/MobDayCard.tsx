"use client"

import React, { useState } from "react";
import dayjs from "dayjs";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const MobDayCard = () => {
  const [currentDate, setCurrentDate] = useState(dayjs());

  const startOfMonth = currentDate.startOf("month");
  const endOfMonth = currentDate.endOf("month");
  const startDay = startOfMonth.day();
  const daysInMonth = currentDate.daysInMonth();
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const calendarCards = [];

  for (let i = 0; i < startDay; i++) {
    calendarCards.push(<div key={`empty-${i}`} className="bg-transparent" />);
  }

  for (let day = 1; day <= daysInMonth; day++) {
    const thisDay = startOfMonth.date(day);
    const isToday = thisDay.isSame(dayjs(), "day");

    calendarCards.push(
      <div
        key={day}
        className="border-b border-white/20  min-h-[80px] p-3"
      >
        <div className="text-sm font-semibold text-white">
          {thisDay.format("D")}
        </div>
      </div>
    );
  }

  return (
    <div className=" px-10 block lg:hidden md:hidden">
      <div className="flex justify-between items-center border-t border-white/20 pt-6">
        <h2 className="text-[16px] font-[600] lg:text-[22px] md:text-[20px]">{currentDate.format("MMMM YYYY")}</h2>
        <div className="inline-flex  items-center mb-4 bg-[#292932]">
          <button
            onClick={() => setCurrentDate(currentDate.subtract(1, "month"))}
            className="text-sm  border  border-white/10 py-2 px-3"
          >
            <FaChevronLeft />
          </button>
          <h2 className="text-[13px] font-bold mx-2">
            {currentDate.format("MMMM YYYY")}
          </h2>
          <button
            onClick={() => setCurrentDate(currentDate.add(1, "month"))}
            className="text-sm py-2 px-3 border rounded border-white/10"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>

      <div className="py-6">
        <div className="grid grid-cols-7 gap-4 text-center mb-2 text-gray-600 font-medium">
          {daysOfWeek.map((d) => (
            <div
              key={d}
              className="p-3 text-white uppercase text-[13px] font-600"
            >
              {d}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-7">{calendarCards}</div>
      </div>
    </div>
  );
};

export default MobDayCard;