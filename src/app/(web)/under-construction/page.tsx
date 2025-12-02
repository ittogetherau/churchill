"use client";
import React from "react";
import Button from "@/components/button";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

import Animation from "@/constDatas/animations/Animation.json";
import dynamic from "next/dynamic";
import TwoColumnLayout from "@/layouts/two-column-layout";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const UnderConstruction = () => {
  return (
    <>
      <TwoColumnLayout
        sidebar={<>{<Lottie animationData={Animation} loop={true} />}</>}
        isEqual={true}
        className="mt-24"
      >
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
      </TwoColumnLayout>
    </>
  );
};

export default UnderConstruction;
