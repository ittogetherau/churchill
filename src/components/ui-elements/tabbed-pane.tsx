"use client";
import { type CourseDetailFieldsFragment } from "@/graphql/generated/graphql";
import ContainerLayout from "@/layouts/container-layout";
import React, { useMemo, useState } from "react";

type CourseStructure = NonNullable<
  CourseDetailFieldsFragment["course_structure"]
>[number];

interface TabbedPaneProps {
  data?: CourseStructure[];
}

const TabbedPane: React.FC<TabbedPaneProps> = ({ data }) => {
  const tabData = useMemo(
    () => data?.filter((item): item is CourseStructure => Boolean(item)) ?? [],
    [data]
  );
  const [selectedIndex, setSelectedIndex] = useState(0);

  if (!tabData.length) return null;

  return (
    <ContainerLayout className="space-y-8">
      <div className="flex flex-col gap-3 lg:flex-row lg:justify-center lg:items-center">
        {tabData.map((item, index) => (
          <div
            className={`capitalize flex items-center justify-between px-2 py-2 border rounded-md border-primary-orange transition-all font-bold ${
              selectedIndex === index ? "bg-[#E59623]" : ""
            } ${
              selectedIndex === index
                ? "lg:bg-[#E59623] lg:border-2"
                : "lg:text-[#2C2B4B] lg:border-2 lg:border-[#E59623]"
            } lg:px-6 lg:py-2 lg:rounded-lg lg:transition-all lg:hover:cursor-pointer lg:select-none lg:text-center`}
            key={index}
            onClick={() => setSelectedIndex(index)}
          >
            {item?.title ?? ""}
            <i
              className={`lg:hidden text-2xl fi fi-rr-cross-small flex transition-all ${
                selectedIndex === index ? "rotate-0" : "rotate-[45deg]"
              }`}
            ></i>
          </div>
        ))}
      </div>

      <div className="w-full lg:hidden bg-[#F3E4E4] px-4 py-3 mt-4 rounded-md">
        {tabData.map(
          (item, index) =>
            selectedIndex === index && (
              <div className="w-full rounded-md" key={index}>
                <div
                  className="rich_text_container w-full overflow-x-scroll"
                  dangerouslySetInnerHTML={{
                    __html: item?.rich_text ?? "",
                  }}
                />
              </div>
            )
        )}
      </div>

      <div className="w-full hidden lg:block bg-[#F3E4E4] px-6 py-3 mt-4 pb-10 rounded-md">
        {tabData.map(
          (item, index) =>
            selectedIndex === index && (
              <div className="w-full rounded-md" key={index}>
                <div
                  className="rich_text_container"
                  dangerouslySetInnerHTML={{ __html: item?.rich_text ?? "" }}
                />
              </div>
            )
        )}
      </div>
    </ContainerLayout>
  );
};

export default TabbedPane;
