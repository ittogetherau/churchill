import React from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "../button";
import { FaArrowRight } from "react-icons/fa";

var month = [
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

const EventsCard = ({
  image,
  title,
  description,
  rich_text,
  start_time,
  end_time,
  slug,
  tags,
}) => {
  const dateOBJ = new Date(start_time);

  const formattedDate = `${dateOBJ.getDay()}${
    dateOBJ.getDay() === 1
      ? "st"
      : dateOBJ.getDay() === 2
      ? "nd"
      : dateOBJ.getDay() === 3
      ? "rd"
      : "th"
  } ${month[dateOBJ.getMonth()]}`;

  return (
    <div className="group flex rounded-md border bg-neutral-50 border-gray-500/40 overflow-hidden flex-col md:flex-row gap-3">
      <div className="relative">
        <div className="aspect-[4/2] md:w-[20rem] overflow-hidden md:aspect-auto md:h-full">
          <Image
            src={`${image}`}
            alt={"use-links-icon-image"}
            width={600}
            height={600}
            className="object-cover w-full h-full group-hover:scale-105 delay-75 transition-all"
          />
        </div>
        <div className="absolute top-2 left-2 rounded-md flex gap-2 bg-primary-orange p-2 text-white font-bold">
          <span>{formattedDate}</span>
        </div>
      </div>

      <div className="flex-1 py-4 md:py-6 px-4 flex flex-col justify-between gap-4">
        <Link href={`/events/${slug}`} className="w-fit">
          <h3 className="font-bold text-xl md:text-3xl text-[#2C2B4B] leading-[28px] line-clamp-3 transition-all hover:text-primary-orange">
            {title}
          </h3>
        </Link>

        <div
          dangerouslySetInnerHTML={{ __html: description }}
          className="line-clamp-3"
        />

        <Link href={`/events/${slug}`} className="w-fit">
          <Button
            icon={<FaArrowRight />}
            styleType="tertiary"
            styleA={"flex items-center gap-1"}
            btnName="Learn More"
          />
        </Link>

        <div className="flex flex-row flex-wrap gap-2">
          {tags?.map((item, index) => (
            <p
              key={index}
              className="font-semibold bg-[#F2CF9C] text-[#2C2B4B] rounded-full text-[14px] px-3 py-1 h-fit"
            >
              {item?.name}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventsCard;
