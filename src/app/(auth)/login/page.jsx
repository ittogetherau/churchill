import React from "react";
import { navItems } from "@/constDatas/navItems";
import { PatternBannerCard, Button } from "@/components";
import Link from "next/link";
import FadeUpAnimation from "@/animations/FadeUp";

const page = () => {
  const loginData = navItems[3];

  return (
    <div>
      <PatternBannerCard title="Login" />

      <div className="container mx-auto px-5 mb-[32px]">
        <div className="grid grid-cols-2 xl:grid-cols-4 gap-4">
          {loginData.Catagories?.map((item, index) => (
            <FadeUpAnimation delay={0.1 * index} key={index}>
              <Link
                target={item?.redirectLink ? "_blank" : ""}
                href={
                  item?.redirectLink
                    ? item?.redirectLink
                    : item?.link
                    ? item?.link
                    : ""
                }
                className="w-full h-full"
              >
                <div className="p-4 h-full rounded-md bg-light-grey flex flex-col capitalize gap-4">
                  <div className="w-14 h-14 mx-auto bg-white rounded-full grid place-items-center">
                    <i className={`text-2xl flex ${item?.headerIcon}`}></i>
                  </div>
                  <p className="text-xl leading-[22px] font-bold text-center">
                    {item?.menuTitle}
                  </p>
                </div>
              </Link>
            </FadeUpAnimation>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
