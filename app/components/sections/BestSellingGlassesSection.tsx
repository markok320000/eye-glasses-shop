import React from "react";
import RecentlyViewedCard from "../cards/RecentlyViewedCard";
import FavouritesProduct from "../modals/FavouritesSideBar/FavouritesProduct";
import favouritesSideBarData from "../bootstrapData/favouritesSideBarData";
import ButtonPrimary from "../buttons/ButtonPrimary";

const BestSellingGlassesSection = () => {
  return (
    <div className="px-3 ">
      <div className="text-center ">
        <h2 className="font-bold text-3xl md:text-4xl">Best Selling Glasses</h2>
      </div>

      <div className="flex justify-center w-full py-2 mt-4 ">
        <div
          className="flex 
            flex-nowrap  
            text-md  
            overflow-x-auto 
            overflow-hidden
            gap-8
            "
        >
          {favouritesSideBarData.map((item) => (
            <FavouritesProduct
              key={item.id}
              item={item}
              bestSellingGlasses={true}
            />
          ))}
        </div>
      </div>
      <div className="text-center mt-8">
        <ButtonPrimary title={"Shop best sellers"} url={"/glasses"} />
      </div>
    </div>
  );
};

export default BestSellingGlassesSection;
