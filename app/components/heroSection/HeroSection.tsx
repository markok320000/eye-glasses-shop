"use client";

import React from "react";
import Carousel from "./Carousel";
import Hero1 from "./Hero1";
import Hero2 from "./Hero2";

const HeroSection = () => {
  const slides = [<Hero1 />, <Hero2 />];

  return (
    <div className="flex items-center justify-center">
      <div className="2xl:max-w-[80%] w-full ">
        <Carousel slides={slides} />
      </div>
    </div>
  );
};

export default HeroSection;
