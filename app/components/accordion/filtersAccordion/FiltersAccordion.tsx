import React, { useState } from "react";
import AccordionItem from "./AccordionItem";
import { decrement, increment } from "@/app/redux/features/counter";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/app/redux/store";
import { useAppSelector } from "@/app/hooks/hooks";

interface FiltersAccordionProps {
  apiData: any;
  child?: boolean;
  footerAccordion?: boolean;
}

const genderData = {
  filterType: "Gender",
  options: [
    {
      id: 1,
      genderType: "Male",
      itemCount: 10,
    },
    {
      id: 2,
      genderType: "Female",
      itemCount: 15,
    },
    {
      id: 3,
      genderType: "Non-binary",
      itemCount: 5,
    },
  ],
};

const brandData = {
  filterType: "Brands",
  options: [
    {
      id: 1,
      brandName: "Nike",
      logoUrl:
        "https://e7.pngegg.com/pngimages/921/954/png-clipart-ray-ban-aviator-classic-aviator-sunglasses-ray-ban-wayfarer-ray-ban-angle-text.png",
      itemCount: 20,
    },
    {
      id: 2,
      brandName: "Adidas",
      logoUrl:
        "https://e7.pngegg.com/pngimages/921/954/png-clipart-ray-ban-aviator-classic-aviator-sunglasses-ray-ban-wayfarer-ray-ban-angle-text.png",
      itemCount: 15,
    },
    {
      id: 3,
      brandName: "Puma",
      logoUrl:
        "https://e7.pngegg.com/pngimages/921/954/png-clipart-ray-ban-aviator-classic-aviator-sunglasses-ray-ban-wayfarer-ray-ban-angle-text.png",
      itemCount: 10,
    },
  ],
};

const sizeData = {
  filterType: "Size",
  options: [
    {
      id: 1,
      sizeType: "Small",
      size: {
        filterType: "small",
        totalWidth: [10, 100],
        bridgeWidth: [10, 100],
        lensWidth: [10, 100],
        lensHeight: [10, 100],
        armWidth: [10, 100],
      },
      itemCount: 5,
    },
    {
      id: 2,
      sizeType: "Medium",
      size: {
        filterType: "medium",
        totalWidth: [10, 100],
        bridgeWidth: [10, 100],
        lensWidth: [10, 100],
        lensHeight: [10, 100],
        armWidth: [10, 100],
      },
      itemCount: 10,
    },
    {
      id: 3,
      sizeType: "Large",
      size: {
        filterType: "large",
        totalWidth: [10, 100],
        bridgeWidth: [10, 100],
        lensWidth: [10, 100],
        lensHeight: [10, 100],
        armWidth: [10, 100],
      },
      itemCount: 15,
    },
  ],
};

const colorData = {
  filterType: "Color",
  options: [
    {
      id: 1,
      colorCode: "#FF0000",
      name: "Red",
    },
    {
      id: 2,
      colorCode: "#00FF00",
      name: "Green",
    },
    {
      id: 3,
      colorCode: "#0000FF",
      name: "Blue",
    },
    {
      id: 4,
      colorCode: "#FFFF00",
      name: "Yellow",
    },
  ],
};

const FiltersAccordion: React.FC<FiltersAccordionProps> = ({ apiData }) => {
  const [open, setOpen] = useState(0);
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const dropdownOptions = ["Option 1", "Option 2", "Option 3", "Option 4"];
  const [selectedOption, setSelectedOption] = useState(0);

  const state = useAppSelector((state) => state.filtersSlice);

  console.log(state);

  const handleSelectOption = (index: number) => {
    setSelectedOption(index);
    setDropdownOpen(false);
  };

  const handleOpen = (value: number) => setOpen(open === value ? 0 : value);
  return (
    <>
      {/* DROPDOWN */}
      <div className="p-2 h-full">
        <div className="flex justify-between items-center h-16 text-black px-2 font-light text-lg my-0 border-0 relative bg-white mb-8 z-40 ">
          <div>Sort By:</div>
          <div className="relative">
            <div className="" onClick={() => setDropdownOpen(!isDropdownOpen)}>
              <div className="flex">
                <span>{dropdownOptions[selectedOption]}</span>
              </div>
            </div>

            {isDropdownOpen && (
              <div className="absolute bg-white border rounded border-gray-300  w-48 right-0">
                {dropdownOptions.map((option, index) => (
                  <div
                    key={index}
                    className={`cursor-pointer px-4 py-2 hover:bg-gray-100 ${
                      selectedOption === index ? "bg-blue-500 text-white" : ""
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
        <AccordionItem item={genderData} open={open} handleOpen={handleOpen} />
        <AccordionItem item={brandData} open={open} handleOpen={handleOpen} />
        <AccordionItem item={sizeData} open={open} handleOpen={handleOpen} />
        <AccordionItem item={colorData} open={open} handleOpen={handleOpen} />
      </div>
    </>
  );
};

export default FiltersAccordion;

//
