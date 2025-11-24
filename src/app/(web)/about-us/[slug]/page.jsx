"use client";
import {
  Button,
  PoliciesSection,
  GovernancePageSection,
  AccredentialSection,
  GovernanceStructure,
  // OrganisationalChartSection,
  GalleryPage,
  FinancialStanding,
} from "@/components";
import { FaArrowRight } from "react-icons/fa";
import Animation from "@/constDatas/animations/PageNotFound.json";
import dynamic from "next/dynamic";
import Link from "next/link";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const Page = ({ params }) => {
  const { slug } = params;

  return (
    <>
      {slug === "governance-and-leadership" ? (
        <GovernancePageSection slug={slug} />
      ) : slug === "accreditation" ? (
        <AccredentialSection slug={slug} />
      ) : slug === "CIHE-governance-structure" ? (
        <GovernanceStructure slug={slug} />
      ) : slug === "company-and-financial-documents" ? (
        <FinancialStanding />
      ) : slug === "gallery" ? (
        <GalleryPage />
      ) : (
        <div className="container mx-auto px-5 mb-[32px]">
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
      )}
    </>
  );
};

export default Page;
