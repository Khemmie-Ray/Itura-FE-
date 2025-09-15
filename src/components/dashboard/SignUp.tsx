"use client";

import { useState } from "react";
import { IoEye, IoEyeOffSharp } from "react-icons/io5";
import { toast } from "sonner";

const SignUp = ({
  switchToLogin,
  close,
}: {
  switchToLogin: () => void;
  close: () => void;
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      if (res.ok) {
        toast.success(`Signup success:, ${data}`, {
          position: "top-center",
        });
      } else {
        toast.error(data.error || "Signup failed", {
            position: "top-center",
          });
      }
    } catch (err: any) {
        // const message = err?.message || "Something went wrong";
      toast.error(`Unexpected error: ${err.message}`, {
        position: "top-center",
      });
    } finally {
      setLoading(false);
      close();
    }
  };

  return (
    <form className="flex flex-col" onSubmit={handleSignup}>
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
      <div className="relative w-full mb-3">
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Confirm Password"
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
        className="bg-gradient-to-r from-orange to-lightOrange rounded-xl text-white p-3 px-6 font-medium disabled:opacity-50"
      >
        {loading ? "Signing up..." : "Sign Up"}
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
