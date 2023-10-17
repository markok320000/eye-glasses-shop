import React, { useEffect } from "react";
import { IoMdClose } from "react-icons/io";
import FiltersAccordion from "../components/accordion/filtersAccordion/FiltersAccordion";

type FilterModalProps = {
  isOpen: boolean;
};

const FilterModal = ({ isOpen, handleClose }: FilterModalProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isOpen]);
  return (
    <div
      className={`fixed bottom-0 left-0 w-full h-full bg-gray-300 transition-transform duration-500 z-50 ${
        isOpen ? "transform translate-y-0" : "transform translate-y-full"
      }`}
    >
      <div className="h-full ">
        <div className="flex justify-between px-4 items-center">
          <div>
            <button
              onClick={handleClose}
              className="
                    p-1
                    m-2
                    border-0
                    hover:opacity-70
                    transition
                  "
            >
              <IoMdClose size={27} />
            </button>
          </div>
          <div>
            <h1 className="text-xl  cursor-pointer ">Filter And Sort</h1>
          </div>
          <div>
            <span className="underline cursor-pointer">Clear</span>
          </div>
        </div>

        {/* Body */}
        <div className="overflow-y-auto ">
          <FiltersAccordion />
        </div>
      </div>
      <div className="bottom justify-center px-4 py-2">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => console.log("Apply button clicked")}
        >
          Apply
        </button>
      </div>
    </div>
  );
};

export default FilterModal;
