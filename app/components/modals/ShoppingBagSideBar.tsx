"use client";
import React from "react";
import useShoppingBagSideBar from "@/app/hooks/useShoppingBarSideBar";
import RightSideBar from "./RightSideBar";
import ShoppingBagSideBarBody from "./ShoppingBagSideBarBody";
import shoppingBagData from "../bootstrapData/shoppingBagData";

const ShoppingBagSideBar = () => {
  const shoppingBagSideBar = useShoppingBagSideBar();

  return (
    <RightSideBar
      isOpen={shoppingBagSideBar.isOpen}
      onClose={shoppingBagSideBar.onClose}
      onSubmit={() => {}}
      actionLabel="Checkout"
      secondaryActionLabel="Continue Shopping"
      title="Shopping Bag"
      body={<ShoppingBagSideBarBody items={shoppingBagData} />}
    />
  );
};

export default ShoppingBagSideBar;
