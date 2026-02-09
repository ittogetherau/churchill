import Image from "next/image";
import Link from "next/link";
import React from "react";
import Button from "../ui-elements/button";
import { FaArrowRight } from "react-icons/fa";

import FadeUpAnimation from "@/animations/FadeUp";

interface HalfTopBannerCardProps {
  image: string;
  title: string;
  subTitle: string;
  titleSpan: string;
  imageA?: string;
  BtnAText: string;
  BtnBText: string;
  link: string;
  linkA: string;
  beforeTitle?: string;
  imageAStyle?: React.CSSProperties;
  courseCode?: string;
  handleRightBtn: () => void;
}

const HalfTopBannerCard: React.FC<HalfTopBannerCardProps> = ({
  image,
  title,
  subTitle,
  titleSpan,
  imageA,
  BtnAText,
  BtnBText,
  link,
  linkA,
  beforeTitle,
  imageAStyle,
  courseCode,
  handleRightBtn,
}) => {
  return (
    <div className="fade-in-animation bg-primary-orange flex items-center justify-center bg-gradient-to-r from-transparent to-[rgba(97,96,96,0.74)] lg:h-[75vh]">
      <div className="mx-0 w-full max-w-none px-0">
        <div className="grid grid-cols-1 items-center lg:grid-cols-2">
          {/* Content Section */}
          <div className="order-2 container mx-auto flex flex-col gap-3 px-5 py-6 lg:order-1">
            {beforeTitle && (
              <FadeUpAnimation delay={0}>
                <div className="highlight w-fit px-[2px] pt-[2px] pb-[1px] text-xl font-extrabold text-white">
                  {beforeTitle}
                </div>
              </FadeUpAnimation>
            )}

            <FadeUpAnimation delay={0}>
              <h2 className="text-4xl leading-8 font-extrabold text-[#ffffff] md:text-[70px] md:leading-[72px]">
                {titleSpan} {title}
              </h2>
            </FadeUpAnimation>

            {courseCode && (
              <FadeUpAnimation delay={0.15}>
                <p className="underline-[#2C2B4B] mt-5 w-fit px-[2px] pb-1 text-xl font-extrabold text-white">
                  CRICOS Course Code:{" "}
                  <span className="relative before:absolute before:bottom-0 before:left-0 before:h-1 before:w-full before:bg-[#E59623]">
                    {courseCode}
                  </span>
                </p>
              </FadeUpAnimation>
            )}

            <FadeUpAnimation delay={0.2}>
              <div
                className="text-md line-clamp-3 leading-7 font-semibold text-[#ffffff] md:text-[22px]"
                dangerouslySetInnerHTML={{ __html: subTitle }}
              ></div>
            </FadeUpAnimation>

            <div className="flex flex-col gap-1 md:flex-row md:gap-3">
              <FadeUpAnimation delay={0.3}>
                <Link href={`${link}`}>
                  <Button
                    btnName={BtnAText}
                    icon={<FaArrowRight />}
                    styleA="flex items-center gap-1"
                  />
                </Link>
              </FadeUpAnimation>

              <div onClick={handleRightBtn}>
                <FadeUpAnimation delay={0.35}>
                  <Link href={`${linkA}`}>
                    <Button
                      btnName={BtnBText}
                      icon={<FaArrowRight />}
                      styleA="flex items-center gap-1"
                    />
                  </Link>
                </FadeUpAnimation>
              </div>
            </div>

            {titleSpan === "Major in Accounting" && (
              <Image
                src={`/assets/accredit.png`}
                alt=""
                width={1000}
                height={1000}
                className="w-[300px] object-contain"
              />
            )}
          </div>

          {/* Image Section */}
          <FadeUpAnimation delay={0.2}>
            <div className="order-1 m-0 h-[30vh] w-full p-0 lg:order-2 lg:h-[75vh]">
              <Image
                src={`${image}`}
                alt=""
                width={1000}
                height={1000}
                className="aspect-[3/2] h-full w-full object-cover lg:aspect-auto"
              />
            </div>
          </FadeUpAnimation>
        </div>
      </div>
    </div>
  );
};

export default HalfTopBannerCard;
