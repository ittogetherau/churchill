import ApplyCard from "@/components/cards/ApplyCard";
import React from "react";
import Link from "next/link";
import Button from "@/components/button";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";

import FadeUpAnimation from "@/animations/FadeUp";

const EnquirySection = () => {
  return (
    <section className="container mx-auto px-5">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <div className="lg:row-span-2 h-full">
          <FadeUpAnimation className="h-full" delay={0.1}>
            <ApplyCard
              image={"/assets/apply-card.png"}
              title={"Welcome to Churchill Institute of Higher Education"}
              description={
                "We’re excited you’re considering joining our vibrant community of students from across Australia and around the globe."
              }
            />
          </FadeUpAnimation>
        </div>

        <FadeUpAnimation delay={0.2}>
          <div
            className="rounded-md flex gap-4 justify-between px-8 translate-gradient group overflow-hidden w-full h-full"
            style={{
              backgroundImage: `linear-gradient(to bottom left, rgb(235, 124, 158), rgb(235 124 158 / 43%) 100%)`,
            }}
          >
            <div className="flex items-end">
              <div className="hidden lg:block">
                <Image
                  src={`/assets/right-course.png`}
                  alt={"use-links-icon-image"}
                  width={400}
                  height={400}
                  className="w-[400px] h-auto object-contain transition-all group-hover:scale-105"
                />
              </div>
            </div>
            <div className="flex flex-col gap-5 justify-center">
              <div className="pt-[32px] flex flex-col gap-5">
                <div className="flex justify-between gap-4 flex-col lg:flex-row items-center">
                  <h2 className="font-bold text-[36px] text-[#2C2B4B] leading-[38px]">
                    Choosing the right course starts here
                  </h2>
                </div>
              </div>
              <div className="pb-[32px]">
                <div className="">
                  <Link href={"/courses"}>
                    <Button
                      btnName={"View Courses"}
                      icon={<FaArrowRight />}
                      styleA={"flex items-center gap-1"}
                      style={
                        "border border-2 border-[#606060] rounded-md px-4 py-3 bg-[#E59623] hover:bg-[#ff9700] transition duration-200  ease-in-out hover:scale-105"
                      }
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </FadeUpAnimation>

        <FadeUpAnimation delay={0.2}>
          <div
            className="rounded-md flex gap-4 justify-between px-8 translate-gradient group overflow-hidden w-full h-full"
            style={{
              backgroundImage: `linear-gradient(to bottom right, rgb(244, 213, 107), rgb(244 213 107 / 43%) 100%)`,
            }}
          >
            <div className="flex flex-col gap-5 justify-center">
              <div className="pt-[32px] flex flex-col gap-5">
                <div className="flex justify-between gap-4 flex-col lg:flex-row items-center">
                  <h2 className="font-bold text-[36px] text-[#2C2B4B] leading-[38px]">
                    Ask us for more info
                  </h2>
                </div>
              </div>
              <div className="pb-[32px]">
                <div className="">
                  <Link
                    href={"https://zfrmz.com.au/ThpIBv0BRCITpoh20tLf"}
                    target="_blank"
                  >
                    <Button
                      btnName={"Enquire Now"}
                      icon={<FaArrowRight />}
                      styleA={"flex items-center gap-1"}
                    />
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex items-end">
              <div className="hidden lg:block">
                <Image
                  src={`/assets/ask-us.png`}
                  alt={"use-links-icon-image"}
                  width={400}
                  height={400}
                  className="w-[350px] object-cover transition-all group-hover:scale-105 "
                />
              </div>
            </div>
          </div>
        </FadeUpAnimation>
      </div>
    </section>
  );
};

export default EnquirySection;
