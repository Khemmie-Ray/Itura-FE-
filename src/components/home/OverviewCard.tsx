import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";

const OverviewCard = () => {
  const themeColor = "bg-white/10";

  return (
    <div
      className={`lg:w-[58%] md:w-[60%] w-[100%] border border-white/5 rounded-[21px] lg:pt-16 md:pt-10 pt-6 relative  ${themeColor}`}
    >
      <div className="lg:px-12 md:px-10 px-6">
        <h3 className="text-[22px] bg-gradient-to-b from-[#F5F4F7] via-[#F3F2F5] to-[#B0ADBF] inline-block text-transparent bg-clip-text lg:text-[28px] md:text-[28px] font-medium">
          Personalized Wellness Guidance
        </h3>
        <p className="text-[14px] text-white/60">
          Talk to Itura’s AI to explore your emotions and discover activities or
          insights that bring balance to your mind.
        </p>
      </div>
      <div className="bg-[#271E33] lg:p-8 md:p-8 p-6 rounded-tr-[21px] rounded-tl-[21px] rounded-br-[21px] border border-white/10 mt-10 lg:ml-14 md:ml-10 ml-6 flex flex-col">
        <div className="flex justify-between items-center my-5">
          <MdOutlineArrowBackIosNew />
          <p className="font-semibold">Itura</p>
          <FaRegEdit />
        </div>
        <div className="p-3 rounded-full bg-white/10 border border-white/10 ml-auto my-4 text-[12px]">
          <p>I am having a very bad day</p>
        </div>
        <div className="flex justify-between text-[10.5px] items-center">
          <div className="lg:w-[40px] md:w-[30px] w-[20px] lg:h-[40px] md:h-[30px] h-[20px] rounded-full bg-white mb-auto"></div>
          <div className="w-[90%]">
            <p>
              Oh no, I’m so sorry about that. Based on your response, I’ll like
              suggest a couple of sounds that might help you feel better
            </p>
            <ol className="mt-3">
              <li className="list-decimal">
                <span className="text-[13px] font-medium">Set Clear Goals</span>
                <br />
                <p className="my-3 text-[10px]">
                  Focus on your needs: Do you want to speak, write or understand
                  the language fluently? Set a target time: For example, “I want
                  to understand basic conversation in 3 months.”
                </p>
              </li>
              <li className="list-decimal">
                <span className="text-[13px] font-medium">
                  Use Active Learning Techniques
                </span>
                <p className="mt-5 text-[10px]">
                  Talk every day: Practice speaking even if it&apos;s just with
                  yourself or use apps like app to talk to a native speaker.
                  Write every day: Try writing a simple journal in the language.
                </p>
              </li>
            </ol>
          </div>
        </div>
      </div>
        <div className="w-[220px] h-[220px] bg-gradient-to-b from-gradientYellow to-gradientRed blur-[150px] rounded-full absolute left-1/2 top-20 transform -translate-x-1/2 z-10"></div>
    </div>
  );
};

export default OverviewCard;
