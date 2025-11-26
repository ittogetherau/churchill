import Image from "next/image";
import Link from "next/link";
import React from "react";
import Button from "../button";
import { FaArrowRight } from "react-icons/fa";

import FadeUpAnimation from "@/animations/FadeUp";

const HalfTopBannerCard = ({
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
    <div className="lg:h-[75vh] flex items-center justify-center fade-in-animation bg-primary-orange bg-gradient-to-r from-transparent to-[rgba(97,96,96,0.74)]">
      <div className="w-full max-w-none px-0 mx-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
          {/* Content Section */}
          <div className="order-2 lg:order-1 py-6 flex flex-col gap-3 container mx-auto px-5">
            {beforeTitle && (
              <FadeUpAnimation delay={0}>
                <div className="text-white px-[2px] pt-[2px] pb-[1px] text-xl font-extrabold highlight w-fit">
                  {beforeTitle}
                </div>
              </FadeUpAnimation>
            )}

            <FadeUpAnimation delay={0}>
              <h2 className="text-4xl font-extrabold md:text-[70px] leading-8 md:leading-[72px] text-[#ffffff]">
                {titleSpan} {title}
              </h2>
            </FadeUpAnimation>

            {courseCode && (
              <FadeUpAnimation delay={0.15}>
                <p className="text-white underline-[#2C2B4B] pb-1 px-[2px] mt-5 text-xl font-extrabold w-fit">
                  CRICOS Course Code:{' '}
                  <span className="relative before:absolute before:w-full before:h-1 before:bg-[#E59623] before:bottom-0 before:left-0">
                    {courseCode}
                  </span>
                </p>
              </FadeUpAnimation>
            )}

            <FadeUpAnimation delay={0.2}>
              <div
                className="font-semibold text-[#ffffff] text-md md:text-[22px] leading-7 line-clamp-3"
                dangerouslySetInnerHTML={{ __html: subTitle }}
              ></div>
            </FadeUpAnimation>

            <div className="flex gap-1 md:gap-3 flex-col md:flex-row">
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

            {titleSpan === 'Major in Accounting' && (
              <Image
                src={`/assets/accredit.png`}
                alt=""
                width={1000}
                height={1000}
                className="object-contain w-[300px]"
              />
            )}
          </div>

          {/* Image Section */}
          <FadeUpAnimation delay={0.2}>
            <div className="order-1 lg:order-2 h-[30vh] lg:h-[75vh] w-full m-0 p-0">
              <Image
                src={`${image}`}
                alt=""
                width={1000}
                height={1000}
                className="w-full h-full object-cover aspect-[3/2] lg:aspect-auto"
              />
            </div>
          </FadeUpAnimation>
        </div>
      </div>
    </div>
  );
};

export default HalfTopBannerCard;
