import {
  Accordion,
  AccordionBody,
  AccordionHeader,
} from "@material-tailwind/react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import React, { useEffect, useState } from "react";
import RenderItem from "./RenderItem";
import FilterSize from "./FilterSize";
import { useAppSelector } from "@/app/hooks/hooks";

interface IconProps {
  id: number;
  open: number;
}

function Icon({ id, open }: IconProps) {
  return (
    <div className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-700">
      {open === id ? (
        <AiOutlineMinus className=" text-2xl" />
      ) : (
        <AiOutlinePlus className=" text-2xl" />
      )}
    </div>
  );
}

interface AccordionItemProps {
  item: any;
  child: any;
  open: number;
  footerAccordion?: boolean;
  handleOpen: (id: number) => void;
  selectedFiltersCount: number;
}

const AccordionItem: React.FC<AccordionItemProps> = ({
  item,
  open,
  handleOpen,
  selectedFiltersCount,
}) => {
  return (
    <div>
      <div key={item.filterType} className="bg-white mb-[2px]">
        <Accordion
          open={open === item.filterType}
          icon={<Icon id={item.filterType} open={open} />}
        >
          <AccordionHeader
            onClick={() => handleOpen(item.filterType)}
            className={`h-13 text-black px-2 text-lg font-semibolld border-0 py-4 relative  
              `}
          >
            <div className="flex gap-2">
              {item.filterType}
              <div
                className={`${
                  selectedFiltersCount === 0
                    ? "hidden"
                    : "bg-yellow-700 rounded-full h-6 w-6 flex items-center justify-center text-white text-sm"
                }`}
              >
                {selectedFiltersCount}
              </div>
            </div>

            <Icon id={item.filterType} open={open} />
          </AccordionHeader>
          {/* if filterType is color put the options in row */}
          <AccordionBody
            className={`text-lg
            ${
              item.filterType === "Color" ? "flex flex-row " : "flex flex-col"
            }  
            `}
          >
            {item.filterType === "Size" ? (
              <FilterSize item={item} />
            ) : (
              item.options.map((child: any) => (
                <RenderItem
                  key={child.id}
                  item={child}
                  filterType={item.filterType}
                />
              ))
            )}
          </AccordionBody>
        </Accordion>
      </div>
    </div>
  );
};

export default AccordionItem;
