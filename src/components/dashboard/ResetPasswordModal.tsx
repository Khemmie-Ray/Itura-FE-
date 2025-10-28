"use client";

import React from "react";
import { Dialog, DialogPanel } from "@headlessui/react";

interface ResetPasswordModalProps {
  isOpen: boolean;
  close: () => void;
}

const ResetPasswordModal: React.FC<ResetPasswordModalProps> = ({
  isOpen,
  close,
}) => {
  return (
    <Dialog
      open={isOpen}
      onClose={close}
      className="fixed inset-0 z-50 flex items-center justify-center"
    >
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-sm"
        aria-hidden="true"
      />
      <DialogPanel className="relative z-50 p-6 rounded-2xl shadow-lg lg:w-[70%] md:w-[70%] w-[100%] mx-auto">
        <div className="bg-white/10 rounded-[21px] p-5 backdrop-filter-blur w-[100%]">
          <div className="bg-darkBg/80 rounded-[21px] lg:p-6 md:p-5 p-4">
            <div className="text-center py-6">
              <h1 className="lg:text-[64px] md:text-[52px] text-[42px] font-[500] mb-8 bg-gradient-to-b from-[#F5F4F7] via-[#F3F2F5] to-[#B0ADBF] inline-block text-transparent bg-clip-text">
                Reset Password
              </h1>
              <h3 className="lg:text-[28px] md:text-[26px] text-[20px]">
                Check your mail
              </h3>
              <p className="text-[14px] text-[#C8C8C8]">
                We’ve sent a mail to you to reset your password. Check your mail
                to continue
              </p>
            </div>
          </div>
        </div>
      </DialogPanel>
    </Dialog>
  );
};

export default ResetPasswordModal;
