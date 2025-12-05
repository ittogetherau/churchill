"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Marquee, MarqueeContent } from "@/components/ui/shadcn-io/marquee";
import ContainerLayout from "@/layouts/container-layout";
import { useAnnouncementVisibility } from "@/hooks/useAnnouncementVisibility";

type props = {
  text: string;
};

const ANNOUNCEMENT_KEY = "show-announcement-header";

const AnnouncementBar: React.FC<props> = ({ text }) => {
  const { isVisible, dismiss } = useAnnouncementVisibility(ANNOUNCEMENT_KEY);

  if (isVisible)
    return (
      <div className="bg-primary">
        <ContainerLayout className="flex items-center">
          <Marquee>
            <MarqueeContent>
              <p className="px-12 text-sm font-semibold text-background">
                {text}
              </p>
            </MarqueeContent>
          </Marquee>

          <Button
            variant={"ghost"}
            onClick={dismiss}
            size={"icon"}
            className="text-white hover:text-alt-background"
          >
            <i className="fi fi-rr-cross-small flex"></i>
          </Button>
        </ContainerLayout>
      </div>
    );
};

export default AnnouncementBar;
