"use client";
import React from "react";
import DataNotFoundAnimation from "@/constDatas/animations/data-not-found.json";
import dynamic from "next/dynamic";
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const DataNotFound = () => {
  return (
    <div className="mx-auto w-2/3 sm:w-1/2">
      {<Lottie animationData={DataNotFoundAnimation} loop={true} />}
    </div>
  );
};

export default DataNotFound;
