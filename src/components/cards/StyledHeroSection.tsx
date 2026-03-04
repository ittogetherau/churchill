"use client";
import React, { useState } from "react";
import Image from "next/image";
import Search from "../ui-elements";
import ContainerLayout from "@/layouts/container-layout";

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
    <ContainerLayout className="relative">
      <Image
        width={30}
        height={30}
        src="/assets/hero-background.svg"
        alt="alt"
        className="absolute -top-1/2 left-0 z-0 h-full w-full translate-y-1/2 object-cover"
      />

      <section className="mt-8 h-[50vh] md:mt-0 md:h-[40vh]">
        <div className="relative z-[2] flex h-full w-full flex-col items-center justify-center gap-4 px-5">
          <p className="text-matte-purple text-center">{breadcrumbs}</p>
          <h2 className="text-matte-purple w-[90vw] text-center text-2xl font-bold capitalize md:w-[80vw] md:text-3xl">
            {title}
          </h2>
          {subTitle && (
            <p className="mx-auto max-w-3xl text-center">{subTitle}</p>
          )}

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
    </ContainerLayout>
  );
};

export default StyledHeroCard;
