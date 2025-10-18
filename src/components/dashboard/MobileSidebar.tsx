"use client";

import React, { useState, useEffect } from "react";
import { IoSettingsOutline, IoLibrary } from "react-icons/io5";
import { Divide as Hamburger } from "hamburger-react";
import { TbSmartHome, TbHelpSquare } from "react-icons/tb";
import { GiOpenPalm } from "react-icons/gi";
import { LuMessageCircle } from "react-icons/lu";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FaCircleNodes } from "react-icons/fa6";
import { IoHeadsetSharp } from "react-icons/io5";

const MobileSidebar = () => {
  const [isOpen, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const currentPath = usePathname();

  const isActive = (path: string) =>
    currentPath === path
      ? "bg-white/10 rounded-[10px] border border-white/10 shadow-lg p-2"
      : "";

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setScrolled(currentScrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const bgClass = "bg-white/10";

  return (
    <div className="relative w-[100%] z-30">
      <div className="lg:hidden md:hidden items-center flex">
        <div className="flex items-center justify-between my-3 py-2 px-4 rounded-xl border border-white/10 w-[90%] mx-auto">
          <Hamburger
            toggled={isOpen}
            toggle={setOpen}
            color="#FFF"
            direction="left"
          />
          {isOpen && (
            <div className="bg-darkBg absolute top-20 w-[70%] border rounded-[21px] border-white/20 p-6 z-50">
              <Link
                href="/dashboard"
                className={`text-[13px] flex items-center py-4 mb-2 px-4 font-medium ${isActive(
                  "/dashboard"
                )}`}
              >
                <TbSmartHome className="mr-2 text-2xl" />
                Dashboard
              </Link>
              <Link
                href="/dashboard/journal"
                className={`text-[13px] flex items-center py-4 mb-2 px-4 font-medium ${isActive(
                  "/dashboard/journal"
                )}`}
              >
                <LuMessageCircle className="mr-2 text-2xl" />
                Journal
              </Link>
              <Link
                href="/dashboard/library"
                className={`text-[13px] flex items-center py-4 mb-2 px-4 font-medium ${isActive(
                  "/dashboard/library"
                )}`}
              >
                <IoLibrary className="mr-2 text-2xl" />
                Library
              </Link>
              <Link
                href="/dashboard/oracle-reading"
                className={`text-[13px] flex items-center py-4 mb-2 px-4 font-medium ${isActive(
                  "/dashboard/oracle-reading"
                )}`}
              >
                <GiOpenPalm className="mr-2 text-2xl" />
                Oracle Readings
              </Link>
              <Link
                href="/dashboard/meditation"
                className={`text-[13px] flex items-center py-4 mb-2 px-4 font-medium ${isActive(
                  "/dashboard/meditation"
                )}`}
              >
                <IoHeadsetSharp className="mr-2 text-2xl" />
                Meditation
              </Link>
              <Link
                href="/dashboard/astrology"
                className={`text-[13px] flex items-center py-4 mb-2 px-4 font-medium ${isActive(
                  "/dashboard/astrology"
                )}`}
              >
                <FaCircleNodes className="mr-2 text-2xl" />
                Astrology
              </Link>
              <div className="border-t border-white/30 mb-10 mt-4 py-6">
                <Link
                  href="/dashboard/settings"
                  className={`text-[13px] flex items-center py-4 mb-2 px-4 font-medium" ${isActive(
                    "/dashboard/settings"
                  )}`}
                >
                  <IoSettingsOutline className="mr-2 text-2xl" />
                  Setting
                </Link>
                <Link
                  href="/dashboard/support"
                  className={`text-[13px] flex items-center py-4 px-4 font-medium" ${isActive(
                    "/dashboard/support"
                  )}`}
                >
                  <TbHelpSquare className="mr-2 text-2xl" />
                  Get Pro Support
                </Link>
              </div>
            </div>
          )}
          <Image
            src="https://res.cloudinary.com/dqw6qvymf/image/upload/v1752604683/logo_jpexvw.svg"
            alt="Itura's logo"
            width={50}
            height={50}
            className="w-[70px]"
          />
        </div>
        {scrolled && (
          <div className="flex items-center w-[100%] justify-between  py-4 z-50 fixed top-0 left-0 px-6 bg-[#030A04]">
            <Hamburger
              toggled={isOpen}
              toggle={setOpen}
              color="#FFF"
              direction="left"
            />
            {isOpen && (
              <div className="bg-darkBg absolute top-24 w-[70%] border rounded-[21px] border-white/20 p-6">
                <Link
                  href="/dashboard"
                  className={`text-[13px] flex items-center py-4 mb-2 px-4 font-medium" ${isActive(
                    "/dashboard"
                  )}`}
                >
                  <TbSmartHome className="mr-2 text-2xl" />
                  Dashboard
                </Link>
                <Link
                  href="/dashboard/journal"
                  className={`text-[13px] flex items-center py-4 mb-2 px-4 font-medium" ${isActive(
                    "/dashboard/journal"
                  )}`}
                >
                  <LuMessageCircle className="mr-2 text-2xl" />
                  Journal
                </Link>
                <Link
                  href="/dashboard/library"
                  className={`text-[13px] flex items-center py-4 mb-2 px-4 font-medium" ${isActive(
                    "/dashboard/library"
                  )}`}
                >
                  <IoLibrary className="mr-2 text-2xl" />
                  Library
                </Link>
                <Link
                  href="/dashboard/oracle-reading"
                  className={`text-[13px] flex items-center py-4 mb-2 px-4 font-medium" ${isActive(
                    "/dashboard/oracle-reading"
                  )}`}
                >
                  <GiOpenPalm className="mr-2 text-2xl" />
                  Oracle Readings
                </Link>
                <Link
                  href="/dashboard/meditation"
                  className={`text-[13px] flex items-center py-4 mb-2 px-4 font-medium ${isActive(
                    "/dashboard/meditation"
                  )}`}
                >
                  <IoHeadsetSharp className="mr-2 text-2xl" />
                  Meditation
                </Link>
                <Link
                  href="/dashboard/astrology"
                  className={`text-[13px] flex items-center py-4 mb-2 px-4 font-medium ${isActive(
                    "/dashboard/astrology"
                  )}`}
                >
                  <FaCircleNodes className="mr-2 text-2xl" />
                  Astrology
                </Link>
                <div className="border-t border-white/30 mb-10 mt-4 py-6">
                  <Link
                    href="/dashboard/settings"
                    className={`text-[13px] flex items-center py-4 mb-2 px-4 font-medium"
 ${isActive("{`dashboard/settings")}`}
                  >
                    <IoSettingsOutline className="mr-2 text-2xl" />
                    Setting
                  </Link>
                  <Link
                    href="/dashboard/help"
                    className={`text-[13px] flex items-center mb-2 py-4 px-4 font-medium"
 ${isActive("{`dashboard/help")}`}
                  >
                    <TbHelpSquare className="mr-2 text-2xl" />
                    Help
                  </Link>
                  <Link
                    href="/dashboard/support"
                    className={`text-[13px] flex items-center py-4 px-4 font-medium"
 ${isActive("{`dashboard/support")}`}
                  >
                    <TbHelpSquare className="mr-2 text-2xl" />
                    Get Pro Support
                  </Link>
                </div>
              </div>
            )}
            <Image
              src="https://res.cloudinary.com/dqw6qvymf/image/upload/v1757346064/logo_jpexvw_n5awr6.png"
              alt="Itura's logo"
              width={50}
              height={50}
              className="w-[70px]"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default MobileSidebar;
