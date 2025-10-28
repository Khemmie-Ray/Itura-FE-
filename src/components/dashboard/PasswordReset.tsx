"use client";

import React, { useState } from "react";
import Image from "next/image";
import { toast } from "sonner";
import { useAegis } from "@cavos/aegis";
import ResetPasswordModal from "@/components/dashboard/ResetPasswordModal";
import { useRouter } from "next/navigation";

const PasswordReset = () => {
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({ email: false, password: false });
  const [resetLoading, setResetLoading] = useState(false);
  const { aegisAccount } = useAegis();
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const close = () => {
    setIsOpen(false);
    router.replace("/login");
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEmailBlur = () => {
    if (!validateEmail(email)) {
      setErrors((prev) => ({ ...prev, email: true }));
      toast.error("Please enter a valid email address.", {
        style: { border: "1px solid red" },
      });
    } else {
      setErrors((prev) => ({ ...prev, email: false }));
    }
  };

  const handleReset = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    setResetLoading(true);
    try {
      const result = await aegisAccount.passwordReset(email);
      if (result.ok) {
        setIsOpen(true);
      } else {
        toast.error("An unexpected error occurred");
      }
    } catch (err: any) {
      toast.error("Failed to reset");
    } finally {
      setResetLoading(false);
    }
  };

  return (
    <div className="lg:w-[40%] md:w-[40%] w-[90%] m-auto flex flex-col items-center">
      <div className="inline-flex items-center rounded-full mt-10 p-[2px] bg-[radial-gradient(circle_at_center,_#FFFFFF80,_#FFFFFF10)]">
        <div className="bg-black flex items-center px-4 py-2 rounded-full">
          <div className="rounded-full bg-[#FFE1BE] p-1 flex items-center justify-center w-[30px] h-[30px] mr-2">
            <Image
              src="https://res.cloudinary.com/dqw6qvymf/image/upload/v1752604684/marklogo_o2ba0x.svg"
              alt=""
              width={20}
              height={20}
              className="w-full h-full object-contain"
            />
          </div>
          <p className="text-[16px] lg:text-[20px] md:text-[20px] font-medium bg-gradient-to-b from-[#FF8900] to-[#FFBD70] text-transparent bg-clip-text">
            Itura
          </p>
        </div>
      </div>
      <div className="relative z-30">
        <h1 className="text-[40px] bg-gradient-to-b from-[#F5F4F7] via-[#F3F2F5] to-[#B0ADBF] inline-block text-transparent bg-clip-text lg:text-[70px] md:text-[70px] font-medium text-center lg:leading-20 md:leading-18 leading-12">
          Reset Password
        </h1>
        <p className="text-[#A39EB6]">
          Please input your email to continue with the password reset
        </p>
      </div>
      <form className="flex flex-col w-[100%] my-12" onSubmit={handleReset}>
        <p className="mb-2">Email Address</p>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onBlur={handleEmailBlur}
          className={`p-4 rounded-[18px] bg-transparent border w-full mb-3 focus:outline-none ${
            errors.email ? "border-red-500" : "border-white/20"
          }`}
        />
        <button
          type="submit"
          disabled={resetLoading}
          className="bg-gradient-to-r from-orange to-lightOrange rounded-xl hover:from-orange/10 hover:to-lightOrange/10 hover:border-orange/40 hover:border hover:text-orange text-white p-4 my-4 px-6 font-medium disabled:opacity-50 lg:w-[40%] mx-auto md:w-[50%] w-[100%] transition-all duration-300"
        >
          {resetLoading ? "resetting..." : "Explore"}
        </button>
      </form>
      <ResetPasswordModal isOpen={isOpen} close={close} />
    </div>
  );
};

export default PasswordReset;
