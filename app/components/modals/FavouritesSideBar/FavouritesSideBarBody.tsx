import { faHeart, faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import FavouritesProduct from "./FavouritesProduct";

const FavouritesSideBarBody = ({ items }) => {
  if (items.length === 0) {
    return (
      <div className="flex flex-col mt-4 items-center mx-4 text-center">
        <div className="p-0.5 mt-2">
          <FontAwesomeIcon icon={faHeart} />
        </div>
        <div className="mt-4">You have no saved items.</div>
        <div className="mt-4 text-md text-black font-medium">
          Sign in to sync your Saved items across all your devices.
        </div>
        <button className="bg-yellow-700 w-[80%] rounded-md p-3 my-3 mx-3 text-white  ">
          Sign in
        </button>
      </div>
    );
  } else {
    return (
      <div className="flex flex-col items-center">
        {items.map((item) => (
          <FavouritesProduct key={item.id} item={item} />
        ))}
        <button className="bg-yellow-700 rounded-md p-3 my-3 mx-2 text-white w-[80%]">
          View My Whishlist
        </button>
      </div>
    );
  }
};

export default FavouritesSideBarBody;
