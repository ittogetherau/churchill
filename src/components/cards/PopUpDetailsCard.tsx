import Image from "next/image";
import React from "react";
import RichTextRenderer from "@/components/utils/rich-text-renderer";

interface PopUpDetailsCardProps {
  data: {
    title: string;
    subTitle: string;
    image: string;
    description: string;
  };
  handlePopUpClose: () => void;
}

const PopUpDetailsCard: React.FC<PopUpDetailsCardProps> = ({
  data,
  handlePopUpClose,
}) => {
  const { title, subTitle, image, description } = data;
  return (
    <div className="fixed top-0 right-0 bottom-0 left-0 z-50 bg-black/75">
      <div>
        <div
          className="fixed z-50 h-fit w-full overflow-scroll overflow-x-hidden overflow-y-auto bg-white p-5 shadow-xl md:top-[50%] md:left-[50%] md:w-[80%] md:-translate-x-[50%] md:-translate-y-[50%] md:rounded"
          style={{
            animation: "md:loginAnimation ease-out 0.5s",
          }}
        >
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <Image
              src={`${image}`}
              alt={"use-links-icon-image"}
              width={400}
              height={400}
              className="h-hull w-full rounded-md object-cover"
            />
            <div className="col-span-2">
              <div className="flex flex-col gap-3">
                <h3 className="text-[26px] leading-[28px] font-bold text-[#2C2B4B]">
                  {title}
                </h3>
                <p className="text-[16px] font-bold text-[#E59623]">
                  {subTitle}
                </p>
                <RichTextRenderer
                  content={description}
                  richText={false}
                  className="flex flex-col gap-2"
                />
              </div>
            </div>
          </div>
        </div>

        <p
          className="absolute top-2 right-2 z-[60] cursor-pointer text-4xl font-bold text-[#FF0000] md:top-8 md:right-8"
          onClick={() => {
            handlePopUpClose();
          }}
        >
          <i className="fi fi-rr-cross-small"></i>
        </p>
      </div>
    </div>
  );
};

export default PopUpDetailsCard;
