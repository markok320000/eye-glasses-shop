import React, { useState } from "react";
import Image from "next/image";
import { IoMdClose } from "react-icons/io";

const ShoppingBagProduct = ({ item }) => {
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
    <div
      className={`m-2 px-3 border-b-[1px]  border-gray-200 ${
        isClosed ? `${isClosedTailwindProperties}` : ""
      }`}
    >
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
      <div className="flex flex-col">
        <div className="flex ">
          <div className="w-14 mr-4">
            <Image src={item.image} width={100} height={50} />
          </div>
          <div>
            <div className="text-xs font-bold">{item.name}</div>
          </div>
        </div>
      </div>
      <div className="float-right">${item.price}</div>
    </div>
  );
};

export default ShoppingBagProduct;
