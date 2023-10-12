import React from "react";
import ButtonPrimary from "../buttons/ButtonPrimary";

const ShopGlassesSection = () => {
  return (
    <div className="flex flex-col justify-center items-center text-center my-8 sm:my-16 w-full">
      <div className="flex flex-row space-x-4 mb-8 sm:order-2 sm:mt-8">
        {/* On mobile (md), these will be displayed first */}
        <ButtonPrimary title={"Shop Glasses"} url={"/glasses"} />
        <ButtonPrimary title={"Shop Sunglasses"} url={"/sunGlasses"} />
      </div>
      <div className="flex flex-col space-y-6 sm:order-1">
        {/* On mobile (md), this will be displayed second */}
        <h2 className="text-5xl font-bold text-yellow-800">
          Every Vision of you
        </h2>
        <h3 className="text-2xl font-extrabold">
          It’s always a good day to buy glasses online.
        </h3>
        <p className="mx-4 sm:mx-10">
          Express your every vision with affordable{" "}
          <a
            href="#"
            className="hover:text-yellow-900 text-yellow-800 underline"
          >
            eyeglasses
          </a>{" "}
          and{" "}
          <a
            href="#"
            className="hover:text-yellow-900 text-yellow-800 underline"
          >
            prescription sunglasses
          </a>
          . <br />
          Shop thousands of glasses with{" "}
          <a
            href="#"
            className="hover:text-yellow-900 text-yellow-800 underline"
          >
            Virtual Try-On
          </a>
          ,{" "}
          <a
            href="#"
            className="hover:text-yellow-900 text-yellow-800 underline"
          >
            2-Day Delivery
          </a>
          , and frames starting at just $6!
        </p>
      </div>
    </div>
  );
};

export default ShopGlassesSection;
