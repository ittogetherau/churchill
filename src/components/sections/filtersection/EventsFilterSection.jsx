"use client";
import React, { useEffect, useState } from "react";
import {
  DataNotFound,
  EventsCard,
  FilterComponent,
  NewsletterSection,
} from "@/components";

const EventsFilterSection = ({ data }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  const handleSearch = () => {
    const query = searchQuery.trim().toLowerCase();
    const result = data.filter((item) =>
      item.title.toLowerCase().includes(query)
    );
    setFilteredData(result);
  };

  useEffect(() => {
    if (!searchQuery) {
      setFilteredData(data);
    }
  }, [searchQuery, data]);

  return (
    <>
      <div className="container mx-auto px-5 flex flex-col gap-[32px] lg:gap-[64px]">
        <div className="flex flex-col lg:flex-row gap-8 relative">
          <FilterComponent
            searchQuery={searchQuery}
            onSearchQuery={setSearchQuery}
            onFilter={handleSearch}
          ></FilterComponent>

          <div className="flex-1">
            {filteredData.length > 0 ? (
              <div className="flex flex-col gap-8">
                {filteredData.map((item, index) => (
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
      <NewsletterSection />
    </>
  );
};

export default EventsFilterSection;
