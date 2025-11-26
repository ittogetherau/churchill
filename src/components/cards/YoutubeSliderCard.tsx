"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const YoutubeSliderCard = ({ videoId, title }) => {
  return (
    <Link target="_blank" href={`https://www.youtube.com/watch?v=${videoId}`}>
      <div className="group">
        <div className="relative aspect-[3/1.6]">
          <Image
            width={400}
            height={300}
            src={`https://i3.ytimg.com/vi/${videoId}/hqdefault.jpg`}
            alt={`Youtube link for ${title}`}
            className="w-full h-full object-cover"
          ></Image>

          <div className="transition-all bg-black/40  group-hover:bg-black/20 top-0 left-0 w-full h-full absolute"></div>

          <div className="transition-all0  top-0 left-0 w-full h-full absolute grid place-items-center">
            <Image
              width={300}
              height={300}
              className="w-14 aspect-square object-contain transition-all group-hover:scale-[1.025] group-hover:-translate-y-2"
              // className="w-16 aspect-square object-contain absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              alt={`Youtube Video Url for ${title}`}
              src="/assets/YoutubeIcon.svg"
            />
          </div>
        </div>
        <h4 className="font-bold text-lg leading-[22px] pt-3 hover:underline transition-all">
          {title}
        </h4>
      </div>
    </Link>
  );
};

export default YoutubeSliderCard;
