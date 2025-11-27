"use client";
import { useEffect, useRef, useState } from "react";

import { navItems } from "@/constDatas/navItems";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

import AboutUsCard from "../cards/AboutUsCard";
import FadeUpAnimation from "@/animations/FadeUp";
import Slider from "react-slick";

interface CategoryItem {
  headerIcon?: string;
  menuTitle?: string;
  slug?: string;
}
interface NavItem {
  Catagories?: CategoryItem[];
}

const AboutSlider: React.FC = () => {
  const aboutLists: NavItem = navItems[0] as NavItem;
  const sliderRef = useRef<Slider | null>(null);
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [totalSlides, setTotalSlides] = useState<number>(0);

  useEffect(() => {
    const handleSliderUpdate = () => {
      if (sliderRef.current) {
        const slick = (sliderRef.current as any).innerSlider;
        if (slick) {
          setTotalSlides(slick.props.children.length);
        }
      }
    };

    handleSliderUpdate();
  }, [currentSlide]);

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    afterChange: (current: number) => setCurrentSlide(current),
  };

  const goToPreviousSlide = (): void => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const goToNextSlide = (): void => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const isAtEnd = currentSlide >= totalSlides - (settings.slidesToShow || 1);

  return (
    <div className="flex flex-col gap-4 lg:gap-[40px]">
      <Slider {...settings} ref={sliderRef}>
        {aboutLists?.Catagories?.map((item, index) => (
          <FadeUpAnimation key={index} delay={0.1 * index}>
            <div className="px-[11px] my-[11px]" key={index}>
              <AboutUsCard
                icon={item?.headerIcon || ""}
                title={item?.menuTitle || ""}
                link={`/about-us/${item?.slug || ""}`}
              />
            </div>
          </FadeUpAnimation>
        ))}
      </Slider>
      <div>
        <div className="flex flex-col lg:flex-row justify-between gap-4 items-center">
          <div></div>
          <div className="">
            <div className="flex gap-[24px]">
              <button
                className={`rounded-md w-[54px] h-[54px] flex items-center justify-center ${
                  currentSlide === 0
                    ? "bg-[#848484] text-white border border-[#848484]"
                    : "hover:bg-[#848484] hover:text-white bg-transparent text-[#202917] border border-[#202917]"
                }`}
                onClick={goToPreviousSlide}
              >
                <BiChevronLeft className="text-[24px]" />
              </button>
              <button
                className={`rounded-md w-[54px] h-[54px] flex items-center justify-center ${
                  currentSlide === totalSlides - 1
                    ? "bg-[#848484] text-white border border-[#848484]"
                    : "hover:bg-[#848484] hover:text-white bg-transparent text-[#202917] border border-[#202917]"
                }`}
                onClick={goToNextSlide}
              >
                <BiChevronRight className="text-[24px]" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSlider;
