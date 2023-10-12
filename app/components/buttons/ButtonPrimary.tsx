import React from "react";

const ButtonPrimary = ({ title, url, brandsSection }) => {
  return (
    <a
      href={url}
      className={`
        min-w-[150px]
        sm:w-[200px]
        border-[1px]
        border-black
        ${brandsSection ? "bg-white text-black" : ""}
        py-2
        px-2
        mt-auto
        sm:py-3 
        rounded
        hover:text-yellow-800
        hover:border-yellow-800
        hover:transition-colors
        duration-500`}
    >
      {title}
    </a>
  );
};

export default ButtonPrimary;
