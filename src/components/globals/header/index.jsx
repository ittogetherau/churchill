"use client";
import React, { useEffect, useState } from "react";
import DesktopNav from "./ForDesktop";
import MobileNav from "./ForMobile";

const Header = () => {
  const [offset, setOffset] = useState();
  const [showAnnouncement, setShowAnnouncement] = useState(true);
  const announcementStorageKey = "orientation-marquee-dismissed";

  useEffect(() => {
    const onScroll = () => {
      setOffset(window.scrollY);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
  }, []);

  useEffect(() => {
    const hasDismissed = localStorage.getItem(announcementStorageKey);
    if (hasDismissed === "true") {
      setShowAnnouncement(false);
    }
  }, []);

  const handleCloseAnnouncement = () => {
    setShowAnnouncement(false);
    localStorage.setItem(announcementStorageKey, "true");
  };

  return (
    <div className="header z-40 relative bg-white shadow-lg ">
      {showAnnouncement && (
        <div className="bg-primary-orange text-white">
          <div className="container mx-auto px-5 py-2 flex items-center gap-4">
            <div className="flex-1 flex items-center justify-center text-center overflow-hidden">
              <marquee className="text-sm font-semibold">
                S3 2025 orientation date details: 03 December at 10:00 AM to
                02:30 PM
              </marquee>
            </div>
            <button
              type="button"
              onClick={handleCloseAnnouncement}
              className="text-lg font-bold leading-none"
              aria-label="Close announcement"
            >
              ×
            </button>
          </div>
        </div>
      )}
      <div
        className={`z-40 bg-white hidden lg:block shadow-lg ${
          offset > 100 ? "fixed top-0 w-full bg-white flex" : ""
        }`}
      >
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
