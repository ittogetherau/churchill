"use client";
import React from "react";

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
interface KeyDatesCardProps {
  title: string;
  description: string;
  start_date: string;
  end_date: string;
  category: string[];
  audience: string[];
}

const KeyDatesCard: React.FC<KeyDatesCardProps> = ({
  title,
  description,
  start_date,
  end_date,
  category,
  audience,
}) => {
  const dateObj = new Date(start_date);

  const formattedDate = `${dateObj.getDate()} ${
    monthArray[dateObj.getMonth()]
  }`;

  return (
    <>
      <div className="hover-shadow flex flex-col justify-between gap-6 rounded-md bg-[#FAF4F4] p-4 transition-all hover:-translate-y-[6px]">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
          <div className="bg-primary-orange flex max-w-32 items-center gap-2 rounded-md px-3 py-2 font-bold text-white">
            <i className="fi fi-rr-calendar-day flex text-2xl"></i>
            <span className="text-nowrap">{formattedDate.trim()}</span>
          </div>
          <h2 className="text-[22px] leading-6 font-bold text-[#2C2B4B]">
            {title}
          </h2>
        </div>

        {/* <div className="flex gap-2 items-center flex-wrap text-sm">
          {audience.map((item, index) => (
            <p
              className="bg-primary-orange/20 text-neutral-950/75 px-3 py-1 rounded-full whitespace-nowrap"
              key={index}
            >
              {item}
            </p>
          ))}
          {category.map((item, index) => (
            <p
              className="bg-primary-orange/20 text-neutral-950/75 px-3 py-1 rounded-full whitespace-nowrap"
              key={index}
            >
              {item}
            </p>
          ))}
        </div> */}
      </div>
    </>
  );
};

export default KeyDatesCard;
