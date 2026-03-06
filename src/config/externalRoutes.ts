import { routes } from "@/config/routes";

const CHURCHILL = "churchill.edu.au";

export const externalRoutes = {
  churchill: `https://${CHURCHILL}`,
  studentHub: `https://student.${CHURCHILL}`,
  agentHub: `https://agent.${CHURCHILL}`,
  lms: "https://elearning.churchill.nsw.edu.au/",
  libraryPortal: "https://churchill.softlinkhosting.com.au/",
  libraryCatalog:
    "https://churchill.softlinkhosting.com.au/liberty/libraryHome.do",
  studentHandbook: `https://${CHURCHILL}${routes.files.slug("student-handbook")}`,
  teqsaProvider: "https://www.teqsa.gov.au/provider/mpika-holdings-pty-ltd",
  cricosInstitution:
    "https://cricos.education.gov.au/Institution/InstitutionDetails.aspx?ProviderID=4082",
  enquiryForm:
    "https://forms.zohopublic.com.au/CIHE/form/StudentHubEnquiry/formperma/XilFJje5kQ-h7f4saQYbSV4kJ-kAMiG7p1QNfWEvDXs",
  grievanceForm:
    "https://forms.zohopublic.com.au/CIHE/form/Grievanceform/formperma/5jf5-XC5SXb47VhUMTlxv30fih-aqYAUbQh8V3lncvQ",
  parramattaCampusMap: "https://maps.app.goo.gl/h7FJyoQfasvUvck79",
  melbourneCampusMap:
    "https://maps.google.com/?q=Level+8,+85+Queen+Street,+Melbourne,+VIC+3000,+Australia",
  enquireNowShortForm: "https://zfrmz.com.au/ThpIBv0BRCITpoh20tLf",
} as const;

export type ExternalRoutes = typeof externalRoutes;
