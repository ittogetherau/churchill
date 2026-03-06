"use client";

import FadeUpAnimation from "@/animations/FadeUp";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import ContainerLayout from "@/layouts/container-layout";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import HeadingText from "../ui/heading-text";

type HalfTopBannerCardCta = {
  title: string;
  url?: string;
  onClick?: () => void;
};

interface HalfTopBannerCardProps {
  image: string;
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
  return (
    <section className="relative mt-6 overflow-hidden">
      <ContainerLayout>
        <div className="relative isolate overflow-hidden rounded-[2rem] bg-[#1f1c17]">
          <div className="absolute inset-0">
            <Image
              src={image}
              alt={title}
              fill
              priority
              className="object-cover"
            />
            <div className="from-foreground/72 via-foreground/56 to-foreground/10 absolute inset-0 bg-gradient-to-r" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(229,150,35,0.28),_transparent_36%)]" />
          </div>

          <div className="relative z-10 grid min-h-[420px] items-end gap-10 px-6 py-8 md:px-10 md:py-10 lg:min-h-[600px] lg:grid-cols-[minmax(0,1.2fr)_320px] lg:px-14 lg:py-14">
            <div className="max-w-4xl space-y-6">
              {titleSpan && (
                <FadeUpAnimation delay={0}>
                  <div className="flex items-center gap-3">
                    <span className="bg-primary-orange h-px w-12" />
                    <p className="text-sm font-semibold tracking-[0.18em] text-white/85 uppercase">
                      {titleSpan}
                    </p>
                  </div>
                </FadeUpAnimation>
              )}

              <FadeUpAnimation delay={0.05}>
                <HeadingText
                  level={1}
                  heading={1}
                  className="[&_.highlight]:after:bg-primary-orange max-w-3xl text-white [&_.highlight]:text-white"
                >
                  {title.split(" ").map((word) => (
                    <span className="highlight after::w-full" key={word}>
                      {word}{" "}
                    </span>
                  ))}
                </HeadingText>
              </FadeUpAnimation>

              <FadeUpAnimation delay={0.1}>
                <p className="max-w-2xl text-base leading-7 text-white/88 md:text-lg">
                  {description}
                </p>
              </FadeUpAnimation>

              {ctas && ctas.length > 0 && (
                <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:flex-wrap">
                  {ctas.map((cta, idx) => (
                    <FadeUpAnimation key={idx} delay={0.18 + idx * 0.05}>
                      {cta.url ? (
                        <Link href={cta.url} className="inline-flex">
                          <Button
                            type="button"
                            className={cn(
                              idx === 0 &&
                                "bg-primary-orange hover:bg-primary-orange/90 text-black",
                              idx > 0 &&
                                "border-white/20 bg-white/10 text-white hover:bg-white/15",
                            )}
                            variant={idx === 0 ? "default" : "outline"}
                          >
                            {cta.title}
                          </Button>
                        </Link>
                      ) : (
                        <Button
                          type="button"
                          onClick={cta.onClick}
                          className={cn(
                            idx === 0 &&
                              "bg-primary-orange hover:bg-primary-orange/90 text-black",
                            idx > 0 &&
                              "border-white/20 bg-white/10 text-white hover:bg-white/15",
                          )}
                          variant={idx === 0 ? "default" : "outline"}
                        >
                          {cta.title}
                        </Button>
                      )}
                    </FadeUpAnimation>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </ContainerLayout>
    </section>
  );
};

export default HalfTopBannerCard;
