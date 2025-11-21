import { navItems } from "@/constDatas/navItems";
import Image from "next/image";
import React from "react";

const AboutSection = () => {
  const aboutLists = navItems[0]?.page;

  return (
    <div>
      <div className="flex flex-col gap-[32px] lg:gap-[44px]">
        {aboutLists?.message?.map((item, index) => (
          <div
            className={`flex items-center gap-5 flex-col lg:flex-row odd:lg:flex-row-reverse`}
            key={index}
          >
            <div className={`flex flex-col gap-2 flex-1`}>
              <h2 className="font-bold text-[36px] text-[#2C2B4B]">
                {item?.title}
              </h2>
              <div
                className="rich-text-container"
                dangerouslySetInnerHTML={{ __html: item?.description }}
              />
            </div>

            <Image
              src={item?.image}
              alt={"use-links-icon-image"}
              width={400}
              height={400}
              className={`w-full aspect-[4/4] rounded-md object-cover flex-1`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutSection;
