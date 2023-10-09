"use client";

import React from "react";
import Logo from "./Logo";
import HeaderOffer from "./HeaderOffer";
import RxHamburgerMenu from "react-icons";
import {
  faBars,
  faMagnifyingGlass,
  faUser,
  faHeart,
  faBagShopping,
  faShoppingBag,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useSideBarMenuModal from "@/app/hooks/useSideBarMenuModal";
import useShoppingBagSideBar from "@/app/hooks/useShoppingBarSideBar";
import useFavouritesSideBar from "@/app/hooks/useFavouritesSideBar";

const Navbar = () => {
  const sideBarModal = useSideBarMenuModal();
  const shoppingBagSideBar = useShoppingBagSideBar();
  const favouritesSideBar = useFavouritesSideBar();

  return (
    <nav className="bg-white border border-gray-100 p-4 sticky top-0 z-50">
      <div className="container mx-auto grid grid-cols-3 items-center">
        {/* Left-aligned content */}
        <div className="col-span-1 text-center">
          <ul className="flex gap-4 ">
            <li>
              <FontAwesomeIcon
                icon={faBars}
                className="h-6 cursor-pointer"
                onClick={sideBarModal.onOpen}
              />
            </li>
            <li>
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className="h-6 cursor-pointer"
              />
            </li>
          </ul>
        </div>

        {/* Center-aligned content */}
        <div className="col-span-1 text-center">
          <ul className="flex justify-center ">
            <Logo />
          </ul>
        </div>

        {/* Right-aligned content */}
        <div className="col-span-1 text-right">
          <ul className="flex justify-end space-x-4">
            <li>
              <FontAwesomeIcon icon={faUser} className="h-6 cursor-pointer" />
            </li>
            <li>
              <FontAwesomeIcon
                icon={faHeart}
                className="h-6 cursor-pointer

              "
                onClick={favouritesSideBar.onOpen}
              />
            </li>
            <li>
              <FontAwesomeIcon
                icon={faShoppingBag}
                className="h-6 cursor-pointer"
                onClick={shoppingBagSideBar.onOpen}
              />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
