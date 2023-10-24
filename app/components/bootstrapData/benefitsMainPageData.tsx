import ReturnDaysSVG from "@/public/images/benefits-slider/return.svg";
import CustomerSupportSVG from "@/public/images/benefits-slider/customerSupportSVG.svg";
import InsuranceSVG from "@/public/images/benefits-slider/insuranceSVG.svg";
import SiteJabberSVG from "@/public/images/benefits-slider/siteJabberSVG.svg";
import RatingSVG from "@/public/images/benefits-slider/ratingsSVG.svg";

const benefitItems = [
  {
    icon: (
      <div className="aspect-w-[5px] aspect-h-[5px]">
        <ReturnDaysSVG />
      </div>
    ),
    text: "14-Day-Free Returns",
    content: (
      <div>
        <p className="text-xs  text-gray-700">
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
    icon: (
      <div className="aspect-w-[5px] aspect-h-[5px]">
        <CustomerSupportSVG />
      </div>
    ),
    text: "24/7 Customer Support",
    content: (
      <div>
        <p className="text-xs  text-gray-700">
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
    icon: (
      <div className="aspect-w-[5px] aspect-h-[5px]">
        <InsuranceSVG />
      </div>
    ),
    text: "Vision Insurance",
    content: (
      <div>
        <p className="text-xs  text-gray-700">
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

export default benefitItems;
