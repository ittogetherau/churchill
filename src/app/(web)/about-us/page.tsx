import { TopBannerCard } from "@/components/cards";
import AboutUsPageSlider, {
  type AboutUsPageSliderItem,
} from "@/components/sliders/AboutUsPageSlider";
import { AboutUsPageDocument } from "@/graphql/generated/graphql";
import { runQuery } from "@/graphql/graphql";
import ContainerLayout from "@/layouts/container-layout";
import SpacingLayout from "@/layouts/spacing-layout";
import RichTextRenderer from "@/components/utils/rich-text-renderer";

const page = async () => {
  const data = await runQuery(AboutUsPageDocument);

  const aboutContent = data.about_us_page?.about_us_content;
  const pageNotes = data.about_us_page?.page_notes;
  const aboutSlider: AboutUsPageSliderItem[] = Array.isArray(
    data.about_us_page?.slider_items,
  )
    ? data.about_us_page.slider_items
    : [];

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
        linkA={`https://churchill.edu.au/apply-for-course-admission`}
        BtnAText={"Explore Our Courses"}
        BtnBText={"Apply Now"}
      />

      <ContainerLayout size="sm">
        {aboutContent && (
          <RichTextRenderer content={aboutContent} richText />
        )}
      </ContainerLayout>

      <ContainerLayout>
        <AboutUsPageSlider items={aboutSlider} />
      </ContainerLayout>

      <ContainerLayout>
        <p className="italic">{pageNotes}</p>
      </ContainerLayout>
    </SpacingLayout>
  );
};

export default page;
