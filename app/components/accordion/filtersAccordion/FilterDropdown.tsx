import React, { useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { useAppSelector } from "@/app/hooks/hooks";
import { useDispatch } from "react-redux";
import { setSortFilter } from "@/app/redux/features/filters";

const FilterDropdown = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const dropdownOptions = [
    "Relevance",
    "Popularity",
    "Price: Low-To-High",
    "Price: High-To-Low",
  ];
  const dispatch = useDispatch();

  const [selectedOption, setSelectedOption] = useState(dropdownOptions[0]);
  const handleSelectOption = (index: number) => {
    setSelectedOption(index);
    setDropdownOpen(false);
    dispatch(setSortFilter(dropdownOptions[index]));
  };
  return (
    <div className="flex justify-between items-center h-16 text-black px-2 font-semibold text-lg my-0 border-0 relative bg-white mb-8 z-40">
      <div>Sort By:</div>
      <div className="relative">
        <div className="" onClick={() => setDropdownOpen(!isDropdownOpen)}>
          <div className="flex items-center gap-2 hover:cursor-pointer">
            <span>{dropdownOptions[selectedOption]}</span>
            <AiOutlineArrowRight className="text-xl" />
          </div>
        </div>

        {isDropdownOpen && (
          <div className="absolute bg-white border rounded border-gray-300 w-48 mx-auto right-0 font-light">
            {dropdownOptions.map((option, index) => (
              <div
                key={index}
                className={`cursor-pointer px-4 py-2 hover:bg-gray-100 ${
                  selectedOption === index
                    ? "bg-blue-500 text-white hover:bg-blue-500"
                    : ""
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
  );
};

export default FilterDropdown;
