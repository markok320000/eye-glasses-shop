import React, { useState } from "react";
import AccordionItem from "./AccordionItem";

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
      itemCount: 5,
    },
    {
      id: 2,
      sizeType: "Medium",
      itemCount: 10,
    },
    {
      id: 3,
      sizeType: "Large",
      itemCount: 15,
    },
    {
      id: 4,
      custom: true,
      sizeType: "Custom",
      itemCount: 15,
    },
  ],
};
const FiltersAccordion: React.FC<FiltersAccordionProps> = ({ apiData }) => {
  const [open, setOpen] = useState(0);

  const handleOpen = (value: number) => setOpen(open === value ? 0 : value);
  return (
    <>
      <div className="p-2 h-full">
        <AccordionItem item={genderData} open={open} handleOpen={handleOpen} />
        <AccordionItem item={brandData} open={open} handleOpen={handleOpen} />
        <AccordionItem item={sizeData} open={open} handleOpen={handleOpen} />

        {/* <AccordionItem
          key={item.id}
          item={item}
          open={open}
          handleOpen={handleOpen}
          filterType="Brands"
        />
        <AccordionItem
          key={item.id}
          item={item}
          open={open}
          handleOpen={handleOpen}
          filterType="Size"
        />
        <AccordionItem
          key={item.id}
          item={item}
          open={open}
          handleOpen={handleOpen}
          filterType="Color"
        /> */}
      </div>
    </>
  );
};

export default FiltersAccordion;

//
