import React from "react";
import { GoDotFill } from "react-icons/go";
import Image from "next/image";

const AICards = () => {
  const themeColor = "bg-white/15 border-white/20";

  return (
    <div className="lg:flex md:flex hidden justify-between items-center flex-col lg:flex-row md:flex-row my-0 lg:my-10 md:my-10">
      <div
        className={`rounded-[30px] p-6 w-[100%] lg:w-[32%] md:w-[32%] flex flex-col border mb-4 ${themeColor}`}
      >
        <p className="lg:text-[18px] md:text-[18px] text-[16px] flex font-[500] items-center">
          <GoDotFill /> Create <em className="font-[400] ml-2"> Art</em>
        </p>
        <p className="text-[12px] ml-4 w-[100%] lg:w-[80%] md:w-[80%]">
          Create your desired art to express your mood
        </p>
        <Image
          src="https://res.cloudinary.com/dqw6qvymf/image/upload/v1752604671/art_mzaz5n.svg"
          alt="art illustration"
          width={50}
          height={50}
          className="w-[70%] ml-auto"
        />
      </div>
      <div
        className={`rounded-[30px] p-6 w-[100%] lg:w-[32%] md:w-[32%] flex flex-col border mb-4 ${themeColor}`}
      >
        <p className="lg:text-[18px] md:text-[18px] text-[16px] flex font-[500] items-center">
          <GoDotFill /> Play <em className="font-[400] ml-2"> Sounds</em>
        </p>
        <p className="text-[12px] ml-4 w-[100%] lg:w-[80%] md:w-[80%]">
          Play desired sound to express your mood
        </p>
        <Image
          src="https://res.cloudinary.com/dqw6qvymf/image/upload/v1752604686/play_ftvnf8.svg"
          alt="play illustration"
          width={50}
          height={50}
          className="w-[70%] ml-auto"
        />
      </div>
      <div
        className={`rounded-[30px] p-6 w-[100%] lg:w-[32%] md:w-[32%] flex flex-col border mb-4 ${themeColor}`}
      >
        <p className="lg:text-[18px] md:text-[18px] text-[16px] flex font-[500] items-center">
          <GoDotFill /> What&apos;s on your{" "}
          <em className="font-[400] ml-2"> Mind</em>
        </p>
        <p className="text-[12px] ml-4 w-[100%] lg:w-[80%] md:w-[80%]">
          Let’s talk about whar’s on your mind.
        </p>
        <Image
          src="https://res.cloudinary.com/dqw6qvymf/image/upload/v1752604685/mint_vgmzdu.svg"
          alt="mint illustration"
          width={50}
          height={50}
          className="w-[70%] ml-auto"
        />
      </div>
    </div>
  );
};

export default AICards;
