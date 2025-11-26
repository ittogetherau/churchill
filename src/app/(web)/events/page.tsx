import EventsCard from "@/components/cards/EventsCard";
import PatternBannerCard from "@/components/cards/PatternBannerCard";
import FilterComponent from "@/components/filter/FilterComponent";
import DataNotFound from "@/components/globals/DataNotFound";

const EventsPage = async ({ searchParams }) => {
  const values = await searchParams;
  const keyword = values.keyword ?? "";

  const items = await FetchUpcomingKeyEventsData();
  const data = await items.data;
  const filtered = keyword
    ? data.filter((el) => el.title.toLowerCase().includes(keyword))
    : data;

  return (
    <>
      <div className="flex flex-col gap-[32px] lg:gap-[64px]">
        <PatternBannerCard
          title={"Churchill Institute of Higher Education Events"}
        />

        <div className="container mx-auto px-5 flex flex-col gap-[32px] lg:gap-[64px]">
          <div className="flex flex-col lg:flex-row gap-8 relative">
            <FilterComponent />

            <div className="flex-1">
              {filtered.length > 0 ? (
                <div className="flex flex-col gap-8">
                  {filtered.map((item, index) => (
                    <EventsCard
                      key={index}
                      id={item.id}
                      slug={item.slug}
                      image={item.image}
                      title={item.title}
                      description={item.description}
                      rich_text={item.rich_text}
                      start_time={item.start_time}
                      end_time={item.end_time}
                      time_duration={item.time_duration}
                      tags={item.tags}
                    />
                  ))}
                </div>
              ) : (
                <DataNotFound />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventsPage;
