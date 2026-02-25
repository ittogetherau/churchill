import AccordionComponent from "@/components/ui-elements/accordion-component";
import PatternBannerCard from "@/components/cards/pattern-banner-card";
import { FaqPageDocument } from "@/graphql/generated/graphql";
import { runQuery } from "@/graphql/graphql";

const Page = async () => {
  const items = await runQuery(FaqPageDocument);
  const data = items.faqs;

  const accordionData =
    data && data.length > 0
      ? data
          .filter((el) => el.title && el.rich_text)
          .map((el) => ({
            title: el.title ?? "",
            description: el.rich_text ?? "",
          }))
      : [];

  return (
    <>
      <PatternBannerCard title="Frequently Asked Questions" />

      <div className="flex flex-col gap-[32px] lg:gap-[64px]">
        <div className="container mx-auto px-5">
          <AccordionComponent data={accordionData} />
        </div>
      </div>
    </>
  );
};
export default Page;
