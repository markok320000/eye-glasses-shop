import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setSortFilter } from "../redux/features/filters";
import { AiOutlineArrowDown } from "react-icons/ai";
import { useAppSelector } from "../hooks/hooks";

const FilterAndSortBarLarge = () => {
  const [selectedFiltersCount, setselectedFiltersCount] = useState(0);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const dropdownOptions = [
    "Relevance",
    "Popularity",
    "Price: Low-To-High",
    "Price: High-To-Low",
  ];
  const dispatch = useDispatch();
  const state = useAppSelector((state) => state.filtersSlice);
  const [selectedOption, setSelectedOption] = useState(0);
  const handleSelectOption = (index: number) => {
    setSelectedOption(index);
    setDropdownOpen(false);
    dispatch(setSortFilter(dropdownOptions[index]));
  };

  useEffect(() => {
    // for each state if the size of the element is bigger than 0 then add 1 to the counter also dont count the sort
    // then set the counter to the state
    let counter = 0;
    for (let key in state) {
      if (key !== "sort" && state[key].length > 0) {
        counter++;
      }
    }
    setselectedFiltersCount(counter);
  }, [state]);

  return (
    <div className="flex justify-between items-center p-2  border-b-2 bg-white w-full">
      {/* Left Side */}
      <div>
        <span className="text-xl font-bold">{`Filters (${selectedFiltersCount})`}</span>
      </div>
      {/* Right Side */}
      <div className="flex justify-between items-center text-black px-2 font-semibold text-base my-0 border-0 relative bg-white z-40 ">
        <div>
          <span>{"Sort By: "}</span>
        </div>
        <div className="relative">
          <div className="" onClick={() => setDropdownOpen(!isDropdownOpen)}>
            <div className="flex items-center gap-2 hover:cursor-pointer hover:text-yellow-700">
              <span>{dropdownOptions[selectedOption]}</span>
              <div className="">
                <AiOutlineArrowDown
                  className={`text-xl ${
                    isDropdownOpen
                      ? "transition-transform transform rotate-180 duration-150"
                      : "transition-transform transform duration-150"
                  }`}
                />
              </div>
            </div>
          </div>

          {isDropdownOpen && (
            <div className="absolute bg-white border rounded border-gray-300 w-48 mx-auto right-0 font-light">
              {dropdownOptions.map((option, index) => (
                <div
                  key={index}
                  className={`cursor-pointer px-4 py-2  ${
                    selectedOption === index
                      ? "bg-blue-500 text-white hover:bg-blue-500"
                      : "hover:bg-gray-100"
                  }`}
                  onClick={() => handleSelectOption(index)}
                >
                  {option}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FilterAndSortBarLarge;
