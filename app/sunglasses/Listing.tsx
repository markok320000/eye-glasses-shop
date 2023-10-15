"use client";
import React, { useState } from "react";
import filterAndSortSVG from "@/public/listingSVGs/filterAndSortSVG.svg";
import Image from "next/image";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { PiSquareSplitVerticalFill, PiSquaresFourFill } from "react-icons/pi";
import ListingItem from "./ListingItem";
import listingData from "@/app/components/bootstrapData/ListingsData";

enum LayoutType {
  ONE_COLUMN = 1,
  TWO_COLUMNS = 2,
}

const Listing = () => {
  const [selectedColsLayout, setselectedColsLayout] = useState(
    LayoutType.ONE_COLUMN
  );
  return (
    <div>
      {/* Listing Filter and sort */}
      <div className="sticky top-[60px] z-40">
        <div className="flex justify-between items-center p-2  border-b-2 bg-white ">
          {/* Left Side */}
          <div>
            <div className="flex gap-2 justify-between items-center p-2 rounded-lg border-black border-[1px] hover:cursor-pointer">
              <div className="flex items-center">
                <AiOutlineUnorderedList className="text-2xl" />
                <span className="text-sm">Filter & Sort</span>
              </div>
              <div className="ml-2">
                <div className="bg-blue-50 rounded-full w-5 h-5 flex items-center justify-center">
                  <span className=" text-xs font-bold">0</span>
                </div>
              </div>
            </div>
          </div>
          {/* Right Side */}
          <div>
            <div className="flex items-center text-gray-600">
              <span>563 Results</span>

              <div className="flex md:hidden">
                <PiSquareSplitVerticalFill
                  className={`
                text-3xl
              ${
                selectedColsLayout === LayoutType.ONE_COLUMN
                  ? "text-yellow-800"
                  : " "
              }`}
                  onClick={() => setselectedColsLayout(LayoutType.ONE_COLUMN)}
                />
                <PiSquaresFourFill
                  className={`
                text-3xl
              ${
                selectedColsLayout === LayoutType.TWO_COLUMNS
                  ? "text-yellow-800"
                  : " "
              }`}
                  onClick={() => setselectedColsLayout(LayoutType.TWO_COLUMNS)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`grid grid-cols-${selectedColsLayout} lg:grid-cols-3 xl:grid-cols-4`}
      >
        {/* Map over the glasses array of each object in the listingData array */}
        {listingData.map((item) =>
          item.glasses.map((glassesItem) => (
            <div className="" key={glassesItem.id}>
              <ListingItem
                item={glassesItem}
                twoColsLayout={selectedColsLayout === LayoutType.TWO_COLUMNS}
              />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Listing;
