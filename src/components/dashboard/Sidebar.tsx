"use client";

import { IoSettingsOutline, IoLibrary } from "react-icons/io5";
import { TbSmartHome, TbHelpSquare } from "react-icons/tb";
import { GiOpenPalm } from "react-icons/gi";
import { LuMessageCircle } from "react-icons/lu";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const currentPath = usePathname();
 
  const isActive = (path:string) =>
    currentPath === path ? "bg-white/5 rounded-[10px] border border-white/10 shadow-lg p-2" : "";

  return (
    <div
      className="w-[20%] text-white p-8 py-12 h-[100vh] hidden lg:flex md:flex flex-col border-r bottom-2 border-white/20 overflow-y-scroll lg:max-h-[982px] md:max-h-[960px] no-scrollbar bg-[#080514]"
    >
      <Link href="/">
        <Image
          src="https://res.cloudinary.com/dqw6qvymf/image/upload/v1752604683/logo_jpexvw.svg"
          alt="Itura's logo"
          width={100}
          height={100}
          className="mb-20"
        />
      </Link>
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
      <div className="border-t border-b border-white/30 mb-10 mt-4 py-6">
        <Link
          href="/dashboard/settings"
          className={`text-[13px] flex items-center py-4 mb-2 px-4 font-medium ${isActive(
            "/dashboard/settings"
          )}`}
        >
          <IoSettingsOutline className="mr-2 text-2xl" />
          Setting
        </Link>
        <Link
          href="/dashboard/support"
          className={`text-[13px] flex items-center py-4 px-4 font-medium"
   ${isActive("/dashboard/support")}`}
        >
          <TbHelpSquare className="mr-2 text-2xl" />
          Get Pro Support
        </Link>
      </div>
      <div>
        <Link href="/dashboard/history">
          <h2 className="lg:text-[24px] md:text-[24px] text-[18px] font-instrumentSerif italic">
            History
          </h2>
        </Link>
        <div className="my-4">
          <p className="font-medium text-[12px]">Music matching for mood</p>
          <p className="text-[10px]">
            Slow cool music for feeling very sad about my....
          </p>
        </div>

      </div>
    </div>
  );
};

export default Sidebar;
