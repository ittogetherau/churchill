import Image from "next/image";
import Link from "next/link";
import React from "react";
import Button from "../button";
import { FaArrowRight } from "react-icons/fa";

import FadeUpAnimation from "@/animations/FadeUp";

const TopBannerCard = ({
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
  showBtnB = true,
}) => {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(241deg, rgba(229, 150, 35, 0) 10%, rgb(97 96 96 / 74%) 100%), url(${image})`,
        backgroundRepeat: "no-repeat",
        objectFit: "cover",
        width: "100%",
        backgroundSize: "cover",
        backgroundPosition: "center top",
      }}
      className="lg:h-[80vh] flex items-center justify-center fade-in-animation relative overflow-hidden"
    >
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/assets/videos/sydney-city-in-australia.mp4"
        autoPlay
        muted
        loop
        playsInline
        poster={image}
      />
      <div className="absolute inset-0 bg-gradient-to-tr from-[#616060bd] via-transparent to-transparent" />
      <div className="container relative z-10 mt-[84px] mb-[84px] lg:mt-4 lg:mb-4 mx-auto px-5">
        <div className="grid items-center grid-cols-1 md:grid-cols-2">
          <div className="py-6 flex flex-col gap-3">
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
                <p className="text-white underline-[#2C2B4B] pb-1 px-[2px] mt-5 text-xl font-extrabold w-fit ">
                  CRICOS Course Code:{" "}
                  <span className="relative before:absolute before:w-full before:h-1 before:bg-[#E59623] before:bottom-0 before:left-0">
                    {courseCode}
                  </span>
                </p>
              </FadeUpAnimation>
            )}

            <FadeUpAnimation delay={0.2}>
              <div
                className="font-semibold text-[#ffffff] text-md md:text-[22px]  line-clamp-3 leading-7"
                dangerouslySetInnerHTML={{ __html: subTitle }}
              ></div>
            </FadeUpAnimation>

            <div className="flex gap-1 md:gap-3 flex-col md:flex-row">
              <FadeUpAnimation delay={0.3}>
                <Link href={`${link}`}>
                  <Button
                    btnName={BtnAText}
                    icon={<FaArrowRight />}
                    styleA={"flex items-center gap-1"}
                  />
                </Link>
              </FadeUpAnimation>
              {showBtnB && (
                <div onClick={handleRightBtn}>
                  <FadeUpAnimation delay={0.35}>
                    <Link href={`${linkA}`}>
                      <Button
                        btnName={BtnBText}
                        icon={<FaArrowRight />}
                        styleA={"flex items-center gap-1"}
                      />
                    </Link>
                  </FadeUpAnimation>
                </div>
              )}
            </div>
            {titleSpan === "Major in Accounting" && (
              <Image
                src={`/assets/accredit.png`}
                alt=""
                width={1000}
                height={1000}
                className="object-contain w-[300px]"
              />
            )}
          </div>

          {imageA && (
            <FadeUpAnimation delay={0.2}>
              <div className="flex justify-center items-center">
                <Image
                  src={`${imageA}`}
                  alt=""
                  width={1000}
                  height={1000}
                  className={` object-contain w-[450px] aspect-square ${imageAStyle}`}
                />
              </div>
            </FadeUpAnimation>
          )}
        </div>
      </div>
    </div>
  );
};

export default TopBannerCard;
