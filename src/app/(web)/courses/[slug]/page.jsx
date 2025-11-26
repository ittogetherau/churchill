import {
  CourseOverviewSection,
  CoursesSlider,
  EnquirySection,
  TabbedPane,
  TopBannerCard,
} from "@/components";
import { FetchCourseData } from "@/components/utils/apiQueries";

const Page = async ({ params }) => {
  const { slug } = await params;

  const response = await FetchCourseData(slug);
  const data = await response?.data;

  return (
    <div>
      <div className="flex flex-col gap-[32px] lg:gap-[64px]">
        <TopBannerCard
          beforeTitle={data?.faculty?.faculty_name}
          image={data?.heroImage}
          titleSpan={data?.course_name}
          courseCode={`${data?.course_code}`}
          subTitle={data?.description}
          BtnAText="Apply Now"
          BtnBText="Enquire Now"
          link={`/assets/apply-at-churchill.pdf`}
          linkA={`https://forms.zohopublic.com.au/CIHE/form/StudentHubEnquiry/formperma/XilFJje5kQ-h7f4saQYbSV4kJ-kAMiG7p1QNfWEvDXs`}
          imageAStyle={`lg:scale-[135%]`}
        />

        <CourseOverviewSection overviewData={data?.course_details} />

        <TabbedPane data={data?.tabbed_pane} />


        <div className="container mx-auto px-5">
          <h2 className="font-bold leading-9 mb-6 text-[36px] text-[#2C2B4B]">
            Browse Other Majors
          </h2>
          <CoursesSlider />
        </div>

  
      </div>
    </div>
  );
};

export default Page;
