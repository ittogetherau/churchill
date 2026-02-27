import React from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "../ui-elements/button";
import { FaArrowRight } from "react-icons/fa";
import { TEventTag } from "@/constDatas/eventsData";
import RichTextRenderer from "@/components/utils/rich-text-renderer";

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
    dateObj.getDate(),
  )} ${month[dateObj.getMonth()]}`;

  return (
    <div className="group flex flex-col gap-3 overflow-hidden rounded-md border border-gray-500/40 bg-neutral-50 md:flex-row">
      <div className="relative">
        <div className="aspect-[4/2] overflow-hidden md:aspect-auto md:h-full md:w-[20rem]">
          <Image
            src={`${image}`}
            alt={"use-links-icon-image"}
            width={600}
            height={600}
            className="h-full w-full object-cover transition-all delay-75 group-hover:scale-105"
          />
        </div>
        <div className="bg-primary-orange absolute top-2 left-2 flex gap-2 rounded-md p-2 font-bold text-white">
          <span>{formattedDate}</span>
        </div>
      </div>

      <div className="flex flex-1 flex-col justify-between gap-4 px-4 py-4 md:py-6">
        <Link href={`/events/${slug}`} className="w-fit">
          <h3 className="hover:text-primary-orange line-clamp-3 text-xl leading-[28px] font-bold text-[#2C2B4B] transition-all md:text-3xl">
            {title}
          </h3>
        </Link>

        {description && (
          <RichTextRenderer
            content={description}
            richText={false}
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
              className="h-fit rounded-full bg-[#F2CF9C] px-3 py-1 text-[14px] font-semibold text-[#2C2B4B]"
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
