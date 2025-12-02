"use client";
import { useEffect, useState } from "react";
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { eventsData } from "@/constDatas/eventsData";
import Link from "next/link";
import { Button, EventsCard } from "@/components";
import FadeUpAnimation from "@/animations/FadeUp";
import { FetchUpcomingKeyEventsData } from "@/components/utils/apiQueries";

const UpcomingEvents = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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
      {!isLoading && (
        <div className="flex flex-col gap-[32px] lg:gap-[44px] container mx-auto px-5">
          <h2 className="font-bold text-[36px] leading-9 text-center mx-auto text-[#2C2B4B]">
            Upcoming Events
          </h2>

          <div className="flex flex-col gap-6">
            {data?.slice(0, 2)?.map((item, index) => (
              <FadeUpAnimation key={index} delay={item * index}>
                <EventsCard
                  image={item?.image}
                  title={item?.title}
                  description={item?.description}
                  rich_text={item?.rich_text}
                  start_time={item?.start_time}
                  end_time={item?.end_time}
                  slug={item?.slug}
                  tags={item?.tags}
                />
              </FadeUpAnimation>
            ))}
          </div>

          {data.length > 2 && (
            <div className="flex justify-center">
              <Link href={"/events"} className="w-max">
                <Button
                  btnName={"Load More"}
                  icon={<FaArrowRight />}
                  styleA={"flex items-center gap-1"}
                  styleType="secondary"
                />
              </Link>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default UpcomingEvents;
