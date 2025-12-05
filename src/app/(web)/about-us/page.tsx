import TopBannerCard from "@/components/cards/TopBannerCard";
import AboutSection from "@/components/sections/aboutUsSections/AboutSection";
import CoreValuesSection from "@/components/sections/aboutUsSections/CoreValuesSection";
import MissionVisionsection from "@/components/sections/aboutUsSections/MissionVisionsection";
import RelatedSection from "@/components/sections/aboutUsSections/RelatedSection";
import ContainerLayout from "@/layouts/container-layout";
import SpacingLayout from "@/layouts/spacing-layout";

const Page = () => {
  return (
    <SpacingLayout>
      <TopBannerCard
        image={"/assets/churchill-team.jpg"}
        titleSpan={
          <span>
            Meet Our <span className="highlight">Team</span>
          </span>
        }
        title={""}
        subTitle={
          "Since our founding, Churchill Institute of Higher Education has been dedicated to providing industry-relevant education, empowering students with the skills and knowledge to thrive in their careers."
        }
        link={`/courses`}
        linkA={`/assets/apply-at-churchill.pdf`}
        BtnAText={"Explore Our Courses"}
        BtnBText={"Apply Now"}
      />

      <ContainerLayout>
        <SpacingLayout>
          <MissionVisionsection />

          <CoreValuesSection />

          <AboutSection />

          <RelatedSection />
        </SpacingLayout>
      </ContainerLayout>
    </SpacingLayout>
  );
};

export default Page;
