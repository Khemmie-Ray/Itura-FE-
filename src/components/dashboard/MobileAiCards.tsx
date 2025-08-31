"use client";

import React, { useEffect, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { GoDotFill } from "react-icons/go";
import Image from "next/image";
import { Cards } from '../shared/interface'

const MobileAiCards = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    containScroll: false,
  });

  const autoplayInterval = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (!emblaApi) return;
  
    autoplayInterval.current = setInterval(() => {
      emblaApi.scrollNext();
    }, 3000);
  
    return () => {
      if (autoplayInterval.current !== null) {
        clearInterval(autoplayInterval.current);
      }
    };
  }, [emblaApi]);

  const cards:Cards[] = [
    {
      title: "Create",
      subtitle: "Art",
      description: "Create your desired art to express your mood",
      img: "https://res.cloudinary.com/dqw6qvymf/image/upload/v1752604671/art_mzaz5n.svg",
    },
    {
      title: "Play",
      subtitle: "Sounds",
      description: "Play desired sound to express your mood",
      img: "https://res.cloudinary.com/dqw6qvymf/image/upload/v1752604686/play_ftvnf8.svg",
    },
    {
      title: "What's on your",
      subtitle: "Mind",
      description: "Let’s talk about what&apos;s on your mind.",
      img: "https://res.cloudinary.com/dqw6qvymf/image/upload/v1752604685/mint_vgmzdu.svg",
    },
  ];

  return (
    <div className="overflow-hidden lg:hidden md:hidden flex" ref={emblaRef}>
      <div className="flex">
        {cards.map((card, index) => (
          <div
            key={index}
            className="shrink-0 mr-4 rounded-[30px] border p-6 bg-white/15 border-white/20
               w-[60%]"
          >
            <p className="text-[16px] flex font-[500] items-center">
              <GoDotFill />
              {card.title}
              <em className="font-[400] ml-2">{card.subtitle}</em>
            </p>
            <p className="text-[12px] ml-4 w-full md:w-[80%]">
              {card.description}
            </p>
            <Image
              src={card.img}
              alt={card.subtitle}
              width={100}
              height={100}
              className="w-[60%] ml-auto"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MobileAiCards;
