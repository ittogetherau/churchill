"use client";
import React, { useEffect, useState } from "react";
import { FaAngleDown, FaSearch } from "react-icons/fa";
import TopInfo from "./TopInfo";
import { NavItem, navItems } from "@/constDatas/navItems";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { FetchCourseData } from "@/components/utils/apiQueries";
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

const NEXT_PUBLIC_CHURCHILL_AGENT_HUB_URL =
  process.env.NEXT_PUBLIC_CHURCHILL_AGENT_HUB_URL;

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
    {} as Record<string, Course[]>
  );
  return (
    <div className="w-full flex flex-col gap-2 z-40">
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
                  className="group relative lg:static sm-py-10 py-[30px]"
                  onClick={() => {
                    handleOnclickA();
                  }}
                >
                  <div className="flex gap-1 items-center group cursor-pointer">
                    <p className="hover:text-[#eb9320] text-[12px] custom-1280-text">
                      {item?.title}
                    </p>
                    <span className="rotate-180 group-hover:rotate-0 transition-all">
                      <FaAngleDown />
                    </span>
                  </div>

                  {isDropdownActive && (
                    <div className="z-20 hidden px-2 md:px-3 md:py-3 max-h-[18rem] lg:max-h-auto w-[80vw]  overflow-y-scroll lg:w-[100vw] border-t-4 border-t-[#eb9320] group-hover:block lg:absolute lg:left-0 top-[100%] shadow-xl whitespace-wrap transition delay-150 bg-white">
                      <div className="flex flex-col lg:flex-row gap-2 container mx-auto py-2">
                        <div className="flex-[20%] flex flex-col gap-2 md:flex-row lg:flex-col lg:gap-2 justify-between lg:justify-center">
                          <h2 className="text-lg md:text-xl">{item.title}</h2>
                          <p className="font-[500] text-xs md:text-base pt-1 pb-2">
                            {item.headerDesc}
                          </p>
                          {![
                            "current-students",
                            "future-students",
                            "login",
                          ].includes(item.slug) && (
                            <Link
                              className="p-2 md:p-3 rounded-lg text-xs font-semibold text-white hover:bg-orange-300 md:text-base bg-primary-orange border-2 border-black w-fit transition-all"
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
                                    <h3 className="text-lg font-semibold mb-2">
                                      {facultyName}
                                    </h3>
                                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
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
                                            className="w-full flex"
                                          >
                                            <li
                                              className="hover:bg-[#eb9320]/20 transition-all rounded-md flex flex-1 items-center gap-2 px-2 py-1"
                                              key={index}
                                            >
                                              <div className="w-10 h-10 bg-[#eb9320]/20 rounded-full grid place-items-center">
                                                <i
                                                  className={`${
                                                    subItem.headerIcon ||
                                                    subItem.icon
                                                  } m-0 flex items-center`}
                                                />
                                              </div>
                                              <div className="flex flex-1 flex-col gap-1">
                                                <h3 className="leading-5 text-xs md:text-lg">
                                                  {subItem.menuTitle ||
                                                    subItem.course_name}
                                                </h3>
                                                {/* <p
                                              className="text-sm font-[500]"
                                              dangerouslySetInnerHTML={{ __html: subItem.headerDesc || subItem.description }}
                                            /> */}
                                              </div>
                                            </li>
                                          </Link>
                                        )
                                      )}
                                    </ul>
                                  </div>
                                )
                              )}
                            </div>
                          ) : (
                            <ul className="h-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-2">
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
                                  className="w-full h-full lg:max-h-[6rem] flex"
                                >
                                  <li
                                    className="hover:bg-[#eb9320]/20 transition-all rounded-md flex flex-1 items-center gap-2 px-2 py-1"
                                    key={index}
                                  >
                                    <div className="w-10 h-10 bg-[#eb9320]/20 rounded-full grid place-items-center">
                                      <i
                                        className={`${
                                          subItem.headerIcon || subItem.icon
                                        } m-0 flex items-center`}
                                      />
                                    </div>
                                    <div className="flex flex-1 flex-col gap-1">
                                      <p className=" text-xs md:text-base">
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
                    className={`flex gap-1 items-center ${
                      isActive && "text-[#eb9320]"
                    } cursor-pointer pb-5`}
                  >
                    <p className="hover:text-[#eb9320] text-[12px] custom-1280-text">
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
            className="flex gap-1 items-center cursor-pointer hover:text-[#eb9320] text-[12px] custom-1280-text"
          >
            <span>Agent Hub</span>
          </Link>
        </li>
        <li className="sm-py-10 py-[30px]">
          <Link
            href="/our-campuses"
            className="flex gap-1 items-center cursor-pointer hover:text-[#eb9320] text-[12px] custom-1280-text"
          >
            <span>Our Campus</span>
          </Link>
        </li>
        <li className="sm-py-10 py-[30px]">
          <Link
            href="/emergency-contact"
            className="flex gap-1 items-center cursor-pointer text-red-600 hover:text-[#eb9320] text-[12px] custom-1280-text"
          >
            <span>Emergency</span>
          </Link>
        </li>
        <li
          className="flex center sm-py-10 py-[30px]"
          onClick={() => {
            setOpenSearch(true);
          }}
        >
          <div className="flex gap-1 items-center cursor-pointer hover:text-[#eb9320] text-[16px] custom-1280-text">
            <span className="hidden sm:block md:hidden lg:hidden">Search</span>{" "}
            <FaSearch />
          </div>
        </li>
        {openSearch && (
          <div className="z-50 fixed top-0 left-0 right-0 bottom-0 bg-black/75">
            <div className="lg:mt-[15%] mt-[50%]">
              <div className="flex justify-center items-center">
                <div className="w-[80%] lg:w-[50%] h-fit">
                  <div className="gcse-search"></div>
                </div>
              </div>
            </div>
            <p
              className="absolute top-8 right-8 text-[#FF0000] text-4xl cursor-pointer"
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
