import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faMagnifyingGlass,
  faUser,
  faHeart,
  faBagShopping,
  faShoppingBag,
} from "@fortawesome/free-solid-svg-icons";
import ShoppingBagProduct from "./ShoppingBagProduct";

const ShoppingBagSideBarBody = ({ items }) => {
  if (items.length === 0) {
    return (
      <div className="flex flex-col mt-4 items-center mx-4 text-center">
        <div className="p-0.5 mt-2">
          <FontAwesomeIcon icon={faShoppingBag} />
        </div>
        <div className="mt-4">0 items</div>
        <div className="mt-4 text-md text-black font-medium">
          Still waiting to be filled with the parfect pair(s).
        </div>
      </div>
    );
  } else {
    let totalPrice = items.reduce((total, item) => total + item.price, 0);
    // round to two digits
    totalPrice = Math.round(totalPrice * 100) / 100;

    return (
      <div className="flex flex-col">
        <div className="flex flex-col mx-6 mt-4">
          <div>Order Total</div>
          <div className="text-4xl font-extrabold py-2">${totalPrice}</div>
          <div className="text-xs">
            Shipping, Tax and Shipping Protection not included
          </div>
        </div>
        <hr className="mx-2 mt-1 border-gray-400" />

        {items.map(
          (
            item // For each item in the shopping bag, render a ShoppingBagProduct
          ) => (
            <ShoppingBagProduct key={item.id} item={item} />
          )
        )}

        <button className="bg-yellow-700 rounded-md p-3 my-3 mx-2 text-white">
          Proceed to checkout
        </button>

        <div className="flex flex-col m-3">
          <div className="text-md font-semibold">Apply promo code</div>
          <div className="text-sm text-yellow-800 underline hover:cursor-pointer">
            Check your avilable offers{" "}
          </div>
          <div className="border-gray-400 mt-2 border rounded flex items-center">
            <input
              className="w-full p-3 placeholder-gray-400 focus:border-none outline-none"
              type="text"
              placeholder="Have a promo code?"
            />
            <button className="bg-gray-500 text-white py-2 px-4 rounded-md m-2">
              Apply
            </button>
          </div>
        </div>
      </div>
    );
  }
};

export default ShoppingBagSideBarBody;
