"use client";

import Header from "@/components/home/Header"
import Footer from "@/components/home/Footer";
import Hero from "@/components/home/Hero";
import Support from "@/components/home/Support";
import FAQ from "@/components/home/FAQ";
import Features from "@/components/home/Features";
import ScrollButton from "@/components/shared/ScrollButton";
import CarouselFeatures from "@/components/home/CarouselFeatures";
import TopArt from "@/components/home/TopArt";
import Partner from "@/components/home/Partner";
import Explore from "@/components/home/Explore";

const Home = () => {
  return (
    <div className="relative">
      <Header />
      <div className="lg:w-[706px] md:w-[600px] w-[380px] lg:h-[353px] md:h-[300px] h-[190px] bg-gradient-to-b from-gradientYellow to-gradientRed blur-[315px] rounded-bl-full rounded-br-full absolute left-1/2 top-0 transform -translate-x-1/2 z-10"></div>
      <Hero />
      <Partner />
      <TopArt />
      <CarouselFeatures />
      <Features />
      <Support />
      <Explore />
      <FAQ />
      <ScrollButton />
      <Footer />
    </div>
  );
};

export default Home;
