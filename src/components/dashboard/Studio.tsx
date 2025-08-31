import resImg from "/lib.svg";
import markImg from "../../assets/marklogo.svg";
import { GoDotFill } from "react-icons/go";

const Studio = () => {
  const themeColor = "bg-white/10 border-white/20";

  return (
    <div
      className={`rounded-xl lg:w-[80%] md:w-[80%] w-[90%] mx-auto flex flex-col lg:flex-row md:flex-row my-10 justify-between`}
    >
      <div className={`${themeColor} rounded-full border p-2 mr-3  mt-auto hidden lg:block md:block`}>
        <img src={markImg} alt="" className="w-[30px] h-[30px]" />
      </div>
      <div
        className={`${themeColor} shadow p-3 rounded-xl lg:w-[45%] md:w-[45%] w-[100%] mb-3`}
      >
        <img src={resImg} alt="" className="w-full h-auto" />

        <p className="text-[14px] my-2">Made by Itura</p>
      </div>
      <div className="lg:w-[40%] md:w-[40%] w-[100%] text-[15px] mb-3">
        <h2 className="lg:text-[42px] md:text-[38px] text-[24px]">
          Untitled Artwork
        </h2>
        <p className="text-[12px] text-white/50">Created by</p>
        <p className="flex items-center">
          <GoDotFill className="text-orange text-2xl" /> Baby Keem
        </p>
        <div className="flex justify-between lg:items-center md:items-center items-start mt-10 mb-18 flex-col lg:flex-row md:flex-row">
          <p className="text-[15px] font-[500]">
            <span className="text-[12px] text-white/50">Source</span> <br />
            Device
          </p>
          <p className="text-[15px] font-[500]">
            <span className="text-[12px] text-white/50">Style</span> <br />
            Undefine
          </p>
        </div>
        <p className="text-[12px] text-white/50">Prompt</p>
        <p className="mt-3">
          A futuristic city floating in the clouds, with neon-lit buildings,
          flying cars zipping between towers, and a giant holographic whale
          swimming through the sky, in a dreamy cyberpunk art style at sunset.
        </p>
      </div>
    </div>
  );
};

export default Studio;
