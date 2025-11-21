"use client";
import React from "react";
import Button from "@/components/button";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { NewsletterSection } from "@/components";
import Animation from "@/constDatas/animations/Animation.json";
import dynamic from "next/dynamic";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const UnderConstruction = () => {
  return (
    <div className="flex flex-col gap-[32px] lg:gap-[64px]">
      <div className="container mx-auto px-5">
        <div className="flex flex-col gap-[32px] lg:gap-[44px]">
          <div className="pt-[12vh] lg:pt-[8vh]"></div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[32px]">
            <div className="flex items-center ">
              <div className="flex flex-col justify-center gap-5">
                <h3 className="font-bold text-[36px] text-[#2C2B4B]">
                  Sorry! This page is under construction.
                </h3>
                <Link href={`/`} className="w-max">
                  <Button
                    btnName={"Go to Home Page"}
                    icon={<FaArrowRight />}
                    styleA={"flex items-center gap-1"}
                  />
                </Link>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="flex justify-center items-center">
                {<Lottie animationData={Animation} loop={true} />}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <NewsletterSection />
      </div>
    </div>
  );
};

export default UnderConstruction;
