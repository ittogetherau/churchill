"use client";
import React from "react";
import { formatKeyDate } from "./formatKeyDate";

type CardVariant = "default" | "small";

interface KeyDatesCardProps {
  title: string;
  description?: string;
  start_date: string;
  end_date?: string;
  tags?: [];
  variant?: CardVariant;
}

const KeyDatesCard: React.FC<KeyDatesCardProps> = ({
  title,
  start_date,
  end_date,
  tags,
  variant = "default",
}) => {
  const date = formatKeyDate(start_date, end_date);
  const isSmall = variant === "small";

  return (
    <div
      className={`flex flex-col rounded-md bg-[#FAF4F4] transition-transform ${
        isSmall
          ? "gap-3 p-3 hover:-translate-y-1"
          : "gap-4 p-4 hover:-translate-y-[6px]"
      }`}
    >
      <div
        className={`flex gap-2 ${
          isSmall
            ? "items-center"
            : "flex-col gap-3 sm:flex-row sm:items-center"
        }`}
      >
        <div
          className={`bg-primary-orange flex items-center rounded-md text-white ${
            isSmall
              ? "min-w-28 gap-1 px-2 py-1 text-sm font-semibold"
              : "min-w-36 gap-2 px-3 py-2 font-bold"
          }`}
        >
          <i
            className={`fi fi-rr-calendar-day ${
              isSmall ? "text-lg" : "text-2xl"
            }`}
          />
          <span>{date}</span>
        </div>
        <h2
          className={`text-[#2C2B4B] ${
            isSmall
              ? "text-base leading-snug font-semibold"
              : "text-xl leading-6 font-bold"
          }`}
        >
          {title}
        </h2>
      </div>
      {tags && tags.length > 0 && (
        <div
          className={`flex flex-wrap ${
            isSmall ? "gap-1.5 text-xs" : "gap-2 text-sm"
          }`}
        >
          {tags.map((tag, index) => (
            <span
              key={index}
              className={`bg-primary-orange/20 rounded-full whitespace-nowrap text-neutral-900 ${
                isSmall ? "px-2 py-0.5" : "px-3 py-1"
              }`}
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default KeyDatesCard;
