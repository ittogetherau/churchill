import React from "react";
import FadeUpAnimation from "@/animations/FadeUp";
import ContainerLayout from "@/layouts/container-layout";
import { type CourseDetailFieldsFragment } from "@/graphql/generated/graphql";
import RichTextRenderer from "@/components/utils/rich-text-renderer";

type ProgramDetail = NonNullable<
  CourseDetailFieldsFragment["program_details"]
>[number];

interface props {
  data?: ProgramDetail[];
}

const CourseOverviewSection = ({ data }: props) => {
  if (!data || data.length === 0) return null;

  return (
    <ContainerLayout>
      <div className="grid grid-cols-1 gap-6 rounded-md md:grid-cols-2 lg:grid-cols-3">
        {data?.map((item, index) => (
          <FadeUpAnimation delay={0.1 * index} key={index}>
            <div className="flex flex-row gap-3" key={index}>
              <div className="bg-primary-orange grid h-12 w-12 place-items-center rounded-full text-2xl">
                <i
                  className={`grid h-12 w-12 place-items-center text-white ${item?.icon ?? ""}`}
                ></i>
              </div>

              <div className="">
                {item?.label && item.label.length > 1 && (
                  <RichTextRenderer
                    content={item?.label}
                    richText={false}
                    className="text-[#2C2B4B]"
                  />
                )}

                {item?.description && (
                  <h3 className="text-lg font-bold text-[#2C2B4B]">
                    <RichTextRenderer
                      as="span"
                      content={item?.description}
                      richText={false}
                    />
                  </h3>
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
