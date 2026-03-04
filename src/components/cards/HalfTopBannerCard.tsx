"use client";

import FadeUpAnimation from "@/animations/FadeUp";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import HeadingText from "../ui/heading-text";
import ContainerLayout from "@/layouts/container-layout";

type HalfTopBannerCardCta = {
  title: string;
  url?: string;
  onClick?: () => void;
};

interface HalfTopBannerCardProps {
  image: string | string[];
  title: string;
  description: string;
  titleSpan?: string;
  ctas?: HalfTopBannerCardCta[];
}

const HalfTopBannerCard: React.FC<HalfTopBannerCardProps> = ({
  image,
  title,
  description,
  titleSpan,
  ctas,
}) => {
  const images = Array.isArray(image) ? image : [image];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="relative mt-6 h-[50vh]">
      <ContainerLayout className="grid h-full gap-6 lg:grid-cols-2">
        {/* Image Slider Section */}
        <div className="relative h-full w-full overflow-hidden rounded-lg bg-gray-200">
          {images.map((src, idx) => (
            <div
              key={idx}
              className={`absolute inset-0 h-full w-full transition-opacity duration-1000 ease-in-out ${
                idx === currentIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={src}
                alt={`Slide ${idx} for ${title}`}
                fill
                priority={idx === 0}
                className="object-cover"
              />
            </div>
          ))}
        </div>

        {/* Content Section */}
        <div className="flex items-center">
          <div className="flex flex-col md:max-w-4xl">
            {titleSpan && (
              <HeadingText level={5} heading={0}>
                {titleSpan}
              </HeadingText>
            )}

            <HeadingText level={1} heading={1}>
              {title.split(" ").map((e) => (
                <span className="highlight after::w-full" key={e}>
                  {e}{" "}
                </span>
              ))}
            </HeadingText>

            <p className="mt-6 text-lg">{description}</p>

            {ctas && ctas.length > 0 && (
              <div className="mt-6 flex flex-col gap-2 md:flex-row md:gap-4">
                {ctas.map((cta, idx) => (
                  <FadeUpAnimation key={idx} delay={0.3 + idx * 0.05}>
                    {cta.url ? (
                      <Link href={cta.url} className="inline-flex">
                        <Button type="button">{cta.title}</Button>
                      </Link>
                    ) : (
                      <Button type="button" onClick={cta.onClick}>
                        {cta.title}
                      </Button>
                    )}
                  </FadeUpAnimation>
                ))}
              </div>
            )}
          </div>
        </div>
      </ContainerLayout>
    </section>
  );
};

export default HalfTopBannerCard;
