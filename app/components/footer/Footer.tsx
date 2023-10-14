"use client";

import React from "react";
import DefaultAccordion from "../accordion/DefaultAccordion";
import SocialIcons from "../social-icons/SocialIcons";
import ButtonPrimary from "../buttons/ButtonPrimary";
import footerLogo from "@/public/images/footerLogo.jpg";
import Image from "next/image";

const footerData = [
  {
    id: 1,
    header: "Shop",
    links: [
      {
        id: 11,
        text: "Women’s Eyeglasses",
        url: "https://www.eyebuydirect.com/eyeglasses/women",
      },
      {
        id: 12,
        text: "Men’s Eyeglasses",
        url: "https://www.eyebuydirect.com/eyeglasses/men",
      },
      {
        id: 13,
        text: "Affordable Glasses",
        url: "https://www.eyebuydirect.com/eyeglasses/cheap",
      },
      {
        id: 14,
        text: "All Eyeglasses",
        url: "https://www.eyebuydirect.com/eyeglasses",
      },
      {
        id: 15,
        text: "Blue Light Glasses",
        url: "https://www.eyebuydirect.com/prescription-lens/digital-protection",
      },
      {
        id: 16,
        text: "Progressive Lenses",
        url: "https://www.eyebuydirect.com/eyeglasses/progressive",
      },
      {
        id: 17,
        text: "All Brands",
        url: "https://www.eyebuydirect.com/brands",
      },
      {
        id: 18,
        text: "Non-Prescription Eyeglasses",
        url: "https://www.eyebuydirect.com/eyeglasses/non-prescription",
      },
      {
        id: 19,
        text: "All Sunglasses",
        url: "https://www.eyebuydirect.com/sunglasses",
      },
      {
        id: 20,
        text: "Promotions",
        url: "https://www.eyebuydirect.com/offers",
      },
      {
        id: 21,
        text: "Discount Coupons",
        url: "https://www.eyebuydirect.com/discount-coupons",
      },
    ],
  },
  {
    id: 2,
    header: "Tips & Guides",
    links: [
      {
        id: 22,
        text: "How to Order Glasses Online",
        url: "https://www.eyebuydirect.com/guides/how-to-buy-prescription-eyeglasses-online",
      },
      {
        id: 23,
        text: "How to Choose Lenses",
        url: "https://www.eyebuydirect.com/guides/how-to-choose-eyeglass-lenses",
      },
      {
        id: 24,
        text: "Frames for Your Face Shape",
        url: "https://www.eyebuydirect.com/guides/frames-and-face-shapes",
      },
      {
        id: 25,
        text: "Eye Care Tips",
        url: "https://www.eyebuydirect.com/eyecare",
      },
      {
        id: 26,
        text: "Help & FAQ",
        url: "https://www.eyebuydirect.com/faq",
      },
      {
        id: 27,
        text: "Find an Eye Doctor",
        url: "https://www.eyebuydirect.com/eyecare/find-eye-doctor",
      },
      {
        id: 28,
        text: "Accessibility Statement",
        url: "https://www.eyebuydirect.com/web-accessibility",
      },
      {
        id: 29,
        text: "Virtual Try-On",
        url: "https://www.eyebuydirect.com/virtual-try-on",
      },
      {
        id: 30,
        text: "Pupillary Distance (PD",
        url: "https://www.eyebuydirect.com/guides/how-to-measure-your-pd",
      },
      {
        id: 31,
        text: "Lens Index",
        url: "https://www.eyebuydirect.com/prescription-lens/lens-index",
      },
      {
        id: 32,
        text: "Vision Insurance",
        url: "https://www.eyebuydirect.com/eyecare/insurance",
      },
    ],
  },
  {
    id: 3,
    header: "About",
    links: [
      {
        id: 33,
        text: "About Us",
        url: "https://www.eyebuydirect.com/about-us",
      },
      {
        id: 34,
        text: "Press Room",
        url: "https://www.eyebuydirect.com/press",
      },
      {
        id: 35,
        text: "Contact Us",
        url: "https://www.eyebuydirect.com/contact",
      },
      {
        id: 36,
        text: "Buy 1 Give 1",
        url: "https://www.eyebuydirect.com/buy-one-give-one",
      },
      {
        id: 37,
        text: "Eco-Friendly Frames",
        url: "https://www.eyebuydirect.com/collections/sustainability",
      },
      {
        id: 38,
        text: "Shipping & Returns",
        url: "https://www.eyebuydirect.com/shipping-and-returns",
      },
      {
        id: 39,
        text: "Site Map",
        url: "https://www.eyebuydirect.com/sitemap",
      },
      {
        id: 40,
        text: "Our Blog",
        url: "https://www.eyebuydirect.com/blog/",
      },
    ],
  },
  {
    id: 4,
    header: "Our Programs",
    links: [
      {
        id: 41,
        text: "Referral Program",
        url: "https://www.eyebuydirect.com/referral-program",
      },
      {
        id: 42,
        text: "Loyalty Program",
        url: "https://www.eyebuydirect.com/loyalty-program",
      },
      {
        id: 43,
        text: "Affiliate Program",
        url: "https://www.eyebuydirect.com/affiliate-program",
      },
      {
        id: 44,
        text: "Student Discount",
        url: "https://www.eyebuydirect.com/student-discount",
      },
    ],
  },
  {
    id: 5,
    header: "Our Brands",
    links: [
      {
        id: 45,
        text: "FramesDirect.com",
        url: "https://www.framesdirect.com/?utm_source=EBD&utm_medium=link&utm_campaign=multibufooter&utm_content=00100.0001.0001",
      },
      {
        id: 46,
        text: "Readers.com",
        url: "https://www.readers.com/?utm_source=EBD&utm_medium=link&utm_campaign=multibufooter&utm_content=00100.0001.0001",
      },
    ],
  },
];

const Footer = () => {
  return (
    <div className="flex flex-col bg-zinc-900">
      <DefaultAccordion apiData={footerData} footerAccordion={true} />
      <div className="flex flex-col justify-center items-center  mt-4">
        <SocialIcons footer={true} />
        <button
          className="text-white border-[1px] border-white text-xs font-semibold my-8
          px-8 py-3 rounded-lg
        "
        >
          Get the App
        </button>
        <div className="flex flex-col items-center text-white text-xs font-semibold gap-2">
          <a href="/privacy-policy" className=" my-1 hover:underline">
            Privacy Policy
          </a>
          <a href="/terms-and-conditions" className=" my-1 hover:underline">
            Terms and Conditions of Use
          </a>
          <a
            href="/do-not-sell-or-share-my-personal-information"
            className=" my-1 hover:underline"
          >
            Do Not Sell or Share My Personal Information
          </a>
          <a href="/cookie-notice" className=" my-1 hover:underline">
            Cookie Notice
          </a>
          <a href="/ad-choices" className=" my-1 hover:underline">
            AdChoices
          </a>
        </div>

        <div className="mt-4">
          <Image src={footerLogo} alt="footer logo" className="w-20 h-auto" />
        </div>

        <div className="text-white text-xs mt-4 pb-4">
          © 2006-2023{" "}
          <a href="/" className="hover:underline">
            eyebuydirect.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
