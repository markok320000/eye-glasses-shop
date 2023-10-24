import React, { useEffect, useState } from "react";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { PiSquareSplitVerticalFill, PiSquaresFourFill } from "react-icons/pi";
import { LayoutType } from "./Listing";
import FilterModal from "./FilterModal";
import { useAppSelector } from "../hooks/hooks";

const FilterAndSortBar = ({
  selectedColsLayout,
  handleSetSelectedColsLayout,
}) => {
  const [isOpen, setisOpen] = useState(false);
  const state = useAppSelector((state) => state.filtersSlice);

  const handleOpen = () => {
    setisOpen(true);
  };
  const handleClose = () => {
    setisOpen(false);
  };
  const [selectedFilters, setselectedFilters] = useState(0);

  useEffect(() => {
    // for each state if the size of the element is bigger than 0 then add 1 to the counter also dont count the sort
    // then set the counter to the state
    let counter = 0;
    for (let key in state) {
      if (key !== "sort" && state[key].length > 0) {
        counter++;
      }
  }
    setselectedFilters(counter);
  }, [state]);

  return (
    <>
      <FilterModal isOpen={isOpen} handleClose={handleClose} />
      <div>
        <div className="sticky top-[60px] z-40">
          <div className="flex justify-between items-center p-2  border-b-2 bg-white ">
            {/* Left Side */}
            <div>
              <div className="flex gap-2 justify-between items-center p-2 rounded-lg border-black border-[1px] hover:cursor-pointer">
                <div className="flex items-center" onClick={() => handleOpen()}>
                  <AiOutlineUnorderedList className="text-2xl" />
                  <span className="text-sm">Filter & Sort</span>
                </div>
                <div className="ml-2">
                  <div className="bg-blue-50 rounded-full w-5 h-5 flex items-center justify-center">
                    <span className=" text-xs font-bold">
                      {selectedFilters}
                    </span>
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
          selectedColsLayout === LayoutType.ONE_COLUMN ? "text-yellow-800" : " "
        }`}
                    onClick={() =>
                      handleSetSelectedColsLayout(LayoutType.ONE_COLUMN)
                    }
                  />
                  <PiSquaresFourFill
                    className={`
          text-3xl
        ${
          selectedColsLayout === LayoutType.TWO_COLUMNS
            ? "text-yellow-800"
            : " "
        }`}
                    onClick={() =>
                      handleSetSelectedColsLayout(LayoutType.TWO_COLUMNS)
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FilterAndSortBar;
