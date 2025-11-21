import React from "react";
import Button from "@/components/button";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";

const CourseDetailsCard = ({
  menuTitle,
  subTitle,
  slug,
  faculty,
  courseDetails,
}) => {
  return (
    <div className="bg-[#FAF4F4] flex flex-col gap-4 md:gap-3 md:flex-row md:items-center p-4 rounded-md">
      <div className="flex-1 flex flex-col gap-3">
        <span className="bg-[#F2CF9C] px-3 py-1 text-sm rounded-md capitalize w-fit">
          {faculty}
        </span>

        <h2 className="font-extrabold text-2xl lg:text-3xl text-matte-purple">
          {menuTitle}
        </h2>

        <p
          dangerouslySetInnerHTML={{ __html: subTitle }}
          className="md:max-h-[4.5rem] overflow-hidden"
        ></p>

        <div className="flex flex-col lg:flex-row justify-around md:justify-start gap-5 md:gap-12">
          {courseDetails?.slice(0, 3)?.map((item, index) => (
            <div className="flex flex-row gap-3 items-center" key={index}>
              <div className="w-12 h-12 grid place-items-center bg-white rounded-full text-2xl">
                <i className={`text-[#E59623] flex ${item?.icon}`}></i>
              </div>

              <div className="">
                <h3 className="text-[#2C2B4B] font-bold text-lg">
                  {item?.description}
                </h3>
                <p className="text-[#2C2B4B]">{item?.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="max-w-fit flex flex-col gap-3">
        <Link href={`/courses/${slug}`} className="w-full flex-1">
          <Button
            btnName="Learn More"
            icon={<FaArrowRight />}
            styleA={"flex items-center gap-1"}
            style="w-full"
          />
        </Link>
        <Link href={"/assets/apply-at-churchill.pdf"} className="w-full flex-1">
          <Button
            btnName="Apply Now"
            icon={<FaArrowRight />}
            styleA={"flex items-center gap-1"}
            style="w-full"
            styleType="secondary"

          />
        </Link>
      </div>
    </div>
  );
};

export default CourseDetailsCard;
