"use client";
import FadeUpAnimation from "@/animations/fade-up";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { navItems } from "@/constDatas/nav-items";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";
import AboutUsCard from "../cards/about-us-card";
import { Button } from "../ui/button";

interface CategoryItem {
  headerIcon?: string;
  menuTitle?: string;
  slug?: string;
}

interface NavItem {
  Catagories?: CategoryItem[];
}

const AboutSlider: React.FC = () => {
  const aboutLists: NavItem = navItems[0] as NavItem;
  const [api, setApi] = useState<CarouselApi>();

  const canScrollPrev = api?.canScrollPrev() ?? false;
  const canScrollNext = api?.canScrollNext() ?? false;

  return (
    <>
      <Carousel
        setApi={setApi}
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent>
          {aboutLists?.Catagories?.map((item, index) => (
            <CarouselItem
              key={index}
              className="px-3 py-2 md:basis-1/2 lg:basis-1/4"
            >
              <FadeUpAnimation delay={0.1 * index} className="h-full px-2">
                <AboutUsCard
                  icon={item?.headerIcon || ""}
                  title={item?.menuTitle || ""}
                  link={`/about-us/${item?.slug || ""}`}
                />
              </FadeUpAnimation>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <div className="mt-8 flex items-center justify-end gap-4">
        <Button
          onClick={() => api?.scrollPrev()}
          disabled={!canScrollPrev}
          variant={"outline"}
        >
          <ArrowLeft />
        </Button>

        <Button
          onClick={() => api?.scrollNext()}
          disabled={!canScrollNext}
          variant={"outline"}
        >
          <ArrowRight />
        </Button>
      </div>
    </>
  );
};

export default AboutSlider;
