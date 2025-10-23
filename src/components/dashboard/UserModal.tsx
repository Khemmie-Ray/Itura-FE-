"use client";

import React, { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import DemoCard from "./DemoCard";
import SubscriptionModal from "./SubscriptionModal";

// interface UserModalProps {
//   isOpen: boolean;
//   close: () => void;
//   isNewUser: boolean;
// }

const UserModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  return (
    <div>
      <Dialog
        open={isOpen}
        onClose={close}
        className="fixed inset-0 z-50 flex items-center justify-center"
      >
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm"
          aria-hidden="true"
        />
        <DialogPanel className="relative z-50 p-6 rounded-2xl shadow-lg w-[50%] mx-auto">
          {/* {isNewUser ? <DemoCard close={close} /> : <SubscriptionModal close={close} />} */}
        </DialogPanel>
      </Dialog>
    </div>
  );
};

export default UserModal;
