import { PiWaveformDuotone } from "react-icons/pi";
import { MdClose } from "react-icons/md";
import { GoDotFill } from "react-icons/go";
import { TbSend2 } from "react-icons/tb";
import markImg from "../../assets/marklogo.svg";
import ravatar from "../../assets/avatar.svg";
import { NavLink } from "react-router-dom";
import { ImageMessage, MusicMessage, TextMessage } from "../shared/interface";

type Messages = TextMessage | ImageMessage | MusicMessage;

const messages: Messages[] = [
  { type: "text", sender: "ai", content: "Hello! How can I assist you?" },
  {
    type: "text",
    sender: "user",
    content: "Can you show me the event poster?",
  },
  {
    type: "image",
    sender: "ai",
    content: { src: "/lib.svg", alt: "Made by Itura" },
  },
  { type: "text", sender: "user", content: "Create a music to calm me" },
  {
    type: "music",
    sender: "ai",
    content: { src: "/audio/track.mp3", title: "Welcome Music" },
  },
];

const ChatRes = () => {
  return (
    <div className="py-4">
      {messages.map((msg, index) => (
        <ChatMessage key={index} message={msg} />
      ))}
    </div>
  );
};

interface ChatMessageProps {
  message: Messages;
}

const ChatMessage = ({ message }: ChatMessageProps) => {
  const themeColor = "bg-white/10 border-white/20";

  const isUser = message.sender === "user";
  const alignment = isUser ? "justify-end" : "justify-start";
  const bubbleAlign = isUser ? "items-end text-right" : "items-start text-left";
  const avatar = isUser ? (
    <div className={`${themeColor} rounded-full border p-2 ml-3`}>
      <img src={ravatar} alt="" className="w-[30px] h-[30px]" />
    </div>
  ) : (
    <div className={`${themeColor} rounded-full border p-2 mr-3 `}>
      <img src={markImg} alt="" className="w-[30px] h-[30px]" />
    </div>
  );

  return (
    <div className={`flex ${alignment} items-center`}>
      {!isUser && <div className="my-3">{avatar}</div>}
      <div className={`flex flex-col items-center ${bubbleAlign} w-[100%]`}>
        {message.type === "text" && (
          <div
            className={`max-w-[75%] rounded-full p-3 ${
              isUser ? `text-white ${themeColor}` : ""
            }`}
          >
            {message.content}
          </div>
        )}

        {message.type === "image" && (
          <div className={`rounded-xl shadow  my-6 ${themeColor}`}>
            <img
              src={message.content.src}
              alt={message.content.alt}
              className="w-full h-auto"
            />
            <div className="flex justify-between items-center p-3">
              <p className="text-[14px]">{message.content.alt}</p>
              <NavLink
                to="/dashboard/aichats/1"
                className={`text-darkBg dark:text-white rounded-full px-4 py-3 text-[14px] border  shadow-lg ${themeColor}`}
              >
                Open Studio
              </NavLink>
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
                  Calming Music{" "}
                  <span className="text-white/50 font-normal flex items-center">
                    Babykeem <GoDotFill /> 2.1 MB
                  </span>
                </p>
                <MdClose className="text-lg" />
              </div>
              <div className="flex justify-between items-center my-4 px-2">
                <p className="text-[12px]">
                  Press play, and enter a world of calmness
                </p>
                <div
                  className={`bg-[#391E83]/5 border rounded-full text-xl p-3 ml-2 ${themeColor}`}
                >
                  <TbSend2 className="text-xl" />
                </div>
              </div>
            </div>
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
                  Calming Music{" "}
                  <span className="text-white/50 font-normal flex items-center">
                    Babykeem <GoDotFill /> 2.1 MB
                  </span>
                </p>
                <MdClose className="text-lg" />
              </div>
              <div className="flex justify-between items-center my-4 px-2">
                <p className="text-[12px]">
                  Press play, and enter a world of calmness
                </p>
                <div
                  className={`bg-[#391E83]/5 border rounded-full text-xl p-3 ml-2 ${themeColor}`}
                >
                  <TbSend2 className="text-xl" />
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
