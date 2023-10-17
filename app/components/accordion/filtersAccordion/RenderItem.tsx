import React, { useState } from "react";
import ReactSlider from "react-slider";
import RangeSlider from "./rangeSlider/RangeSlider";

import totalWidthIcon from "@/public/images/glasses-filter-images/totalWidth.jpg";
import lensWidthIcon from "@/public/images/glasses-filter-images/lensWidth.jpg";
import lensHeightIcon from "@/public/images/glasses-filter-images/lensHeight.jpg";
import bridgeHeightIcon from "@/public/images/glasses-filter-images/bridgeHeight.jpg";
import armHeightIcon from "@/public/images/glasses-filter-images/armHeight.jpg";

const RenderItem = ({ filterType, item }) => {
  const [sliderValue, setSliderValue] = useState([0, 10]);

  if (filterType === "Gender") {
    return (
      <div>
        <input type="checkbox" id={item.genderType} value={item.genderType} />
        <label
          htmlFor={item.genderType}
        >{`${item.genderType} (${item.itemCount})`}</label>
      </div>
    );
  }

  if (filterType === "Brands") {
    return (
      <div className="flex items-center gap-2">
        <input type="checkbox" id={item.brandName} value={item.brandName} />
        <img src={item.logoUrl} alt={item.brandName} className="h-auto w-16 " />
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
            defaultValue={[10, 50]}
          />
          <RangeSlider
            text="Bridge Width"
            iconSrc={bridgeHeightIcon}
            defaultValue={[10, 50]}
          />
          <RangeSlider
            text="Lens Width"
            iconSrc={lensWidthIcon}
            defaultValue={[10, 50]}
          />
          <RangeSlider
            text="Lens Height "
            iconSrc={lensHeightIcon}
            defaultValue={[10, 50]}
          />
          <RangeSlider
            text="Arm Width "
            iconSrc={armHeightIcon}
            defaultValue={[10, 50]}
          />
        </div>
      );
    }
    return (
      <div>
        <input type="checkbox" id={item.sizeType} value={item.sizeType} />
        <label
          htmlFor={item.sizeType}
        >{`${item.sizeType} (${item.itemCount})`}</label>
      </div>
    );
  }

  //   if (filterType === "Color") {
  //     return (
  //       <div>
  //         <h1>Color</h1>
  //       </div>
  //     );
  //   }
};

export default RenderItem;
