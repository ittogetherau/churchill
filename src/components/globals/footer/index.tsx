"use client";
import { siteConfig } from "@/config/siteConfig";
import { navItems } from "@/constDatas/navItems";
import { HeaderQuery } from "@/graphql/generated/graphql";
import ContainerLayout from "@/layouts/container-layout";
import { useHeaderStore } from "@/store/headerStore";
import { parseJsonData } from "@/utils/parse-json-data";
import Image from "next/image";
import Link from "next/link";
import React, { useMemo } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

type HeaderCourse = HeaderQuery["courses"][number] & {
  faculty?: { faculty_name?: string };
  menuTitle?: string;
  course_name?: string;
  redirectLink?: string;
};

const EMPTY_COURSES: HeaderCourse[] = [];

type LoginLink = { title?: string; link?: string; icon?: string };
type FooterLoginCategory = {
  menuTitle: string;
  slug: string;
  link?: string;
  redirectLink?: string;
};

const isNotNull = <T,>(value: T | null): value is T => value !== null;

const Footer: React.FC = () => {
  const { studentHubUrl, agentHubUrl } = siteConfig;

  const coursesData = useHeaderStore(
    (state) => (state.data?.courses ?? EMPTY_COURSES) as HeaderCourse[],
  );
  const loginLinksRaw = useHeaderStore(
    (state) => state.data?.login_links?.links,
  );

  const aboutUsNavItem = navItems.find((item) => item.slug === "about-us");
  const futureStudentsNavItem = navItems.find(
    (item) => item.slug === "future-students",
  );
  const currentStudentsNavItem = navItems.find(
    (item) => item.slug === "current-students",
  );
  const aboutUsCategories = aboutUsNavItem?.Catagories || [];
  const futureStudentsCategories = futureStudentsNavItem?.Catagories || [];
  const currentStudentsCategories = currentStudentsNavItem?.Catagories || [];

  const loginCategories = useMemo<FooterLoginCategory[]>(() => {
    const loginLinks = parseJsonData<LoginLink>(loginLinksRaw);

    return loginLinks
      .map((el, i) => {
        const title = el.title?.trim() || `Login link ${i + 1}`;
        const redirectLink = el.link?.trim();
        if (!redirectLink) return null;

        return {
          menuTitle: title,
          redirectLink,
          slug: `login-${i + 1}`,
        };
      })
      .filter(isNotNull);
  }, [loginLinksRaw]);

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
        <ContainerLayout>
          <div className="flex flex-col gap-8">
            <div className="flex flex-col items-center justify-between gap-4 lg:flex-row">
              <Link href="/">
                <Image
                  src="/assets/logo.svg"
                  width={400}
                  height={400}
                  alt="Footer Logo"
                  className="h-auto w-[300px] object-contain brightness-0 invert"
                  priority
                />
              </Link>
              <div className="flex flex-col gap-2 text-white">
                <h3 className="text-[16px]">
                  <strong>Churchill Institute of Higher Education</strong>
                </h3>
                <Link
                  href="tel:+61-02-8856-2997"
                  className="flex items-center gap-2 text-[14px]"
                >
                  <span>
                    <FaPhoneAlt />
                  </span>
                  +61 (02) 8856-2997
                </Link>
                <Link
                  href="mailto:info@churchill.edu.au"
                  className="flex items-center gap-2 text-[14px]"
                >
                  <span>
                    <MdEmail />
                  </span>
                  info@churchill.edu.au
                </Link>
                <Link
                  href="https://maps.app.goo.gl/h7FJyoQfasvUvck79"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <p className="flex items-center gap-2 text-[14px]">
                    <span>
                      <FaLocationDot />
                    </span>
                    Level 1, 16-18 Wentworth Street Parramatta NSW 2150
                  </p>
                </Link>
                <Link
                  href="https://maps.google.com/?q=Level+8,+85+Queen+Street,+Melbourne,+VIC+3000,+Australia"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <p className="flex items-center gap-2 text-[14px]">
                    <span>
                      <FaLocationDot />
                    </span>
                    Level 8, 85 Queen Street, Melbourne, VIC 3000, Australia
                  </p>
                </Link>
              </div>
            </div>
            {/* First Row: About Us, Courses, Future Students */}
            <div className="grid grid-cols-1 gap-4 text-white md:grid-cols-2 lg:grid-cols-3">
              <div>
                <h3 className="pb-4 text-[16px]">
                  <strong>{"About Us"}</strong>
                </h3>
                {aboutUsCategories.length === 0 ? (
                  <p className="text-[14px]">No about us links available</p>
                ) : (
                  <ul className="flex flex-col gap-1 pl-2 text-[14px]">
                    {aboutUsCategories.map((item, index) => (
                      <li key={index}>
                        <Link
                          href={
                            item.redirectLink
                              ? item.redirectLink
                              : item.link
                                ? item.link
                                : `/about-us/${item.slug}`
                          }
                          target={item.redirectLink ? "_blank" : undefined}
                          rel={
                            item.redirectLink
                              ? "noreferrer noopener"
                              : undefined
                          }
                        >
                          {item.menuTitle}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <div>
                <h3 className="pb-4 text-[16px]">
                  <strong>Courses</strong>
                </h3>
                {coursesData.length === 0 ? (
                  <p className="text-[14px]">No courses available.</p>
                ) : (
                  <ul className="flex flex-col gap-1 pl-2 text-[14px]">
                    {coursesData.map((course, index) => (
                      <li key={index}>
                        <Link
                          href={
                            course.redirectLink
                              ? course.redirectLink
                              : `/courses/${course.slug}`
                          }
                          target={course.redirectLink ? "_blank" : undefined}
                          rel={
                            course.redirectLink
                              ? "noreferrer noopener"
                              : undefined
                          }
                        >
                          {course.menuTitle ||
                            course.course_name ||
                            course.title ||
                            course.slug}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <div>
                <h3 className="pb-4 text-[16px]">
                  <strong>Future Students</strong>
                </h3>
                {futureStudentsCategories.length === 0 ? (
                  <p className="text-[14px]">
                    No future student links available
                  </p>
                ) : (
                  <ul className="flex flex-col gap-1 pl-2 text-[14px]">
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
                          target={item.redirectLink ? "_blank" : undefined}
                          rel={
                            item.redirectLink
                              ? "noreferrer noopener"
                              : undefined
                          }
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
            <div className="grid grid-cols-1 gap-4 text-white md:grid-cols-2 lg:grid-cols-3">
              <div>
                <h3 className="pb-4 text-[16px]">
                  <strong>Current Students</strong>
                </h3>
                {currentStudentsCategories.length === 0 ? (
                  <p className="text-[14px]">
                    No current student links available
                  </p>
                ) : (
                  <ul className="flex flex-col gap-1 pl-2 text-[14px]">
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
                          target={item.redirectLink ? "_blank" : undefined}
                          rel={
                            item.redirectLink
                              ? "noreferrer noopener"
                              : undefined
                          }
                        >
                          {item.menuTitle}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <div>
                <h3 className="pb-4 text-[16px]">
                  <strong>Login</strong>
                </h3>
                {loginCategories.length === 0 ? (
                  <p className="text-[14px]">No login links available</p>
                ) : (
                  <ul className="flex flex-col gap-1 pl-2 text-[14px]">
                    {loginCategories.map((item, index) => (
                      <li key={index}>
                        <Link
                          href={item.redirectLink ? item.redirectLink : "#"}
                          target={item.redirectLink ? "_blank" : undefined}
                          rel={
                            item.redirectLink
                              ? "noreferrer noopener"
                              : undefined
                          }
                        >
                          {item.menuTitle}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <div>
                <h3 className="pb-4 text-[16px]">
                  <strong>Quick Links</strong>
                </h3>
                <ul className="flex flex-col gap-1 pl-2 text-[14px]">
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <Link href="https://elearning.churchill.edu.au/">
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
                    <Link href={studentHubUrl || "#"}>Student Support</Link>
                  </li>
                  <li>
                    <Link href={agentHubUrl || "#"}>Education Agent Hub</Link>
                  </li>
                  <li>
                    <Link href="/contact-us">Contact Us</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </ContainerLayout>
      </div>
      <div className="bg-[#E59623] pt-8 pb-4">
        <ContainerLayout>
          <div className="flex flex-col items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Image
                src="/assets/flag-a.png"
                width={400}
                height={400}
                alt="Footer Logo"
                className="h-auto w-[50px] object-contain"
                priority
              />
              <Image
                src="/assets/flag-b.png"
                width={400}
                height={400}
                alt="Footer Logo"
                className="h-auto w-[50px] object-contain"
                priority
              />
            </div>
            <p className="mx-auto max-w-[80ch] text-center">
              Churchill Institute of Higher Education acknowledges Aboriginal
              and Torres Strait Islander people as the Traditional Custodians of
              the land and pays respect to their elders, past and present
            </p>
          </div>
          <hr className="mt-3 mb-px border-neutral-950/25" />

          <p className="space-x-2 py-4 text-center text-sm font-semibold text-[#323432]">
            <span>
              Copyright &copy;{new Date().getFullYear()} Mpika Holdings Pty Ltd
              (ACN: 612 507 141) t/as Churchill Institute of Higher Education
              (ABN: 91 612 507 141).
            </span>
            <a
              href="https://www.teqsa.gov.au/provider/mpika-holdings-pty-ltd"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Link PRV14305"
            >
              PRV14305
            </a>
            <span>|</span>
            <a
              href="https://cricos.education.gov.au/Institution/InstitutionDetails.aspx?ProviderID=4082"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Link CRICOS Provider: 04082E"
            >
              CRICOS Provider: 04082E
            </a>
          </p>
        </ContainerLayout>
      </div>
    </div>
  );
};

export default Footer;
