import React from "react";
import { eventsData } from "@/constDatas/eventsData";
import { EventsCard, NewsletterSection, TopBannerCard } from "@/components";

const UpcomingKeyDatesSection = () => {
  return (
    <div className="flex flex-col gap-[32px] lg:gap-[64px]">
      <div>
        <TopBannerCard
          image={`/assets/hero-image.jpeg`}
          titleSpan={""}
          title={"Key Dates"}
          subTitle={`Student Hub > Request Form > Key Dates`}
        />
      </div>
      <div className="container mx-auto px-5">
        <div className="flex flex-col gap-[32px] lg:gap-[64px]">
          <div className="flex flex-col gap-5">
            {eventsData?.map((item, index) => (
              <EventsCard
                key={index}
                image={item?.image}
                title={item?.title}
                subTitle={item?.subTitle}
                day={item?.day}
                month={item?.month}
                time={item?.time}
                date={item?.date}
                link={item?.link}
                slug={item?.slug}
                catagories={item?.catagories}
                duration={item?.duration}
              />
            ))}
          </div>
        </div>
      </div>
      <div>
        <NewsletterSection />
      </div>
    </div>
  );
};

export default UpcomingKeyDatesSection;
