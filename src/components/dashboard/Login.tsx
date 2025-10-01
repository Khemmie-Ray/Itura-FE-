"use client";

import React, { useState } from "react";
import { IoEye, IoEyeOffSharp } from "react-icons/io5";
import { useAuth } from "@/context/AuthContext";

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
  const { login, user, loading } = useAuth();
  // const { aegisAccount } = useAegis()
  // console.log(aegisAccount.address)
  // console.log(aegisAccount)

  // const GoogleAuth = () => {
  //   return (
  //     <SignInWithGoogle
  //       appId={process.env.NEXT_PUBLIC_CAVOS_APP_ID!}
  //       network="sepolia"
  //       finalRedirectUri="https://yourapp.com/auth/callback"
  //     />
  //   );
  // };

  // const AppleAuth = () => {
  //   return (
  //     <SignInWithApple
  //       appId={process.env.NEXT_PUBLIC_CAVOS_APP_ID!}
  //       network="sepolia"
  //       finalRedirectUri="https://yourapp.com/auth/callback"
  //     />
  //   );
  // };

  // const handleLogin = async (e: any) => {
  //   e.preventDefault();
  //   setLoading(true);

  //   const result: any = await login(email, password);
  //   console.log(result);

  //   if (result.success) {
  //     toast.success(result.message);
  //     close();
  //   } else {
  //     toast.error(result.message);
  //   }

  //   setLoading(false);
  //   setEmail("");
  //   setPassword("");
  // };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await login(email, password);
    } finally {
      close();
      setPassword("");
      setEmail("");
    }
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
      {/* <GoogleAuth /> */}
      <div className="mb-3"></div>
      {/* <AppleAuth /> */}
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
