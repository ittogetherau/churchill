import React from "react";
import FadeUpAnimation from "@/animations/FadeUp";

const CourseOverviewSection = ({ overviewData }) => {
  console.log(overviewData);

  return (
    <>
      <div className="container mx-auto px-5">
        <div className="rounded-md grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-6">
          {overviewData?.map((item, index) => (
            <FadeUpAnimation delay={0.1 * index} key={index}>
              <div className="flex flex-row gap-3" key={index}>
                <div className="w-12 h-12 grid place-items-center bg-primary-orange rounded-full text-2xl">
                  <i
                    className={`w-12 h-12 text-white grid place-items-center ${item?.icon}`}
                  ></i>
                </div>

                <div className="">
                  <h3
                    className="text-[#2C2B4B] font-bold text-lg"
                    dangerouslySetInnerHTML={{ __html: item?.description }}
                  >
                    {/* {item?.description} */}
                  </h3>
                  <p
                    className="text-[#2C2B4B]"
                    dangerouslySetInnerHTML={{ __html: item?.title }}
                  ></p>
                </div>
              </div>
            </FadeUpAnimation>
          ))}
        </div>
      </div>
    </>
  );
};

export default CourseOverviewSection;
