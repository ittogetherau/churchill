import Image from "next/image";
import Link from "next/link";
import React from "react";
import Button from "../button";
import { FaArrowRight } from "react-icons/fa";
interface AboutUsCardProps {
  title: string;
  link: string;
  icon: string;
}

const AboutUsCard: React.FC<AboutUsCardProps> = ({ title, link, icon }) => {
  return (
    <div className="bg-alt-background outline-0 hover:outline-2 hover:outline-[#606060] p-4 rounded-md">
      <div className="flex flex-col items-start gap-4">
        <div className="scale-[250%] bg-white ml-6 mt-6 mb-6 w-7 h-7 grid place-items-center rounded-md  py-3">
          <i className={`-translate-y-2 ${icon}`} />
        </div>
        <h3 className="font-bold text-[20px] clamp-1 text-foreground line-clamp-3">
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
