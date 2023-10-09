"use client";
import React, { useRef, useState, useEffect } from "react";
import ReturnDaysSVG from "@/public/images/benefits-slider/return.svg";
import CustomerSupportSVG from "@/public/images/benefits-slider/customerSupportSVG.svg";
import InsuranceSVG from "@/public/images/benefits-slider/insuranceSVG.svg";
import SiteJabberSVG from "@/public/images/benefits-slider/siteJabberSVG.svg";
import RatingSVG from "@/public/images/benefits-slider/ratingsSVG.svg";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

const benefitItems = [
  {
    icon: <ReturnDaysSVG />,
    text: "14-Day-Free Returns",
    content: (
      <div>
        <p className="text-xs">
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
        <p className="text-xs">
          Our customer service team is available to answer all your eyewear
          questions — 24 hours a day, 7 days a week via phone, email, or live
          chat on our
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
        <p className="text-xs">
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

  console.log(activeTooltipIndex);

  const handleClick = (index: number) => {
    if (index === activeTooltipIndex) {
      // Clicked on the same item that's already active, so close the tooltip
      setActiveTooltipIndex(null);
    } else {
      // Clicked on a different item, so open its tooltip and close others
      setActiveTooltipIndex(index);
    }

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

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const tooltip = document.querySelector(".tooltip") as HTMLElement;
      const container = containerRef.current as HTMLElement;
      if (
        tooltip &&
        !tooltip.contains(event.target as Node) &&
        !container.contains(event.target as Node)
      ) {
        setActiveTooltipIndex(null);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="bg-blue-gray-50 flex justify-center w-full">
      <div
        className="flex flex-nowrap  py-4 items-center text-md ml-2 overflow-x-auto overflow-hidden"
        ref={containerRef}
      >
        {benefitItems.map((item, index) => (
          <OverlayTrigger
            key={index}
            trigger={activeTooltipIndex === index ? "click" : []} // Activate the OverlayTrigger on click for the active item
            overlay={(props) =>
              activeTooltipIndex === index ? (
                <Tooltip {...props}>
                  <div className="bg-white w-[210px] p-2 text-center shadow-lg rounded-lg">
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
              className="flex mx-2 hover:cursor-pointer"
              onClick={() => handleClick(index)}
            >
              {item.icon}
              <div className="flex flex-col justify-center whitespace-nowrap">
                <span className="text-center">{item.text}</span>
              </div>
            </div>
          </OverlayTrigger>
        ))}
      </div>
    </div>
  );
};

export default BenefitsSlider;
