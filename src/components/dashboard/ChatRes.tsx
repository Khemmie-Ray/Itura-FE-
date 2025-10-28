"use client";

import React from "react";
import { PiWaveformDuotone } from "react-icons/pi";
import { MdClose } from "react-icons/md";
import { GoDotFill } from "react-icons/go";
import { TbSend2 } from "react-icons/tb";
import Image from "next/image";
import Link from "next/link";

export type MessageType = "text" | "image" | "music";

export interface TextMessage {
  type: "text";
  sender: "user" | "ai";
  content: string;
}

export interface ImageMessageContent {
  src: string;
  alt?: string;
}
export interface ImageMessage {
  type: "image";
  sender: "user" | "ai";
  content: ImageMessageContent;
}

export interface MusicMessageContent {
  src: string;
  title?: string;
}
export interface MusicMessage {
  type: "music";
  sender: "user" | "ai";
  content: MusicMessageContent;
}

export type ChatMessageShape = TextMessage | ImageMessage | MusicMessage;

interface ChatResProps {
  messages: ChatMessageShape[];
}

const ChatRes: React.FC<ChatResProps> = ({ messages }) => {
  return (
    <div className="py-4">
      {messages.map((msg, index) => (
        <ChatMessage key={index} message={msg} />
      ))}
    </div>
  );
};

interface ChatMessageProps {
  message: ChatMessageShape;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  const themeColor = "bg-white/10 border-white/20";
  const isUser = message.sender === "user";
  const alignment = isUser ? "justify-end" : "justify-start";
  const bubbleAlign = isUser ? "items-end text-right" : "items-start text-left";

  const avatar = isUser ? (
    <div className={`${themeColor} rounded-full border p-2 ml-3`}>
      <Image
        src="https://res.cloudinary.com/dqw6qvymf/image/upload/v1757346067/ravatar_zs1bzd_jmltwf.png"
        alt="user avatar"
        width={40}
        height={40}
      />
    </div>
  ) : (
    <div className={`${themeColor} rounded-full border p-2 mr-3 `}>
      <Image
        src="https://res.cloudinary.com/dqw6qvymf/image/upload/v1757346064/marklogo_o2ba0x_amnzzt.png"
        alt="ai avatar"
        width={40}
        height={40}
      />
    </div>
  );

  return (
    <div className={`flex ${alignment} items-center`}>
      {!isUser && <div className="my-3">{avatar}</div>}

      <div className={`flex flex-col  ${bubbleAlign} w-[100%]`}>
        {message.type === "text" && (
          <div
            className={`max-w-[75%] rounded-full p-3 px-6 ${
              isUser ? `text-white ${themeColor}` : ""
            }`}
          >
            {(message as TextMessage).content}
          </div>
        )}

        {message.type === "image" && (
          <div className={`rounded-xl shadow my-6 ${themeColor}`}>
            <img
              src={(message as ImageMessage).content.src}
              alt={(message as ImageMessage).content.alt ?? "image"}
              className="w-full h-auto"
            />
            <div className="flex justify-between items-center p-3">
              <p className="text-[14px]">
                {(message as ImageMessage).content.alt ?? "image"}
              </p>
              <Link
                href="/dashboard"
                className={`text-darkBg dark:text-white rounded-full px-4 py-3 text-[14px] border  shadow-lg ${themeColor}`}
              >
                Open Studio
              </Link>
            </div>
          </div>
        )}

        {message.type === "music" && (
          <section className="flex justify-between items-center flex-col lg:flex-row md:flex-row my-8">
            <div
              className={`${themeColor} w-[100%] lg:w-[32%] md:w-[32%] rounded-xl p-2 mb-3`}
            >
              <div
                className={`flex rounded-xl justify-between items-center py-3 border px-3 ${themeColor}`}
              >
                <div className={`border rounded-lg  p-2 ${themeColor}`}>
                  <PiWaveformDuotone className="text-lg animate-pulse" />
                </div>
                <p className="flex flex-col text-[12px] font-medium">
                  {(message as MusicMessage).content.title ?? "Calming Music"}{" "}
                  <span className="text-white/50 font-normal flex items-center">
                    AI <GoDotFill /> {(message as MusicMessage).content.src.length < 20 ? "0.5 MB" : "2.1 MB"}
                  </span>
                </p>
                <MdClose className="text-lg" />
              </div>
              <div className="flex justify-between items-center my-4 px-2">
                <p className="text-[12px]">Press play, and enter a world of calmness</p>
                <div className={`bg-[#391E83]/5 border rounded-full text-xl p-3 ml-2 ${themeColor}`}>
                  <a href={(message as MusicMessage).content.src} target="_blank" rel="noreferrer">
                    <TbSend2 className="text-xl" />
                  </a>
                </div>
              </div>
            </div>
          </section>
        )}
      </div>

      {isUser && <div className="ml-2 my-3">{avatar}</div>}
    </div>
  );
};

export default ChatRes;
