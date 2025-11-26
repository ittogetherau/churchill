"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { CookiesProvider, useCookies } from "react-cookie";

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState("translate-y-[150%]");
  const [cookies, setCookie] = useCookies(["hasAllowedCookie"]);

  useEffect(() => {
    if (!cookies.hasAllowedCookie) {
      setTimeout(() => {
        setIsVisible("translate-y-0");
      }, 800);
    }

    setTimeout(() => {
      setIsVisible("translate-y-[200%]");
    }, 60 * 1000);
  }, [cookies.hasAllowedCookie]);

  function handleClick() {
    setIsVisible("translate-y-[200%]");
  }

  function handleAllowCookie() {
    setCookie("hasAllowedCookie", true);
  }

  return (
    <CookiesProvider>
      <div
        onClick={() => handleClick()}
        className={`w-full md:w-[80vw] fixed bottom-0 md:bottom-8 z-[9999] left-1/2 -translate-x-1/2 flex flex-col md:flex-row items-center justify-between bg-[#ffffff] p-3 md:px-8 md:py-4 rounded-2xl shadow-2xl border border-neutral-900/20 duration-1000 gap-4 md:gap-2 ${isVisible}`}
      >
        <div className="flex items-end gap-3">
          <h2 className="text-lg">
            This website uses cookies to ensure you get the best experience on
            our website.
            <Link href="/cookie-policy" className="text-[#E59623]">
              Learn More.
            </Link>
          </h2>
        </div>
        <div className="flex lg:items-center gap-4">
          <button className="text-[#E59623] border border-[#E59623] px-4 py-2 rounded-xl font-normal">
            Decline
          </button>
          <button
            className="px-4 py-2 bg-[#E59623] font-bold rounded-xl"
            onClick={() => handleAllowCookie()}
          >
            Allow Cookies
          </button>
        </div>
      </div>
    </CookiesProvider>
  );
};

export default CookieBanner;
