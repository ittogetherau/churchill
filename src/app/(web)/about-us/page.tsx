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
            Professional Education for a{" "}
            <span className="highlight">Changing</span> World.
          </span>
        }
        title={""}
        subTitle={
          "Churchill Institute of Higher Education delivers industry-relevant degrees designed to prepare students for real-world careers. With accredited programs in Business and Information Technology, strong industry engagement, and a supportive learning environment, Churchill equips students with the knowledge, practical skills, and global perspective needed to succeed in today’s evolving workforce."
        }
        link={`/courses`}
        linkA={`https://churchill.edu.au/apply-for-course-admission`}
        BtnAText={"Explore Our Courses"}
        BtnBText={"Apply Now"}
      />

      <ContainerLayout size="sm">
        {aboutContent && <RichTextRenderer content={aboutContent} richText />}
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
