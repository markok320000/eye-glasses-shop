"use client";

import useFavouritesSideBar from "@/app/hooks/useFavouritesSideBar";
import React from "react";
import RightSideBar from "../RightSideBar";
import FavouritesSideBarBody from "./FavouritesSideBarBody";
import favouritesSideBarData from "../../bootstrapData/favouritesSideBarData";

const FavouritesSideBar = () => {
  const favouritesSideBar = useFavouritesSideBar();

  return (
    <div>
      <RightSideBar
        isOpen={favouritesSideBar.isOpen}
        onClose={favouritesSideBar.onClose}
        onSubmit={() => {}}
        actionLabel="Checkout"
        secondaryActionLabel="Continue Shopping"
        title="My Whishlist"
        body={<FavouritesSideBarBody items={favouritesSideBarData} />}
      />
    </div>
  );
};

export default FavouritesSideBar;
