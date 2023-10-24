import React, { useEffect, useState } from "react";
import RangeSlider from "./rangeSlider/RangeSlider";
import totalWidthIcon from "@/public/images/glasses-filter-images/totalWidth.jpg";
import lensWidthIcon from "@/public/images/glasses-filter-images/lensWidth.jpg";
import lensHeightIcon from "@/public/images/glasses-filter-images/lensHeight.jpg";
import bridgeHeightIcon from "@/public/images/glasses-filter-images/bridgeHeight.jpg";
import armHeightIcon from "@/public/images/glasses-filter-images/armHeight.jpg";
import { useDispatch } from "react-redux";
import { addSizeFilter } from "@/app/redux/features/filters";

const FilterSize = ({ item, handleSelectedItemsCount }) => {
  const defaultWidth = {
    filterType: "custom",
    totalWidth: [10, 100],
    bridgeWidth: [10, 100],
    lensWidth: [10, 100],
    lensHeight: [10, 100],
    armWidth: [10, 100],
  };
  const [customSize, setCustomSize] = useState(defaultWidth);
  const [sizeFilters, setSizeFilters] = useState([]);
  const dispatch = useDispatch();

  const handleSizeChange = (attribute, value) => {
    const customFilter = sizeFilters.find(
      (filter) => filter.filterType === "custom"
    );
    if (!customFilter) {
      sizeFilters.push({ ...defaultWidth });
      setSizeFilters([...sizeFilters]);
    }

    const updatedCustomSize = {
      ...customSize,
      [attribute]: value,
    };
    setCustomSize(updatedCustomSize);
    removeOtherFilters();

    dispatch(addSizeFilter({ value: customSize }));
  };

  const handleCheckClick = (value) => {
    let sizeFiltersArr = sizeFilters;
    sizeFiltersArr = addFilter(value, sizeFiltersArr);
    setSizeFilters([...sizeFiltersArr]);

    dispatch(addSizeFilter({ value: sizeFiltersArr }));
  };

  const removeOtherFilters = () => {
    const customFilter = sizeFilters.find(
      (filter) => filter.filterType === "custom"
    );
    setSizeFilters(customFilter ? [customSize] : []);
  };

  const addFilter = (filter, filterArr) => {
    const index = filterArr.findIndex(
      (filterItem) => filterItem.filterType === filter.filterType
    );
    if (index === -1) {
      if (filter.filterType === "custom") {
        console.log("custom filter added");
        filterArr = [];
      } else {
        if (customFilterExistsInArray(filterArr)) {
          removeCustomFilter(filterArr);
        }
      }
      filterArr.push(filter);
    } else {
      removeFilter(filter, filterArr);
    }
    return filterArr;
  };

  const customFilterExistsInArray = (filterArr) => {
    return filterArr.some((filterItem) => filterItem.filterType === "custom");
  };

  const removeFilter = (filter, filterArr) => {
    const index = filterArr.findIndex(
      (filterItem) => filterItem.filterType === filter.filterType
    );
    if (index !== -1) {
      filterArr.splice(index, 1);
      if (filter.filterType === "custom") {
        setCustomSize(defaultWidth);
      }
    }
    return filterArr;
  };

  const removeCustomFilter = (filterArr) => {
    const index = filterArr.findIndex(
      (filterItem) => filterItem.filterType === "custom"
    );
    if (index !== -1) {
      filterArr.splice(index, 1);
    }
    setCustomSize(defaultWidth);
  };

  return (
    <div>
      {item.options.map((filterItem: any, index: number) => (
        <div>
          <input
            className="accent-yellow-800 h-5 w-5 mx-2 "
            type="checkbox"
            id={filterItem.sizeType}
            value={filterItem.size}
            checked={sizeFilters.some(
              (filter) => filter.filterType === filterItem.size.filterType
            )}
            onClick={() => {
              handleCheckClick(filterItem.size);
            }}
          />
          <label
            htmlFor={filterItem.sizeType}
          >{`${filterItem.sizeType} (${filterItem.itemCount})`}</label>
        </div>
      ))}
      <div>
        <input
          className="accent-yellow-800 h-5 w-5 mx-2 "
          type="checkbox"
          checked={sizeFilters.some((filter) => filter.filterType === "custom")}
          onClick={() => {
            handleCheckClick(customSize);
          }}
        />
        <label>Custom</label>
      </div>
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
          defaultValue={[customSize.bridgeWidth[0], customSize.bridgeWidth[1]]}
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
    </div>
  );
};

export default FilterSize;
