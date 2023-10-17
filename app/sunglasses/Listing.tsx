"use client";
import React, { useState } from "react";
import filterAndSortSVG from "@/public/listingSVGs/filterAndSortSVG.svg";
import Image from "next/image";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { PiSquareSplitVerticalFill, PiSquaresFourFill } from "react-icons/pi";
import ListingItem from "./ListingItem";
import listingData from "@/app/components/bootstrapData/ListingsData";
import { Filter } from "react-feather";
import FilterAndSortBar from "./FilterAndSortBar";

export enum LayoutType {
  ONE_COLUMN = 1,
  TWO_COLUMNS = 2,
}

const Listing = () => {
  const [selectedColsLayout, setselectedColsLayout] = useState(
    LayoutType.ONE_COLUMN
  );

  const handleSetSelectedColsLayout = (layout: LayoutType) => {
    setselectedColsLayout(layout);
  };

  return (
    <div>
      {/* Listing Filter and sort */}
      <FilterAndSortBar
        selectedColsLayout={selectedColsLayout}
        handleSetSelectedColsLayout={handleSetSelectedColsLayout}
      />

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
