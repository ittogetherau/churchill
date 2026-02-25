"use client";

import { HeaderQuery } from "@/graphql/generated/graphql";
import ContainerLayout from "@/layouts/container-layout";
import { useHeaderStore } from "@/store/headerStore";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import AnnouncementBar from "./AnnouncementBar";
import MobileNavigation from "./MobileNavigation";
import NavigationItems from "./NavigationItems";

const HEADER_CACHE_TTL_MS = 5 * 60 * 1000;

const Header: React.FC = () => {
  const data = useHeaderStore((state) => state.data);
  const setData = useHeaderStore((state) => state.setData);
  const lastFetchedAt = useHeaderStore((state) => state.lastFetchedAt);
  const hasHydrated = useHeaderStore((state) => state.hasHydrated);

  const announcements = data?.announcements ?? {};
  const links = data?.login_links?.links ?? [];
  const degrees = data?.degree ?? [];

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

  console.log(degrees);

  return (
    <div className="header sticky top-0 left-0 z-40 w-full bg-white shadow-sm/5">
      <AnnouncementBar text={announcements.announcement_text ?? ""} />

      <ContainerLayout>
        <div className="flex items-center justify-between gap-4 py-3">
          <Link className="block max-h-18 py-0" href="/">
            <Image
              src={`/assets/logo.svg`}
              width={400}
              height={400}
              alt="Main Logo"
              className="h-auto w-[200px] object-contain"
              priority
            />
          </Link>

          <div className="hidden md:block">
            <NavigationItems
              links={links}
              degrees={degrees}
              onLinkClick={() => {}}
            />
          </div>

          <div className="block md:hidden">
            <MobileNavigation links={links} degrees={degrees} />
          </div>
        </div>
      </ContainerLayout>
    </div>
  );
};

export default Header;
