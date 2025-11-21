import AboutSlider from "@/components/sliders/AboutSlider";
import React from "react";

const RelatedSection = () => {
  return (
    <div>
      <div className="flex flex-col gap-[32px] lg:gap-[44px]">
        <h2 className="font-bold text-[36px] text-[#2C2B4B] text-center">
          Find Out More
        </h2>
        <AboutSlider />
      </div>
    </div>
  );
};

export default RelatedSection;
