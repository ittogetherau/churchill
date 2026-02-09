import React from "react";
import Button from "../ui-elements/button";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
interface ApplyCardProps {
  title: string;
  description: string;
  image: string;
}
const ApplyCard = ({ title, description, image }: ApplyCardProps) => {
  return (
    <div
      className="group translate-gradient flex h-full flex-col gap-4 overflow-hidden rounded-md px-8 pt-[32px] pb-[32px] lg:pb-0"
      style={{
        backgroundImage: `linear-gradient(to bottom right, rgb(187, 171, 223), rgb(187 171 223 / 43%) 100%)`,
      }}
    >
      <div className="flex flex-1 flex-col justify-between gap-4">
        <h2 className="text-[36px] leading-[38px] font-bold text-[#2C2B4B]">
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
        <div className="flex h-full items-end justify-end transition-all group-hover:scale-105">
          <Image
            src={`${image}`}
            alt={"use-links-icon-image"}
            width={500}
            height={370}
            className="h-full w-[280px] object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default ApplyCard;
