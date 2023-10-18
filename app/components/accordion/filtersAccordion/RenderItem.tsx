import React, { useState } from "react";
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
  addSizeFilter,
  addPredefinedSizeFilter,
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
  const handleSizeChange = (attribute, value) => {
    setCustomSize({
      ...customSize,
      [attribute]: value,
    });

    console.log(customSize);
  };

  const dispatch = useDispatch();
  const { gender, brand, color } = useAppSelector(
    (state) => state.filtersSlice
  );

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
      <div className="flex items-center">
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
      <div className="flex items-center gap-2">
        <input
          className="accent-yellow-800 h-5 w-5 mx-2 "
          type="checkbox"
          id={item.brandName}
          value={item.brandName}
          onClick={() =>
            handleFilterClick(filterType, item.brandName.toLowerCase())
          }
        />
        <img src={item.logoUrl} alt={item.brandName} className="h-auto " />
        <label
          htmlFor={item.brandName}
        >{`${item.brandName} (${item.itemCount})`}</label>
      </div>
    );
  }

  if (filterType === "Size") {
    if (item.custom) {
      return (
        <div className="my-4">
          <RangeSlider
            text="Total Width"
            iconSrc={totalWidthIcon}
            defaultValue={[customSize.totalWidth[0], customSize.totalWidth[1]]}
            attributeName="totalWidth"
            handleSizeChange={handleSizeChange}
          />
          <RangeSlider
            text="Bridge Width"
            iconSrc={bridgeHeightIcon}
            defaultValue={[
              customSize.bridgeWidth[0],
              customSize.bridgeWidth[1],
            ]}
            attributeName="bridgeWidth"
            handleSizeChange={handleSizeChange}
          />
          <RangeSlider
            text="Lens Width"
            iconSrc={lensWidthIcon}
            defaultValue={[customSize.lensWidth[0], customSize.lensWidth[1]]}
            attributeName="lensWidth"
            handleSizeChange={handleSizeChange}
          />
          <RangeSlider
            text="Lens Height "
            iconSrc={lensHeightIcon}
            defaultValue={[customSize.lensHeight[0], customSize.lensHeight[1]]}
            attributeName="lensHeight"
            handleSizeChange={handleSizeChange}
          />
          <RangeSlider
            text="Arm Width "
            iconSrc={armHeightIcon}
            defaultValue={[customSize.armWidth[0], customSize.armWidth[1]]}
            attributeName="armWidth"
            handleSizeChange={handleSizeChange}
          />
        </div>
      );
    }

    return (
      <div>
        <input
          className="accent-yellow-800 h-5 w-5 mx-2 "
          type="checkbox"
          id={item.sizeType}
          value={item.size}
          onClick={() =>
            dispatch(addPredefinedSizeFilter({ value: item.size }))
          }
        />
        <label
          htmlFor={item.sizeType}
        >{`${item.sizeType} (${item.itemCount})`}</label>
      </div>
    );
  }

  if (filterType === "Color") {
    return (
      <div key={item.id}>
        <div
          className="mx-1"
          style={{
            width: "20px",
            height: "20px",
            borderRadius: "50%",
            backgroundColor: item.colorCode,
          }}
          onClick={() => handleFilterClick(filterType, item.colorCode)}
        ></div>
      </div>
    );
  }
};

export default RenderItem;
