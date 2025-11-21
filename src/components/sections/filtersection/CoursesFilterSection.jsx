"use client";
import React, { useEffect, useState } from "react";
import { DataNotFound, CourseDetailsCard, FilterComponent } from "@/components";
import FadeUpAnimation from "@/animations/FadeUp";

const CoursesFilterSection = ({ data }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredArray, setFilteredArray] = useState(data);

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
    if (!searchQuery.length > 0) setFilteredArray(data);
  }, [searchQuery]);

  return (
    <div className="container mx-auto px-5 flex flex-col gap-[32px] lg:gap-[64px]">
      <div className="flex flex-col lg:flex-row gap-6 relative">
        {/* <FilterComponent
          searchQuery={searchQuery}
          onSearchQuery={setSearchQuery}
          onFilter={handleFilter}
        ></FilterComponent> */}

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
                    faculty={item?.faculty?.faculty_name}
                    menuTitle={item?.course_name}
                    subTitle={item?.description}
                    slug={item?.slug}
                    courseDetails={item?.course_details}
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
      </div>
    </div>
  );
};

export default CoursesFilterSection;
