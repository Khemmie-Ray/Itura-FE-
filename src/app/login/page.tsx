"use client";

import React, { useState, useEffect } from "react";
import { useAuth } from "@/context/AuthContext";
import { toast } from "sonner";
import Link from "next/link";
import Slider from "@/components/home/Slider";
import Image from "next/image";
import { PiEyeClosedBold, PiEyeBold } from "react-icons/pi";
import { useAegis } from "@cavos/aegis";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { login, loading, user } = useAuth();
  const [errors, setErrors] = useState({ email: false, password: false });
  const { aegisAccount } = useAegis();
  // console.log(aegisAccount);

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password: string) => {
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
    return passwordRegex.test(password);
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

  const handlePasswordBlur = () => {
    if (!validatePassword(password)) {
      setErrors((prev) => ({ ...prev, password: true }));
      toast.error(
        "Password must be at least 8 characters, contain one uppercase letter and one number.",
        {
          style: { border: "1px solid red" },
        }
      );
    } else {
      setErrors((prev) => ({ ...prev, password: false }));
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const result:any = await login(email, password);
    } finally {
      setPassword("");
      setEmail("");
    }
  };

  return (
    <div>
      <div className="w-[80%] mx-auto my-12">
        <Link href="/" className="cursor-pointer">
          <Image
            src="https://res.cloudinary.com/dqw6qvymf/image/upload/v1752604683/logo_jpexvw.svg"
            alt="Itura's logo"
            width={100}
            height={100}
          />
        </Link>
      </div>
      <Slider />
      <div className="lg:w-[30%] md:w-[40%] w-[90%] mx-auto flex flex-col items-center">
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

        <h1 className="text-[40px] bg-gradient-to-b from-[#F5F4F7] via-[#F3F2F5] to-[#B0ADBF] inline-block text-transparent bg-clip-text lg:text-[70px] md:text-[70px] font-medium text-center lg:leading-20 md:leading-18 leading-12">
          Log In
        </h1>
        <p className="text-[#A39EB6]">
          Continue your wellness journey with Itura
        </p>

        <form className="flex flex-col w-[100%] my-12" onSubmit={handleLogin}>
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
          <p className="mb-2 mt-4">Password</p>
          <div className="relative w-full mb-3">
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onBlur={handlePasswordBlur}
              className={`p-4 pr-10 rounded-[18px] bg-transparent border w-full ${
                errors.password ? "border-red-500" : "border-white/20"
              }`}
            />
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
            >
              {showPassword ? (
                <PiEyeBold size={18} />
              ) : (
                <PiEyeClosedBold size={18} />
              )}
            </button>
          </div>
          <button
            type="submit"
            disabled={loading}
            className="bg-gradient-to-r from-orange to-lightOrange rounded-xl text-white p-4 my-4 px-6 font-medium disabled:opacity-50"
          >
            {loading ? "Logging in..." : "Log In"}
          </button>

          <p className="my-3 text-[12px] text-center">
            Don&apos;t have an account?{" "}
            <Link href="/signup" className="text-orange hover:underline">
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
