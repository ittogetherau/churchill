"use client";
import React, { useEffect, useState } from "react";
import { FaAngleDown, FaSearch } from "react-icons/fa";
import TopInfo from "./TopInfo";
import { navItems } from "@/constDatas/navItems";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components";
import { FetchCourseData } from "@/components/utils/apiQueries";
const NavListVTwo = ({
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
        document.body.removeChild(script);
      };
    }
  }, [openSearch]);

  const [coursesData, setCoursesData] = useState([]);
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

  return (
    <div className="w-full flex flex-col gap-2 z-40 pt-5">
      {/* <div className="hidden lg:block">
        <div className="flex justify-end">
          <TopInfo />
        </div>
      </div> */}

      <ul className={`${style ? style : ""}`}>
        {navItems?.map((item, index) => {
          const isActive =
            (pathname.includes(item?.slug) && item?.slug?.length > 1) ||
            pathname === item?.slug;
          const hasSubcategories =
            item?.Catagories?.length > 0
              ? true
              : item.slug === "courses"
                ? true
                : false;

          const mapData =
            item.slug === "courses" ? coursesData : item.Catagories;

          return (
            <div key={index}>
              {hasSubcategories ? (
                <li
                  className={` group relative lg:static`}
                  onClick={() => {
                    handleOnclickA();
                  }}
                >
                  <div
                    className={`flex gap-1 pb-3 items-center group cursor-pointer`}
                  >
                    <p className="hover:highlight">{item?.title}</p>
                    <span className="rotate-180 group-hover:rotate-0 transition-all">
                      <FaAngleDown />
                    </span>
                  </div>
                  {/* </Link> */}
                  {isDropdownActive && (
                    <div className="z-20 hidden px-5 py-3 w-[80vw] lg:w-[100vw] border-t-4 border-t-[#eb9320] group-hover:block lg:absolute lg:left-0 top-[100%] shadow-xl whitespace-wrap transition delay-150 bg-white">
                      <div className="flex flex-col lg:flex-row gap-4 container mx-auto py-4">
                        <div className="flex-[20%] flex flex-col gap-5 md:flex-row lg:flex-col lg:gap-2 justify-between lg:justify-center">
                          <h2 className="text-xl">{item.title}</h2>

                          <p className="font-[500] font-base pt-1 pb-2">
                            {item.headerDesc}
                          </p>

                          <Link href={`/${item.slug}`}>
                            <Button btnName="Learn More" />
                          </Link>
                        </div>
                        <div className="flex-[78%]">
                          <ul className="h-[110px] md:h-auto overflow-y-scroll grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-2">
                            {mapData.map((subItem, index) => (
                              <Link
                                target={`${subItem?.redirectLink ? "_blank" : ""
                                  }`}
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
                                      className={`${subItem.headerIcon || subItem.icon
                                        } m-0 flex items-center `}
                                    />
                                  </div>

                                  <div className="flex flex-1 flex-col gap-1">
                                    <h3 className="leading-5 font-xl">
                                      {subItem.menuTitle || subItem.course_name}
                                    </h3>
                                    <p className=" text-sm font-[500]">
                                      {subItem.headerDesc}
                                    </p>
                                  </div>
                                </li>
                              </Link>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}
                </li>
              ) : (
                <Link href={``}>
                  <li
                    className={`flex gap-1 items-center ${isActive && "text-[#eb9320]"
                      }  cursor-pointer pb-5`}
                  >
                    <p className="hover:text-[#eb9320]">{item?.title}</p>
                  </li>
                </Link>
              )}
            </div>
          );
        })}
        <li>
          <Link href="/emergency-contact" className="flex gap-1 items-center cursor-pointer text-red-600 hover:text-[#eb9320]">
            <span>Emergency Contacts</span>
          </Link>
        </li>
        <li
          onClick={() => {
            setOpenSearch(true);
          }}
        >
          <div className="flex gap-1 items-center cursor-pointer hover:text-[#eb9320]">
            <span>Search</span> <FaSearch />
          </div>
        </li>
        {openSearch && (
          <div className="z-50 fixed top-0 left-0 right-0 bottom-0 bg-black/75">
            <div className="lg:mt-[15%] mt-[50%]">
              <div className="flex justify-center items-center">
                <div className="w-[80%] lg:w-[50%] h-fit ">
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

export default NavListVTwo;
