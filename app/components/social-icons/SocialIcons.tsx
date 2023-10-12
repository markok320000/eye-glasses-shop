import React from "react";
import { FaInstagram, FaFacebook, FaTwitter, FaTiktok } from "react-icons/fa";

const SocialIcons = () => {
  return (
    <div className="flex items-center space-x-6">
      <a href="https://www.instagram.com/">
        <FaInstagram className="text-3xl text-black hover:text-gray-700 cursor-pointer" />
      </a>
      <a href="https://www.facebook.com/">
        <FaFacebook className="text-3xl text-black hover:text-gray-700 cursor-pointer" />
      </a>
      <a href="https://twitter.com/">
        <FaTwitter className="text-3xl text-black hover:text-gray-700 cursor-pointer" />
      </a>
      <a href="https://www.tiktok.com/">
        <FaTiktok className="text-3xl text-black hover:text-gray-700 cursor-pointer" />
      </a>
    </div>
  );
};

export default SocialIcons;
