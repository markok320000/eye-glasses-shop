import React from "react";
import { IoMdClose } from "react-icons/io";
import FiltersAccordion from "../components/accordion/filtersAccordion/FiltersAccordion";
import FilterDropdown from "../components/accordion/filtersAccordion/FilterDropdown";

type FilterModalProps = {
  isOpen: boolean;
  handleClose: () => void;
};

const FilterModal = ({ isOpen, handleClose }: FilterModalProps) => {
  return (
    <div
      className={`fixed bottom-0 left-0 w-full h-full bg-gray-300 transition-transform duration-500 z-50 text-lg${
        isOpen ? "transform translate-y-0" : "transform translate-y-full"
      }`}
    >
      <div className="flex flex-col justify-between h-full">
        {/* Header */}
        <div className="flex justify-between px-4 py-4 items-center">
          <button
            onClick={handleClose}
            className="p-1 m-2 border-0 hover:opacity-70 transition"
          >
            <IoMdClose size={27} />
          </button>
          <h1 className="text-xl cursor-pointer">Filter And Sort</h1>
          <span className="underline cursor-pointer">Clear</span>
        </div>

        {/* Content */}
        <div className="overflow-y-auto bg-red-10 h-full">
          <div className="mx-2">
            <FilterDropdown />
            <FiltersAccordion />
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-center py-5 bg-white border-t-[1px]">
          <button
            className="bg-yellow-800  text-white font-bold py-3 w-3/6 rounded-lg shadow-lg"
            onClick={() => console.log("Apply button clicked")}
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterModal;
