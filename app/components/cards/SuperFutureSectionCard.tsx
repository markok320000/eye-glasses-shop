"use client";
import React from "react";
import Image from "next/image";
import ButtonPrimary from "../buttons/ButtonPrimary";
import { useMediaQuery } from "@react-hook/media-query";

interface SuperFutureSectionCardProps {
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

const SuperFutureSectionCard = ({ item }: SuperFutureSectionCardProps) => {
  const { title, desc, imageUrl, button } = item;

  return (
    <div className="flex flex-col items-center  gap-3 text-center w-full">
      <div className="aspect-square  overflow-hidden ">
        <Image
          src={imageUrl}
          alt={title}
          width={380}
          height={380}
          className="hover:scale-105 transition duration-1000"
        />
      </div>
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-sm">{desc}</p>
      <ButtonPrimary title={button.title} url={button.url} />
    </div>
  );
};

export default SuperFutureSectionCard;
