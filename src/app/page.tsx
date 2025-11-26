import BlogSection from "@/components/sections/blogSections/BlogSection";
import CoursesSection from "@/components/sections/homeSections/CoursesSection";
import HeroSection from "@/components/sections/homeSections/HeroSection";
import VideoSection from "@/components/sections/homeSections/VideoSection";
import UpcomingKeyDates from "@/components/sections/upcomingEventsSections/UpcomingKeyDates";

const Home = () => {
  return (
    <main className="">
      <div className="flex flex-col gap-[32px] lg:gap-[100px]">
        <HeroSection />

        <CoursesSection />

        <UpcomingKeyDates />

        <BlogSection />

        <VideoSection />
      </div>
    </main>
  );
};

export default Home;
