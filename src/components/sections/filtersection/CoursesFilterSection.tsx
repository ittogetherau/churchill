import CourseDetailsCard from "@/components/cards/CourseDetailsCard";
import DataNotFound from "@/components/globals/DataNotFound";
import { ICourse } from "@/graphql/types";
import ContainerLayout from "@/layouts/container-layout";
import React from "react";

interface prosp {
  data: ICourse[];
}

const CoursesFilterSection: React.FC<prosp> = ({ data }) => {
  if (!data || data.length === 0) return <DataNotFound />;

  return (
    <ContainerLayout>
      <div className="space-y-4">
        {data.map((el, i) => (
          <CourseDetailsCard
            key={i}
            subTitle={el.description}
            faculty={el.degree.title}
            title={el.title}
            slug={el.slug}
            courseDetails={el.program_details}
          />
        ))}
      </div>
    </ContainerLayout>
  );
};

export default CoursesFilterSection;
