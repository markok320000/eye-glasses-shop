import React, { useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import Image from "next/image";

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

interface Link {
  id: number;
  url: string;
  text: string;
  onSale?: boolean;
}

interface AccordionLinksProps {
  links: Link[];
}

function AccordionLinks({ links }: AccordionLinksProps) {
  return (
    <ul className="px-2 font-light text-lg">
      {links.map((link: Link) => (
        <li
          key={link.id}
          className={`py-2 ${
            link.onSale ? "text-red-800" : "hover:text-black"
          }`}
        >
          <a href={link.url}>{link.text}</a>
        </li>
      ))}
    </ul>
  );
}

interface AccordionPremiumBrandsProps {
  brands: any[];
}

function AccordionPremiumBrands({ brands }: AccordionPremiumBrandsProps) {
  return (
    <div className="px-2 font-light text-lg">
      <ul className="flex flex-wrap ">
        {brands.map((brand: any) => (
          <li key={brand.id} className="py-2 w-full">
            {brand.imageUrl && (
              <div className="flex flex-row items-center cursor-pointer w-full hover:text-orange-600">
                <div className="flex mx-auto w-20 h-auto mr-3">
                  <Image
                    src={brand.imageUrl}
                    alt={brand.text}
                    width={320} // Set the desired width
                    height={320} // Set the desired height
                  />
                </div>
                <div className="flex-grow ">{brand.text}</div>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

interface AccordionItemProps {
  item: any;
  child: any;
  open: number;
  handleOpen: (id: number) => void;
}

function AccordionItem({ item, child, open, handleOpen }: AccordionItemProps) {
  return (
    <div key={item.id} className="">
      <Accordion
        className={`text-black ${child ? "pr-10" : ""}`}
        open={open === item.id}
        icon={<Icon id={item.id} open={open} child={child} />}
      >
        <AccordionHeader
          onClick={() => handleOpen(item.id)}
          className={`h-13 text-black px-2 font-light text-lg my-0 border-0 py-1 relative ${
            child ? "text-gray-600" : ""
          }`}
        >
          {item.header}
          {item.children && <Icon id={item.id} open={open} />}
        </AccordionHeader>
        <AccordionBody className="ml-6">
          {item.links && <AccordionLinks links={item.links} />}
          {item.brands && <AccordionPremiumBrands brands={item.brands} />}
          {item.children && (
            <div className="">
              <DefaultAccordion apiData={item.children} child={true} />
            </div>
          )}
        </AccordionBody>
      </Accordion>
    </div>
  );
}

interface DefaultAccordionProps {
  apiData: any;
  child?: boolean;
}

const DefaultAccordion: React.FC<DefaultAccordionProps> = ({
  apiData,
  child,
}) => {
  const [open, setOpen] = useState(0);

  const handleOpen = (value: number) => setOpen(open === value ? 0 : value);

  return (
    <>
      {apiData.map((item: any) => (
        <AccordionItem
          key={item.id}
          item={item}
          child={child}
          open={open}
          handleOpen={handleOpen}
        />
      ))}
    </>
  );
};

export default DefaultAccordion;
