"use client";
import FadeUpAnimation from "@/animations/FadeUp";

import { FetchCourseData } from "@/components/utils/apiQueries";
import { useEffect, useState } from "react";
import CoursesCard from "../cards/CoursesCard";
import Loading from "../globals/Loading";

interface CourseItem {
  heroImage: string;
  faculty: {
    faculty_name: string;
  };
  course_name: string;
  description: string;
  slug: string;
}

const CoursesSlider = () => {
  const [data, setData] = useState<CourseItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    FetchCourseData()
      .then((res) => {
        setData(res.data);
        setIsLoading(false);
      })
      .catch((err) => console.error(err));
  }, []);

  if (isLoading) return <Loading />;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {data?.map((item, index) => (
        <CoursesCard
          key={index}
          image={item.heroImage}
          faculty={item?.faculty.faculty_name}
          title={item?.course_name}
          subTitle={item?.description}
          link={`/courses/${item?.slug}`}
        />
      ))}
    </div>
  );
};

export default CoursesSlider;
