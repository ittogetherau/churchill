"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { Button } from "../ui/button";

const COOKIE_NAME = "has-allowed-cookies";
const AUTO_HIDE_DELAY = 60000;
const INITIAL_SHOW_DELAY = 800;

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [cookies, setCookie] = useCookies([COOKIE_NAME]);

  useEffect(() => {
    if (cookies[COOKIE_NAME]) return;

    const showTimer = setTimeout(() => {
      setIsVisible(true);
    }, INITIAL_SHOW_DELAY);

    const hideTimer = setTimeout(() => {
      setIsVisible(false);
    }, AUTO_HIDE_DELAY);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, [cookies]);

  const handleAccept = () => {
    setCookie(COOKIE_NAME, true, { path: "/" });
    setIsVisible(false);
  };

  const handleDecline = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div
      className={`
        fixed bottom-0 left-1/2 z-[9999] w-full -translate-x-1/2
        md:bottom-8 md:w-[80vw]
        flex flex-col items-center justify-between gap-4
        md:flex-row md:gap-2
        rounded-2xl border border-neutral-900/20 bg-white p-2 shadow-2xl
        md:px-5 md:py-3
        transition-transform duration-1000
        ${isVisible ? "translate-y-0" : "translate-y-[200%]"}
      `}
    >
      <div className="flex items-end gap-3">
        <p className="">
          This website uses cookies to ensure you get the best experience on our
          website.
          <Link href="/cookie-policy">
            <Button variant={"link"}>Learn More</Button>
          </Link>
        </p>
      </div>

      <div className="flex gap-2 lg:items-center">
        <Button variant={"outline"} onClick={handleDecline}>
          Decline
        </Button>
        <Button onClick={handleAccept}>Allow Cookies</Button>
      </div>
    </div>
  );
};

export default CookieBanner;
