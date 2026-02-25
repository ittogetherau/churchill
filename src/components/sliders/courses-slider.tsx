"use client";

import CoursesCard from "../cards/courses-card";
import { type CourseSummaryFieldsFragment } from "@/graphql/generated/graphql";
import { resolveFileLink } from "@/graphql/graphql";

const CoursesSlider = ({ data }: { data: CourseSummaryFieldsFragment[] }) => {
  if (!data || data.length === 0) return;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {data?.map((item, index) => (
        <CoursesCard
          key={index}
          image={resolveFileLink(item.hero_image)}
          faculty={item.degree?.title ?? ""}
          title={item.title ?? ""}
          subTitle={item.description ?? ""}
          link={`/courses/${item?.slug ?? ""}`}
        />
      ))}
    </div>
  );
};

export default CoursesSlider;
