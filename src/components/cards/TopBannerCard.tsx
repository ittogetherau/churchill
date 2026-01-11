import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { FaArrowRight } from "react-icons/fa";
import Button from "../button";

import FadeUpAnimation from "@/animations/FadeUp";

type Props = {
  image: string;
  title?: string;
  subTitle?: string | ReactNode;
  titleSpan?: ReactNode;
  imageA?: string;
  BtnAText?: string;
  BtnBText?: string;
  link?: string;
  linkA?: string;
  beforeTitle?: ReactNode;
  imageAStyle?: string;
  courseCode?: string;
  handleRightBtn?: () => {};
  showBtnB?: boolean;
  slug?: string;
};

const HERO_VIDEO_URL =
  "https://cms.churchill.edu.au/assets/a21094f6-fe55-4ff2-907b-6e0b09f2256f/hero-video.mp4";

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
  slug,
}: Props) => {
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
      className="fade-in-animation relative flex items-center justify-center overflow-hidden lg:h-[80vh]"
    >
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src={HERO_VIDEO_URL}
        autoPlay
        muted
        loop
        playsInline
        poster={image}
      />
      <div className="absolute inset-0 bg-gradient-to-tr from-[#616060bd] via-transparent to-transparent" />
      <div className="relative z-10 container mx-auto mt-[84px] mb-[84px] px-5 lg:mt-4 lg:mb-4">
        <div className="grid grid-cols-1 items-center md:grid-cols-2">
          <div className="flex flex-col gap-3 py-6">
            {beforeTitle && (
              <FadeUpAnimation delay={0}>
                <div className="highlight w-fit px-[2px] pt-[2px] pb-[1px] text-xl font-extrabold text-white">
                  {beforeTitle}
                </div>
              </FadeUpAnimation>
            )}

            <FadeUpAnimation delay={0}>
              <h1 className="text-4xl leading-8 font-extrabold text-[#ffffff] md:text-[70px] md:leading-[72px]">
                {titleSpan} {title}
              </h1>
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

            {subTitle && (
              <FadeUpAnimation delay={0.2}>
                <div
                  className="text-md line-clamp-3 leading-7 font-semibold text-[#ffffff] md:text-[22px]"
                  dangerouslySetInnerHTML={{ __html: subTitle }}
                ></div>
              </FadeUpAnimation>
            )}

            <div className="flex flex-col gap-1 md:flex-row md:gap-3">
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

            {slug === "major-in-accounting" && (
              <Image
                src={`/assets/accredit.png`}
                alt=""
                width={1000}
                height={1000}
                className="w-[300px] object-contain"
              />
            )}
          </div>

          {imageA && (
            <FadeUpAnimation delay={0.2}>
              <div className="flex items-center justify-center">
                <Image
                  src={`${imageA}`}
                  alt=""
                  width={1000}
                  height={1000}
                  className={`aspect-square w-[450px] object-contain ${imageAStyle}`}
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
