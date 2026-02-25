import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import Button from "../ui-elements/button";

interface AboutUsCardProps {
  title: string;
  link: string;
  icon: string;
}

const AboutUsCard: React.FC<AboutUsCardProps> = ({ title, link, icon }) => {
  return (
    <div className="bg-alt-background h-full rounded-md p-4 outline-0 hover:outline-2 hover:outline-[#606060]">
      <div className="flex flex-col items-start gap-4">
        <div className="mt-6 mb-6 ml-6 grid h-7 w-7 scale-[250%] place-items-center rounded-md bg-white py-3">
          <i className={`-translate-y-2 ${icon}`} />
        </div>

        <h3 className="text-foreground line-clamp-3 text-[20px] font-bold">
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
