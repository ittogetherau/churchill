import { MessagesData } from "@/constDatas/about-page";
import Image from "next/image";

const AboutSection = () => {
  return (
    <div>
      <div className="flex flex-col gap-[32px] lg:gap-[44px]">
        {MessagesData?.map((item, index) => (
          <div
            className={`flex flex-col items-center gap-4 lg:flex-row odd:lg:flex-row-reverse`}
            key={index}
          >
            <div className={`flex flex-1 flex-col gap-2`}>
              <h2 className="text-[36px] font-bold text-[#2C2B4B]">
                {item?.title}
              </h2>
              <div
                className="rich_text_container"
                dangerouslySetInnerHTML={{ __html: item?.description }}
              />
            </div>

            <Image
              src={item?.image}
              alt={"use-links-icon-image"}
              width={400}
              height={400}
              className={`aspect-[4/4] w-full flex-1 rounded-md object-cover`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutSection;
