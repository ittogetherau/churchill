"use client";

import { Button } from "@/components/ui/button";
import { Category, navItems, type NavItem } from "@/constDatas/navItems";
import ContainerLayout from "@/layouts/container-layout";
import { ArrowRight, ChevronDown, ChevronRight } from "lucide-react";
import Link from "next/link";
import GoogleSearch from "./GoogleSearch";
import HoverDropdown from "./HoverDropdown";
import { useMobile } from "@/hooks/useMobile";
import { HeaderQuery } from "@/graphql/generated/graphql";
import { parseJsonData } from "@/utils/parse-json-data";

type NavigationItemsProps = {
  onLinkClick: () => void;
  degrees?: HeaderQuery["degree"];
  links?: unknown;
};

type LoginLink = { title?: string; link?: string; icon?: string };

type Degree = HeaderQuery["degree"][number];
type Course = NonNullable<NonNullable<Degree["course"]>[number]>;
type DegreeGroup = {
  title: string;
  degreeSlug: string | null;
  courses: Course[];
};

function isDefined<T>(value: T | null | undefined): value is T {
  return value !== null && value !== undefined;
}

function toPathSlug(value: string): string {
  return value
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function getDegreeGroups(
  degrees: HeaderQuery["degree"] | undefined,
): DegreeGroup[] {
  return (degrees ?? [])
    .map((degree, degreeIndex) => {
      const title = degree.title?.trim() || `Degree ${degreeIndex + 1}`;
      const degreeSlug =
        degree.slug?.trim() || (degree.title ? toPathSlug(degree.title) : null);
      const courses = (degree.course ?? []).filter(isDefined);

      return courses.length ? { title, degreeSlug, courses } : null;
    })
    .filter(isDefined);
}

function CourseLinkItem({
  course,
  degreeSlug,
  variant,
  onClick,
}: {
  course: Course;
  degreeSlug: string | null;
  variant: "mobile" | "desktop";
  onClick?: () => void;
}) {
  const href = degreeSlug
    ? `/course/${degreeSlug}/${course.slug}`
    : `/courses/${course.slug}`;

  if (variant === "mobile") {
    return (
      <Link
        href={href}
        className="flex items-center gap-2 rounded-md px-2 py-2"
        onClick={onClick}
      >
        <div className="bg-primary-orange/50 grid h-8 w-8 shrink-0 place-items-center rounded-full">
          <i
            className={`${course.icon_string ?? "fi fi-rr-lesson"} flex text-sm`}
          />
        </div>
        <p className="text-sm leading-tight font-bold">
          {course.title ?? course.slug}
        </p>
      </Link>
    );
  }

  return (
    <Link
      href={href}
      className="hover:bg-alt-background flex items-center gap-2 rounded-md px-2 py-1 transition-all"
    >
      <div className="bg-primary-orange/50 grid h-10 w-10 place-items-center rounded-full">
        <i className={`${course.icon_string ?? "fi fi-rr-lesson"} flex`} />
      </div>
      <div className="flex flex-1 flex-col gap-1">
        <p className="line-clamp-2 text-base leading-tight font-bold">
          {course.title ?? course.slug}
        </p>
      </div>
    </Link>
  );
}

function DegreeGroupSection({
  group,
  variant,
  onLinkClick,
}: {
  group: DegreeGroup;
  variant: "mobile" | "desktop";
  onLinkClick?: () => void;
}) {
  const titleClass =
    variant === "mobile"
      ? "px-2 pt-2 text-xs font-semibold"
      : "text-sm font-semibold";
  const listClass = variant === "mobile" ? "space-y-1" : "space-y-2";

  return (
    <div className={variant === "mobile" ? "space-y-1" : "space-y-2"}>
      <Link className="mb-2 block" href={`/course/${group.degreeSlug}`}>
        <p className={titleClass}>{group.title}</p>
      </Link>

      <ul className={listClass}>
        {group.courses.map((course) => (
          <li
            key={`${group.degreeSlug ?? group.title}-${course.slug}`}
            className="w-full"
          >
            <CourseLinkItem
              course={course}
              degreeSlug={group.degreeSlug}
              variant={variant}
              onClick={variant === "mobile" ? onLinkClick : undefined}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

function CoursesMobileDetails({
  item,
  degreeGroups,
  onLinkClick,
}: {
  item: NavItem;
  degreeGroups: DegreeGroup[];
  onLinkClick: () => void;
}) {
  return (
    <div className="w-full">
      <details className="group">
        <summary className="flex cursor-pointer items-center justify-between text-xs font-bold">
          {item.title}

          <ChevronDown
            size={16}
            className="transition-transform group-open:rotate-180"
          />
        </summary>
        <div className="border-t pt-2 pb-3">
          <p className="pb-2 text-xs font-medium opacity-70">
            {item.headerDesc}
          </p>

          <div className="space-y-3">
            {degreeGroups.map((group, groupIndex) => (
              <DegreeGroupSection
                key={`${group.title}-${groupIndex}`}
                group={group}
                variant="mobile"
                onLinkClick={onLinkClick}
              />
            ))}
          </div>

          {item.gotoPageRedirect && (
            <Link href={`/${item.slug}`} className="mt-4 block">
              <Button size="sm" className="w-fit">
                Learn More <ArrowRight size={16} />
              </Button>
            </Link>
          )}
        </div>
      </details>
    </div>
  );
}

function CoursesDesktopContent({
  degreeGroups,
}: {
  degreeGroups: DegreeGroup[];
}) {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
      {degreeGroups.map((group, groupIndex) => (
        <div key={`${group.title}-${groupIndex}`}>
          <DegreeGroupSection group={group} variant="desktop" />

          {/* <Link href={`/course/${group.degreeSlug}`}>
            <Button variant={"secondary"} className="mt-4" size={"sm"}>
              Learn More
              <ChevronRight />
            </Button>
          </Link> */}
        </div>
      ))}
    </div>
  );
}

const NavigationItems = ({
  onLinkClick,
  links,
  degrees,
}: NavigationItemsProps) => {
  const mergedNavItems = navItems.map((item) => {
    if (item.slug === "login") {
      const loginLinks = parseJsonData<LoginLink>(links);

      const loginCategories = loginLinks.map((el, i) => {
        const title = el.title?.trim() || `Login link ${i + 1}`;
        const redirectLink = el.link ?? "#";
        const icon = el.icon?.trim() || "fi fi-rr-lesson";

        return {
          menuTitle: title,
          redirectLink,
          headerIcon: icon,
          slug: `login-${i + 1}`,
        };
      });

      return {
        ...item,
        Catagories: loginCategories.length ? loginCategories : item.Catagories,
      };
    }

    return item;
  });

  const isMobile = useMobile();
  const degreeGroups = getDegreeGroups(degrees);

  return (
    <nav className="relative max-h-screen overflow-y-auto">
      <div className="flex flex-col items-start gap-1 md:flex-row md:items-center xl:gap-1">
        {mergedNavItems.map((item) => {
          const hasSubItems =
            item.slug === "courses"
              ? degreeGroups.length > 0
              : (item.Catagories?.length ?? 0) > 0;

          if (hasSubItems && isMobile) {
            if (item.slug === "courses") {
              return (
                <CoursesMobileDetails
                  key={item.slug}
                  item={item}
                  degreeGroups={degreeGroups}
                  onLinkClick={onLinkClick}
                />
              );
            }
            return (
              <div key={item.slug} className="w-full">
                <details className="group">
                  <summary className="flex cursor-pointer items-center justify-between text-xs font-bold">
                    {item.title}

                    <ChevronDown
                      size={16}
                      className="transition-transform group-open:rotate-180"
                    />
                  </summary>
                  <div className="border-t pt-2 pb-3">
                    <p className="pb-2 text-xs font-medium opacity-70">
                      {item.headerDesc}
                    </p>
                    <ul className="space-y-1">
                      {item.Catagories?.map((el: Category, i) => (
                        <li key={`${el.slug}-${i}`}>
                          <Link
                            href={
                              el.redirectLink ||
                              el.link ||
                              `/${item.slug}/${el.slug}`
                            }
                            target={el.redirectLink ? "_blank" : undefined}
                            rel={
                              el.redirectLink
                                ? "noreferrer noopener"
                                : undefined
                            }
                            className="flex items-center gap-2 rounded-md px-2 py-2"
                            onClick={onLinkClick}
                          >
                            <div className="bg-primary-orange/50 grid h-8 w-8 shrink-0 place-items-center rounded-full">
                              <i className={`${el.headerIcon} flex text-sm`} />
                            </div>
                            <p className="text-sm leading-tight font-bold">
                              {el.menuTitle}
                            </p>
                          </Link>
                        </li>
                      ))}
                    </ul>

                    {item.gotoPageRedirect && (
                      <Link href={`/${item.slug}`} className="mt-4 block">
                        <Button size="sm" className="w-fit">
                          Learn More <ArrowRight size={16} />
                        </Button>
                      </Link>
                    )}
                  </div>
                </details>
              </div>
            );
          }

          if (hasSubItems) {
            return (
              <HoverDropdown
                key={item.slug}
                title={item.title}
                id={`nav-${item.slug}`}
              >
                <ContainerLayout className="grid grid-cols-1 gap-4 py-4 xl:grid-cols-3">
                  <div>
                    <h2 className="text-lg font-bold md:text-xl">
                      {item.title}
                    </h2>
                    <p className="max-w-sm pt-1 pb-2 text-xs font-medium md:text-base">
                      {item.headerDesc}
                    </p>

                    {item.gotoPageRedirect && (
                      <Link href={`/${item.slug}`} className="mt-4 block">
                        <Button>
                          Learn More <ArrowRight />
                        </Button>
                      </Link>
                    )}
                  </div>

                  <div className="col-span-2">
                    {item.slug === "courses" ? (
                      <CoursesDesktopContent degreeGroups={degreeGroups} />
                    ) : (
                      <ul className="grid grid-cols-1 gap-2 md:grid-cols-3">
                        {item.Catagories?.map((el: Category, i) => (
                          <li key={`${el.slug}-${i}`}>
                            <Link
                              href={
                                el.redirectLink ||
                                el.link ||
                                `/${item.slug}/${el.slug}`
                              }
                              target={el.redirectLink ? "_blank" : undefined}
                              rel={
                                el.redirectLink
                                  ? "noreferrer noopener"
                                  : undefined
                              }
                              className="hover:bg-alt-background flex items-center gap-2 rounded-md px-2 py-1 transition-all"
                            >
                              <div className="bg-primary-orange/50 grid h-10 w-10 place-items-center rounded-full">
                                <i className={`${el.headerIcon} flex`} />
                              </div>
                              <div className="flex flex-1 flex-col gap-1">
                                <p className="line-clamp-2 text-base leading-tight font-bold">
                                  {el.menuTitle}
                                </p>
                              </div>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </ContainerLayout>
              </HoverDropdown>
            );
          }

          return (
            <Link
              key={item.slug}
              target={item.redirectLink ? "_blank" : "_self"}
              href={item.redirectLink ? item.redirectLink : `/${item.slug}`}
              onClick={onLinkClick}
              className={`${["agent-hub", "our-campuses"].includes(item.slug) ? "hidden lg:block" : ""} mx-1 block`}
            >
              <div
                className={`hover:text-shadow-primary-orange text-center text-xs font-bold ${item.isEmergency && "text-destructive"}`}
              >
                {item.title}
              </div>
            </Link>
          );
        })}

        <GoogleSearch />
      </div>
    </nav>
  );
};

export default NavigationItems;
