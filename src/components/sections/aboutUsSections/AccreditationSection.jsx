import React from "react";
import NewsletterSection from "../commonSections/NewsletterSection";
import Button from "@/components/button";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";

const AccreditationSection = () => {
  return (
    <>
      <div className="container mx-auto px-5">
        <div className="flex flex-col gap-[32px] lg:gap-[64px]">
          <div>
            <div className="flex flex-col gap-[32px] lg:gap-[44px]">
              <div className="pt-[12vh] lg:pt-[8vh]">
                {/* <div className="text-center">
                  <h3 className="font-bold text-[20px]">{`Home > About`}</h3>
                  <h3 className="font-bold text-[36px] text-[#2C2B4B]">
                    Accreditation
                  </h3>
                </div> */}
              </div>
              <div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-[32px]">
                  <div className="flex items-center ">
                    <div className="flex flex-col items-center justify-center gap-5">
                      <h3 className="font-bold text-[36px] text-center text-[#2C2B4B]">
                        Sorry! This page is under construction.
                      </h3>
                      <Link href={`/`} className="w-max">
                        <Button
                          btnName={"Go to Home Page"}
                          icon={<FaArrowRight />}
                          styleA={"flex items-center gap-1"}
                          style={
                            "border border-2 border-[#606060] rounded-md px-4 py-3 bg-[#E59623] hover:text-black hover:bg-[#ff9700] transition duration-200  ease-in-out hover:scale-105"
                          }
                        />
                      </Link>
                    </div>
                  </div>
                  <div className="hidden lg:block">
                    <div className="flex justify-center items-center">
                      <Image
                        src={`/assets/page-under-construction.png`}
                        alt={"use-links-icon-image"}
                        width={400}
                        height={400}
                        className="w-full h-auto object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <NewsletterSection />
          </div>
        </div>
      </div>
    </>
  );
};

export default AccreditationSection;
