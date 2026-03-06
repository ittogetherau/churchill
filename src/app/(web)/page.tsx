import { TopBannerCard } from "@/components/cards";
import BlogSection from "@/components/sections/blogSections/BlogSection";
import DegreesSection from "@/components/sections/courseSections/DegreesSection";
import CoursesSection from "@/components/sections/homeSections/CoursesSection";
import EnquirySection from "@/components/sections/homeSections/EnquirySection";
import VideoSection from "@/components/sections/homeSections/VideoSection";
import StudentSatisfactionSection from "@/components/sections/student-satisfaction-section";
import HeadingText from "@/components/ui/heading-text";
import UpcomingKeyDatesSection from "@/comps/key-dates/UpcomingKeyDatesSection";
import { DegreesQuery, HomepageDocument } from "@/graphql/generated/graphql";
import { runQuery } from "@/graphql/graphql";
import ContainerLayout from "@/layouts/container-layout";
import SpacingLayout from "@/layouts/spacing-layout";

const Home = async () => {
  const data = await runQuery(HomepageDocument);

  const coursesData = data?.courses ?? [];
  const degreeData = data?.degree ?? [];
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

      <ContainerLayout className="space-y-8">
        <div className="text-center">
          <HeadingText className="highlight relative mx-auto mb-4 w-fit">
            Our Courses
          </HeadingText>
        </div>

        <DegreesSection degrees={degreeData as DegreesQuery["degree"]} />
      </ContainerLayout>

      {/* <CoursesSection courses={coursesData} /> */}

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
