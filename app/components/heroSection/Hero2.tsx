import React from "react";
import Image from "next/image";
import { useMediaQuery } from "@react-hook/media-query";
import img1 from "@/public/images/hero1.jpg";
import img2 from "@/public/images/hero2.jpg";
import img2Small from "@/public/images/carouselSmall.jpg";

const Hero2 = () => {
  const isSmallScreen = useMediaQuery("(max-width: 900px)");

  if (isSmallScreen) {
    return (
      <div className="relative min-w-full items-center">
        <Image src={img2Small} alt="" className="w-full" />
        <div className="absolute bottom-2 left-0 right-0 md:bottom-24 sm:bottom-16 mx-auto  flex items-center justify-center">
          <div className="flex flex-col items-center text-center max-w-screen-lg mx-auto ">
            <h3 className="text-white text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-bold">
              OCTOBER MOOD
            </h3>
            <h2 className="text-xl text-green-400 sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold">
              Buy One <br />
              Get One Free
            </h2>

            <p className="px-5 text-white text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">
              Make your most stylish month and <br /> and save on two new looks!
            </p>
            <h2 className="text-sm text-white sm:text-base md:text-lg lg:text-xl xl:text-2xl">
              CODE: <span className="font-bold">BIGSAVE</span>
            </h2>
            {/* add a button here black one */}
            <button className="px-4 py-2 mt-1 hover:cursor-pointer bg-black text-xs text-white rounded-md">
              Shop Now
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-w-full items-center">
      <Image src={img2} alt="" className="w-full" />
      <div className="absolute inset-0 flex items-center justify-end">
        <div className="flex flex-col items-center text-center mr-16">
          <h3 className="text-white text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-bold">
            OCTOBER MOOD
          </h3>
          <h2 className="text-xl text-green-400 sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold">
            Buy One <br />
            Get One Free
          </h2>

          <p className="px-5 text-white text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">
            Make your most stylish month and <br /> and save on two new looks!
          </p>
          <h2 className="text-sm text-white sm:text-base md:text-lg lg:text-xl xl:text-2xl">
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

export default Hero2;
