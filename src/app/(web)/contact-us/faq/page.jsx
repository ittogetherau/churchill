import { PatternBannerCard } from "@/components";

import { AccordionComponent } from "@/components";
import { FetchFaqData } from "@/components/utils/apiQueries";

const ContactUsFAQ = async () => {
  const items = await FetchFaqData();
  const data = await items.data;
  return (
    <>
      <PatternBannerCard title="Frequently Asked Questions" />

      <div className="flex flex-col gap-[32px] lg:gap-[64px]">
        <div className="container mx-auto px-5">
          <AccordionComponent data={data} />
        </div>
      </div>
    </>
  );
};
export default ContactUsFAQ;
