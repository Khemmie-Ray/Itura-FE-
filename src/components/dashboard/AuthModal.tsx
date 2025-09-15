"use client";

import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import Image from "next/image";
import Login from "./Login";
import SignUp from "./SignUp";

const AuthModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"login" | "signup">("login");

  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  return (
    <div>
      <button
        className="bg-gradient-to-r from-orange to-lightOrange rounded-xl text-white p-3 px-6 font-medium"
        onClick={open}
      >
        Get Started
      </button>

      <Dialog open={isOpen} onClose={close} className="relative z-50">
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm"
          aria-hidden="true"
        />

        <div className="fixed inset-0 flex items-center justify-center p-4">
          <DialogPanel className="bg-darkBg p-6 shadow-xl rounded-[21px] border border-white/20 w-full max-w-md">
            <div className="flex flex-col items-center mb-6">
              <p className="text-xs font-medium text-white mb-2">
                {activeTab === "login" ? "Connect to" : "Create an account on"}
              </p>
              <Image
                src="https://res.cloudinary.com/dqw6qvymf/image/upload/v1757346064/logo_jpexvw_n5awr6.png"
                alt="Itura's logo"
                width={60}
                height={60}
              />
            </div>

            {activeTab === "login" ? (
              <Login switchToSignup={() => setActiveTab("signup")} close={() => setIsOpen(false)} />
            ) : (
              <SignUp switchToLogin={() => setActiveTab("login")} close={() => setIsOpen(false)} />
            )}
          </DialogPanel>
        </div>
      </Dialog>
    </div>
  );
};

export default AuthModal;
