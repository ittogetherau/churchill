"use client";
import { EventsFilterSection, PatternBannerCard, Spiner } from "@/components";
import React, { useEffect, useState } from "react";
import { FetchUpcomingKeyEventsData } from "@/components/utils/apiQueries";

const EventsPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    setIsLoading(true);

    FetchUpcomingKeyEventsData()
      .then((res) => {
        setData(res.data);
        setIsLoading(false);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      {isLoading ? (
        <Spiner />
      ) : (
        <div className="flex flex-col gap-[32px] lg:gap-[64px]">
          <PatternBannerCard title={"Churchill Institute of Higher Education Events"} />

          <EventsFilterSection data={data} />
        </div>
      )}
    </>
  );
};

export default EventsPage;
