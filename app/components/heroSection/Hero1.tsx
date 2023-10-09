import React from "react";
import Image from "next/image";
import img1 from "@/public/images/hero1.jpg";
import { useMediaQuery } from "@react-hook/media-query";
import hero1Small from "@/public/images/hero1Small.jpg";

const Hero1 = () => {
  const isSmallScreen = useMediaQuery("(max-width: 900px)");

  if (isSmallScreen) {
    return (
      <div className="relative min-w-full items-center">
        <Image src={hero1Small} alt="" className="w-full" />
        <div className="absolute bottom-2 left-0 right-0 md:bottom-24 sm:bottom-16 mx-auto  flex items-center justify-center">
          <div className="flex flex-col items-center text-center max-w-screen-lg mx-auto">
            <h3 className="text-red-800 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-bold">
              BUY MORE, SAVE MORE
            </h3>
            <h2 className="text-sm sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold">
              20% Off Order $25+
            </h2>
            <h2 className="text-sm sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold">
              25% Off Order $50+
            </h2>
            <h2 className="text-sm sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold">
              30% Off Order $100+
            </h2>
            <p className="px-5 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">
              The bigger you go on eyewear, the <br /> better the saving become!
            </p>
            <h2 className="text-xs sm:text-base md:text-lg lg:text-xl xl:text-2xl">
              CODE: <span className="font-bold">BIGSAVE</span>
            </h2>
            {/* add a button here black one */}
            <button className="px-4 py-2 mt-1 hover:cursor-pointer text-xs bg-black text-white rounded-md">
              Shop Now
            </button>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="relative min-w-full items-center">
      <Image src={img1} alt="" className="w-full" />
      <div className="absolute inset-0 flex items-center justify-center ">
        <div className="flex flex-col items-center text-center">
          <h3 className="text-red-800 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-bold">
            BUY MORE, SAVE MORE
          </h3>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold">
            20% Off Order $25+
          </h2>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold">
            25% Off Order $50+
          </h2>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold">
            30% Off Order $100+
          </h2>
          <p className="px-5 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">
            The bigger you go on eyewear, the <br /> better the saving become!
          </p>
          <h2 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
            CODE: <span className="font-bold">BIGSAVE</span>
          </h2>
          {/* add a button here black one */}
          <button className="px-5 py-2 mt-3 hover:cursor-pointer bg-black text-white rounded-md">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero1;
