import Image from "next/image";
import Link from "next/link";
import React from "react";
import Button from "../button";
import { FaArrowRight } from "react-icons/fa";

const GovernanceCard = ({ data }) => {
  const { image, title, subTitle, description, slug } = data;

  return (
    <div className="h-full justify-between group">
      <div>
        <div className="relative overflow-hidden rounded-md">
          <Image
            src={`${image}`}
            alt={`Image of ${title}`}
            width={400}
            height={400}
            className="object-cover w-full aspect-square group-hover:scale-105 transition-all duration-500"
          />
        </div>
      </div>
      <div className="-translate-y-8 group-hover:-translate-y-12 flex flex-col gap-3 p-6 md:mx-4 bg-[#f5f3ef] group-hover:bg-primary-orange  transition-all rounded-lg">
        <h3 className="font-bold text-2xl text-[#302f36] transition-all">
          {title}
        </h3>
        <p className="font-bold text-[16px] text-[#302f36]transition-all ">
          {subTitle}
        </p>
        <p
          className="clamp-3"
          dangerouslySetInnerHTML={{ __html: description }}
        />
        <Link
          className="w-fit group-hover:text-white"
          href={`/about-us/teams/${slug}`}
        >
          <Button
            btnName={"Learn More"}
            icon={<FaArrowRight />}
            styleA={"flex items-center gap-1"}
            styleType="tertiary"
            style={"group-hover:text-white"}
          />
        </Link>
      </div>
    </div>
  );
};

export default GovernanceCard;
