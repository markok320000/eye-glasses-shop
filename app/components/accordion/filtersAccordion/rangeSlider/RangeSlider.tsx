import React, { useEffect, useState } from "react";
import ReactSlider from "react-slider";
import "../rangeSlider/Slider.css";
import { slider } from "@material-tailwind/react";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { useAppSelector } from "@/app/hooks/hooks";
import { addSizeFilter } from "@/app/redux/features/filters";

interface RangeSliderProps {
  text: string;
  iconSrc: string;
  defaultValue: [number, number];
  attributeName: string;
  handleSizeChange: (attribute: string, value: [number, number]) => void;
}

const RangeSlider = ({
  text,
  iconSrc,
  defaultValue,
  attributeName,
  handleSizeChange,
}: RangeSliderProps) => {
  const [sliderValue, setsliderValue] = useState(defaultValue);

  useEffect(() => {
    setsliderValue(defaultValue);
  }, [defaultValue]);

  const handleSliderValueChange = (value) => {
    setsliderValue(value);
    handleSizeChange(attributeName, value);
  };

  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <div className="flex justify-between w-full px-2 mb-2">
        <div>{text}</div>
        <div>
          <Image src={iconSrc} alt={text} width={80} height={80} />
        </div>
      </div>
      <ReactSlider
        value={sliderValue}
        className="slider"
        thumbClassName="thumb"
        trackClassName="track"
        defaultValue={defaultValue}
        ariaLabel={["Lower thumb", "Upper thumb"]}
        ariaValuetext={(state) => `Thumb value ${state.valueNow}`}
        renderThumb={(props, state) => <div {...props}></div>}
        pearling
        onChange={(value) => handleSliderValueChange(value)}
      />
      <div className="font-medium text-gray-500 text-lg">{`${sliderValue[0]}mm - ${sliderValue[1]}mm `}</div>
    </div>
  );
};

export default RangeSlider;
