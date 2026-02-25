import { TopBannerCard } from "@/components/cards";
import BlogSection from "@/components/sections/blogSections/blog-section";
import CoursesSection from "@/components/sections/homeSections/courses-section";
import EnquirySection from "@/components/sections/homeSections/enquiry-section";
import VideoSection from "@/components/sections/homeSections/video-section";
import StudentSatisfactionSection from "@/components/sections/student-satisfaction-section";
import UpcomingKeyDatesSection from "@/comps/key-dates/upcoming-key-dates-section";
import { HomepageDocument } from "@/graphql/generated/graphql";
import { runQuery } from "@/graphql/graphql";
import SpacingLayout from "@/layouts/spacing-layout";

const Home = async () => {
  const data = await runQuery(HomepageDocument);

  const coursesData = data?.courses ?? [];
  const degreeData = data?.degree?.[0] ?? null;
  const keyDates = data?.key_dates ?? [];
  const blogs = data?.blog ?? [];
  const highlightedDates = data.Highlighted ?? [];
  const videos = data?.explore_churchill ?? null;

  return (
    <SpacingLayout>
      <TopBannerCard
        image={`/assets/sydney-city-in-australia.jpg`}
        titleSpan={
          <span>
            Empowering A <br /> Brighter{" "}
            <span className="highlight">Tomorrow</span>
          </span>
        }
        subTitle={`<p className="my-4"> Explore our innovative programs and transform your career. </p>`}
        link={`/courses`}
        linkA={"https://churchill.edu.au/apply-for-course-admission"}
        BtnAText={"Explore Our Courses"}
        BtnBText={"Apply Now"}
      />

      <CoursesSection degree={degreeData} courses={coursesData} />

      <div>
        <UpcomingKeyDatesSection
          keyDates={keyDates}
          highlightedDates={highlightedDates}
        />
      </div>

      <EnquirySection />

      <BlogSection blogs={blogs} />

      <StudentSatisfactionSection />

      <VideoSection data={videos} />
      <div className=""></div>
    </SpacingLayout>
  );
};

export default Home;
