"use client";

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { type CourseSummaryFieldsFragment } from "@/graphql/generated/graphql";
import { resolveFileLink } from "@/graphql/graphql";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import CoursesCard from "../cards/CoursesCard";
import { Button } from "../ui/button";

const CoursesSlider = ({ data }: { data: CourseSummaryFieldsFragment[] }) => {
  const [api, setApi] = useState<CarouselApi>();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  useEffect(() => {
    if (!api) return;

    const update = () => {
      setCanScrollPrev(api.canScrollPrev());
      setCanScrollNext(api.canScrollNext());
    };

    update();
    api.on("reInit", update);
    api.on("select", update);

    return () => {
      api.off("reInit", update);
      api.off("select", update);
    };
  }, [api]);

  if (!data || data.length === 0) return;

  return (
    <div>
      <Carousel setApi={setApi} opts={{ align: "start", loop: true }}>
        <CarouselContent>
          {data?.map((item, index) => (
            <CarouselItem key={item.slug} className="md:basis-1/2 lg:basis-1/4">
              <CoursesCard
                key={index}
                image={resolveFileLink(item.hero_image)}
                faculty={item.degree?.title ?? ""}
                title={item.title ?? ""}
                subTitle={item.description ?? ""}
                link={`/course/${item.degree?.slug}/${item?.slug ?? ""}`}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="flex items-center justify-end gap-4">
        <Button
          type="button"
          variant="outline"
          size="icon-lg"
          className="scale-125"
          onClick={() => api?.scrollPrev()}
          disabled={!canScrollPrev}
          aria-label="Previous slides"
        >
          <ChevronLeft />
        </Button>

        <Button
          type="button"
          variant="outline"
          size="icon-lg"
          className="scale-125"
          onClick={() => api?.scrollNext()}
          disabled={!canScrollNext}
          aria-label="Next slides"
        >
          <ChevronRight />
        </Button>
      </div>
    </div>
  );
};

export default CoursesSlider;
