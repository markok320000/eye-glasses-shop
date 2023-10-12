"use client";
import React from "react";
import SuperFutureSectionCard from "../cards/SuperFutureSectionCard";

import superFuture from "@/public/images/superFuture.jpg";
import fitAndStyleQuiz from "@/public/images/fitAndStyleQuiz.jpg";
import glassesOnSale from "@/public/images/glassesOnSale.jpg";

import { useMediaQuery } from "@react-hook/media-query";

const data = [
  {
    title: "Super Future",
    desc: "Enter a world of uncharted style possibilities.",
    imageUrl: superFuture,
    button: {
      title: "Shop Now",
      url: "https://example.com/button1",
    },
  },
  {
    title: "Fit & Style Quiz",
    desc: "Need some help figuring out which glasses are right for you? Find your perfect pair.",
    imageUrl: fitAndStyleQuiz,
    button: {
      title: "Take quiz",
      url: "https://example.com/button2",
    },
  },
  {
    title: "Glasses On Sale",
    desc: "Good looking out. Enjoy up to 50% off these eyewear picks!",
    imageUrl: glassesOnSale,
    button: {
      title: "Shop Discounted",
      url: "https://example.com/button3",
    },
  },
];

const SuperFutureSection = () => {
  const isSmallScreen = useMediaQuery("(max-width: 900px)");

  return (
    <div
      className={`my-16 flex justify-center items-center ${
        isSmallScreen ? "" : "mx-10"
      }`}
    >
      <div
        className={`flex gap-10 ${
          isSmallScreen ? "flex-col" : "flex-row px-8"
        } `}
      >
        {data.map((item) => (
          <SuperFutureSectionCard key={item.title} item={item} />
        ))}
      </div>
    </div>
  );
};

export default SuperFutureSection;
