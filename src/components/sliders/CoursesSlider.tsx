"use client";
import FadeUpAnimation from "@/animations/FadeUp";

import { FetchCourseData } from "@/components/utils/apiQueries";
import { useEffect, useState } from "react";
import CoursesCard from "../cards/CoursesCard";

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

  return (
    <>
      {!isLoading && (
        <div className="flex flex-col gap-4 lg:gap-[40px]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[22px]">
            {data?.map((item, index) => (
              <FadeUpAnimation delay={index * 0.1} key={index}>
                <CoursesCard
                  image={item.heroImage}
                  faculty={item?.faculty.faculty_name}
                  title={item?.course_name}
                  subTitle={item?.description}
                  link={`/courses/${item?.slug}`}
                />
              </FadeUpAnimation>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default CoursesSlider;
