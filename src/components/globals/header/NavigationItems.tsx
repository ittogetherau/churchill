"use client";

import { Button } from "@/components/ui/button";
import { Category, navItems } from "@/constDatas/navItems";
import ContainerLayout from "@/layouts/container-layout";
import { ArrowRight, ChevronDown } from "lucide-react";
import Link from "next/link";
import GoogleSearch from "./GoogleSearch";
import HoverDropdown from "./HoverDropdown";
import { useMobile } from "@/hooks/useMobile";
import { HeaderQuery } from "@/graphql/generated/graphql";
import { parseJsonData } from "@/utils/parse-json-data";

type props = {
  onLinkClick: () => void;
  courses?: HeaderQuery["courses"];
  links?: unknown;
};

type LoginLink = { title?: string; link?: string; icon?: string };

const NavigationItems = ({ onLinkClick, courses = [], links }: props) => {
  const mergedNavItems = navItems.map((item) => {
    if (item.slug === "courses") {
      const courseCategories =
        courses?.map((course) => ({
          menuTitle: course.title ?? course.slug,
          headerIcon: course.icon_string ?? "fi fi-rr-octagon-xmark flex",
          slug: course.slug,
        })) ?? [];

      return {
        ...item,
        Catagories: [...(item.Catagories ?? []), ...courseCategories],
      };
    }

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

  return (
    <nav className="relative max-h-screen overflow-y-auto">
      <div className="flex flex-col items-start gap-1 md:flex-row md:items-center xl:gap-4">
        {mergedNavItems.map((item) => {
          const hasSubItems = item.Catagories && item.Catagories.length > 0;

          if (hasSubItems && isMobile)
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
                    {item.slug === "courses" && (
                      <p className="mb-3 text-lg font-semibold">
                        Bachelors of Business
                      </p>
                    )}

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
