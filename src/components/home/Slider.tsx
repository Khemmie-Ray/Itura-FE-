import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const slides = [
  "https://res.cloudinary.com/dqw6qvymf/image/upload/v1752604858/art1_hsg8hb.svg",
  "https://res.cloudinary.com/dqw6qvymf/image/upload/v1752604854/art2_yzhlw3.svg",
  "https://res.cloudinary.com/dqw6qvymf/image/upload/v1752604878/art3_yf89wk.svg",
  "https://res.cloudinary.com/dqw6qvymf/image/upload/v1752604856/art4_ezbt2v.svg",
  "https://res.cloudinary.com/dqw6qvymf/image/upload/v1752604858/art5_egndyu.svg",
  "https://res.cloudinary.com/dqw6qvymf/image/upload/v1752604871/art6_l6hfps.svg",
  "https://res.cloudinary.com/dqw6qvymf/image/upload/v1752604876/art7_rbu366.svg",
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
