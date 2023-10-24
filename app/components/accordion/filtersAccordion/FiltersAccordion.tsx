import React, { useState } from "react";
import AccordionItem from "./AccordionItem";
import { decrement, increment } from "@/app/redux/features/counter";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/app/redux/store";
import { useAppSelector } from "@/app/hooks/hooks";
import FilterDropdown from "./FilterDropdown";

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

  const dropdownOptions = [
    "Relevance",
    "Popularity",
    "Price: Low-To-High",
    "Price: High-To-Low",
  ];
  const [selectedOption, setSelectedOption] = useState(0);

  const state = useAppSelector((state) => state.filtersSlice);
  const { color, size, gender, brand, sort } = state;

  const handleOpen = (value: number) => setOpen(open === value ? 0 : value);
  return (
    <>
      <div className="h-full w-full">
        <AccordionItem
          item={genderData}
          open={open}
          handleOpen={handleOpen}
          selectedFiltersCount={gender.length}
        />
        <AccordionItem
          item={brandData}
          open={open}
          handleOpen={handleOpen}
          selectedFiltersCount={brand.length}
        />
        <AccordionItem
          item={sizeData}
          open={open}
          handleOpen={handleOpen}
          selectedFiltersCount={size.length}
        />
        <AccordionItem
          item={colorData}
          open={open}
          handleOpen={handleOpen}
          selectedFiltersCount={color.length}
        />
      </div>
    </>
  );
};

export default FiltersAccordion;
