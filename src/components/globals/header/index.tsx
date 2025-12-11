"use client";
import ContainerLayout from "@/layouts/container-layout";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import AnnouncementBar from "./AnnouncementBar";
import MobileNavigation from "./MobileNavigation";
import NavigationItems from "./NavigationItems";
import { useHeaderStore } from "@/store/headerStore";
import { HeaderQuery } from "@/graphql/generated/graphql";

const Header: React.FC = () => {
  const { courses, setCourses } = useHeaderStore();
  const [data, setData] = useState<HeaderQuery | null>(null);

  const announcements = data?.announcements ?? {};

  useEffect(() => {
    async function fetchHeader() {
      const response = await fetch("/api/header");
      const data = await response.json();
      setData(data);
      setCourses(data?.courses ?? []);
    }

    fetchHeader();
  }, [setCourses]);

  return (
    <div className="header sticky top-0 left-0 z-40 w-full bg-white shadow-sm/5">
      <AnnouncementBar text={announcements.announcement_text ?? ""} />

      <ContainerLayout>
        <div className="flex items-center justify-between gap-4 py-1">
          <Link className="block" href="/">
            <Image
              src={`/assets/logo.svg`}
              width={400}
              height={400}
              alt="Main Logo"
              className="h-auto w-[240px] object-contain"
              priority
            />
          </Link>

          <div className="hidden md:block">
            <NavigationItems courses={courses} onLinkClick={() => {}} />
          </div>

          <div className="block md:hidden">
            <MobileNavigation courses={courses} />
          </div>
        </div>
      </ContainerLayout>
    </div>
  );
};

export default Header;
