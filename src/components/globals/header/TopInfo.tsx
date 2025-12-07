import React from "react";
import Link from "next/link";
import { siteConfig } from "@/config/siteConfig";

const NEXT_PUBLIC_CHURCHILL_STUDENT_HUB_URL = siteConfig.studentHubUrl;
const NEXT_PUBLIC_CHURCHILL_AGENT_HUB_URL = siteConfig.agentHubUrl;

interface LinkItem {
  href: string;
  text: string;
  iconClass: string;
  external?: boolean;
}

const links: LinkItem[] = [
  // {
  //   href: "https://elearning.churchill.nsw.edu.au/",
  //   text: "Learning Management System (LMS)",
  //   iconClass: "fi fi-rr-lesson",
  // },
  // {
  //   href: "/find-agent",
  //   text: "Find an Education Agent",
  //   iconClass: "fi fi-rr-headphones",
  // },
  // {
  //   href: "https://churchill.softlinkhosting.com.au/",
  //   text: "Library",
  //   iconClass: "fi fi-rr-book",
  //   external: true,
  // },
  // {
  //   href: NEXT_PUBLIC_CHURCHILL_STUDENT_HUB_URL,
  //   text: "Student Support",
  //   iconClass: "fi fi-rr-student",
  //   external: true,
  // },
  // {
  //   href: NEXT_PUBLIC_CHURCHILL_AGENT_HUB_URL,
  //   text: "Agent Hub",
  //   iconClass: "fi fi-rs-employee-man-alt",
  //   external: true,
  // },
  // {
  //   href: "/contact-us",
  //   text: "Contact Us",
  //   iconClass: "fi fi-rr-phone-flip",
  // },
  // {
  //   href: "/about-us/gallery",
  //   text: "Gallery",
  //   iconClass: "fi fi-rr-gallery",
  // },
];

const TopInfo = () => {
  return (
    <div>
      <ul className="flex flex-col gap-4 text-[14px] font-semibold text-[#424242] lg:flex-row">
        {links.map((link, index) => (
          <li key={index} className="flex cursor-pointer items-center gap-2">
            <Link href={link.href} target={link.external ? "_blank" : "_self"}>
              <p className="flex items-center gap-1">
                <span className="text-matte-purple">{link.text}</span>
                <i className={`${link.iconClass} flex`}></i>
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopInfo;
