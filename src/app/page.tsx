import { TopBannerCard } from "@/components/cards";
import BlogSection from "@/components/sections/blogSections/BlogSection";
import CoursesSection from "@/components/sections/homeSections/CoursesSection";
import VideoSection from "@/components/sections/homeSections/VideoSection";
import UpcomingKeyDates from "@/components/sections/upcomingEventsSections/UpcomingKeyDates";
import SpacingLayout from "@/layouts/spacing-layout";

const Home = () => {
  return (
    <SpacingLayout>
      <TopBannerCard
        image={`/assets/sydney-city-in-australia.jpg`}
        titleSpan={<span>Empowering A Brighter</span>}
        title={"Tomorrow"}
        subTitle={`<p className="my-4"> Explore our innovative programs and transform your career. </p>`}
        link={`/courses`}
        linkA={"/assets/apply-at-churchill.pdf"}
        BtnAText={"Explore Our Courses"}
        BtnBText={"Apply Now"}
      />

      <CoursesSection />
      <UpcomingKeyDates />
      <BlogSection />
      <VideoSection />
      <div className=""></div>
    </SpacingLayout>
  );
};

export default Home;
