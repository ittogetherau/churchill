import FadeUpAnimation from "@/animations/FadeUp";
import Button from "@/components/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

const NewsletterSection = () => {
  return (
    <FadeUpAnimation>
      <div className="container px-5 mx-auto mb-[48px] rounded-md ">
        <div className="w-full flex flex-col md:flex-row bg-[#F3E4E4] relative hover-shadow overflow-hidden rounded-md">
          <div className="flex z-[10] flex-1 flex-col gap-6 pt-8 pl-8 md:py-20 md:pl-20">
            <h3 className="relative leading-10 font-bold text-[36px]  text-[#2C2B4B]">
              Be in the Know
            </h3>
            <p>For updates about our latest news, events, and more.</p>
            <Link
              href={`https://zfrmz.com.au/DtG2T10jdX7f8egPhVzt`}
              target="_blank"
              className="w-max"
            >
              <Button
                btnName={"Subscribe Now"}
                icon={<FaArrowRight />}
                styleA={"flex items-center gap-1"}
                style={
                  "border border-2 border-[#606060] rounded-md px-4 py-3 bg-[#E59623] hover:text-black hover:bg-[#ff9700] transition duration-200  ease-in-out hover:scale-105"
                }
              />
            </Link>
          </div>
          <div className="flex-1 pb-48 md:flex-0">
            <Image
              width={600}
              height={600}
              className="absolute z-[0] translate-y-1/2 translate-x-1/2 bottom-16 -left-1/2 md:left-auto md:right-48 group-hover:scale-105 transition-all"
              src="/assets/churchil-circle.webp"
              alt="alt image for churchil circle"
            />
          </div>
        </div>
      </div>
    </FadeUpAnimation>
  );
};

export default NewsletterSection;
