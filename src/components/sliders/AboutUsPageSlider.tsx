"use client";

import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export interface AboutUsPageSliderItem {
  title: string;
  icon: string;
  link: string;
}

export default function AboutUsPageSlider({
  items,
}: {
  items: AboutUsPageSliderItem[];
}) {
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

  if (items.length === 0) return null;

  return (
    <div className="flex flex-col gap-6">
      <Carousel setApi={setApi} opts={{ align: "start", loop: true }}>
        <CarouselContent>
          {items.map((item) => (
            <CarouselItem key={item.link} className="md:basis-1/2 lg:basis-1/4">
              <div className="bg-alt-background flex h-full flex-col gap-4 rounded-lg p-4">
                <div className="bg-background grid w-fit place-items-center rounded-xl p-4 text-4xl">
                  <i className={`flex ${item.icon}`} />
                </div>

                <h3 className="line-clamp-3 text-xl font-bold">{item.title}</h3>

                <div className="mt-auto">
                  <Button asChild>
                    <Link href={item.link}>
                      Learn More <ChevronRight />
                    </Link>
                  </Button>
                </div>
              </div>
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
}
