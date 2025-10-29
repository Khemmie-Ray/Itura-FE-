"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export type MessageType = "text" | "image";

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

export type ChatMessageShape = TextMessage | ImageMessage;

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
      </div>

      {isUser && <div className="ml-2 my-3">{avatar}</div>}
    </div>
  );
};

export default ChatRes;
