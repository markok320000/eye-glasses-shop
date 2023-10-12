"use client";

import { useMediaQuery } from "@react-hook/media-query";
import React from "react";

import desginerBrands from "@/public/images/designerBrands.jpg";
import designerBrands2 from "@/public/images/designerBrands2.jpg";
import DesginerBrandsCard from "../cards/DesginerBrandsCard";

const data = [
  {
    title: "Super Future",
    desc: "Enter a world of uncharted style possibilities.",
    imageUrl: desginerBrands,
    button: {
      title: "Shop Now",
      url: "https://example.com/button1",
    },
  },
  {
    title: "Fit & Style Quiz",
    desc: "Need some help figuring out which glasses are right for you? Find your perfect pair.",
    imageUrl: designerBrands2,
    button: {
      title: "Take quiz",
      url: "https://example.com/button2",
    },
  },
];

const DesignerBrandsSection = () => {
  const isSmallScreen = useMediaQuery("(max-width: 800px)");
  return (
    <div className={`my-16 w-full ${isSmallScreen ? "" : ""}`}>
      <div
        className={`flex justify-between gap-5 h-auto ${
          isSmallScreen ? "flex-col items-center " : "flex-row"
        } `}
      >
        {data.map((item) => (
          <DesginerBrandsCard key={item.title} item={item} />
        ))}
      </div>
    </div>
  );
};

export default DesignerBrandsSection;
