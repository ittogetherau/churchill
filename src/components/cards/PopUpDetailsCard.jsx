import Image from "next/image";
import React from "react";

const PopUpDetailsCard = ({ data, handlePopUpClose }) => {
  const { title, subTitle, image, description } = data;
  return (
    <div className="z-50 fixed top-0 left-0 right-0 bottom-0 bg-black/75">
      <div>
        <div
          className="w-full md:w-[80%] h-fit overflow-x-hidden z-50 fixed md:top-[50%] md:left-[50%] md:-translate-x-[50%] md:-translate-y-[50%] overflow-y-auto bg-white p-5 md:rounded shadow-xl overflow-scroll"
          style={{
            animation: "md:loginAnimation ease-out 0.5s",
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <Image
              src={`${image}`}
              alt={"use-links-icon-image"}
              width={400}
              height={400}
              className="object-cover w-full h-hull rounded-md"
            />
            <div className="col-span-2">
              <div className="flex flex-col gap-3">
                <h3 className="font-bold text-[26px] text-[#2C2B4B] leading-[28px]">
                  {title}
                </h3>
                <p className="font-bold text-[16px] text-[#E59623]">
                  {subTitle}
                </p>
                <p
                  className="flex flex-col gap-2"
                  dangerouslySetInnerHTML={{ __html: description }}
                />
              </div>
            </div>
          </div>
        </div>

        <p
          className="absolute top-2 right-2 md:top-8 md:right-8 text-[#FF0000] text-4xl font-bold cursor-pointer z-[60]"
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
