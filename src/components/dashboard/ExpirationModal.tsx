"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Dialog, DialogPanel } from "@headlessui/react";

const ExpirationModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

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

      <DialogPanel className="relative z-50 p-6 rounded-2xl shadow-lg lg:w-[50%] md:w-[50%] w-[95%] mx-auto">
        <div className="bg-[#2D2B3752]/60 rounded-[21px] lg:p-8 md:p-6 p-4 backdrop-filter-blur w-[100%] border border-white/10">
          <div className="bg-[#2D2B3752]/40 rounded-[21px] lg:p-6 md:p-5 p-4 flex justify-between items-center py-10 flex-col lg:flex-row md:flex-row border border-white/10">
            <div className="w-[100%] md:w-[35%] lg:w-[35%] mb-3">
              <Image
                src="https://res.cloudinary.com/dqw6qvymf/image/upload/v1761166344/Frame_zvcmhn.png"
                alt=""
                width={200}
                height={200}
                className="w-[100%]"
              />
            </div>
            <div className="w-[100%] md:w-[61%] lg:w-[61%] mb-3">
              <h1 className="lg:text-[32px] md:text-[28px] text-[22px] font-[500] bg-gradient-to-b from-[#F5F4F7] via-[#F3F2F5] to-[#B0ADBF] inline-block text-transparent bg-clip-text leading-10 mb-4">
                Your free trial has ended,
                <span className="font-instrumentSerif">
                  keep your creative flow alive.
                </span>{" "}
              </h1>
              <p className="text-[14px] mb-8">
                You’ve unlocked the power of turning emotions into art and
                sound. To continue your journey, choose a plan that fits your
                flow and keep exploring your inner world.
              </p>
              <button className="bg-gradient-to-r p-3 px-10 from-orange to-lightOrange rounded-xl text-white text-[12px] mb-3">
                Continue with itura
              </button>
              <p className="text-[12px]">
                No charges today • Cancel anytime • Wellness for your creative
                flow
              </p>
            </div>
          </div>
        </div>
      </DialogPanel>
    </Dialog>
  );
};

export default ExpirationModal;
