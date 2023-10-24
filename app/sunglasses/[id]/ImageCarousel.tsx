"use client";
import React, { CSSProperties } from "react";
var Carousel = require("react-responsive-carousel").Carousel;
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "@/public/item-example-images/1.jpg";

const ImageCarousel = () => {
  const logoURL =
    "http://localhost:3000/_next/image?url=https%3A%2F%2Fimg.ebdcdn.com%2Fupload%2Fbanner%2F202201%2F242229184793.jpg%3Fseo%3D%2F01-25-collections-rflkt&w=640&q=75";
  return (
    <div className="w-full relative ">
      <div className="absolute top-4">
        <div className="flex items-center ">
          <img src={logoURL} alt="logo" className="h-10 w-auto" />
          <span className="bg-red-500 text-white font-semibold rounded-sm p-1">
            50% OFF
          </span>
        </div>
      </div>
      <Carousel
        showArrows={true}
        onChange={() => {}}
        onClickItem={() => {}}
        onClickThumb={() => {}}
        renderIndicator={(onClickHandler, isSelected, index, label) => {
          if (isSelected) {
            return (
              <li
                className="bg-yellow-600 w-3 h-3 inline-block m-2 rounded-full"
                aria-label={`Selected: ${label} ${index + 1}`}
                title={`Selected: ${label} ${index + 1}`}
              />
            );
          }
          return (
            <li
              className="bg-gray-500 w-3 h-3 inline-block m-2 rounded-full "
              // style={indicatorStyles}
              onClick={onClickHandler}
              onKeyDown={onClickHandler}
              value={index}
              key={index}
              role="button"
              tabIndex={0}
              title={`${label} ${index + 1}`}
              aria-label={`${label} ${index + 1}`}
            />
          );
        }}
      >
        <div className="py-4 h-[350px] flex items-center relative">
          <Image src={img1} alt="Legend 2" />
        </div>
        <div className="py-4 h-[350px] flex items-center relative">
          <Image src={img1} alt="Legend 2" />
        </div>
        <div className="py-4 h-[350px] flex items-center relative">
          <Image src={img1} alt="Legend 2" />
        </div>
      </Carousel>
    </div>
  );
};

export default ImageCarousel;
