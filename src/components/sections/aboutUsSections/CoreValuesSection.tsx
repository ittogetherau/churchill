import Image from "next/image";
import FadeUpAnimation from "@/animations/FadeUp";
import { CoreValues } from "@/constDatas/about_page";

const CoreValuesSection = () => {
  return (
    <div>
      <div className="flex flex-col gap-[32px] lg:gap-[44px]">
        <h2 className="mx-auto w-fit text-center text-[36px] font-bold text-[#2C2B4B]">
          Core Values{" "}
        </h2>
        <div>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-5">
            {CoreValues.map((item, index) => (
              <FadeUpAnimation delay={0.1 * index} key={index}>
                <div className="flex flex-col items-center justify-center gap-2">
                  <Image
                    src={item?.icon}
                    alt={"use-links-icon-image"}
                    width={400}
                    height={400}
                    className="h-auto w-[80px] object-contain"
                  />
                  <h2 className="text-center text-[16px] font-bold text-[#2C2B4B]">
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
