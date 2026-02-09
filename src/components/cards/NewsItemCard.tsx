import React from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "../ui-elements/button";
import { FaArrowRight } from "react-icons/fa";

interface NewsItemCardProps {
  image: string;
  title: string;
  description: string;
  slug: string;
  newsCategory?: string[];
  date: string;
  catagories?: string[];
}

const monthArray = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const NewsItemCard: React.FC<NewsItemCardProps> = ({
  image,
  title,
  description,
  slug,
  catagories,
  date,
}) => {
  const newDate = new Date(date);

  const day = newDate.getDate();

  const formattedDate = `${day}${
    day === 1 ? "st" : day === 2 ? "nd" : day === 3 ? "rd" : "th"
  } ${monthArray[newDate.getMonth()]}`;

  return (
    <div className="group hover-shadow flex cursor-pointer flex-col gap-3 overflow-hidden rounded-md border border-gray-500/40 bg-neutral-50 md:flex-row">
      <div className="relative">
        <div className="aspect-[4/2] overflow-hidden md:aspect-auto md:h-full md:w-[16rem]">
          <Image
            src={`${image}`}
            alt={"use-links-icon-image"}
            width={600}
            height={600}
            className="h-full w-full object-cover transition-all group-hover:scale-105"
          />
        </div>
        <div className="bg-primary-orange absolute top-2 left-2 flex gap-2 rounded-md p-2 font-bold text-white">
          <span>{formattedDate}</span>
        </div>
      </div>

      <div className="flex flex-1 flex-col justify-between gap-4 px-4 py-4 md:py-6">
        <Link href={`/news/${slug}`} className="w-fit">
          <h3 className="hover:text-primary-orange line-clamp-3 text-xl leading-[28px] font-bold text-[#2C2B4B] transition-all md:text-3xl">
            {title}
          </h3>
        </Link>

        <div
          dangerouslySetInnerHTML={{ __html: description }}
          className="line-clamp-4"
        />

        <Link href={`/news/${slug}`} className="w-fit">
          <Button
            icon={<FaArrowRight />}
            styleType="tertiary"
            styleA={"flex items-center gap-1"}
            btnName="Learn More"
          />
        </Link>

        <div className="flex flex-row flex-wrap gap-2">
          {/* {catagories?.map((item, index) => (
            <p
              key={index}
              className="font-semibold bg-[#F2CF9C] text-[#2C2B4B] rounded-full text-[14px] px-3 py-1 h-fit"
            >
              {title}
            </p>
          ))} */}
        </div>
      </div>
    </div>
  );
};

export default NewsItemCard;
