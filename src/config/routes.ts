const withParam = (basePath: string, param: string) =>
  `${basePath}/${encodeURIComponent(param)}`;

export const HOME = "/";
export const ABOUT_US = "/about-us";
export const APPLY_NOW = "/apply-now";
export const BLOGS = "/blogs";
export const CIHESA = "/cihesa";
export const CONTACT_US = "/contact-us";
export const COURSES = "/course";
export const CYBER_INCIDENT_REPORT_FORM = "/cyber-incident-report-form";
export const EMERGENCY_CONTACT = "/emergency-contact";
export const EVENTS = "/events";
export const FIND_AGENT = "/find-agent";
export const FILES = "/files";
export const FILE_REDIRECT = "/f";
export const FUTURE_STUDENTS = "/future-students";
export const LOGIN = "/login";
export const ORIENTATION = "/orientation";
export const OUR_CAMPUSES = "/our-campuses";
export const PRINT = "/print";
export const REDIRECT = "/r";
export const THANK_YOU = "/thank-you";
export const TICKET_SUBMITTED = "/ticketsubmitted";
export const UNDER_CONSTRUCTION = "/under-construction";

export const routes = {
  home: HOME,
  aboutUs: {
    root: ABOUT_US,
    welcomeFromTheCeoAndDean: `${ABOUT_US}/welcome-from-the-ceo-and-dean`,
    governanceStructure: `${ABOUT_US}/CIHE-governance-structure`,
    governanceAndLeadership: `${ABOUT_US}/governance-and-leadership`,
    governanceCouncil: `${ABOUT_US}/governance-council`,
    academicBoard: `${ABOUT_US}/academic-board`,
    auditAndRiskManagementCommittee: `${ABOUT_US}/audit-and-risk-management-committee`,
    gallery: `${ABOUT_US}/gallery`,
    teams: {
      root: `${ABOUT_US}/teams`,
      slug: (slug: string) => withParam(`${ABOUT_US}/teams`, slug),
    },
    slug: (slug: string) => withParam(ABOUT_US, slug),
  },
  applyNow: APPLY_NOW,
  blogs: {
    root: BLOGS,
    slug: (slug: string) => withParam(BLOGS, slug),
  },
  cihesa: CIHESA,
  contactUs: {
    root: CONTACT_US,
    faq: `${CONTACT_US}/faq`,
  },
  course: {
    root: COURSES,
    degree: (degree: string) => withParam(COURSES, degree),
    detail: (degree: string, course: string) =>
      withParam(withParam(COURSES, degree), course),
  },
  cyberIncidentReportForm: CYBER_INCIDENT_REPORT_FORM,
  emergencyContact: EMERGENCY_CONTACT,
  events: {
    root: EVENTS,
    slug: (slug: string) => withParam(EVENTS, slug),
  },
  files: {
    root: FILES,
    redirectRoot: FILE_REDIRECT,
    slug: (slug: string) => withParam(FILE_REDIRECT, slug),
  },
  findAgent: FIND_AGENT,
  futureStudents: FUTURE_STUDENTS,
  login: LOGIN,
  orientation: ORIENTATION,
  ourCampuses: {
    root: OUR_CAMPUSES,
    slug: (slug: string) => withParam(OUR_CAMPUSES, slug),
  },
  print: PRINT,
  redirects: {
    root: REDIRECT,
    slug: (slug: string) => withParam(REDIRECT, slug),
  },
  thankYou: THANK_YOU,
  ticketSubmitted: TICKET_SUBMITTED,
  underConstruction: UNDER_CONSTRUCTION,
  content: {
    slug: (slug: string) => withParam("", slug),
  },
} as const;

export type AppRoutes = typeof routes;
