import React from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "../button";
import { FaArrowRight } from "react-icons/fa";
import { TEventTag } from "@/constDatas/eventsData";

export interface EventsCardProps {
  id?: string | number;
  slug?: string;
  image?: string;
  title: string;
  subTitle?: string;
  day?: string | number;
  month?: string;
  time?: string;
  date?: string;
  link?: string;
  catagories?: string[];
  duration?: string;
  description?: string;
  rich_text?: string;
  start_time?: string;
  end_time?: string;
  time_duration?: string;
  tags?: Array<{ name: string }>;
}

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

const EventsCard: React.FC<EventsCardProps> = ({
  image,
  title,
  description,
  start_time,
  slug,
  tags,
}) => {
  const dateObj = start_time ? new Date(start_time) : new Date();

  const getDaySuffix = (day: number): string => {
    if (day === 1 || day === 21 || day === 31) return "st";
    if (day === 2 || day === 22) return "nd";
    if (day === 3 || day === 23) return "rd";
    return "th";
  };

  const formattedDate = `${dateObj.getDate()}${getDaySuffix(
    dateObj.getDate()
  )} ${month[dateObj.getMonth()]}`;

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

        {description && (
          <div
            dangerouslySetInnerHTML={{ __html: description }}
            className="line-clamp-3"
          />
        )}

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
