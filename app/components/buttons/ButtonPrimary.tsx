import React from "react";

const ButtonPrimary = ({ title, url }) => {
  return (
    <a
      href={url}
      className="
        w-[150px]
        sm:w-[200px]
        border-[1px]
        border-black
        py-2
        sm:py-3 
        rounded
        hover:text-yellow-800
        hover:border-yellow-800
        hover:transition-colors
        duration-500

      "
    >
      {title}
    </a>
  );
};

export default ButtonPrimary;
