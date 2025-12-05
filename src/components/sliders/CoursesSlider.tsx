"use client";

import { FetchCourseData } from "@/components/utils/apiQueries";
import { useEffect, useState } from "react";
import CoursesCard from "../cards/CoursesCard";
import Loading from "../globals/Loading";
import { ICourse } from "@/graphql/types";
import { resolveFileLink } from "@/graphql/graphql";

interface CourseItem {
  heroImage: string;
  faculty: {
    faculty_name: string;
  };
  course_name: string;
  description: string;
  slug: string;
}

const CoursesSlider = ({ data }: { data: ICourse[] }) => {
  if (!data || data.length === 0) return;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {data?.map((item, index) => (
        <CoursesCard
          key={index}
          image={resolveFileLink(item.hero_image)}
          faculty={item.degree.title}
          title={item.title}
          subTitle={item.description}
          link={`/courses/${item?.slug}`}
        />
      ))}
    </div>
  );
};

export default CoursesSlider;
