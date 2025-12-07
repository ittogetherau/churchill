import { siteConfig } from "@/config/siteConfig";

const NEXT_PUBLIC_CHURCHILL_STUDENT_HUB_URL = siteConfig.studentHubUrl;

const NEXT_PUBLIC_CHURCHILL_AGENT_HUB_URL = siteConfig.agentHubUrl;

export interface NavItem {
  title: string;
  slug: string;
  headerDesc?: string;
  link?: string;
  gotoPageRedirect?: boolean;
  page?: Page;
  Catagories?: Category[];
  icon?: string;
  redirectLink?: string;
  isEmergency?: boolean;
}

export interface Page {
  missionVision?: VisionMission[];
  coreValue?: CoreValue[];
  message?: Message[];
  related?: Related[];
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
    page: {
      missionVision: [
        {
          title: "Our Mission",
          subTitle:
            "Our Mission is to provide rewarding learning experiences and outcomes for students wishing to enhance their careers. This is done by dedicated academics working closely throughout your degree.",
          icon: "/assets/mission-icon.png",
        },
        {
          title: "Our Vision",
          subTitle:
            "Our Vision is to be the top provider of industry-relevant education, equipping students for professional success with the help of our experienced and dedicated educators.",
          icon: "/assets/vision-icon.png",
        },
      ],
      coreValue: [
        {
          title: "Rewarding educational experiences",
          icon: "/assets/reward.png",
        },
        {
          title: "Best practice in teaching and learning",
          icon: "/assets/best-practice.png",
        },
        {
          title: "A supportive learning environment",
          icon: "/assets/supportive.png",
        },
        {
          title: "A sense of belonging and pride",
          icon: "/assets/pride.png",
        },
        {
          title: "Learning outcomes and success",
          icon: "/assets/sucess.png",
        },
      ],
      message: [
        {
          title: "MESSAGE FROM DEAN",
          image: "/assets/staff/david.jpg",
          description:
            "Thank you for your interest in courses at the Churchill Institute of Higher Education.<br/><br/> I'm delighted that you've taken the time to view our website and hope it may help you decide to make Churchill Institute of Higher Education your first choice when it comes to your future education needs. At CIHE, we believe that we are unique. The Institute is new and innovative with an enviable reputation as a provider of quality education in a caring environment. <br/><br/> Whilst our students include individuals from many backgrounds, cultures and beliefs, our focus on universal values makes us a little different from other colleges. We pride ourselves on our ethical dealings with students and stakeholders and ensure that every student is treated as an individual. As Dean/CEO, my door is always open to students, whether to discuss their course, personal concerns or simply just to pass the time of day. At our levels of CIHE, students are our number one priority. We are all aware that today's corporate world is a very competitive place and organisations are increasingly seeking employees with ‘the right attitude'. To address this, we focus on the whole individual. Our students are encouraged to develop and demonstrate an attitude that's appealing to prospective employers based on respect for others, honesty, integrity, loyalty and a strong work ethic. These attributes are not only important in our work life but also in our personal life - they help us to be successful individuals.",
        },
        {
          title: "About Our Institute",
          image: "/assets/churchill-building.webp",
          description:
            "Churchill Institute of Higher Education's campus is located at Level 1, 16-18 Wentworth Street Parramatta NSW 2150 a major urban area of Sydney with ample access to employment, social and accommodation opportunities. The Campus is walking distance to the main public transport located at Parramatta Station, close to business facilities with touristic locations of Sydney a short train ride away. The Campus is spacious and well-equipped. The campus pro vides facilities specifically designed to provide students and staff with premises and equipment to promote and foster excellence in teaching and learning. Its facilities are allocated for teaching purpose and all other essential academic activities such as student services and academic activities as well as all general administration. New students joining Churchill Institute of Higher Education will attend the Orientation Program conducted at the beginning of each semester where details about living, getting around and about, and studying in Parramatta and Sydney are provided. The Campus is equipped with an in-house Library where students and staff have access to a number of textbooks and online databases for their reference. The library will ensure adequate computers are available for students to access online databases and the library catalogue.",
        },
      ],
      related: [
        {
          title: "Churchill Institute of Higher Education Governance",
          image: "/assets/course-a.png",
          slug: "CIHE-governance-structure",
          link: "",
          subTitle: "Bachelor of Business",
          description:
            "Thank you for your interest in courses at the Churchill Institute of Higher Education. I'm delighted that you've taken the time to view our website and hope it may help you decide to make Churchill Institute of Higher Education your first choice when it comes to your future education needs. At CIHE, we believe that we are unique. The Institute is new and innovative with an enviable reputation as a provider of quality education in a caring environment. Whilst our students include individuals from many backgrounds, cultures and beliefs, our focus on universal values makes us a little different from other colleges. We pride ourselves on our ethical dealings with students and stakeholders and ensure that every student is treated as an individual. As Dean/CEO, my door is always open to students, whether to discuss their course, personal concerns or simply just to pass the time of day. At our levels of CIHE, students are our number one priority. We are all aware that today's corporate world is a very competitive place and organisations are increasingly seeking employees with ‘the right attitude'. To address this, we focus on the whole individual. Our students are encouraged to develop and demonstrate an attitude that's appealing to prospective employers based on respect for others, honesty, integrity, loyalty and a strong work ethic. These attributes are not only important in our work life but also in our personal life - they help us to be successful individuals.",
        },
        {
          title:
            "Churchill Institute of Higher Education Governance Structure and Organisational Chart",
          image: "/assets/course-b.png",
          slug: "CIHE-organisational-chart",
          link: "",
          subTitle: "Bachelor of Business",
          description:
            "Churchill Institute of Higher Education's campus is located at Level 1, 16-18 Wentworth Street Parramatta NSW 2150 a major urban area of Sydney with ample access to employment, social and accommodation opportunities. The Campus is walking distance to the main public transport located at Parramatta Station, close to business facilities with touristic locations of Sydney a short train ride away. The Campus is spacious and well-equipped. The campus pro vides facilities specifically designed to provide students and staff with premises and equipment to promote and foster excellence in teaching and learning. Its facilities are allocated for teaching purpose and all other essential academic activities such as student services and academic activities as well as all general administration. New students joining Churchill Institute of Higher Education will attend the Orientation Program conducted at the beginning of each semester where details about living, getting around and about, and studying in Parramatta and Sydney are provided. The Campus is equipped with an in-house Library where students and staff have access to a number of textbooks and online databases for their reference. The library will ensure adequate computers are available for students to access online databases and the library catalogue.",
        },
        {
          title: "Financial Standing, TPS & Enrolment Summary",
          image: "/assets/course-d.png",
          slug: "company-and-financial-documents",
          link: "",
          subTitle: "Bachelor of Business",
          description:
            "Churchill Institute of Higher Education's campus is located at Level 1, 16-18 Wentworth Street Parramatta NSW 2150 a major urban area of Sydney with ample access to employment, social and accommodation opportunities. The Campus is walking distance to the main public transport located at Parramatta Station, close to business facilities with touristic locations of Sydney a short train ride away. The Campus is spacious and well-equipped. The campus pro vides facilities specifically designed to provide students and staff with premises and equipment to promote and foster excellence in teaching and learning. Its facilities are allocated for teaching purpose and all other essential academic activities such as student services and academic activities as well as all general administration. New students joining Churchill Institute of Higher Education will attend the Orientation Program conducted at the beginning of each semester where details about living, getting around and about, and studying in Parramatta and Sydney are provided. The Campus is equipped with an in-house Library where students and staff have access to a number of textbooks and online databases for their reference. The library will ensure adequate computers are available for students to access online databases and the library catalogue.",
        },
      ],
    },
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
        CatagoriesItem: [
          {
            title: "Associate Prof Brendan Boyle",
            slug: "associate-prof-brendan-boyle",
            email: "brendan-boyle@churchil.mail",
            subTitle: "Chair of Governing council",
            image: "/assets/staff/brendan-boyle.jpg",
            description: `<p>Before joining Newcastle, Assoc Prof Boyle lectured in University College Dublin, Centro de Estudios Superiores Universitarios de Galicia, Spain and the University of Sydney, Australia. Assoc Prof Boyle has also delivered units and guest lectures at universities in Malaysia, Hong Kong, and China. Assoc Prof Boyle was a graduate member of the Chartered Institute of Personnel & Development (CIPD) the world's largest Chartered management development professional body. Assoc Prof Boyle completed a master's degree in business studies in University College Dublin and was awarded his PhD from the Discipline of International Business at University of Sydney 2009. </p> <p>Brendan's primary research interests include international HRM, knowledge management/sharing in organizations and top management teams. He has published research papers on knowledge creation and knowledge sharing in MNEs. He is currently involved in three major projects examining, collaboration in health care organizations, the management teams in the subsidiaries of multinational enterprises in China (MNEs) and the HRM practices of MNEs. Combined, these collaborative projects involve partnerships between Newcastle Business School and universities in Europe, North America, Latin America and Asia.</p><p>Brendan is also co-director of the Health Services Research and Innovation Centre at UoN (HSRIC). This centre aims to improve the design and management health services with particular emphasis interdisciplinary approaches to addressing critical challenges. Brendan is particularly interested in global health services research as an important emerging research area that integrates issues of public policy and health services development. Brendan has a particular focus on the mobility of health professionals - issues of immigration, expatriation and professional institutions. </p>`,
          },
          {
            title: "David Knight",
            slug: "david-knight",
            email: "david-knight@churchil.mail",
            subTitle: "CEO/ Dean",
            image: "/assets/staff/david.jpg",
            description: `<p>Recently appointed as CEO & Dean of Churchill Institute of Higher Education  in March 2025, I bring to Churchill over 15 years of executive leadership experience in higher (international) education - gained in both the private and public sectors. My job essentially is to work with and implement our Governing Council's ambitious strategy for Churchill; and to maximise our students experience by delivering academically robust and career-oriented courses, where our  students are supported, academically challenged and valued to prepare them for life after Churchill. </p>`,
          },
          {
            title: "Assoc Prof Ravi Seethamraju",
            slug: "assoc-prof-ravi-seethamraju",
            email: "ravi-seethamraju@churchil.mail",
            subTitle: "Member of Governing council",
            image: "/assets/staff/assoc-prof-ravi-seethamraju.jpg",
            description: `<p>Ravi teaches and researches in the areas of technology adoption and accounting systems. He has a PhD in business, Masters in Industrial Engineering and a post graduate Diploma in Adult Education. Has 24 years of teaching, curriculum design and research experience in four major Australian Universities (Uni Sydney, MGSM, University of Western Sydney and Queensland University of Technology) and 10 years of management consulting experience.</p><p>His research explores the evolving relationships between IT innovations and performance in organizations and the role of IT innovations in student learning experiences and ‘work-readiness'. Funded by national and university research grants, Ravi has so far published over 100 articles in leading journals and international conferences. His current external engagements and leadership roles include membership of education committee of the Association for Information Systems, academic boards of higher education institutions, and earlier served as chairperson for research ethics committee and Supply Chain Council ANZ. His current research projects include adoption of AI and blockchain technologies in auditing, adoption of analytics in healthcare and digital transformation. </p>`,
          },

          {
            title: "Ron Day",
            slug: "ron-day",
            email: "ron-day@churchil.mail",
            subTitle:
              "Member of Governing council, Chair of Audit & Risk Management Commitee",
            image: "/assets/staff/ron-day.jpg",
            description: `<p>Ron is currently a casual academic at UNSW since 2023 and prior to that was a full time academic/senior lecturer in Accounting at the University of Sydney Business School (2007-2022), lecturer at Macquarie University (2003-2006) Newcastle University (1991-2003), and Avondale University (1986-1990)  His education qualifications are an MCom in Accounting  (UNSW), MA in Business Research (Macquarie), BE for Qualified Teachers (Curtin), and BA in Business (PUC)/DipT in Secondary Teaching (Avondale), as well as attaining professional accounting qualifications as a CPA in 1993 and FCPA in 2016. He has received numerous Deans' Citation for Teaching awards from the University of Sydney Business School, a VC Award for Excellence from Macquarie University for curriculum design, and two CPA Australia NSW President's Awards for Excellence  for his contribution to the professional body. He has considerable experience on internal and external University review/advisory boards, and consulting and external reviewer for several Higher Education Institutions to assist them to gain TEQSA and/or CPA/CAANZ professional accounting accreditations.  Ron was appointed by Churchill Institute of Higher Education to the Audit and Risk Committee at the beginning of 2022 and became the Chair of that committee and a member of the Governing Council in July 2023.</p>`,
          },
          {
            title: "Assoc Prof Maria Varua",
            slug: "assoc-prof-maria-varua",
            email: "maria-varua@churchil.mail",
            subTitle: "Chair of Academic Board",
            image: "/assets/staff/avatar.png",
            description: `<span>TO BE ADDED</span>`,
          },
          {
            title: "Professor Ashish Malik",
            slug: "professor-ashish-malik",
            email: "ashish-malik@churchil.mail",
            subTitle: "Member of the Management Discipline",
            image: "/assets/staff/professor-ashish-malik.jpg",
            description: `<p>Professor Ashish Malik , PhD has been the Head of the Management Discipline at University of Newcastle, Australia. In his earlier role in New Zealand, Ashish was the Head of the Centre for Management at The Open Polytechnic of New Zealand. Ashish is the Professor of Human Resource Management at Queen's Business School and the Director of The William J Clinton Leadership Institute at Queen's University of Belfast. Ashish holds a PhD from Victoria University of Wellington, New Zealand, and an MA (PM&IR) from TISS, Mumbai, India. Additionally, Ashish has served as the Program Convenor of the Master of Human Resource Management Program at the University of Newcastle, Australia and for the Graduate Diploma in HRM at The Open Polytechnic of New Zealand. Ashish has published 10 books and presented more than 150 research papers in the field of Human Capital, Indian Culture, Strategic HRM, Managing People in a post-crisis event and HRM and disruptive technologies such as Artificial Intelligence. Ashish has more than $2.8 million in grant income for various sole and collaborative inter-disciplinary projects against his name. Ashish's research has been accepted/published in several A*/A journals such as <i> Human Resource Management (US) (ABDC Rank A* and FT-50), Human Resource Management Journal (ABDC A/ABS4*), British Journal of Management, Harvard Business Review(FT-50), MIT Sloan Management Review (FT-50), Industrial Marketing Management, International Journal of Human Resource Management, Health Care Management Review, International Journal of Manpower, Knowledge Management Research & Practice, Organizational Dynamics, Personnel Review and Journal of International Management,</i> among others. Ashish is an Associate Editor - of the Human Resource Management Journal (ABDC-A), International journal of Management Reviews (ABDC- A), and the Journal of Business Research  (ABDC Rank-A).  Ashish is also on the Editorial Boards of HRMR (ABDC Rank- A), JSTP (ABDC-Rank A) and Journal of Knowledge Management (ABDC Rank-A).</p>`,
          },
          {
            title: "Dr Joo-Gim Heaney",
            slug: "dr-joo-gim-heaney",
            email: "joo-gim-heaney@churchil.mail",
            subTitle: "Member of Audit & Risk Management Commitee",
            image: "/assets/staff/dr-joo-gim-heaney.jpg",
            description: `<p>Dr Joo-Gim Heaney has worked at a number of universities, including in the USA and Australia, and private higher education providers in positions related to higher education leadership positions, and corporate and academic governance.  Dr Heaney was the Dean of the School of Business at the University of Notre Dame Australia, Sydney, and held senior academic positions at Griffith University and at Franklin & Marshall College (USA). Dr Heaney was an External Accreditation Reviewer for the Pennsylvania State Department of Education, and a Board member of the Suzuki Association of the Americas for Music Education (USA, Canada and South America). </p><p>Dr Heaney has received numerous awards and grants in Australia and the USA, including a Learning and Teaching Citation at Griffith University. She has a total of more than thirty refereed publications in journals including the Journal of Financial Services Marketing; International Journal of Diversity in Organisations, Communities and Nations; Journal of International Consumer Marketing; International Journal of Nonprofit and Voluntary Sector Marketing; International Journal of Bank Marketing; as well as refereed international business and marketing conference publications.</p>`,
          },
          {
            title: "Dr Angela Hecimovic",
            slug: "dr-angela-hecimovic",
            email: "angela-hecimovic@churchil.mail",
            subTitle: "Member of Audit and Risk management",
            image: "/assets/staff/dr-angela-hecimovic.jpg",
            description: `<p>Dr Angela Hecimovic BEcon(Hons) Sydney; PhD Macq.; GCHEd Sydney, CA, PMIAA University of Sydney Business School Senior Lecturer & Dalyell Program Director, and Chair of IIA Australia's Education Committee. Her educational practice challenges students to critically evaluate the role of Audit and Assurance in meeting society’s expectations and to join the profession. Her research delves into contemporary factors like non-financial information, sustainability, ESG reporting, and AI's impact on the audit profession.</p>`,
          },
        ],
      },
      {
        menuTitle: "Financial Standing, TPS & Enrolment Summary",
        headerIcon: "fi fi-rr-document",
        slug: "company-and-financial-documents",
        link: "",
        image: "/assets/course-a.png",
        // redirectLink: "/assets/",
        CatagoriesItem: [],
      },
      {
        menuTitle: "Policies and Procedures",
        headerIcon: "fi fi-rs-process",
        slug: "policies-and-procedures",
        link: "",
        image: "/assets/course-b.png",
        redirectLink: `${NEXT_PUBLIC_CHURCHILL_STUDENT_HUB_URL}/policies`,
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
    page: {},
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
    gotoPageRedirect: true,
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
        redirectLink: "https://elearning.churchill.nsw.edu.au/",
        link: "",
        image: "/assets/hero-image.jpeg",
      },
      {
        menuTitle: "Student Support",
        slug: "student-hub",
        headerIcon: "fi fi-rr-student",
        image: "/assets/course-b.png",
        link: "",
        redirectLink: NEXT_PUBLIC_CHURCHILL_STUDENT_HUB_URL,
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
        redirectLink: `${NEXT_PUBLIC_CHURCHILL_STUDENT_HUB_URL}/request-form`,
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
    ],
  },
  {
    title: "Login",
    link: "",
    page: {},
    slug: "login",
    headerDesc:
      "Login to access the Student, Agent, Library, and Staff portals.",
    gotoPageRedirect: true,
    Catagories: [
      {
        menuTitle: "Learning Management System (LMS)",
        headerIcon: "fi fi-rr-lesson",
        subTitle: "Access your timetable, results, trimester invoices.",
        slug: "agent-login",
        redirectLink: "https://elearning.churchill.nsw.edu.au/",
        link: "",
        image: "/assets/hero-image.jpeg",
      },
      {
        menuTitle: "Agent Portal",
        headerIcon: "fi fi-rr-employee-man-alt",
        subTitle: "Access your timetable, results, trimester invoices.",
        slug: "agent-login",
        redirectLink: NEXT_PUBLIC_CHURCHILL_AGENT_HUB_URL,
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
        redirectLink: "http://staff.churchill.nsw.edu.au",
        link: "/",
        image: "/assets/hero-image.jpeg",
      },
      {
        menuTitle: "Attendance Portal",
        headerIcon: "fi fi-rr-user-trust",
        subTitle: "Student attendance.",
        slug: "student-attendance",
        redirectLink: "https://attendance.churchill.nsw.edu.au",
        image: "/assets/hero-image.jpeg",
      },
    ],
  },
  {
    title: "Agent Hub",
    redirectLink: siteConfig.agentHubUrl,
    page: {},
    slug: "agent-hub",
  },
  {
    title: "Our Campus",
    page: {},
    slug: "our-campuses",
  },
  {
    title: "Emergency",
    page: {},
    slug: "emergency-contact",
    isEmergency: true,
  },
];
