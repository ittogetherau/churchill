"use client";
import FadeUpAnimation from "@/animations/FadeUp";
import GovernanceCard from "@/components/cards/GovernanceCard";
import PatternBannerCard from "@/components/cards/PatternBannerCard";

import { navItems } from "@/constDatas/navItems";
import ContainerLayout from "@/layouts/container-layout";
import { useEffect, useState } from "react";

const slug = "governance-and-leadership";

const GovernancePageSection = () => {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    const info = navItems[0]?.Catagories?.find((item) => item?.slug === slug);
    setData(info?.CatagoriesItem ?? []);
  }, [slug]);

  return (
    <>
      <PatternBannerCard
        title={slug?.split("-").join(" ")}
        description="Churchill's senior leaders guide our institution towards big goals, focusing on excellence and innovative teaching to help our community, country, and the world."
      />

      <ContainerLayout>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {data?.map((item, index) => (
            <FadeUpAnimation key={index} delay={index * 0.1} className="h-full">
              <GovernanceCard data={item} key={index} />
            </FadeUpAnimation>
          ))}
        </div>
      </ContainerLayout>
    </>
  );
};

export default GovernancePageSection;
