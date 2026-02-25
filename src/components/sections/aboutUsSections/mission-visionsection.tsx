import FadeUpAnimation from "@/animations/fade-up";
import { MissionVision } from "@/constDatas/about-page";
import Image from "next/image";

const MissionVisionsection = () => {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {MissionVision?.map((item, index) => (
        <FadeUpAnimation key={index} delay={0.2 * index}>
          <div className="rounded-md bg-[#F3E4E4] p-8" key={index}>
            <div className="flex flex-col gap-2">
              <Image
                src={item?.icon}
                alt={"use-links-icon-image"}
                width={400}
                height={400}
                className="h-auto w-[80px] object-contain"
              />
              <h2 className="text-[20px] font-bold text-[#2C2B4B]">
                {item?.title}
              </h2>
              <p>{item?.subTitle}</p>
            </div>
          </div>
        </FadeUpAnimation>
      ))}
    </div>
  );
};

export default MissionVisionsection;
