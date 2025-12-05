import CourseOverviewSection from "@/components/cards/CourseOverviewCard";
import TopBannerCard from "@/components/cards/TopBannerCard";
import CoursesSlider from "@/components/sliders/CoursesSlider";
import TabbedPane from "@/components/TabbedPane/TabbedPane";
import { fetchGraphQL, resolveFileLink } from "@/graphql/graphql";
import { ICourse } from "@/graphql/types";
import ContainerLayout from "@/layouts/container-layout";
import SpacingLayout from "@/layouts/spacing-layout";

const resolveQuery = (slug: string) => `
  query {
    courses(filter: { slug: { _eq: "${slug}" } }) {
      slug
      title
      description
      hero_image { id filename_download }
      icon_string
      course_structure {
        title
        rich_text
      }
      program_details {
        icon
        label
        value
      }
      degree {
        title
        course_code
      }
    }
    otherCourses: courses(filter: { slug: { _neq: "${slug}" } }) {
      slug
      title
      description
      hero_image { id filename_download }
      degree { title }
    }
  }
`;

const Page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;

  const query = resolveQuery(slug);
  const response = await fetchGraphQL(query);
  const data = (response.data.courses[0] as ICourse) || {};
  const otherCourses = (response.data.otherCourses as ICourse[]) || [];

  return (
    <SpacingLayout>
      <TopBannerCard
        beforeTitle={data.degree.title}
        image={resolveFileLink(data.hero_image)}
        titleSpan={data.title}
        courseCode={data.degree.course_code}
        subTitle={data.description}
        BtnAText="Apply Now"
        BtnBText="Enquire Now"
        link={`/assets/apply-at-churchill.pdf`}
        linkA={`https://forms.zohopublic.com.au/CIHE/form/StudentHubEnquiry/formperma/XilFJje5kQ-h7f4saQYbSV4kJ-kAMiG7p1QNfWEvDXs`}
        imageAStyle={`lg:scale-[135%]`}
      />

      <CourseOverviewSection data={data?.program_details} />

      <TabbedPane data={data?.course_structure} />

      <ContainerLayout>
        <h2 className="font-bold leading-9 mb-6 text-[36px] text-[#2C2B4B]">
          Browse Other Majors
        </h2>
        <CoursesSlider data={otherCourses} />
      </ContainerLayout>
    </SpacingLayout>
  );
};

export default Page;
