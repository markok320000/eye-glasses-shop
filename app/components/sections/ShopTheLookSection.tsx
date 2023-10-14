"use client";

import React, { useState } from "react";
import Image from "next/image";

import img1 from "@/public/images/1.jpg";
import img2 from "@/public/images/2.jpg";
import img3 from "@/public/images/3.jpg";
import img4 from "@/public/images/4.jpg";
import img5 from "@/public/images/5.jpg";
import ButtonPrimary from "../buttons/ButtonPrimary";
import SocialIcons from "../social-icons/SocialIcons";
import { useMediaQuery } from "@react-hook/media-query";

// interface ImageWithOverlayProps {
//   src: string;
//   alt: string;
//   index: number;
// }

// function ImageWithOverlay({ index, src, alt, onMouseEnter, onMouseLeave }: ImageWithOverlayProps) {
//   const [hovered, setHovered] = useState(false);

//   const onMouseEnterHandler = () => {
//     setHovered(true);
//   }

//   return (
//     <div
//       className="col-span-2 row-span-2 relative"
//       onMouseEnter={() => setHovered(true)}
//       onMouseLeave={() => setHovered(false)}
//     >
//       <Image src={src} alt={alt} objectFit="cover" />
//       {hovered && (
//         <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
//           <button className="text-white font-bold py-2 px-4 rounded">
//             Shop Now
//           </button>
//         </div>
//       )}
//     </div>
//   );
// }

const ShopTheLookSection = () => {
  const [hovered, setHovered] = useState(false);
  return (
    <div className="flex flex-col md:flex-row items-center gap-4 p-4">
      <div>
        <div className="flex flex-col justify-center items-center md:items-start md:flex-shrink md:mr-20 3xl:mr-40 text-center md:text-left ">
          <h3 className="text-4xl font-bold p-2">@eyebuydirect</h3>
          <p className="p-2 text-base font-medium ">
            Follow us on social for the latest trends and tag #eyebuydirect in
            your new eyewear!
          </p>
          <div className="mt-5 md:my-10">
            <ButtonPrimary title="Shop the look" url={"/"} />
          </div>

          <div className=" hidden md:block">
            <span className="font-semibold ">Follow us</span>
            <SocialIcons />
          </div>
        </div>
      </div>
      <div
        className="grid grid-cols-2 grid-rows-5 m-0 p-0 gap-4
        md:grid-cols-4 md:grid-rows-2 max-w-[800px]
        "
      >
        <div
          className="col-span-2 row-span-2 relative "
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <Image src={img1} alt="Image 1" objectFit="cover" />
          {hovered && (
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
              <button className="text-white font-bold py-2 px-4 rounded">
                Shop Now
              </button>
            </div>
          )}
        </div>
        <div className="col-span-1 row-span-1 relative  ">
          <Image src={img2} alt="Image 2" objectFit="cover" />
        </div>
        <div className="col-span-1 row-span-1 relative  ">
          <Image src={img3} alt="Image 3" objectFit="cover" />
        </div>
        <div
          className="col-span-2 row-span-2 relative
          md:col-span-1 md:row-span-1 
        "
        >
          <Image src={img4} alt="Image 4" objectFit="cover" />
        </div>
        <div className="hidden  md:block col-span-1 row-span-1 relative ">
          <Image src={img5} alt="Image 5" objectFit="cover" />
        </div>
      </div>
    </div>
  );
};

export default ShopTheLookSection;
