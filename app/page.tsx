import Image from "next/image";
import HeroSection from "./components/heroSection/HeroSection";
import BenefitsSlider from "./components/benefits-slider/BenefitsSlider";
import ShopGlassesSection from "./components/sections/ShopGlassesSection";
import BestSellingGlassesSection from "./components/sections/BestSellingGlassesSection";
import SuperFutureSection from "./components/sections/SuperFutureSection";
import DesignerBrandsSection from "./components/sections/DesignerBrandsSection";
import ShopTheLookSection from "./components/sections/ShopTheLookSection";
import QuestionsSection from "./components/sections/QuestionsSection";

export default function Home() {
  return (
    <div className="flex flex-col items-center ">
      <HeroSection />
      <div className="2xl:max-w-[80%] w-full ">
        <BenefitsSlider />
        <ShopGlassesSection />
        <BestSellingGlassesSection />
        <SuperFutureSection />
        <DesignerBrandsSection />
        <ShopTheLookSection />
      </div>
      <QuestionsSection />
    </div>
  );
}
