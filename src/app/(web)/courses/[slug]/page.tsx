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

const Page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;

  const data = await runQuery(CourseDetailDocument, { slug });

  const course = data?.courses?.[0];
  const otherCourses = data?.otherCourses ?? [];

  if (!course) notFound();

  return (
    <SpacingLayout>
      <TopBannerCard
        beforeTitle={course?.degree?.title ?? ""}
        image={resolveFileLink(course?.hero_image)}
        titleSpan={course?.title ?? ""}
        courseCode={course?.degree?.course_code ?? ""}
        subTitle={course?.description ?? ""}
        BtnAText="Apply Now"
        slug={slug}
        BtnBText="Enquire Now"
        link={`https://churchill.edu.au/f/apply-at-churchill`}
        linkA={`https://forms.zohopublic.com.au/CIHE/form/StudentHubEnquiry/formperma/XilFJje5kQ-h7f4saQYbSV4kJ-kAMiG7p1QNfWEvDXs`}
        imageAStyle={`lg:scale-[135%]`}
      />

      <CourseOverviewSection data={course?.program_details ?? []} />

      <TabbedPane data={course?.course_structure ?? []} />

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
