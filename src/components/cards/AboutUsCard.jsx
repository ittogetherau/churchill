import Image from "next/image";
import Link from "next/link";
import React from "react";
import Button from "../button";
import { FaArrowRight } from "react-icons/fa";

const AboutUsCard = ({ title, link, icon }) => {
  return (
    <div className="bg-[#FAF4F4] outline outline-0 hover:outline-2 hover:outline-[#606060] p-5 rounded-md">
      <div className="flex flex-col items-start gap-4">
        <div className="scale-[250%] bg-white ml-6 mt-6 mb-6 w-7 h-7 grid place-items-center rounded-md  py-3">
          <i className={`-translate-y-2 ${icon}`} />
        </div>
        {/* <span className="relative"> */}
        {/* <Image
            src={`${icon}`}
            alt={"use-links-icon-image"}
            width={400}
            height={400}
            className="object-cover w-full h-[250px] rounded-md"
          /> */}
        {/* </span> */}
        <h3 className="font-bold text-[20px] clamp-1 text-[#2C2B4B] leading-[28px]">
          {title}
        </h3>
        <div className="flex justify-between gap-3">
          <Link href={`${link}`}>
            <Button
              btnName={"Learn More"}
              icon={<FaArrowRight />}
              styleA={"flex items-center gap-1"}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutUsCard;
