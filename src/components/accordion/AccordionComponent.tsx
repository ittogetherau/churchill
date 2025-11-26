"use client";
import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const AccordionComponent = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col py-4 md:px-10 rounded-md bg-primary-orange/10 border border-primary-orange/50">
      {data?.map((item, index) => {
        const isActive = activeIndex === index;

        return (
          <div
            key={index}
            className="py-3 border-b border-b-neutral-800/25 last:border-none"
          >
            <h2
              onClick={() => handleToggle(index)}
              className={`text-lg md:text-2xl font-bold py-1 md:py-2 px-2 flex items-center justify-between cursor-pointer select-none hover:bg-zinc-200/20
               ${isActive ? "border-b-neutral-800/25 border-b" : ""}`}
            >
              <span>{item.title}</span>
              <span
                className={`transition-all ${isActive ? "rotate-180" : ""}`}
              >
                <IoIosArrowDown />
              </span>
            </h2>
            {activeIndex === index && (
              <div
                className="px-4 py-2 rich-text-container"
                dangerouslySetInnerHTML={{ __html: item.description }}
              />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default AccordionComponent;
