import React from "react";
import { DetailsType } from "./Details";

const DetailsButton = ({ handleClick, detailsType }) => {
  return (
    <div>
      <div>
        <a
          href="#_"
          className="relative flex
     items-center justify-center  overflow-hidden font-mono  tracking-tighter flex-1 h-16 text-xl font-semibold   group w-full"
          onClick={() => handleClick(detailsType)}
        >
          <div className="h-full flex items-center justify-center">
            <div className="flex items-center flex-col text-center ">
              <span className="relative">{detailsType}</span>
              <span className="  w-0 h-[3px] absolute bottom-0 transition-all duration-300 ease-in bg-black  group-hover:w-full group-hover:h-[3px]"></span>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default DetailsButton;
