import CourseOverviewSection from "@/components/cards/CourseOverviewCard";
import TopBannerCard from "@/components/cards/TopBannerCard";
import EnquirySection from "@/components/sections/homeSections/EnquirySection";
import CoursesSlider from "@/components/sliders/CoursesSlider";
import TabbedPane from "@/components/ui-elements/TabbedPane";
import { CourseDetailDocument } from "@/graphql/generated/graphql";
import { resolveFileLink, runQuery } from "@/graphql/graphql";
import ContainerLayout from "@/layouts/container-layout";
import SpacingLayout from "@/layouts/spacing-layout";
import { notFound } from "next/navigation";

const Page = async ({
  params,
}: {
  params: Promise<{ degree: string; course: string }>;
}) => {
  const { degree, course } = await params;

  const data = await runQuery(CourseDetailDocument, {
    slug: course,
    parent: degree,
  });

  const matchedCourse = data?.courses?.[0];
  const otherCourses = data?.otherCourses ?? [];

  if (!matchedCourse) notFound();

  return (
    <SpacingLayout>
      <TopBannerCard
        beforeTitle={matchedCourse?.degree?.title ?? ""}
        image={resolveFileLink(matchedCourse?.hero_image)}
        titleSpan={matchedCourse?.title ?? ""}
        courseCode={matchedCourse?.degree?.course_code ?? ""}
        subTitle={matchedCourse?.description ?? ""}
        BtnAText="Apply Now"
        slug={course}
        BtnBText="Enquire Now"
        link={`https://churchill.edu.au/apply-for-course-admission`}
        linkA={`https://forms.zohopublic.com.au/CIHE/form/StudentHubEnquiry/formperma/XilFJje5kQ-h7f4saQYbSV4kJ-kAMiG7p1QNfWEvDXs`}
        imageAStyle={`lg:scale-[135%]`}
      />

      <CourseOverviewSection data={matchedCourse?.program_details ?? []} />

      <TabbedPane data={matchedCourse?.course_structure ?? []} />

      <EnquirySection />

      <ContainerLayout>
        <h2 className="mb-6 text-[36px] leading-9 font-bold text-[#2C2B4B]">
          Browse Other Majors
        </h2>
        <CoursesSlider data={otherCourses} />
      </ContainerLayout>
    </SpacingLayout>
  );
};

export default Page;
