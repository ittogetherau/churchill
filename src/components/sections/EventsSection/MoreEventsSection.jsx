"use client";
import React, { useEffect, useState } from "react";
import { EventsCard } from "@/components";
import { FetchUpcomingKeyEventsData } from "@/components/utils/apiQueries";

const MoreEventsSection = ({ slug }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    FetchUpcomingKeyEventsData()
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <>
      {data.length >= 2 && (
        <div className="container mx-auto px-5">
          <h3 className="font-bold text-2xl mb-8">More Events</h3>

          {data?.slice(0, 3)?.map((item, index) => {
            if (item.slug != slug)
              return (
                <EventsCard
                  key={index}
                  id={item?.id}
                  slug={item?.slug}
                  image={item?.image}
                  title={item?.title}
                  description={item?.description}
                  rich_text={item?.rich_text}
                  start_time={item?.start_time}
                  end_time={item?.end_time}
                  time_duration={item?.time_duration}
                  tags={item?.tags}
                />
              );
          })}
        </div>
      )}
    </>
  );
};

export default MoreEventsSection;
