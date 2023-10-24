import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import Details from "./Details";

const ItemInfo = ({ item, selectedColorIndex, setSelectedColor }) => {
  const selectedColor = item.colors[selectedColorIndex];
  return (
    <div>
      <div className="mx-4">
        <div className="text-2xl text-black font-semibold">{item.name}</div>
        <div className="font-base text-gray-600">{item.description}</div>
        <div className="text-2xl p-2">
          {selectedColor.onSale && (
            <span className="text-gray-500 line-through text-base">{`$${selectedColor.price}`}</span>
          )}
          <span className="mr-1 font-semibold">{`$${
            selectedColor.discountedPrice ?? selectedColor.price
          }`}</span>
        </div>
        <div className="text-xs text-gray-600">
          <p>Price subject to change at checkout based on options selected</p>
        </div>
      </div>

      <div className="flex flex-col gap-4 border-gray-400 border-t-[1px] mt-4 py-4 mx-4">
        <div>
          <span className="font-semibold">Color </span>
          <span className="font-semibold text-gray-600">
            {selectedColor.name}
          </span>
        </div>
        {item.colors && (
          <div className="flex ">
            {item.colors.map((color, index) => (
              <div
                className={` rounded-full border-[1px] p-[2px] ${
                  selectedColorIndex === index
                    ? "  border-gray-400 "
                    : "border-white"
                }`}
              >
                <div
                  key={index}
                  className={` p-3  rounded-full ${
                    selectedColorIndex === index ? " text-white" : ""
                  }`}
                  onClick={() => setSelectedColor(index)}
                  style={{ backgroundColor: color.colorCode }}
                ></div>
              </div>
            ))}
          </div>
        )}

        <div className="flex justify-between gap-4">
          <button className="bg-yellow-700 w-full rounded-lg text-white text-lg font-bold">
            Add To Cart
          </button>

          <div className="p-3 border-black border-[2px] rounded-lg">
            <AiOutlineHeart className="text-2xl" />
          </div>
        </div>
      </div>
      <Details />
    </div>
  );
};

export default ItemInfo;
