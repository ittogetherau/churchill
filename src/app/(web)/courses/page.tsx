import TopBannerCard from "@/components/cards/TopBannerCard";
import CoursesFilterSection from "@/components/sections/filtersection/CoursesFilterSection";
import { fetchGraphQL } from "@/graphql/graphql";
import { ICourse } from "@/graphql/types";
import ContainerLayout from "@/layouts/container-layout";
import SpacingLayout from "@/layouts/spacing-layout";
import Link from "next/link";

const query = `
  query {
    degree {
      title
      short_title
      course_code
      summary
      learning_outcomes
    }
    courses {
      slug 
      title description
      hero_image { id filename_download }
      icon_string
      course_structure { title rich_text }
      program_details { icon label value }
      degree { title course_code }
    }
  }
`;

const Courses = async () => {
  const response = await fetchGraphQL(query);
  const data = response.data;

  const degreeData = data.degree[0] ?? {};
  const coursesData = (data.courses as ICourse[]) ?? [];

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
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900">
            {degreeData.title} ({degreeData.short_title})
          </h2>
          {degreeData.course_code && (
            <>
              <p className="text-lg text-gray-600">
                CRICOS Course Code:&nbsp;
                <Link
                  className="text-orange-600 font-medium hover:underline"
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

      <ContainerLayout size="sm">
        <div
          className="rich_text_container"
          dangerouslySetInnerHTML={{ __html: degreeData.summary }}
        ></div>
      </ContainerLayout>

      <ContainerLayout size="sm">
        <div
          className="rich_text_container ul_design"
          dangerouslySetInnerHTML={{ __html: degreeData.learning_outcomes }}
        ></div>
      </ContainerLayout>

      <span id="scrollToCourse" />

      <CoursesFilterSection data={coursesData} />
    </SpacingLayout>
  );
};

export default Courses;
