"use client";
import React, { useEffect, useState } from "react";
import { FaAngleDown, FaSearch } from "react-icons/fa";
import TopInfo from "./TopInfo";
import { NavItem, navItems } from "@/constDatas/navItems";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { FetchCourseData } from "@/utils/apiQueries";
import { siteConfig } from "@/config/siteConfig";
interface NavListProps {
  style?: string;
  isDropdownActive: boolean;
  handleOnclickA: () => void;
  handleOnclick: () => void;
}
export interface Course {
  slug: string;
  course_name: string;
  menuTitle?: string;
  headerDesc?: string;
  icon?: string;
  headerIcon?: string;
  link?: string;
  redirectLink?: string;
  faculty: {
    faculty_name: string;
  };
}

const NEXT_PUBLIC_CHURCHILL_AGENT_HUB_URL = siteConfig.agentHubUrl;

const NavList: React.FC<NavListProps> = ({
  style,
  isDropdownActive,
  handleOnclickA,
  handleOnclick,
}) => {
  const pathname = usePathname();
  const [openSearch, setOpenSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    if (openSearch) {
      const script = document.createElement("script");
      script.async = true;
      script.src = "https://cse.google.com/cse.js?cx=820c819b7996d4c87";
      document.body.appendChild(script);

      return () => {
        if (document.body.contains(script)) {
          document.body.removeChild(script);
        }
      };
    }
  }, [openSearch]);

  const [coursesData, setCoursesData] = useState<Course[]>([]);
  const [isCoursesLoading, setIsCoursesLoading] = useState(true);
  useEffect(() => {
    setIsCoursesLoading(true);
    FetchCourseData()
      .then((res) => {
        setCoursesData(res.data);
        setIsCoursesLoading(false);
      })
      .catch((err) => console.error(err));
  }, []);

  const groupedCourses: Record<string, Course[]> = coursesData.reduce(
    (acc, course) => {
      const facultyName = course.faculty.faculty_name;
      if (!acc[facultyName]) acc[facultyName] = [];
      acc[facultyName].push(course);
      return acc;
    },
    {} as Record<string, Course[]>,
  );
  return (
    <div className="z-40 flex w-full flex-col gap-2">
      <ul className={`${style ? style : ""}`}>
        {navItems?.map((item: NavItem, index: number) => {
          const isActive =
            (pathname.includes(item?.slug) && item?.slug?.length > 1) ||
            pathname === item?.slug;

          const hasSubcategories =
            (item?.Catagories && item.Catagories.length > 0) ||
            item.slug === "courses";

          const mapData: any[] =
            item.slug === "courses" ? coursesData : item.Catagories || [];

          return (
            <div key={index}>
              {hasSubcategories ? (
                <li
                  className="group sm-py-10 relative py-[30px] lg:static"
                  onClick={() => {
                    handleOnclickA();
                  }}
                >
                  <div className="group flex cursor-pointer items-center gap-1">
                    <p className="custom-1280-text text-[12px] hover:text-[#eb9320]">
                      {item?.title}
                    </p>
                    <span className="rotate-180 transition-all group-hover:rotate-0">
                      <FaAngleDown />
                    </span>
                  </div>

                  {isDropdownActive && (
                    <div className="lg:max-h-auto whitespace-wrap top-[100%] z-20 hidden max-h-[18rem] w-[80vw] overflow-y-scroll border-t-4 border-t-[#eb9320] bg-white px-2 shadow-xl transition delay-150 group-hover:block md:px-3 md:py-3 lg:absolute lg:left-0 lg:w-[100vw]">
                      <div className="container mx-auto flex flex-col gap-2 py-2 lg:flex-row">
                        <div className="flex flex-[20%] flex-col justify-between gap-2 md:flex-row lg:flex-col lg:justify-center lg:gap-2">
                          <h2 className="text-lg md:text-xl">{item.title}</h2>
                          <p className="pt-1 pb-2 text-xs font-[500] md:text-base">
                            {item.headerDesc}
                          </p>
                          {![
                            "current-students",
                            "future-students",
                            "login",
                          ].includes(item.slug) && (
                            <Link
                              className="bg-primary-orange w-fit rounded-lg border-2 border-black p-2 text-xs font-semibold text-white transition-all hover:bg-orange-300 md:p-3 md:text-base"
                              href={`/${item.slug}`}
                            >
                              Learn More
                            </Link>
                          )}
                        </div>
                        <div className="flex-[78%]">
                          {item.slug === "courses" ? (
                            <div className="flex flex-col gap-6">
                              {Object.keys(groupedCourses).map(
                                (facultyName) => (
                                  <div key={facultyName}>
                                    <h3 className="mb-2 text-lg font-semibold">
                                      {facultyName}
                                    </h3>
                                    <ul className="grid grid-cols-1 gap-2 md:grid-cols-2">
                                      {groupedCourses[facultyName].map(
                                        (subItem, index) => (
                                          <Link
                                            target={
                                              subItem?.redirectLink
                                                ? "_blank"
                                                : ""
                                            }
                                            key={index}
                                            href={
                                              subItem?.redirectLink
                                                ? subItem?.redirectLink
                                                : subItem?.link
                                                  ? subItem?.link
                                                  : `/${item.slug}/${subItem.slug}`
                                            }
                                            className="flex w-full"
                                          >
                                            <li
                                              className="flex flex-1 items-center gap-2 rounded-md px-2 py-1 transition-all"
                                              key={index}
                                            >
                                              <div className="bg-background grid h-10 w-10 place-items-center rounded-full">
                                                <i
                                                  className={`${
                                                    subItem.headerIcon ||
                                                    subItem.icon
                                                  } m-0 flex items-center`}
                                                />
                                              </div>
                                              <div className="flex flex-1 flex-col gap-1">
                                                {subItem.menuTitle ||
                                                  subItem.course_name}
                                              </div>
                                            </li>
                                          </Link>
                                        ),
                                      )}
                                    </ul>
                                  </div>
                                ),
                              )}
                            </div>
                          ) : (
                            <ul className="grid h-auto grid-cols-1 gap-4 px-2 md:grid-cols-2 lg:grid-cols-3">
                              {mapData.map((subItem, index) => (
                                <Link
                                  target={subItem?.redirectLink ? "_blank" : ""}
                                  key={index}
                                  href={
                                    subItem?.redirectLink
                                      ? subItem?.redirectLink
                                      : subItem?.link
                                        ? subItem?.link
                                        : `/${item.slug}/${subItem.slug}`
                                  }
                                  className="flex h-full w-full lg:max-h-[6rem]"
                                >
                                  <li
                                    className="flex flex-1 items-center gap-2 rounded-md px-2 py-1 transition-all hover:bg-[#eb9320]/20"
                                    key={index}
                                  >
                                    <div className="grid h-10 w-10 place-items-center rounded-full bg-[#eb9320]/20">
                                      <i
                                        className={`${
                                          subItem.headerIcon || subItem.icon
                                        } m-0 flex items-center`}
                                      />
                                    </div>
                                    <div className="flex flex-1 flex-col gap-1">
                                      <p className="text-xs md:text-base">
                                        {subItem.menuTitle ||
                                          subItem.course_name}
                                      </p>
                                      <p className="text-sm font-[500]">
                                        {subItem.headerDesc}
                                      </p>
                                    </div>
                                  </li>
                                </Link>
                              ))}
                            </ul>
                          )}
                        </div>
                      </div>
                    </div>
                  )}
                </li>
              ) : (
                <Link href={item?.slug || "#"}>
                  <li
                    className={`flex items-center gap-1 ${
                      isActive && "text-[#eb9320]"
                    } cursor-pointer pb-5`}
                  >
                    <p className="custom-1280-text text-[12px] hover:text-[#eb9320]">
                      {item?.title}
                    </p>
                  </li>
                </Link>
              )}
            </div>
          );
        })}

        <li className="sm-py-10 py-[30px]">
          <Link
            href={NEXT_PUBLIC_CHURCHILL_AGENT_HUB_URL || "#"}
            className="custom-1280-text flex cursor-pointer items-center gap-1 text-[12px] hover:text-[#eb9320]"
          >
            <span>Agent Hub</span>
          </Link>
        </li>
        <li className="sm-py-10 py-[30px]">
          <Link
            href="/our-campuses"
            className="custom-1280-text flex cursor-pointer items-center gap-1 text-[12px] hover:text-[#eb9320]"
          >
            <span>Our Campus</span>
          </Link>
        </li>
        <li className="sm-py-10 py-[30px]">
          <Link
            href="/emergency-contact"
            className="custom-1280-text flex cursor-pointer items-center gap-1 text-[12px] text-red-600 hover:text-[#eb9320]"
          >
            <span>Emergency</span>
          </Link>
        </li>
        <li
          className="center sm-py-10 flex py-[30px]"
          onClick={() => {
            setOpenSearch(true);
          }}
        >
          <div className="custom-1280-text flex cursor-pointer items-center gap-1 text-[16px] hover:text-[#eb9320]">
            <span className="hidden sm:block md:hidden lg:hidden">Search</span>{" "}
            <FaSearch />
          </div>
        </li>

        {openSearch && (
          <div className="fixed top-0 right-0 bottom-0 left-0 z-50 bg-black/75">
            <div className="mt-[50%] lg:mt-[15%]">
              <div className="flex items-center justify-center">
                <div className="h-fit w-[80%] lg:w-[50%]">
                  <div className="gcse-search"></div>
                </div>
              </div>
            </div>
            <p
              className="absolute top-8 right-8 cursor-pointer text-4xl text-[#FF0000]"
              onClick={() => {
                setOpenSearch(false);
              }}
            >
              <i className="fi fi-rr-cross-small"></i>
            </p>
          </div>
        )}
      </ul>
    </div>
  );
};

export default NavList;
