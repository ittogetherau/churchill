import TopBannerCard from "@/components/cards/TopBannerCard";
import CoursesFilterSection from "@/components/sections/filtersection/CoursesFilterSection";
import { CoursePageDocument } from "@/graphql/generated/graphql";
import { runQuery } from "@/graphql/graphql";
import ContainerLayout from "@/layouts/container-layout";
import SpacingLayout from "@/layouts/spacing-layout";
import Link from "next/link";

const Courses = async () => {
  const data = await runQuery(CoursePageDocument);

  const degreeData = data?.degree?.[0];
  const coursesData = data?.courses ?? [];

  return (
    <SpacingLayout>
      <TopBannerCard
        image={`/assets/maincoursepage.jpg`}
        titleSpan={
          <span>
            Study Bachelor of Business at Churchill Institute of Higher
            Education.
          </span>
        }
        subTitle="Explore our innovative programs and transform your career."
        BtnAText="Apply Now"
        BtnBText="View Courses"
        link="/assets/apply-at-churchill.pdf"
        linkA=""
      />

      <ContainerLayout>
        <div className="mb-10 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-5xl">
            {degreeData?.title ?? ""} ({degreeData?.short_title ?? ""})
          </h2>
          {degreeData?.course_code && (
            <>
              <p className="text-lg text-gray-600">
                CRICOS Course Code:&nbsp;
                <Link
                  className="font-medium text-orange-600 hover:underline"
                  href={`https://cricos.education.gov.au/Course/CourseDetails.aspx?CourseId=${degreeData.course_code}`}
                  target="_blank"
                >
                  {degreeData.course_code}
                </Link>
              </p>
            </>
          )}
        </div>
      </ContainerLayout>

      {degreeData?.summary && (
        <ContainerLayout size="sm">
          <div
            className="rich_text_container"
            dangerouslySetInnerHTML={{ __html: degreeData.summary }}
          ></div>
        </ContainerLayout>
      )}

      {degreeData?.learning_outcomes && (
        <ContainerLayout size="sm">
          <div
            className="rich_text_container ul_design"
            dangerouslySetInnerHTML={{ __html: degreeData.learning_outcomes }}
          ></div>
        </ContainerLayout>
      )}

      <span id="scrollToCourse" />

      <CoursesFilterSection data={coursesData} />
    </SpacingLayout>
  );
};

export default Courses;
