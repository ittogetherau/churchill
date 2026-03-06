"use client";

import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog-header";
import ContainerLayout from "@/layouts/container-layout";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

type CampusImagesCarouselProps = {
  title: string;
  images: string[];
};

export default function CampusImagesCarousel({
  title,
  images,
}: CampusImagesCarouselProps) {
  const [api, setApi] = useState<CarouselApi>();
  const [activeImage, setActiveImage] = useState<string | null>(null);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  useEffect(() => {
    if (!api) return;

    const updateControls = () => {
      setCanScrollPrev(api.canScrollPrev());
      setCanScrollNext(api.canScrollNext());
    };

    updateControls();
    api.on("reInit", updateControls);
    api.on("select", updateControls);

    return () => {
      api.off("reInit", updateControls);
      api.off("select", updateControls);
    };
  }, [api]);

  if (images.length === 0) return null;

  return (
    <ContainerLayout className="space-y-6">
      <Carousel
        setApi={setApi}
        opts={{ align: "start", loop: images.length > 1 }}
      >
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem
              key={`${image}-${index}`}
              className="md:basis-1/2 lg:basis-1/3"
            >
              <button
                type="button"
                onClick={() => setActiveImage(image)}
                className="group block w-full text-left"
                aria-label={`Preview ${title} campus image ${index + 1} in full screen`}
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                  <Image
                    src={image}
                    alt={`${title} campus image ${index + 1}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 1200px"
                    className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/15" />
                </div>
              </button>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {images.length > 1 && (
        <div className="flex items-center justify-end gap-4">
          <Button
            type="button"
            variant="outline"
            size="icon-lg"
            className="scale-125"
            onClick={() => api?.scrollPrev()}
            disabled={!canScrollPrev}
            aria-label="Previous campus image"
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
            aria-label="Next campus image"
          >
            <ChevronRight />
          </Button>
        </div>
      )}

      <Dialog
        open={Boolean(activeImage)}
        onOpenChange={(open) => !open && setActiveImage(null)}
      >
        <DialogContent
          showCloseButton={true}
          className="fixed inset-0 h-screen w-screen max-w-none translate-x-0 translate-y-0 border-0 bg-transparent p-4 shadow-none sm:p-8 [&>button]:top-6 [&>button]:right-6 [&>button]:rounded-full [&>button]:bg-black/55 [&>button]:p-2 [&>button]:text-white [&>button]:opacity-100"
        >
          <DialogTitle className="sr-only">
            {title} campus image preview
          </DialogTitle>
          {activeImage && (
            <div className="relative flex h-full w-full items-center justify-center">
              <div className="relative h-full w-full max-w-7xl">
                <Image
                  src={activeImage}
                  alt={`${title} campus full screen preview`}
                  fill
                  sizes="100vw"
                  className="object-contain"
                />
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </ContainerLayout>
  );
}
