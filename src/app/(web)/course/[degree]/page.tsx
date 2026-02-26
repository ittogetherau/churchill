import { TopBannerCard } from "@/components/cards";
import CoursesFilterSection from "@/components/sections/filtersection/CoursesFilterSection";
import EnquirySection from "@/components/sections/homeSections/EnquirySection";
import {
  CourseDetailFieldsFragment,
  DegreeDetailDocument,
} from "@/graphql/generated/graphql";
import { runQuery } from "@/graphql/graphql";
import ContainerLayout from "@/layouts/container-layout";
import SpacingLayout from "@/layouts/spacing-layout";
import Link from "next/link";

const Page = async ({ params }: { params: Promise<{ degree: string }> }) => {
  const { degree } = await params;
  const raw = await runQuery(DegreeDetailDocument, { slug: degree });

  const degreeData = raw.degree[0];
  const coursesData = degreeData.course as CourseDetailFieldsFragment[];

  return (
    <SpacingLayout>
      <TopBannerCard
        image={`/assets/maincoursepage.jpg`}
        titleSpan={
          <span>
            Study {degreeData.title} at Churchill Institute of Higher Education.
          </span>
        }
        subTitle="Explore our innovative programs and transform your career."
        BtnAText="Apply Now"
        BtnBText="View Courses"
        link="https://churchill.edu.au/apply-for-course-admission"
        linkA="#courses"
      />

      <ContainerLayout>
        <div className="text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-5xl">
            {degreeData?.title ?? ""} ({degreeData?.short_title ?? ""})
          </h2>
          {degreeData?.course_code && (
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

      {degreeData?.additional_content && (
        <ContainerLayout size="sm">
          <div
            className="rich_text_container"
            dangerouslySetInnerHTML={{ __html: degreeData.additional_content }}
          ></div>
        </ContainerLayout>
      )}

      <div className="block h-4" id="courses"></div>
      <CoursesFilterSection data={coursesData} />
      <EnquirySection />
    </SpacingLayout>
  );
};

export default Page;
