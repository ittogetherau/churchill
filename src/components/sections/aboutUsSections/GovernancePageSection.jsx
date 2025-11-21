"use client";
import { navItems } from "@/constDatas/navItems";
import React, { useEffect, useState } from "react";
import {
  GovernanceCard,
  NewsletterSection,
  DataNotFound,
  PatternBannerCard,
} from "@/components";
import FadeUpAnimation from "@/animations/FadeUp";
import Image from "next/image";

const GovernancePageSection = ({ slug }) => {
  const [openDetails, setOpenDetails] = useState(false);

  const [comment, setComment] = useState({
    title: "",
    image: "",
    subTitle: "",
    description: "",
  });

  const [data, setData] = useState([]);

  useEffect(() => {
    const info = navItems[0]?.Catagories?.find((item) => item?.slug === slug);
    setData(info?.CatagoriesItem);
  }, [slug]);

  return (
    <>
      {/* <TextBanner
        title={slug?.split("-").join(" ")}
        subTitle="Churchill's senior leaders guide our institution towards big goals, focusing on excellence and innovative teaching to help our community, country, and the world."
      />
       */}
      <PatternBannerCard
        title={slug?.split("-").join(" ")}
        description="Churchill's senior leaders guide our institution towards big goals, focusing on excellence and innovative teaching to help our community, country, and the world."
      />

      <div className="flex flex-col gap-[32px] lg:gap-[64px]">
        <div className="container mx-auto px-5 mt-[48px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            {data?.map((item, index) => (
              <FadeUpAnimation
                key={index}
                delay={index * 0.1}
                className="h-full"
              >
                <GovernanceCard data={item} key={index} />
              </FadeUpAnimation>
            ))}
          </div>
        </div>
        <NewsletterSection />
      </div>
    </>
  );
};

export default GovernancePageSection;
