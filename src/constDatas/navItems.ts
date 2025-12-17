import { siteConfig } from "@/config/siteConfig";

export interface NavItem {
  title: string;
  slug: string;
  headerDesc?: string;
  link?: string;
  gotoPageRedirect?: boolean;
  Catagories?: Category[];
  icon?: string;
  redirectLink?: string;
  isEmergency?: boolean;
}

export interface VisionMission {
  title: string;
  subTitle: string;
  icon: string;
}

export interface CoreValue {
  title: string;
  icon: string;
}

export interface Message {
  title: string;
  image: string;
  description: string;
}

export interface Related {
  title: string;
  image: string;
  slug: string;
  link: string;
  subTitle: string;
  description: string;
}

export interface Category {
  menuTitle: string;
  headerIcon: string;
  slug: string;
  link?: string;
  image?: string;
  redirectLink?: string;
  CatagoriesItem?: CategoryItem[];
  subTitle?: string;
}

export interface CategoryItem {
  title: string;
  slug: string;
  email?: string;
  subTitle: string;
  image: string;
  description: string;
}

export const navItems: NavItem[] = [
  {
    title: "About Us",
    slug: "about-us",
    headerDesc:
      "Discover comprehensive insights into Churchill, mission, values in one space.",
    link: "",
    gotoPageRedirect: true,
    Catagories: [
      {
        menuTitle:
          "Churchill Institute of Higher Education Governance Structure and Organisational Chart",
        headerIcon: "fi fi-rr-department-structure",
        slug: "CIHE-governance-structure",
        link: "",
        image: "/assets/course-b.png",
        CatagoriesItem: [],
      },
      {
        menuTitle: "Governance and Leadership",
        headerIcon: "fi fi-rr-leadership-alt",
        slug: "governance-and-leadership",
        link: "",
        image: "/assets/course-d.png",
      },
      {
        menuTitle: "Financial Standing, TPS & Enrolment Summary",
        headerIcon: "fi fi-rr-document",
        slug: "company-and-financial-documents",
        link: "",
        image: "/assets/course-a.png",
        CatagoriesItem: [],
      },
      {
        menuTitle: "Policies and Procedures",
        headerIcon: "fi fi-rs-process",
        slug: "policies-and-procedures",
        link: "",
        image: "/assets/course-b.png",
        redirectLink: `${siteConfig.studentHubUrl}/policies`,
        CatagoriesItem: [],
      },
      {
        menuTitle: "Gallery",
        headerIcon: "fi fi-rr-gallery",
        slug: "gallery",
        CatagoriesItem: [],
      },
    ],
  },
  {
    title: "Courses",
    link: "",
    slug: "courses",
    headerDesc:
      "Explore our diverse range of courses, each carefully designed to excel you in your chosen career path.",
    gotoPageRedirect: true,
  },
  {
    title: "Future Students",
    slug: "future-students",
    headerDesc: "Quick access to access necessary links for our students. ",
    link: "",
    Catagories: [
      {
        menuTitle: "Find an Education Agent",
        slug: "find-agent",
        headerIcon: "fi fi-rr-headphones",
        image: "/assets/course-b.png",
        link: "/find-agent",
        redirectLink: "",
      },
      {
        menuTitle: "Pre-Departure Checklist & Life in Australia",
        slug: "future-students",
        headerIcon: "fi fi-rr-calendar",
        image: "/assets/course-b.png",
        link: "/future-students",
        redirectLink: "",
      },
      {
        menuTitle: "Apply for Course Admission",
        slug: "apply-at-churchill",
        headerIcon: "fi fi-rr-chart-connected",
        image: "/assets/course-b.png",
        link: "/apply-for-course-admission",
        redirectLink: "",
      },
      {
        menuTitle: "Apply for advanced standing",
        slug: "apply-at-churchill",
        headerIcon: "fi fi-rr-chart-connected",
        image: "/assets/course-b.png",
        link: "/apply-for-advanced-standing",
        redirectLink: "",
      },
      {
        menuTitle: "Key Dates",
        slug: "upcoming-key-dates",
        headerIcon: "fi fi-rr-calendar",
        image: "/assets/course-b.png",
        link: "",
        redirectLink: `${siteConfig.studentHubUrl}/upcoming-key-dates`,
      },

      {
        menuTitle: "Blogs",
        slug: "blogs",
        headerIcon: "fi fi-rr-blog-text",
        image: "/assets/course-b.png",
        link: "/blogs",
        redirectLink: "",
      },
      {
        menuTitle: "Enquire Now",
        slug: "enquiry-now",
        headerIcon: "fi fi-rr-person-circle-question",
        image: "/assets/course-b.png",
        link: "",
        redirectLink:
          "https://forms.zohopublic.com.au/CIHE/form/StudentHubEnquiry/formperma/XilFJje5kQ-h7f4saQYbSV4kJ-kAMiG7p1QNfWEvDXs",
      },
    ],
  },
  {
    title: "Current Students",
    slug: "current-students",
    headerDesc: "Quick access to access necessary links for our students. ",
    link: "",
    Catagories: [
      {
        menuTitle: "Learning Management System (LMS)",
        headerIcon: "fi fi-rr-lesson",
        subTitle: "Access your timetable, results, trimester invoices.",
        slug: "agent-login",
        redirectLink: "https://elearning.churchill.edu.au/",
        link: "",
        image: "/assets/hero-image.jpeg",
      },
      {
        menuTitle: "Student Support",
        slug: "student-hub",
        headerIcon: "fi fi-rr-student",
        image: "/assets/course-b.png",
        link: "",
        redirectLink: siteConfig.studentHubUrl,
      },
      {
        menuTitle: "Enquire Now",
        slug: "enquiry-now",
        headerIcon: "fi fi-rr-person-circle-question",
        image: "/assets/course-b.png",
        link: "",
        redirectLink:
          "https://forms.zohopublic.com.au/CIHE/form/StudentHubEnquiry/formperma/XilFJje5kQ-h7f4saQYbSV4kJ-kAMiG7p1QNfWEvDXs",
      },
      {
        menuTitle: "Online Student Grievance Application Form",
        slug: "grievance-form",
        headerIcon: "fi fi-rr-sad",
        image: "/assets/course-b.png",
        link: "",
        redirectLink:
          "https://forms.zohopublic.com.au/CIHE/form/Grievanceform/formperma/5jf5-XC5SXb47VhUMTlxv30fih-aqYAUbQh8V3lncvQ", //
      },
      {
        menuTitle: "Current Student Request Form",
        slug: "request-form",
        headerIcon: "fi fi-rr-form",
        image: "/assets/course-b.png",
        link: "/blogs",
        redirectLink: `${siteConfig.studentHubUrl}/request-form`,
      },
      {
        menuTitle: "Blogs",
        slug: "blogs",
        headerIcon: "fi fi-rr-blog-text",
        image: "/assets/course-b.png",
        link: "/blogs",
        redirectLink: "",
      },
      {
        menuTitle: "Key Dates",
        slug: "upcoming-key-dates",
        headerIcon: "fi fi-rr-calendar",
        image: "/assets/course-b.png",
        link: "",
        redirectLink: `${siteConfig.agentHubUrl}/upcoming-key-dates`,
      },
      {
        menuTitle: "Library Portal",
        headerIcon: "fi fi-rr-diary-bookmark-down",
        subTitle: "Access your timetable, results, trimester invoices.",
        slug: "library-login",
        redirectLink: "https://churchill.softlinkhosting.com.au/",
        link: "",
        image: "/assets/hero-image.jpeg",
      },
      {
        menuTitle: "Student Enrolment and Study Load Rules",
        headerIcon: "fi fi-rr-book-alt",
        subTitle: "Enrolment and study load rules.",
        slug: "student-enrolment-and-study-load-rules",
        link: "/student-enrolment-and-study-load-rules",
        image: "/assets/hero-image.jpeg",
      },
      {
        menuTitle: "Student Handbook",
        headerIcon: "fi fi-rr-book-user",
        slug: "",
        subTitle: "",
        link: "https://churchill.edu.au/f/student-handbook",
      },
    ],
  },
  {
    title: "Login",
    link: "",
    slug: "login",
    headerDesc:
      "Login to access the Student, Agent, Library, and Staff portals.",
    Catagories: [
      {
        menuTitle: "Learning Management System (LMS)",
        headerIcon: "fi fi-rr-lesson",
        subTitle: "Access your timetable, results, trimester invoices.",
        slug: "agent-login",
        redirectLink: "https://elearning.churchill.edu.au/",
        link: "",
        image: "/assets/hero-image.jpeg",
      },
      {
        menuTitle: "Education Agent Portal",
        headerIcon: "fi fi-rr-employee-man-alt",
        subTitle: "Access your timetable, results, trimester invoices.",
        slug: "agent-login",
        redirectLink: siteConfig.agentHubUrl,
        link: "",
        image: "/assets/hero-image.jpeg",
      },
      {
        menuTitle: "Library Portal",
        headerIcon: "fi fi-rr-diary-bookmark-down",
        subTitle: "Access your timetable, results, trimester invoices.",
        slug: "library-login",
        redirectLink: "https://churchill.softlinkhosting.com.au/",
        link: "",
        image: "/assets/hero-image.jpeg",
      },
      {
        menuTitle: "Staff Portal",
        headerIcon: "fi fi-rr-employee-man",
        subTitle: "Access your timetable, results, trimester invoices.",
        slug: "staff-login",
        redirectLink: "http://staff.churchill.edu.au",
        link: "/",
        image: "/assets/hero-image.jpeg",
      },
      {
        menuTitle: "Attendance Portal",
        headerIcon: "fi fi-rr-user-trust",
        subTitle: "Student attendance.",
        slug: "student-attendance",
        redirectLink: "https://attendance.churchill.edu.au",
        image: "/assets/hero-image.jpeg",
      },
    ],
  },
  {
    title: "Education Agent Hub",
    redirectLink: siteConfig.agentHubUrl,
    slug: "agent-hub",
  },
  {
    title: "Our Campus",
    slug: "our-campuses",
  },
  {
    title: "Emergency",
    slug: "emergency-contact",
    isEmergency: true,
  },
];
