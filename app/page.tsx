import Image from "next/image";
import HeroSection from "./components/heroSection/HeroSection";
import BenefitsSlider from "./components/benefits-slider/BenefitsSlider";
import ShopGlassesSection from "./components/sections/ShopGlassesSection";

export default function Home() {
  return (
    <div className="flex flex-col items-center ">
      <HeroSection />
      <div className="2xl:max-w-[80%] w-full">
        <BenefitsSlider />
        <ShopGlassesSection />
      </div>
    </div>
  );
}
