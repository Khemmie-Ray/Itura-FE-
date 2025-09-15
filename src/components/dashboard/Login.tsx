"use client";

import { useState } from "react";
import { IoEye, IoEyeOffSharp } from "react-icons/io5";

const Login = ({ switchToSignup, close }: { switchToSignup: () => void; close: () => void }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      if (!res.ok) {
        alert(data.error || "Login failed");
        return;
      }

      console.log("Login success:", data);
      close();
    } catch (err) {
      console.error(err);
      alert("Unexpected error");
    } finally {
      setLoading(false);
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
        className="bg-gradient-to-r from-orange to-lightOrange rounded-xl text-white p-3 px-6 font-medium disabled:opacity-50"
      >
        {loading ? "Logging in..." : "Log In"}
      </button>

      <p className="my-3 text-[12px] text-center">
        Don’t have an account?{" "}
        <button type="button" onClick={switchToSignup} className="text-orange hover:underline">
          Sign Up
        </button>
      </p>
    </form>
  );
};

export default Login;
