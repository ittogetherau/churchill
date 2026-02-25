import React from "react";
import { FaArrowRight, FaIdCard } from "react-icons/fa";
import Link from "next/link";
import Button from "../ui-elements/button";

interface RequestFormCardProps {
  icon?: React.ReactNode;
  menuTitle: string;
  subTitle?: string;
  link?: string;
  slug?: string;
  btnTitle: string;
  target?: string;
  iconStyles?: string;
}

const RequestFormCard = ({
  icon,
  menuTitle,
  subTitle,
  link,
  slug,
  btnTitle,
  target,
  iconStyles,
}: RequestFormCardProps) => {
  return (
    <li className="flex items-center justify-between gap-2 rounded-md bg-[#E9E9E9] px-4 py-3 hover:shadow-sm">
      <div className="flex items-center gap-3">
        <div className="grid h-12 w-12 place-items-center rounded-full bg-white">
          <i
            className={`text-primary-orange translate-y-[2px] text-2xl ${iconStyles}`}
          />
          {/* <span className="text-[24px]">{icon}</span> */}
        </div>
        <div className="flex flex-col gap-1">
          <span className="font-bold">{menuTitle}</span>
          <span>{subTitle}</span>
        </div>
      </div>
      <Link target={link ? "_blank" : target} href={`${link ? link : slug}`}>
        <Button
          btnName={btnTitle}
          icon={<FaArrowRight />}
          styleA={"flex items-center gap-1"}
        />
      </Link>
    </li>
  );
};

export default RequestFormCard;
