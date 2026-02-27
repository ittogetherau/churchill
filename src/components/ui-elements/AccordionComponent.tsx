"use client";
import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import RichTextRenderer from "@/components/utils/rich-text-renderer";

interface AccordionItem {
  title: string;
  description: string;
}

interface props {
  data: AccordionItem[];
}

const AccordionComponent: React.FC<props> = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="bg-primary-orange/10 border-primary-orange/50 flex flex-col rounded-md border py-4 md:px-10">
      {data?.map((item, index) => {
        const isActive = activeIndex === index;

        return (
          <div
            key={index}
            className="border-b border-b-neutral-800/25 py-3 last:border-none"
          >
            <h2
              onClick={() => handleToggle(index)}
              className={`flex cursor-pointer items-center justify-between px-2 py-1 text-lg font-bold select-none hover:bg-zinc-200/20 md:py-2 md:text-2xl ${isActive ? "border-b border-b-neutral-800/25" : ""}`}
            >
              <span>{item.title}</span>
              <span
                className={`transition-all ${isActive ? "rotate-180" : ""}`}
              >
                <IoIosArrowDown />
              </span>
            </h2>

            {activeIndex === index && (
              <RichTextRenderer
                content={item.description}
                richText
                className="px-4 py-2"
              />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default AccordionComponent;
