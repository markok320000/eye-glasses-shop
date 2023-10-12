import React from "react";
import Image from "next/image";

import img1 from "@/public/images/1.jpg";
import img2 from "@/public/images/2.jpg";
import img3 from "@/public/images/3.jpg";
import img4 from "@/public/images/4.jpg";
import img5 from "@/public/images/5.jpg";
import ButtonPrimary from "../buttons/ButtonPrimary";
import SocialIcons from "../social-icons/SocialIcons";

const ShopTheLookSection = () => {
  return (
    <div className="flex ">
      <div className="flex flex-col mx-8 md:py-16 py-16 bg-red-50">
        <h3 className="text-4xl font-bold p-2">@eyebuydirect</h3>
        <p className="p-2 text-base font-medium">
          Follow us on social for the latest trends and tag #eyebuydirect in
          your new eyewear!
        </p>
        <div className="my-5">
          <ButtonPrimary title="Shop the look" url={"/"} />
        </div>

        <div className="mt-auto">
          <span className="font-semibold pb-5">Follow us</span>
          <SocialIcons />
        </div>
      </div>
      <div className="grid grid-cols-4 grid-rows-2 gap-4">
        <div className="col-span-2 row-span-2 relative max-w-[400px]">
          <Image src={img1} alt="Image 1" objectFit="cover" />
        </div>
        <div className="col-span-1 row-span-1 relative max-w-[190px]">
          <Image src={img2} alt="Image 2" objectFit="cover" />
        </div>
        <div className="col-span-1 row-span-1 relative max-w-[190px]">
          <Image src={img3} alt="Image 3" objectFit="cover" />
        </div>
        <div className="col-span-1 row-span-1 relative max-w-[190px]">
          <Image src={img4} alt="Image 4" objectFit="cover" />
        </div>
        <div className="col-span-1 row-span-1 relative max-w-[190px]">
          <Image src={img5} alt="Image 5" objectFit="cover" />
        </div>
      </div>
    </div>
  );
};

export default ShopTheLookSection;
