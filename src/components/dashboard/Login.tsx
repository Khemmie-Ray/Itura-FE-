"use client";

import React, { useState } from "react";
import { CavosAuth } from "cavos-service-sdk";
import { IoEye, IoEyeOffSharp } from "react-icons/io5";
import { SignInWithGoogle } from "cavos-service-sdk";
import { SignInWithApple } from "cavos-service-sdk";
import { toast } from "sonner";

const cavosAuth = new CavosAuth(
  "sepolia",
  process.env.NEXT_PUBLIC_CAVOS_APP_ID!
);

const Login = ({
  switchToSignup,
  close,
}: {
  switchToSignup: () => void;
  close: () => void;
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const GoogleAuth = () => {
    return (
      <SignInWithGoogle
        appId={process.env.NEXT_PUBLIC_CAVOS_APP_ID!}
        network="sepolia"
        finalRedirectUri="https://yourapp.com/auth/callback"
      />
    );
  };

  const AppleAuth = () => {
    return (
      <SignInWithApple
        appId={process.env.NEXT_PUBLIC_CAVOS_APP_ID!}
        network="sepolia"
        finalRedirectUri="https://yourapp.com/auth/callback"
      />
    );
  };

  const handleLogin = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    try {
      const result = await cavosAuth.signIn(
        email,
        password,
        process.env.NEXT_PUBLIC_CAVOS_ORG_SECRET!
      );

      toast.success(`${result.message}`);
      console.log(result);

      const accessToken = result.data.authData.accessToken;
      const refreshToken = result.data.authData.refreshToken;

      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("refreshToken", refreshToken);
    } catch (error: any) {
      let errorMessage = "Login failed";
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

      toast.error(`Login failed: ${errorMessage}`);
    }

    setLoading(false);
    setEmail("")
    setPassword("")
    close()
  };

  return (
    <form className="flex flex-col" onSubmit={handleLogin}>
      <input
        type="text"
        placeholder="Email Address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="p-3 rounded-lg bg-transparent border border-white/20 w-full mb-3"
      />

      <div className="relative w-full mb-3">
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="p-3 pr-10 rounded-lg bg-transparent border border-white/20 w-full"
        />
        <button
          type="button"
          onClick={() => setShowPassword((prev) => !prev)}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
        >
          {showPassword ? <IoEyeOffSharp size={18} /> : <IoEye size={18} />}
        </button>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="bg-gradient-to-r from-orange to-lightOrange rounded-xl text-white p-3 mb-4 px-6 font-medium disabled:opacity-50"
      >
        {loading ? "Logging in..." : "Log In"}
      </button>
      <GoogleAuth />
      <div className="mb-3"></div>
      <AppleAuth />
      <p className="my-3 text-[12px] text-center">
        Don&apos;t have an account?{" "}
        <button
          type="button"
          onClick={switchToSignup}
          className="text-orange hover:underline"
        >
          Sign Up
        </button>
      </p>
    </form>
  );
};

export default Login;
