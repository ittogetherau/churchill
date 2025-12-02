"use client";
import { Button } from "@/components/ui/button";
import { Marquee, MarqueeContent } from "@/components/ui/shadcn-io/marquee";
import ContainerLayout from "@/layouts/container-layout";
import React, { useEffect, useState } from "react";
import DesktopNav from "./ForDesktop";
import MobileNav from "./ForMobile";

const ANNOUNCEMENT_KEY = "show-announcement-header";
const ANNOUNCEMENT_TEXT =
  "S3 2025 orientation date details: 03 December at 10:00 AM to 02:30 PM";

const Header: React.FC = () => {
  const [showAnnouncement, setShowAnnouncement] = useState(true);

  useEffect(() => {
    const hasDismissed = localStorage.getItem(ANNOUNCEMENT_KEY);
    if (hasDismissed === "true") {
      setShowAnnouncement(false);
    }
  }, []);

  const handleCloseAnnouncement = () => {
    setShowAnnouncement(false);
    localStorage.setItem(ANNOUNCEMENT_KEY, "true");
  };

  return (
    <div className="header z-40 sticky top-0 left-0 w-full bg-white shadow-lg ">
      {showAnnouncement && (
        <div className="bg-primary">
          <ContainerLayout className="flex items-center">
            <Marquee>
              <MarqueeContent>
                <p className="px-12 text-sm font-semibold text-background">
                  {ANNOUNCEMENT_TEXT}
                </p>
              </MarqueeContent>
            </Marquee>

            <Button
              variant={"ghost"}
              onClick={handleCloseAnnouncement}
              size={"icon"}
              className="text-white hover:text-alt-background"
            >
              <i className="fi fi-rr-cross-small flex"></i>
            </Button>
          </ContainerLayout>
        </div>
      )}

      <div className={`z-40 bg-white hidden lg:block shadow-lg`}>
        <div className="hidden lg:block relative">
          <DesktopNav />
        </div>
      </div>
      <div className="block lg:hidden">
        <MobileNav />
      </div>
    </div>
  );
};

export default Header;
