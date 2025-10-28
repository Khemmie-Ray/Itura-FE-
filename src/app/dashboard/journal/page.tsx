"use client";

import React, { useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";
import { MdArrowUpward } from "react-icons/md";
import Profile from "@/components/dashboard/Profile";
import ChatRes, {
  ChatMessageShape,
  MessageType,
  ImageMessageContent,
  MusicMessageContent,
} from "@/components/dashboard/ChatRes";
import { useAuth } from "@/context/AuthContext";

const BACKEND_URL = process.env.NEXT_BACKEND_URL;

const Journal: React.FC = () => {
  const [socket, setSocket] = useState<Socket | null>(null);
  const [input, setInput] = useState<string>("");
  const [messages, setMessages] = useState<ChatMessageShape[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const { userDetails } = useAuth()
  const userId = userDetails.cavosUserId;

  useEffect(() => {
    const s = io(BACKEND_URL, { transports: ["websocket"] });

    s.on("connect", () => {
      console.log("socket connected", s.id);
    });

    s.on("connect_error", (err: any) => {
      console.error("connect_error", err);
    });

    s.on("chat_response", (data: any) => {
     
      console.log("chat_response", data);
      setLoading(false);

      if (!data) return;

      if (data.type === "text") {
        setMessages((prev) => [
          ...prev,
          { type: "text", sender: "ai", content: String(data.response) },
        ]);
      } else if (data.type === "image") {
        const imgContent: ImageMessageContent = {
          src: String(data.response),
          alt: data.alt ?? "AI generated image",
        };
        setMessages((prev) => [
          ...prev,
          { type: "image", sender: "ai", content: imgContent },
        ]);
      } else if (data.type === "audio" || data.type === "music") {
        const musicContent: MusicMessageContent = {
          src: String(data.response),
          title: data.title ?? "AI audio",
        };
        setMessages((prev) => [
          ...prev,
          { type: "music", sender: "ai", content: musicContent },
        ]);
      } else {
       
        setMessages((prev) => [
          ...prev,
          { type: "text", sender: "ai", content: String(data.response) },
        ]);
      }
    });

    setSocket(s);

    return () => {
      s.disconnect();
      setSocket(null);
    };
  }, []);

  const sendMessage = () => {
    if (!socket || !input.trim()) return;

    const chatData = {
      chatReference: "chat_" + Date.now(),
      cavosUserId: userId,
      type: "text",
      message: input.trim(),
    };

    setMessages((prev) => [
      ...prev,
      { type: "text", sender: "user", content: input.trim() },
    ]);

    setLoading(true);
    console.log("📤 sending message:", chatData);
    socket.emit("chat_message", chatData);
    setInput("");
  };

  return (
    <main className="flex flex-col lg:min-h-[80vh] md:min-h-[80vh] min-h-[90vh] relative z-30">
      <div className="flex justify-end">
        <Profile />
      </div>
      <section className="lg:w-[80%] md:w-[80%] w-[90%] mx-auto">
        <ChatRes messages={messages} />
      </section>

      <section
        className="lg:w-[80%] md:w-[80%] w-[90%] mx-auto my-auto bg-white/15 border-white/20 rounded-3xl lg:border md:border"
      >
        <div
          className="flex items-center w-[100%] rounded-full border py-2 px-4 shadow-lg shadow-grey/20 bg-white/15 border-white/20"
        >
          <input
            type="text"
            placeholder="Type Here"
            className="bg-transparent outline-0 text-[14px] flex-grow"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                sendMessage();
              }
            }}
          />
          <button
            onClick={sendMessage}
            disabled={loading}
            className="bg-white/15 border-white/20 ml-auto rounded-full p-2 border shadow-xl"
          >
            <MdArrowUpward className="lg:text-[30px] md:text-[26px] text-[20px]" />
          </button>
        </div>
        <div className="my-6 w-[90%] mx-auto hidden lg:block md:block">
          <button
            className="mr-4 px-6 py-2 rounded-full border mb-4 shadow-lg bg-white/15 border-white/20"
            onClick={() => setInput("Play calming sounds")}
          >
            Play calming sounds
          </button>
          <button
            className="mr-4 px-6 py-2 rounded-full border mb-4 shadow-lg bg-white/15 border-white/20"
            onClick={() => setInput("Create art")}
          >
            Create art
          </button>
          <button
            className="mr-4 px-6 py-2 rounded-full border mb-4 shadow-lg bg-white/15 border-white/20"
            onClick={() => setInput("Just want to talk")}
          >
            Just want to talk
          </button>
        </div>
      </section>
    </main>
  );
};

export default Journal;