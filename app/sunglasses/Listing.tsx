"use client";
import React, { useState } from "react";
import filterAndSortSVG from "@/public/listingSVGs/filterAndSortSVG.svg";
import Image from "next/image";
import {
  AiOutlineArrowRight,
  AiOutlineUnorderedList,
  AiOutlineArrowDown,
  AiOutlineArrowUp,
} from "react-icons/ai";
import { PiSquareSplitVerticalFill, PiSquaresFourFill } from "react-icons/pi";
import ListingItem from "./ListingItem";
import listingData from "@/app/components/bootstrapData/ListingsData";
import FilterAndSortBar from "./FilterAndSortBar";
import { useMediaQuery } from "@react-hook/media-query";
import { useDispatch } from "react-redux";
import { setSortFilter } from "../redux/features/filters";
import FilterAndSortBarLarge from "./FilterAndSortBarLarge";
import FiltersAccordion from "../components/accordion/filtersAccordion/FiltersAccordion";

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

  const isMobile = useMediaQuery("only screen and (max-width: 768px)");

  if (isMobile) {
    return (
      <div>
        {/* Listing Filter and sort */}
        <FilterAndSortBar
          selectedColsLayout={selectedColsLayout}
          handleSetSelectedColsLayout={handleSetSelectedColsLayout}
        />

        <div
          className={`grid grid-cols-${selectedColsLayout} lg:grid-cols-3 xl:grid-cols-4 xl:hidden`}
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
  } else {
    return (
      <div className="z-40 w-full">
        <FilterAndSortBarLarge />
        <div className="flex ">
          <div className="w-1/3 flex-grow max-h-[600px] overflow-y-auto overflow-hidden">
            <FiltersAccordion />
          </div>
          <div className="">
            <div
              className={`grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 flex-none`}
            >
              {listingData.map((item) =>
                item.glasses.map((glassesItem) => (
                  <div className="" key={glassesItem.id}>
                    <ListingItem
                      item={glassesItem}
                      twoColsLayout={
                        selectedColsLayout === LayoutType.TWO_COLUMNS
                      }
                    />
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Listing;
