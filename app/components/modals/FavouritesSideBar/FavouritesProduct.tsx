"use client";
import React, { useState } from "react";
import Image from "next/image";
import { IoMdClose } from "react-icons/io";

const FavouritesProduct = ({ item, bestSellingGlasses }) => {
  if (bestSellingGlasses) {
    return (
      <div className="flex flex-col items-center min-w-[150px] shadow-lg rounded ">
        <div className="hover:cursor-pointer">
          <Image src={item.image} width={240} height={120} />
        </div>
        <div className="flex flex-row text-sm gap-2 text-center font-medium">
          <div className=" hover:text-yellow-800 hover:cursor-pointer hover:underline">
            {item.name}
          </div>
          <div className="">${item.price}</div>
        </div>
      </div>
    );
  }

  const [isClosed, setIsClosed] = useState(false);
  const [isClosedTailwindProperties, setIsClosedTailwindProperties] = useState(
    "transform translate-x-full duration-500 ease-in-out"
  );
  const handleClose = () => {
    setIsClosed(true);

    setTimeout(() => {
      setIsClosedTailwindProperties("hidden");
    }, 500);
  };
  return (
    <div className={`${isClosed ? `${isClosedTailwindProperties}` : ""}`}>
      <button
        className="
          hover:opacity-70
          transition
          h-4
          w-4
          relative
          top-[22px]
          left-[265px]
        "
        onClick={handleClose}
      >
        <IoMdClose size={16} />
      </button>

      <div className="flex flex-col items-center m-6 ">
        <div className="hover:cursor-pointer">
          <Image src={item.image} width={300} height={150} />
        </div>
        <div className="flex-col w-[80%]">
          <div className="flex flex-row justify-between">
            <div className="text-lg font-bold hover:text-yellow-800 hover:cursor-pointer">
              {item.name}
            </div>
            <div className="text-lg font-bold ml-2">${item.price}</div>
          </div>
          <div className="text-sm">{item.color}</div>
        </div>
      </div>
    </div>
  );
};

export default FavouritesProduct;
