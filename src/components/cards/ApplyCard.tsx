import React from "react";
import Button from "../button";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const ApplyCard = ({ title, description, image }) => {
  return (
    <div
      className="rounded-md px-8 pt-[32px] lg:pb-0 pb-[32px] h-full flex flex-col gap-5 group translate-gradient overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(to bottom right, rgb(187, 171, 223), rgb(187 171 223 / 43%) 100%)`,
      }}
    >
      <div className="flex-1 flex flex-col gap-5 justify-between">
        <h2 className="font-bold text-[36px] text-[#2C2B4B] leading-[38px]">
          {title}
        </h2>
        <p>{description}</p>
        <div>
          <Link href={"/assets/apply-at-churchill.pdf"} className="w-max">
            <Button
              btnName={"Apply Now"}
              icon={<FaArrowRight />}
              styleA={"flex items-center gap-1"}
            />
          </Link>
        </div>
      </div>
      <div className="hidden lg:block lg:flex-1">
        <div className="h-full flex justify-end items-end group-hover:scale-105 transition-all">
          <Image
            src={`${image}`}
            alt={"use-links-icon-image"}
            width={500}
            height={370}
            className="w-[280px] h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default ApplyCard;
