"use client";
import React from "react";
import DesktopNav from "./ForDesktop";
import MobileNav from "./ForMobile";
import AnnouncementBar from "./AnnouncementBar";
import { useAnnouncementVisibility } from "@/hooks/useAnnouncementVisibility";

const ANNOUNCEMENT_KEY = "show-announcement-header";
const ANNOUNCEMENT_TEXT =
  "S3 2025 orientation date details: 03 December at 10:00 AM to 02:30 PM";

const Header: React.FC = () => {
  const { isVisible, dismiss } = useAnnouncementVisibility(ANNOUNCEMENT_KEY);

  return (
    <div className="header z-40 sticky top-0 left-0 w-full bg-white shadow-sm/5">
      <AnnouncementBar
        text={ANNOUNCEMENT_TEXT}
        visible={isVisible}
        onClose={dismiss}
      />

      <div className={`z-40 bg-white hidden lg:block shadow-sm/5`}>
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
