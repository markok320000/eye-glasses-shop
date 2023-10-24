"use client";
import React, { useState } from "react";
import ImageCarousel from "./ImageCarousel";
import { AiOutlineHeart } from "react-icons/ai";
import ItemInfo from "./ItemInfo";
import BenefitsSlider from "@/app/components/benefits-slider/BenefitsSlider";
import benefitItems from "@/app/components/bootstrapData/benefitsMainPageData";
import { useMediaQuery } from "@react-hook/media-query";
import ImageCarouselLargeDevices from "./ImageCarouselLargeDevices";

const item = {
  id: 2,
  name: "Classic Glasses",
  description: "Timeless and iconic",
  colors: [
    {
      id: 201,
      colorCode: "#000000",
      name: "Black",
      price: 79.99,
      discountedPrice: null,
      onSale: false,
      image:
        "https://img.ebdcdn.com/product/front/gray/spl6815.jpg?im=Resize,width=600,height=300,aspect=fill;UnsharpMask,sigma=1.0,gain=1.0",
    },
    {
      id: 202,
      colorCode: "#FFFF00",
      name: "Tortoise",
      price: 89.99,
      discountedPrice: 74.99,
      onSale: true,
      image:
        "https://img.ebdcdn.com/product/front/gray/spl7538.jpg?im=Resize,width=600,height=300,aspect=fill;UnsharpMask,sigma=1.0,gain=1.0",
    },
  ],
};

const Item = () => {
  const matches = useMediaQuery("only screen and (min-width: 768px)");

  if (item === undefined) {
    return <div>Item is undefined</div>;
  }
  const [selected, setSelected] = useState(0);

  const handleSetSelectedColor = (index: number) => {
    setSelected(index);
  };

  if (matches)
    return (
      <>
        <div className="container">
          <div className="flex">
            {/* Image Container */}
            <div>
              <ImageCarouselLargeDevices />
            </div>
          </div>
        </div>
      </>
    );

  return (
    <div className="flex flex-col ">
      <ImageCarousel />
      <div className="">
        <ItemInfo
          item={item}
          selectedColorIndex={selected}
          setSelectedColor={handleSetSelectedColor}
        />
      </div>
      <div className="px-1">
        <BenefitsSlider
          benefitItems={benefitItems.slice(0, 3)}
          itemDetailsSection={true}
        />
      </div>
    </div>
  );
};

export default Item;
