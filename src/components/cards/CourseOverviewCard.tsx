import React from "react";
import FadeUpAnimation from "@/animations/FadeUp";
import ContainerLayout from "@/layouts/container-layout";
import { IProgramDetail } from "@/graphql/types";

interface props {
  data?: IProgramDetail[];
}

const CourseOverviewSection = ({ data }: props) => {
  if (!data || data.length === 0) return null;

  return (
    <ContainerLayout>
      <div className="rounded-md grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data?.map((item, index) => (
          <FadeUpAnimation delay={0.1 * index} key={index}>
            <div className="flex flex-row gap-3" key={index}>
              <div className="w-12 h-12 grid place-items-center bg-primary-orange rounded-full text-2xl">
                <i
                  className={`w-12 h-12 text-white grid place-items-center ${item?.icon}`}
                ></i>
              </div>

              <div className="">
                {item.label && item.label.length > 1 && (
                  <div
                    className="text-[#2C2B4B]"
                    dangerouslySetInnerHTML={{ __html: item?.label }}
                  ></div>
                )}

                {item.value && (
                  <h3
                    className="text-[#2C2B4B] font-bold text-lg"
                    dangerouslySetInnerHTML={{ __html: item?.value }}
                  ></h3>
                )}
              </div>
            </div>
          </FadeUpAnimation>
        ))}
      </div>
    </ContainerLayout>
  );
};

export default CourseOverviewSection;
