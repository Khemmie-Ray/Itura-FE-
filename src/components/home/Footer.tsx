import React from "react";
import Image from "next/image";
import Link from "next/link";
import { TfiLinkedin } from "react-icons/tfi";
import { CgFacebook } from "react-icons/cg";
import { AiOutlineInstagram } from "react-icons/ai";
import { RiTwitterXFill } from "react-icons/ri";
import { PiYoutubeLogoFill } from "react-icons/pi";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-darkBg px-6 mx-auto  text-white font-dmSans">
      <div className="bg-footerBg">
        <div className="border-white/10 border-t border-l border-r rounded-tr-2xl rounded-2xl">
          <div className="flex lg:justify-between text-center lg:text-left md:text-left w-[100%] lg:w-[80%] md:w-[80%] mx-auto py-20 lg:flex-row md:flex-row flex-col">
            <div className="w-[30%] lg:mx-0 md:mx-0 mx-auto">
              <Image
                src="https://res.cloudinary.com/dqw6qvymf/image/upload/v1752604683/mark_roa5ys.svg"
                alt="Itura's logo"
                width={202}
                height={160}
                className="mb-6"
              />
            </div>
            <div className="flex justify-between  w-[100%] lg:w-[60%] md:w-[60%] mx-auto lg:flex-row md:flex-row flex-col">
              <div className="flex flex-col w-[100%] lg:w-[32%] md:w-[32%] mb-4">
                <p className="font-bold text-[18px] mb-5">About</p>
                <Link href="/" className="mb-2">Partners</Link>
                <Link href="/" className="mb-2">Careers</Link>
                <Link href="/" className="mb-2">Press</Link>
                <Link href="/" className="mb-2">Community</Link>
              </div>
              <div className="flex flex-col w-[100%] lg:w-[32%] md:w-[32%] mb-4">
                <p className="font-bold text-[18px] mb-5">Community</p>
                <Link href="/" className="mb-2">Event</Link>
                <Link href="/" className="mb-2">Blog</Link>
                <Link href="/" className="mb-2">Forum</Link>
                <Link href="/" className="mb-2">Podcast</Link>
                <Link href="/" className="mb-2">Telegram</Link>
              </div>
              <div className="flex flex-col w-[100%] lg:w-[32%] md:w-[32%] mb-4">
                <p className="font-bold text-[18px] mb-5">Our Office</p>
                <p className="mb-2">
                  8 The Green, Dover, Delaware 19901 United States
                </p>
                <p className="mb-2">4 Barnawa Close, Barnawa, Kaduna</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center w-[90%] mx-auto border-t border-white/10 py-8 lg:flex-row md:flex-row flex-col text-[14px] text-center lg:text-left md:text-left">
          <p className="mb-3 order-2 lg:order-1 md:order-1">
            &copy; {currentYear} EncompassWell All rights reserved.
          </p>
          <div className="w-[70%] lg:w-[30%] md:w-[30%] flex justify-between mb-3 mx-auto order-1 lg:order-2 md:order-2">
            <Link href="/" className="mr-5">Privacy</Link>
            <Link href="/" className="mr-5">Security</Link>
            <Link href="/">Terms</Link>
          </div>
          <div className="flex mb-3 order-3">
            <div className="p-3 bg-white rounded-full text-black mr-4">
              <TfiLinkedin />
            </div>
            <div className="p-3 bg-white rounded-full text-black mr-4">
              <CgFacebook />
            </div>
            <div className="p-3 bg-white rounded-full text-black mr-4">
              <AiOutlineInstagram />
            </div>
            <div className="p-3 bg-white rounded-full text-black mr-4">
              <RiTwitterXFill />
            </div>
            <div className="p-3 bg-white rounded-full text-black">
              <PiYoutubeLogoFill />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
