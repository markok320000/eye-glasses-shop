import {
  Accordion,
  AccordionBody,
  AccordionHeader,
} from "@material-tailwind/react";
import React from "react";
import RenderItem from "./RenderItem";

interface IconProps {
  id: number;
  open: number;
}

function Icon({ id, open }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform absolute right-4 top-1/2 -translate-y-1/2`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}

interface AccordionItemProps {
  item: any;
  child: any;
  open: number;
  footerAccordion?: boolean;
  handleOpen: (id: number) => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({
  item,
  open,
  handleOpen,
}) => {
  return (
    <div>
      <div key={item.filterType} className="bg-white mb-[1px] ">
        <Accordion
          open={open === item.filterType}
          icon={<Icon id={item.filterType} open={open} />}
        >
          <AccordionHeader
            onClick={() => handleOpen(item.filterType)}
            className={`h-13 text-black px-2 font-light text-lg my-0 border-0 py-1 relative  
              `}
          >
            {item.filterType}

            <Icon id={item.filterType} open={open} />
          </AccordionHeader>

          <AccordionBody className={`  `}>
            {item.options.map((child: any) => (
              <RenderItem
                key={child.id}
                item={child}
                filterType={item.filterType}
              />
            ))}
          </AccordionBody>
        </Accordion>
      </div>
    </div>
  );
};

export default AccordionItem;
