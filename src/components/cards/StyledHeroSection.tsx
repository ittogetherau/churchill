"use client";
import React, { useState } from "react";
import Image from "next/image";
import Search from "../search";

interface StyledHeroCardProps {
  title: string;
  breadcrumbs?: string;
  subTitle?: string;
  showSearch?: boolean;
  searchText?: string;
  onSearchText?: (value: string) => void;
}

const StyledHeroCard = ({
  title,
  breadcrumbs,
  searchText,
  onSearchText,
  showSearch = false,
  subTitle,
}: StyledHeroCardProps) => {
  return (
    <section className="h-[50vh] md:h-[40vh] relative mt-8 md:mt-0">
      <Image
        width={30}
        height={30}
        src="/assets/hero-background.svg"
        alt="alt"
        className="absolute w-full h-full -top-1/2 translate-y-1/2 left-0 object-cover z-0"
      />
      <div className="w-full h-full flex items-center justify-center flex-col gap-4 px-5 relative z-[2]">
        <p className="text-matte-purple text-center">{breadcrumbs}</p>
        <h2 className="text-matte-purple capitalize text-2xl md:text-3xl font-bold text-center w-[90vw] md:w-[80vw] ">
          {title}
        </h2>
        {subTitle && <p>{subTitle}</p>}

        {showSearch && (
          <div className="w-full sm:w-1/3">
            <Search
              text={searchText ?? ""}
              onSearchText={onSearchText ?? (() => {})}
              placeholderText="Type Here to Search"
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default StyledHeroCard;
