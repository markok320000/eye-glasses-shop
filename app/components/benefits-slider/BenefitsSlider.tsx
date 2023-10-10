"use client";
import React, { useRef, useState, useEffect } from "react";
import ReturnDaysSVG from "@/public/images/benefits-slider/return.svg";
import CustomerSupportSVG from "@/public/images/benefits-slider/customerSupportSVG.svg";
import InsuranceSVG from "@/public/images/benefits-slider/insuranceSVG.svg";
import SiteJabberSVG from "@/public/images/benefits-slider/siteJabberSVG.svg";
import RatingSVG from "@/public/images/benefits-slider/ratingsSVG.svg";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { IoMdClose } from "react-icons/io";

const benefitItems = [
  {
    icon: <ReturnDaysSVG />,
    text: "14-Day-Free Returns",
    content: (
      <div>
        <p className="text-xs p-2 text-gray-700">
          With 14-Day Free Returns, you can get a one-time replacement or refund
          within two weeks of receiving your order — no questions asked!
        </p>
        <a href="#" className="text-blue-500 text-xs">
          Learn More
        </a>
      </div>
    ),
  },
  {
    icon: <CustomerSupportSVG />,
    text: "24/7 Customer Support",
    content: (
      <div>
        <p className="text-xs p-2 text-gray-700">
          Our customer service team is available to answer all your eyewear
          questions — 24 hours a day, 7 days a week via phone, email, or live
          chat on our{" "}
          <a href="#" className="text-blue-500 text-xs">
            contact
          </a>
        </p>
      </div>
    ),
  },
  {
    icon: <InsuranceSVG />,
    text: "Vision Insurance",
    content: (
      <div>
        <p className="text-xs p-2 text-gray-700">
          Cover the cost of prescription eyewear with our out-of-network vision
          insurance or use your Flexible Savings Account (FSA) or Health Savings
          Account (HSA).
        </p>
        <a href="#" className="text-blue-500 text-xs">
          Learn More
        </a>
      </div>
    ),
  },
  { icon: <SiteJabberSVG /> }, // Add your custom text
  { icon: <RatingSVG /> }, // Add your custom text
];

const BenefitsSlider = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeTooltipIndex, setActiveTooltipIndex] = useState<number | null>(
    null
  );

  const handleClick = (index: number) => {
    // if (index === activeTooltipIndex) {
    //   // Clicked on the same item that's already active, so close the tooltip
    //   setActiveTooltipIndex(null);
    // } else {
    //   // Clicked on a different item, so open its tooltip and close others
    //   setActiveTooltipIndex(index);
    // }

    const element = containerRef.current?.children[index] as HTMLElement;
    if (element) {
      const container = containerRef.current as HTMLElement;
      const containerWidth = container.offsetWidth;
      const elementWidth = element.offsetWidth;
      const scrollLeft =
        element.offsetLeft - (containerWidth - elementWidth) / 2;
      container.scrollTo({
        left: scrollLeft,
        behavior: "smooth",
      });
    }
  };

  const handleMouseLeave = (index: number) => {
    if (index === activeTooltipIndex) {
      setTimeout(() => {
        if (!isHoveredTooltip) setActiveTooltipIndex(null);
      }, 1000);
    }
  };

  const handleMouseLeaveToolTip = () => {
    setActiveTooltipIndex(null);
  };

  const [isHoveredTooltip, setIsHoveredTooltip] = useState(false);
  console.log(isHoveredTooltip + "Is hovered tooltip");

  return (
    <div className="bg-blue-gray-50 flex justify-center w-full py-2">
      <div
        className="flex flex-nowrap  py-4 items-center text-md ml-2 overflow-x-auto overflow-hidden"
        ref={containerRef}
      >
        {benefitItems.map((item, index) => (
          <div>
            <OverlayTrigger
              key={index}
              show={activeTooltipIndex === index}
              trigger={["click"]} // Activate the OverlayTrigger on click for the active item
              overlay={(props) =>
                // if there is no content return empty
                item.content ? (
                  <Tooltip {...props}>
                    <div
                      onMouseLeave={() => handleMouseLeaveToolTip()}
                      className="bg-white w-[210px] p-2 text-center shadow-lg rounded-lg"
                    >
                      {/* Close button for mobile devices */}
                      <button
                        onClick={() => setActiveTooltipIndex(null)}
                        className="
                          absolute  
                          top-[-10px]
                          right-[-10px]
                          
                          bg-black
                          transition
                          rounded-full
                          text-white
                          font-bold
                          xl:hidden
                           "
                      >
                        <IoMdClose size={20} />
                      </button>
                      {item.content ? item.content : item.text}
                    </div>
                  </Tooltip>
                ) : (
                  <></>
                )
              }
              placement="top"
            >
              <div
                className={`flex mx-2 hover:cursor-pointer hover:underline ${
                  activeTooltipIndex === index
                    ? "text-yellow-800"
                    : "text-gray-700"
                } hover:text-yellow-800`}
                onMouseEnter={() => setActiveTooltipIndex(index)}
                onMouseLeave={() => handleMouseLeave(index)}
                onClick={() => handleClick(index)}
              >
                {item.icon}
                <div
                  className="flex flex-col justify-center whitespace-nowrap mx-2"
                  onMouseEnter={() => setIsHoveredTooltip(true)}
                >
                  <span className="text-center">{item.text}</span>
                </div>
              </div>
            </OverlayTrigger>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BenefitsSlider;
