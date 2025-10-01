"use client"

import React, { useState } from "react";
// import { CavosAuth } from "cavos-service-sdk";
import { IoEye, IoEyeOffSharp } from "react-icons/io5";
import { toast } from "sonner";
import { useAegis } from "@cavos/aegis";

// const cavosAuth = new CavosAuth("sepolia", process.env.NEXT_PUBLIC_CAVOS_APP_ID!);

const SignUp = ({
  switchToLogin,
  close,
}: {
  switchToLogin: () => void;
  close: () => void;
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const  { aegisAccount } = useAegis()

  const handleRegister = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    try {
      const result = await aegisAccount.signUp(email, password);
      console.log("User registered:", result);
      toast.success("Registration successful!")
      // console.log("Wallet created:", result.wallet.address);
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
    <form onSubmit={handleRegister}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
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
        className="bg-gradient-to-r from-orange to-lightOrange rounded-xl text-white p-3 px-6 font-medium disabled:opacity-50 w-full"
      >
        {loading ? "Creating..." : "Register"}
      </button>

      <p className="my-3 text-[12px] text-center">
        Already have an account?{" "}
        <button
          type="button"
          onClick={switchToLogin}
          className="text-orange hover:underline"
        >
          Log In
        </button>
      </p>
    </form>
  );
};

export default SignUp;
