import React, { useEffect, useState } from "react";
import ReactSlider from "react-slider";
import RangeSlider from "./rangeSlider/RangeSlider";

import totalWidthIcon from "@/public/images/glasses-filter-images/totalWidth.jpg";
import lensWidthIcon from "@/public/images/glasses-filter-images/lensWidth.jpg";
import lensHeightIcon from "@/public/images/glasses-filter-images/lensHeight.jpg";
import bridgeHeightIcon from "@/public/images/glasses-filter-images/bridgeHeight.jpg";
import armHeightIcon from "@/public/images/glasses-filter-images/armHeight.jpg";
import { useDispatch } from "react-redux";
import { useAppSelector, useAppDispatch } from "@/app/hooks/hooks";
import {
  addGenderFilter,
  removeGenderFilter,
  addBrandFilter,
  removeBrandFilter,
  addColorFilter,
  removeColorFilter,
} from "@/app/redux/features/filters";

const RenderItem = ({ filterType, item }) => {
  const [customSize, setCustomSize] = useState({
    filterType: "custom",
    totalWidth: [10, 100],
    bridgeWidth: [10, 100],
    lensWidth: [10, 100],
    lensHeight: [10, 100],
    armWidth: [10, 100],
  });

  const dispatch = useDispatch();
  const { gender, brand, color } = useAppSelector(
    (state) => state.filtersSlice
  );

  const checkIfColorIsPresent = () => {
    return color.includes(item.colorCode);
  };

  const [colorIsPresent, setcolorIsPresent] = useState(checkIfColorIsPresent());

  useEffect(() => {
    setcolorIsPresent(checkIfColorIsPresent());
  }, [color]);

  // get me the state of the colors
  // if the color is in the state, then it is selected

  const handleFilterClick = (filterType, filterValue) => {
    switch (filterType) {
      case "Gender":
        if (gender.includes(filterValue)) {
          dispatch(removeGenderFilter(filterValue));
        } else {
          dispatch(addGenderFilter(filterValue));
        }
        break;
      case "Brands":
        if (brand.includes(filterValue)) {
          dispatch(removeBrandFilter(filterValue));
        } else {
          dispatch(addBrandFilter(filterValue.toLowerCase()));
        }
        break;
      case "Color":
        if (color.includes(filterValue)) {
          dispatch(removeColorFilter(filterValue));
        } else {
          dispatch(addColorFilter(filterValue));
        }
        break;
      // Handle other filter types
      default:
        break;
    }
  };

  if (filterType === "Gender") {
    return (
      <div className="flex text-gray items-center ">
        <input
          className="accent-yellow-800 h-5 w-5 mx-2 "
          type="checkbox"
          id={item.genderType}
          value={item.genderType}
          onClick={() => handleFilterClick(filterType, item.genderType)}
        />
        <label
          htmlFor={item.genderType}
        >{`${item.genderType} (${item.itemCount})`}</label>
      </div>
    );
  }

  if (filterType === "Brands") {
    return (
      <div className="flex text-gray items-center gap-2">
        <input
          className="accent-yellow-800 h-5 w-5 mx-2 "
          type="checkbox"
          id={item.brandName}
          value={item.brandName}
          onClick={() =>
            handleFilterClick(filterType, item.brandName.toLowerCase())
          }
        />
        <img
          src={item.logoUrl}
          alt={item.brandName}
          className="h-auto w-12 py-1"
        />
        <label
          htmlFor={item.brandName}
        >{`${item.brandName} (${item.itemCount})`}</label>
      </div>
    );
  }

  if (filterType === "Color") {
    return (
      <div key={item.id}>
        <div
          className={` rounded-full border-[2px] p-[2px] ${
            colorIsPresent ? "  border-gray-400 " : "border-white"
          }`}
        >
          <div
            className={` p-3  rounded-full hover:cursor-pointer ${
              colorIsPresent ? " text-white" : ""
            }`}
            onClick={() => handleFilterClick(filterType, item.colorCode)}
            style={{ backgroundColor: item.colorCode }}
          ></div>
        </div>
      </div>
    );
  }
};

export default RenderItem;
