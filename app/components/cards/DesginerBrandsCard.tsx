import React from "react";
import Image from "next/image";
import ButtonPrimary from "../buttons/ButtonPrimary";

interface DesignerBrandsCardProps {
  item: {
    title: string;
    desc: string;
    imageUrl: string;
    button: {
      title: string;
      url: string;
    };
  };
}

const DesginerBrandsCard = ({ item }: DesignerBrandsCardProps) => {
  const { title, desc, imageUrl, button } = item;
  return (
    <div className="relative bg-red-50">
      <div className="  overflow-hidden max-w-[650px]">
        <Image
          src={imageUrl}
          alt={title}
          className="hover:scale-105 transition duration-1000"
        />
      </div>
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 ">
        <div className="flex flex-col items-center text-white gap-2 text-center">
          <h3 className="text-xl font-bold">{title}</h3>
          <p className="text-sm ">{desc}</p>
          <ButtonPrimary
            title={button.title}
            url={button.url}
            brandsSection={true}
          />
        </div>
      </div>
    </div>
  );
};

export default DesginerBrandsCard;
