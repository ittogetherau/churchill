import {
  BlogSection,
  CoursesSection,
  HeroSection,
  UpcomingKeyDates,
  VideoSection
} from "@/components";

const Home = () => {
  return (
    <main className="">
      <div className="flex flex-col gap-[32px] lg:gap-[100px]">
        <HeroSection />

        <CoursesSection />

        <UpcomingKeyDates />

     

        {/* <UpcomingEvents /> */}

        <BlogSection />

        <VideoSection />
      </div>
    </main>
  );
};

export default Home;
