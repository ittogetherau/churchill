"use client";

import { routes } from "@/config/routes";
import { HeaderQuery } from "@/graphql/generated/graphql";
import ContainerLayout from "@/layouts/container-layout";
import { useHeaderStore } from "@/store/headerStore";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import AnnouncementBar from "./AnnouncementBar";
import MobileNavigation from "./MobileNavigation";
import NavigationItems from "./NavigationItems";
import { Button } from "@/components/ui/button";
import { Icon, LayoutDashboard } from "lucide-react";
import HeaderAdditionalButtons from "./header-additional-buttons";

const HEADER_CACHE_TTL_MS = 5 * 60 * 1000;

const Header: React.FC = () => {
  const data = useHeaderStore((state) => state.data);
  const setData = useHeaderStore((state) => state.setData);
  const lastFetchedAt = useHeaderStore((state) => state.lastFetchedAt);
  const hasHydrated = useHeaderStore((state) => state.hasHydrated);

  const announcements = data?.announcements ?? {};
  const links = data?.login_links?.links ?? [];
  const degrees = data?.degree ?? [];
  const campusLocations = data?.campus_locations ?? [];

  useEffect(() => {
    async function fetchHeader() {
      const response = await fetch("/api/header", { cache: "no-store" });
      const data = (await response.json()) as HeaderQuery;
      setData(data);
    }

    if (!hasHydrated) return;

    const isStale =
      !lastFetchedAt || Date.now() - lastFetchedAt > HEADER_CACHE_TTL_MS;

    if (!data || isStale) fetchHeader();
  }, [data, hasHydrated, lastFetchedAt, setData]);

  return (
    <div className="header sticky top-0 left-0 z-40 w-full bg-white shadow-sm/5">
      <AnnouncementBar text={announcements.announcement_text ?? ""} />
      <div className="bg-white md:bg-[#0d0e2f]">
        <ContainerLayout className="flex flex-col gap-4 py-2 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center justify-between md:justify-self-auto">
            <Link className="block max-h-18 py-0" href={routes.home}>
              <Image
                src={`/assets/logo.svg`}
                width={400}
                height={400}
                alt="Main Logo"
                className="h-auto w-[200px] object-contain md:brightness-0 md:invert-100"
                priority
              />
            </Link>
            <div className="block md:hidden">
              <MobileNavigation
                links={links}
                campusLocations={campusLocations}
                degrees={degrees}
              />
            </div>
          </div>
          <div className="hidden flex-wrap items-center justify-end md:block md:flex md:gap-2">
            <HeaderAdditionalButtons />
          </div>
        </ContainerLayout>
      </div>

      <ContainerLayout className="hidden py-2 md:block">
        <NavigationItems
          links={links}
          degrees={degrees}
          campusLocations={campusLocations}
          onLinkClick={() => {}}
        />
      </ContainerLayout>
    </div>
  );
};

export default Header;
