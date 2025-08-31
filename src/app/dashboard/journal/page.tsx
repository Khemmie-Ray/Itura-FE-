import React from "react";
import { FiCamera, FiFolderMinus } from "react-icons/fi";
import { CiImageOn } from "react-icons/ci";
import { MdArrowUpward } from "react-icons/md";
import ProtectedRoute from "@/components/dashboard/ProtectedRoutes";
// import ChatRes from "@/components/dashboard/ChatRes";

const Journal = () => {
  const themeColor = "bg-white/15 border-white/20";

  return (
    <ProtectedRoute>
    <main className="flex flex-col lg:min-h-[80vh] md:min-h-[80vh] min-h-[90vh]">
      {/* <section
        className={`lg:w-[80%] md:w-[80%] w-[90%] mx-auto`}
      >
        <ChatRes />
      </section> */}
      <section
        className={`lg:w-[80%] md:w-[80%] w-[90%] mx-auto my-auto ${themeColor} rounded-3xl lg:border md:border`}
      >
        <div
          className={`flex items-center w-[100%] rounded-full border py-2 px-4  shadow-lg shadow-grey/20 ${themeColor}`}
        >
          <div className="flex items-center">
            <FiCamera className="mr-2" />
            <CiImageOn className="mr-2" />
            <FiFolderMinus className="mr-2" />
          </div>
          <input
            type="text"
            placeholder="Type Here"
            className="bg-transparent outline-0"
          />
          <button
            className={`ml-auto rounded-full p-2 border shadow-xl ${themeColor}`}
          >
            <MdArrowUpward className="text-[30px]" />
          </button>
        </div>
        <div className="my-6 w-[90%] mx-auto hidden lg:block md:block">
          <button
            className={`mr-4 px-6 py-2 rounded-full border mb-4 shadow-lg ${themeColor}`}
          >
            Play calming sounds
          </button>
          <button
            className={`mr-4 px-6 py-2 rounded-full border mb-4 shadow-lg ${themeColor}`}
          >
            Create art
          </button>
          <button
            className={`mr-4 px-6 py-2 rounded-full border mb-4 shadow-lg ${themeColor}`}
          >
            Just want to talk
          </button>
        </div>
      </section>
    </main>
    </ProtectedRoute>
  );
};

export default Journal;