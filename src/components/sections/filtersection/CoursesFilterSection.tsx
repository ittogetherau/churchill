"use client";
import React, { useEffect, useState } from "react";
import FadeUpAnimation from "@/animations/FadeUp";
import DataNotFound from "@/components/globals/DataNotFound";
import CourseDetailsCard from "@/components/cards/CourseDetailsCard";
import ContainerLayout from "@/layouts/container-layout";

interface Faculty {
  faculty_name: string;
}

interface CourseItem {
  id: string | number;
  course_name: string;
  description?: string;
  slug: string;
  course_details?: string;
  faculty?: Faculty;
}

interface CoursesFilterSectionProps {
  data: CourseItem[];
}

const CoursesFilterSection: React.FC<CoursesFilterSectionProps> = ({
  data,
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredArray, setFilteredArray] = useState<CourseItem[]>(data);

  function handleFilter() {
    setFilteredArray(
      data.filter((item) =>
        item.course_name
          .toLowerCase()
          .includes(searchQuery.trim().toLowerCase())
      )
    );
  }
  useEffect(() => {
    if (!searchQuery.length) setFilteredArray(data);
  }, [searchQuery, data]);

  return (
    <ContainerLayout>
      <div className="flex-1">
        {filteredArray.length > 0 && (
          <p className="mb-2 lg:hidden">
            Showing {filteredArray.length} Item
            {filteredArray.length > 1 ? "s" : ""}
          </p>
        )}

        {filteredArray.length > 0 ? (
          <div className="flex flex-col gap-8">
            {filteredArray.map((item, index) => (
              <FadeUpAnimation delay={index * 0.1} key={item.id}>
                <CourseDetailsCard
                  faculty={item?.faculty?.faculty_name ?? ""}
                  menuTitle={item?.course_name ?? ""}
                  subTitle={item?.description ?? ""}
                  slug={item?.slug ?? ""}
                  courseDetails={
                    item?.course_details
                      ? typeof item.course_details === "string"
                        ? JSON.parse(item.course_details)
                        : item.course_details
                      : []
                  }
                />
              </FadeUpAnimation>
            ))}
          </div>
        ) : (
          <div className="w-[50%] mx-auto grid place-items-center">
            <DataNotFound />
          </div>
        )}
      </div>
    </ContainerLayout>
  );
};

export default CoursesFilterSection;
