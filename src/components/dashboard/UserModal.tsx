"use client";

import React, { useEffect, useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import DemoCard from "./DemoCard";
import SubscriptionModal from "./SubscriptionModal";
import { useAuth } from "@/context/AuthContext";

const UserModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { userDetails, loading } = useAuth();

  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  useEffect(() => {
    if (!loading && userDetails) {
      open();
    }
  }, [userDetails, loading]);

  if (loading || !userDetails) return null; // avoid errors when details not loaded

  const isNewUser = userDetails?.firstTimeLogin === true;

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
        {isNewUser ? (
          <DemoCard  />
        ) : (
          <SubscriptionModal />
        )}
      </DialogPanel>
    </Dialog>
  );
};

export default UserModal;