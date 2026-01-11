import { TopBannerCard } from "@/components/cards";
import BlogSection from "@/components/sections/blogSections/BlogSection";
import CoursesSection from "@/components/sections/homeSections/CoursesSection";
import EnquirySection from "@/components/sections/homeSections/EnquirySection";
import VideoSection from "@/components/sections/homeSections/VideoSection";
import UpcomingKeyDatesSection from "@/comps/key-dates/UpcomingKeyDatesSection";
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
            Empowering A Brighter
            <span className="highlight">Tomorrow</span>
          </span>
        }
        subTitle={`<p className="my-4"> Explore our innovative programs and transform your career. </p>`}
        link={`/courses`}
        linkA={"/assets/apply-at-churchill.pdf"}
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

      <VideoSection data={videos} />
      <div className=""></div>
    </SpacingLayout>
  );
};

export default Home;
