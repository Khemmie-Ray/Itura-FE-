import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const slides = [
  "https://res.cloudinary.com/dqw6qvymf/image/upload/v1757346030/art1_hsg8hb_gdl22f.png",
  "https://res.cloudinary.com/dqw6qvymf/image/upload/v1757346035/art2_yzhlw3_n4omm1.png",
  "https://res.cloudinary.com/dqw6qvymf/image/upload/v1757346027/art3_yf89wk_qkqajm.png",
  "https://res.cloudinary.com/dqw6qvymf/image/upload/v1757346028/art4_ezbt2v_yj6qkw.png",
  "https://res.cloudinary.com/dqw6qvymf/image/upload/v1757346029/art5_egndyu_kn0fy5.png",
  "https://res.cloudinary.com/dqw6qvymf/image/upload/v1757346030/art6_l6hfps_wa4bem.png",
  "https://res.cloudinary.com/dqw6qvymf/image/upload/v1757346030/art7_rbu366_fftb5l.png",
];

const total = slides.length;
const radius = 1000;
const degreesPerSlide = 360 / 14;
const intervalTime = 2500;

const Slider = () => {
  const [position, setPosition] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prev) => prev + 1);
    }, intervalTime);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className="relative w-[100%] mx-auto h-[400px] overflow-hidden">
        <div className=" w-[100%] h-[100%]">
          {[...Array(total * 2)].map((_, i) => {
            const virtualIndex = i - total;
            const actualIndex = ((virtualIndex % total) + total) % total;
            const rotate =
              virtualIndex * degreesPerSlide - position * degreesPerSlide;

            return (
              <motion.div
                key={i}
                className="absolute flex justify-center items-center h-full w-full"
                style={{
                  transformOrigin: `50% ${radius}px`,
                }}
                animate={{
                  rotate,
                }}
                transition={{
                  ease: "easeOut",
                  duration: 0.6,
                }}
              >
                <Image
                  src={slides[actualIndex]}
                  alt={`art-${actualIndex}`}
                  width={400}
                  height={400}
                  priority
                  className="w-[200px] h-[300px] object-cover rounded-[30px] shadow-md"
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Slider;
