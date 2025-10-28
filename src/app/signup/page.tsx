"use client";

import React, { useState } from "react";
import { toast } from "sonner";
import Link from "next/link";
import Slider from "@/components/home/Slider";
import Image from "next/image";
import { PiEyeClosedBold, PiEyeBold } from "react-icons/pi";
import { useAegis } from "@cavos/aegis";
import { RxCheckCircled } from "react-icons/rx";
import { useMutation } from "@tanstack/react-query";
import axios from 'axios'

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const { aegisAccount } = useAegis();
  const [errors, setErrors] = useState({ email: false, password: false });

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

  const registerUser = useMutation({
    mutationFn: async ({
      cavosUserId,
      userWalletAddress,
    }: {
      cavosUserId: string;
      userWalletAddress: string;
    }) => {
      const { data } = await axios.post(
        "https://itura-backend-ng6nl.ondigitalocean.app/api/v1/user/register",
        {
          cavosUserId,
          userWalletAddress,
        },
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      return data;
    },

    onSuccess: (data) => {
      toast.success("User registered successfully with backend!");
      console.log("Backend response:", data);
    },

    onError: (error: any) => {
      toast.error(
        error.response?.data?.message ||
          "Something went wrong while registering to backend."
      );
      console.error(error);
    },
  });

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

  const handleRegister = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    try {
      const result:any = await aegisAccount.signUp(email, password);
      console.log("User registered:", result);
      toast.success("Registration successful!");
      console.log("Aegis result:", result);

      const cavosUserId = result.user_Id;
      const userWalletAddress = result.wallet.address;

      registerUser.mutate({ cavosUserId, userWalletAddress });
    } catch (error: any) {
      let errorMessage = "Registration failed";

      if (error?.message) {
        const match = error.message.match(/\{.*\}/);
        if (match) {
          try {
            const parsed = JSON.parse(match[0]);
            errorMessage = parsed.error || errorMessage;
          } catch {
            errorMessage = error.message;
          }
        } else {
          errorMessage = error.message;
        }
      }
      toast.error(`Registration failed ${errorMessage}`);
    }
    setLoading(false);
    close();
  };

  return (
    <div>
      <div className="w-[80%] mx-auto my-12">
        <Link href="/">
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
          Sign Up
        </h1>
        <p className="text-[#A39EB6]">
          Join Itura — connect with trusted professionals.
        </p>

        <form
          className="flex flex-col w-[100%] my-12"
          onSubmit={handleRegister}
        >
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
          <div className="relative w-full mb-1">
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
          <div className="text-[10px] bg-[#100F15] border border-[#221C38] my-6 rounded-xl p-6">
            <p className="text-[12px] mb-4">
              Password must contain the following:
            </p>
            <p className="flex items-center mb-2">
              <RxCheckCircled className="text-[14px] mr-1" /> Number
            </p>
            <p className="flex items-center mb-2">
              <RxCheckCircled className="text-[14px] mr-1" /> Lowercase
              alphabets
            </p>
            <p className="flex items-center mb-2">
              <RxCheckCircled className="text-[14px] mr-1" /> Uppercase alphabet
            </p>
          </div>
          <button
            type="submit"
            disabled={loading}
            className="bg-gradient-to-r from-orange to-lightOrange rounded-xl hover:from-orange/10 hover:to-lightOrange/10 hover:border-orange/40 hover:border hover:text-orange text-white p-4 my-4 px-6 font-medium disabled:opacity-50 lg:w-[40%] mx-auto md:w-[50%] w-[100%] transition-all duration-300"
          >
            {loading ? "Creating..." : "Register"}
          </button>
          <p className="my-3 text-[12px] text-center">
            Already have an account?{" "}
            <Link href="/login" className="text-orange hover:underline">
              Log In
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
