import React, { useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

const item = {
  id: 2,
  name: "Classic Glasses",
  description: "Timeless and iconic, perfect for casual wear.",
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

const ListingItem = ({ item, twoColsLayout }) => {
  if (item === undefined) {
    return <div>Item is undefined</div>;
  }
  const [selected, setSelected] = useState(0);

  const selectedColor = item.colors[selected];

  return (
    <div className="flex flex-col items-center p-2">
      <div className="p-2 max-w-full">
        {/* Display the selected color image and price */}
        <div className="flex items-center">
          <a
            href=""
            className="aspect-auto
                w-full
                relative
                overflow-hidden
                rounded-xl"
          >
            <img
              src={selectedColor.image}
              alt={selectedColor.name}
              className="h-full w-full object-cover"
            />
          </a>
        </div>
        <div className="flex justify-between">
          <div className="flex flex-wrap">
            <span className="text-sm mr-2 font-semibold">{item.name}</span>
            <span className="mr-1 font-semibold">{`$${
              selectedColor.discountedPrice ?? selectedColor.price
            }`}</span>
            {selectedColor.onSale && (
              <span className="text-gray-500 line-through text-[14px]">{`$${selectedColor.price}`}</span>
            )}
          </div>
          <div>
            <AiOutlineHeart className="text-2xl" />
          </div>
        </div>
        <div>
          <span className="text-gray text-xs">{selectedColor.name}</span>
        </div>

        <div
          className={`
            flex justify-between 
            ${twoColsLayout ? "flex-col gap-2" : "flex-row items-center"}`}
        >
          {/* if listing colors exists map me with the button with the text of the color */}
          {item.colors && (
            <div className="flex items-center">
              {item.colors.map((color, index) => (
                <div
                  className={` rounded-full border-[2px] p-[2px] ${
                    selected === index ? "  border-gray-400 " : "border-white"
                  }`}
                >
                  <div
                    key={index}
                    className={` p-3  rounded-full ${
                      selected === index ? " text-white" : ""
                    }`}
                    onClick={() => setSelected(index)}
                    style={{ backgroundColor: color.colorCode }}
                  ></div>
                </div>
              ))}
            </div>
          )}
          <div>
            <button
              className={`border-[1px] border-black rounded-full mt-auto  px-5 text-sm 
              ${twoColsLayout ? "w-full py-1" : "py-2"}
            `}
            >
              Try-on
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingItem;
