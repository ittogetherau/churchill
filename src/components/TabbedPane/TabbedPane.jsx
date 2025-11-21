"use client";
import React, { useState } from "react";
import { Button } from "@/components";

const TabbedPane = ({ data }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div className="container mx-auto px-5">
      <div className="flex flex-col gap-[32px] lg:gap-[44px]">
        <div className="flex flex-col gap-3 lg:flex-row lg:justify-center lg:items-center">
          {data?.map((item, index) => (
            <div
              className={`capitalize flex items-center justify-between px-2 py-2 border rounded-md border-primary-orange transition-all font-bold ${selectedIndex === index ? "bg-[#E59623]" : ""
                } ${selectedIndex === index
                  ? "lg:bg-[#E59623] lg:border-2"
                  : "lg:text-[#2C2B4B] lg:border-2 lg:border-[#E59623]"
                } lg:px-6 lg:py-2 lg:rounded-lg lg:transition-all lg:hover:cursor-pointer lg:select-none lg:text-center`}
              key={index}
              onClick={() => setSelectedIndex(index)}
            >
              {item.title}
              <i
                className={`lg:hidden text-2xl fi fi-rr-cross-small flex transition-all ${selectedIndex === index ? "rotate-0" : "rotate-[45deg]"
                  }`}
              ></i>
            </div>
          ))}
        </div>

        <div className="w-full lg:hidden bg-[#F3E4E4] px-4 py-3 mt-4 rounded-md">
          {data?.map(
            (item, index) =>
              selectedIndex === index && (
                <div className="w-full rounded-md" key={index}>
                  <div
                    className="rich-text-container w-full overflow-x-scroll"
                    dangerouslySetInnerHTML={{
                      __html: item.rich_text,
                    }}
                  />
                </div>
              )
          )}
        </div>

        <div className="w-full hidden lg:block bg-[#F3E4E4] px-6 py-3 mt-4 pb-10 rounded-md">
          {data?.map(
            (item, index) =>
              selectedIndex === index && (
                <div className="w-full rounded-md" key={index}>
                  <div
                    className="rich-text-container"
                    dangerouslySetInnerHTML={{ __html: item.rich_text }}
                  />
                  {/* {selectedIndex === 3 && (
                    <>
                      <h2 className="text-xl capitalize font-bold mt-6 mb-3">
                        Ready to start your journey with Churchill?
                      </h2>
                      <div className="flex gap-2 items-center">
                        <a href="/apply-now">
                          <Button btnName={"Apply Yourself"} style={"w-fit"} />
                        </a>
                        <a href="/find-agent">
                          <Button btnName={"Find an Education Agent"} style={"w-fit"} />
                        </a>
                      </div>
                    </>
                  )} */}
                </div>
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default TabbedPane;
