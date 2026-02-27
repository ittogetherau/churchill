import { MessagesData } from "@/constDatas/about_page";
import SpacingLayout from "@/layouts/spacing-layout";
import Image from "next/image";
import RichTextRenderer from "@/components/utils/rich-text-renderer";

const AboutSection = () => {
  return (
    <SpacingLayout>
      {MessagesData?.map((item, index) => {
        if (index === 0)
          return (
            <div
              className={`flex flex-col items-center gap-4 lg:flex-row odd:lg:flex-row-reverse`}
              key={index}
            >
              <div className={`flex flex-1 flex-col gap-2`}>
                <h2 className="mb-2 text-4xl font-bold text-[#2C2B4B]">
                  {item?.title}
                </h2>
                <RichTextRenderer content={item?.description} richText />
              </div>

              <Image
                src={item?.image}
                alt={"use-links-icon-image"}
                width={400}
                height={400}
                className={`aspect-[4/4] w-full flex-1 rounded-md object-cover`}
              />
            </div>
          );
      })}
    </SpacingLayout>
  );
};

export default AboutSection;
