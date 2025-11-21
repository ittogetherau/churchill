import React from "react";
// import Search from "@/components/Search";
import Button from "@/components/button";
import { FaArrowRight, FaSearch } from "react-icons/fa";
import Link from "next/link";
import CoursesSlider from "@/components/sliders/CoursesSlider";

const CoursesSection = () => {
  return (
    <div className="container mx-auto px-5">
      <div className="flex flex-col gap-[32px] lg:gap-[44px]">
        <div className="text-center justify-between gap-4 items-center">
          <h2 className="font-bold leading-9 text-center mx-auto text-[36px] text-[#2C2B4B] mb-5">
            <span className={`highlight`}>Our Courses</span>
          </h2>
          <h2 className="font-bold leading-9 text-center mx-auto text-[36px] text-[#2C2B4B]">
            Bachelor of Business (BBus)
          </h2>
          <p className="font-semibold text-[20px] text-[#2C2B4B]">
            CRICOS Course Code: 111749J
          </p>
          <p className="px-0 mt-5 md:px-[200px]">Take charge of your future with a flexible and practical business degree. The Bachelor of Business at Churchill Institute of Higher Education is a 3-year, TEQSA-accredited course designed to equip you with real-world skills through four in-demand majors: Accounting, Hospitality, Information Systems, and Management.</p>
        </div>
        <div>
          <CoursesSlider />
        </div>
      </div>
    </div>
  );
};

export default CoursesSection;
