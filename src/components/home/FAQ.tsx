import React, { useState } from "react";
import { TiMinus } from "react-icons/ti";
import { TiPlus } from "react-icons/ti";
import { motion, AnimatePresence } from "framer-motion";

const FAQ = () => {
  const [openFaqId, setOpenFaqId] = useState<number | null>(null);;
  interface Questions {
    id: number;
    question: string;
    answer: string;
  }
  const questions:Questions[] = [
    {
      id: 1,
      question: "Is Itura free to use?",
      answer:
        "We offer a free plan with essential features, plus premium options for deeper wellness support.",
    },
    {
      id: 2,
      question: "How do I get started?",
      answer:
        "We offer a free plan with essential features, plus premium options for deeper wellness support.",
    },
    {
      id: 3,
      question: "What makes Itura different from other wellness apps?",
      answer:
        "We offer a free plan with essential features, plus premium options for deeper wellness support.",
    },
    {
      id: 4,
      question: "Do I need to be an artist to use Itura?",
      answer:
        "We offer a free plan with essential features, plus premium options for deeper wellness support.",
    },
    {
      id: 5,
      question: "Is Itura a replacement for therapy?",
      answer:
        "We offer a free plan with essential features, plus premium options for deeper wellness support.",
    },
  ];

  const handleOpen = (id:number) => {
    setOpenFaqId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="lg:w-[80%] md:w-[80%] w-[90%] mx-auto bg-darkBg lg:my-30 md:my-24 my-14 overflow-hidden hidden lg:block md:block">
      <h2 className="text-[42px] lg:text-[56px] md:text-[56px] font-medium text-center mb-10 bg-darkBg">
        Your Questions,{" "}
        <span className="font-instrumentSerif italic">Answered</span>.
      </h2>
      <div
        className={'rounded-[21px] lg:py-20 md:py-20 lg:px-12 md:px-10 p-6 relative bg-white/10'}
      >
        {questions.map((info) => (
          <div
            key={info.id}
            className="border-b border-white/20 py-5 transition-all duration-300 accordion-card"
          >
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => handleOpen(info.id)}
            >
              <h2 className="text-[12px] lg:text-[26px] md:text-[26px]">
                {info.question}
              </h2>
              <div className="text-[18px]">
                {openFaqId === info.id ? (
                  <div className="shadow-lg border border-white/10 rounded-full p-2 bg-textGrey text-black">
                    <TiMinus />
                  </div>
                ) : (
                  <div className="shadow-lg border border-white/10 rounded-full p-2 bg-white/10 text-white">
                    <TiPlus />
                  </div>
                )}
              </div>
            </div>
            <AnimatePresence>
              {openFaqId === info.id && (
                <motion.div
                  key="answer"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <p className="mt-4 text-[10px] lg:text-[16px] md:text-[16px]">
                    {info.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
        <div>
          <div className="w-[180px] h-[90px] lg:w-[200px] lg:h-[100px] md:w-[200px] md:h-[100px] bg-gradient-to-b from-gradientYellow to-gradientRed  rounded-bl-full blur-[150px] rounded-br-full shadow-xl absolute lg:left-20 md:left-20 left-0 top-20 z-0"></div>
          <div className="w-[180px] h-[90px] lg:w-[200px] lg:h-[120px] md:w-[200px] md:h-[100px] bg-gradient-to-b from-gradientYellow to-gradientRed rounded-bl-full rounded-br-full shadow-xl absolute lg:right-20 md:right-20 right-0 bottom-0 rotate-180 blur-[100px]"></div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
