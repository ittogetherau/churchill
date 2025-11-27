"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FetchCourseData } from "@/components/utils/apiQueries";
import { navItems } from "@/constDatas/navItems";

interface Course {
  faculty: { faculty_name: string };
  slug: string;
  menuTitle?: string;
  course_name?: string;
  redirectLink?: string;
}

interface Category {
  menuTitle?: string;
  slug?: string;
  link?: string;
  redirectLink?: string;
}

interface NavItem {
  slug: string;
  Catagories?: Category[];
}

const Footer: React.FC = () => {
  const NEXT_PUBLIC_CHURCHILL_STUDENT_HUB_URL =
    process.env.NEXT_PUBLIC_CHURCHILL_STUDENT_HUB_URL;
  const NEXT_PUBLIC_CHURCHILL_AGENT_HUB_URL =
    process.env.NEXT_PUBLIC_CHURCHILL_AGENT_HUB_URL;
  const [coursesData, setCoursesData] = useState<Course[]>([]);
  const [isCoursesLoading, setIsCoursesLoading] = useState(true);
  // Fetch courses data
  useEffect(() => {
    setIsCoursesLoading(true);
    FetchCourseData()
      .then((res) => {
        setCoursesData(res.data);
        setIsCoursesLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setIsCoursesLoading(false);
      });
  }, []);

  const groupedCourses: Record<string, Course[]> = coursesData.reduce(
    (acc, course) => {
      const facultyName = course.faculty.faculty_name;
      if (!acc[facultyName]) {
        acc[facultyName] = [];
      }
      acc[facultyName].push(course);
      return acc;
    },
    {} as Record<string, Course[]>
  );

  // Get Future Students, Current Students, and Login data from navItems
  const futureStudentsNavItem = navItems.find(
    (item) => item.slug === "future-students"
  );
  const currentStudentsNavItem = navItems.find(
    (item) => item.slug === "current-students"
  );
  const loginNavItem = navItems.find((item) => item.slug === "login");
  const futureStudentsCategories = futureStudentsNavItem?.Catagories || [];
  const currentStudentsCategories = currentStudentsNavItem?.Catagories || [];
  const loginCategories = loginNavItem?.Catagories || [];

  return (
    <div className="footer-bottom">
      <div
        className="bg-[#606060] py-[64px]"
        style={{
          backgroundImage: "url(/assets/footer-watermark.svg)",
          backgroundRepeat: "no-repeat",
          objectFit: "cover",
          width: "100%",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="mx-auto container px-5">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col items-center lg:flex-row justify-between gap-4">
              <Link href="/">
                <Image
                  src="/assets/logo.svg"
                  width={400}
                  height={400}
                  alt="Footer Logo"
                  className="object-contain w-[300px] h-auto brightness-0 invert"
                  priority
                />
              </Link>
              <div className="text-white flex flex-col gap-2">
                <h3 className="text-[16px]">
                  <strong>Churchill Institute of Higher Education</strong>
                </h3>
                <Link
                  href="tel:+61-02-8856-2997"
                  className="flex gap-2 items-center text-[14px]"
                >
                  <span>
                    <FaPhoneAlt />
                  </span>
                  +61 (02) 8856-2997
                </Link>
                <Link
                  href="mailto:info@churchill.nsw.edu.au"
                  className="flex gap-2 items-center text-[14px]"
                >
                  <span>
                    <MdEmail />
                  </span>
                  info@churchill.nsw.edu.au
                </Link>
                <Link
                  href="https://maps.app.goo.gl/h7FJyoQfasvUvck79"
                  target="_blank"
                >
                  <p className="flex gap-2 items-center text-[14px]">
                    <span>
                      <FaLocationDot />
                    </span>
                    Level 1, 16-18 Wentworth Street Parramatta NSW 2150
                  </p>
                </Link>
                <Link
                  href="https://maps.google.com/?q=Level+8,+85+Queen+Street,+Melbourne,+VIC+3000,+Australia"
                  target="_blank"
                >
                  <p className="flex gap-2 items-center text-[14px]">
                    <span>
                      <FaLocationDot />
                    </span>
                    Level 8, 85 Queen Street, Melbourne, VIC 3000, Australia
                  </p>
                </Link>
              </div>
            </div>
            {/* First Row: About Us, Courses, Future Students */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 text-white">
              <div>
                <h3 className="text-[16px] pb-4">
                  <strong>About Us</strong>
                </h3>
                <ul className="flex flex-col gap-1 text-[14px] pl-2">
                  <li>
                    <Link href="/about-us/CIHE-governance-structure">
                      Churchill Institute of Higher Education Governance
                    </Link>
                  </li>
                  <li>
                    <Link href="/about-us/CIHE-organisational-chart">
                      Churchill Institute of Higher Education Governance
                      Structure and Organisational Chart
                    </Link>
                  </li>
                  <li>
                    <Link href="/about-us/company-and-financial-documents">
                      Financial Standing, TPS & Enrolment Summary
                    </Link>
                  </li>
                  <li>
                    <Link
                      target="_blank"
                      href={`${NEXT_PUBLIC_CHURCHILL_STUDENT_HUB_URL}/policies`}
                    >
                      Policies and Procedures
                    </Link>
                  </li>
                  <li>
                    <Link href="/about-us/gallery">Gallery</Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-[16px] pb-4">
                  <strong>Courses</strong>
                </h3>
                {isCoursesLoading ? (
                  <p className="text-[14px]">Loading courses...</p>
                ) : (
                  <div className="flex flex-col gap-4">
                    {Object.keys(groupedCourses).map((facultyName) => (
                      <div key={facultyName}>
                        <h4 className="text-[14px] font-semibold">
                          {facultyName}
                        </h4>
                        <ul className="flex flex-col gap-1 text-[14px] pl-2">
                          {groupedCourses[facultyName].map((course, index) => (
                            <li key={index}>
                              <Link
                                href={
                                  course.redirectLink
                                    ? course.redirectLink
                                    : `/courses/${course.slug}`
                                }
                                target={course.redirectLink ? "_blank" : ""}
                              >
                                {course.menuTitle || course.course_name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <div>
                <h3 className="text-[16px] pb-4">
                  <strong>Future Students</strong>
                </h3>
                {futureStudentsCategories.length === 0 ? (
                  <p className="text-[14px]">
                    No future student links available
                  </p>
                ) : (
                  <ul className="flex flex-col gap-1 text-[14px] pl-2">
                    {futureStudentsCategories.map((item, index) => (
                      <li key={index}>
                        <Link
                          href={
                            item.redirectLink
                              ? item.redirectLink
                              : item.link
                              ? item.link
                              : `/student/${item.slug}`
                          }
                          target={item.redirectLink ? "_blank" : ""}
                        >
                          {item.menuTitle}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
            {/* Second Row: Current Students, Login, Quick Links */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 text-white">
              <div>
                <h3 className="text-[16px] pb-4">
                  <strong>Current Students</strong>
                </h3>
                {currentStudentsCategories.length === 0 ? (
                  <p className="text-[14px]">
                    No current student links available
                  </p>
                ) : (
                  <ul className="flex flex-col gap-1 text-[14px] pl-2">
                    {currentStudentsCategories.map((item, index) => (
                      <li key={index}>
                        <Link
                          href={
                            item.redirectLink
                              ? item.redirectLink
                              : item.link
                              ? item.link
                              : `/student/${item.slug}`
                          }
                          target={item.redirectLink ? "_blank" : ""}
                        >
                          {item.menuTitle}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <div>
                <h3 className="text-[16px] pb-4">
                  <strong>Login</strong>
                </h3>
                {loginCategories.length === 0 ? (
                  <p className="text-[14px]">No login links available</p>
                ) : (
                  <ul className="flex flex-col gap-1 text-[14px] pl-2">
                    {loginCategories.map((item, index) => (
                      <li key={index}>
                        <Link
                          href={
                            item.redirectLink
                              ? item.redirectLink
                              : item.link
                              ? item.link
                              : `/login/${item.slug}`
                          }
                          target={item.redirectLink ? "_blank" : ""}
                        >
                          {item.menuTitle}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <div>
                <h3 className="text-[16px] pb-4">
                  <strong>Quick Links</strong>
                </h3>
                <ul className="flex flex-col gap-1 text-[14px] pl-2">
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <Link href="https://elearning.churchill.nsw.edu.au/">
                      Learning Management System (LMS)
                    </Link>
                  </li>
                  <li>
                    <Link href="/find-agent">Find an Education Agent</Link>
                  </li>
                  <li>
                    <Link href="https://churchill.softlinkhosting.com.au/liberty/libraryHome.do">
                      Library
                    </Link>
                  </li>
                  <li>
                    <Link href={NEXT_PUBLIC_CHURCHILL_STUDENT_HUB_URL || "#"}>
                      Student Support
                    </Link>
                  </li>
                  <li>
                    <Link href={NEXT_PUBLIC_CHURCHILL_AGENT_HUB_URL || "#"}>
                      Agent Hub
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact-us">Contact Us</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#E59623] pt-8 pb-4">
        <div className="container mx-auto px-5 space-y-4">
          <div className="flex flex-col items-center justify-between gap-5">
            <div className="flex gap-3 items-center">
              <Image
                src="/assets/flag-a.png"
                width={400}
                height={400}
                alt="Footer Logo"
                className="object-contain w-[50px] h-auto"
                priority
              />
              <Image
                src="/assets/flag-b.png"
                width={400}
                height={400}
                alt="Footer Logo"
                className="object-contain w-[50px] h-auto"
                priority
              />
            </div>
            <p className="text-center max-w-[80ch] mx-auto">
              Churchill Institute of Higher Education acknowledges Aboriginal
              and Torres Strait Islander people as the Traditional Custodians of
              the land and pays respect to their elders, past and present
            </p>
          </div>
          <hr className="border-neutral-950/25" />
          <p className="text-center text-[#323432] text-[14px] py-4">
            Copyright ©{new Date().getFullYear()} Mpika Holdings Pty Ltd (ACN:
            612 507 141) t/as Churchill Institute of Higher Education (ABN: 91
            612 507 141).
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
