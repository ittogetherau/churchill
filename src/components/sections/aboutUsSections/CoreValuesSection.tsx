import { navItems } from "@/constDatas/navItems";
import Image from "next/image";
import React from "react";

import FadeUpAnimation from "@/animations/FadeUp";

const CoreValuesSection = () => {
  const aboutLists = navItems[0]?.page;
  return (
    <div>
      <div className="flex flex-col gap-[32px] lg:gap-[44px]">
        <h2 className="font-bold text-[36px] text-center mx-auto w-fit text-[#2C2B4B]">
          Core Values{" "}
        </h2>
        <div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-5">
            {aboutLists?.coreValue?.map((item, index) => (
              <FadeUpAnimation delay={0.1 * index} key={index}>
                <div className="flex flex-col justify-center items-center gap-2">
                  <Image
                    src={item?.icon}
                    alt={"use-links-icon-image"}
                    width={400}
                    height={400}
                    className="object-contain w-[80px] h-auto"
                  />
                  <h2 className="font-bold text-[16px] text-center text-[#2C2B4B]">
                    {item?.title}
                  </h2>
                </div>
              </FadeUpAnimation>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoreValuesSection;
