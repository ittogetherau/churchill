import { ReactElement } from "react";

// Environment variables type
interface EnvironmentVariables {
  NEXT_PUBLIC_CHURCHILL_STUDENT_HUB_URL?: string;
  NEXT_PUBLIC_CHURCHILL_AGENT_HUB_URL?: string;
}

// Core types for the navigation structure
interface MissionVisionItem {
  title: string;
  subTitle: string;
  icon: string;
}

interface CoreValueItem {
  title: string;
  icon: string;
}

interface MessageItem {
  title: string;
  image: string;
  description: string;
}

interface RelatedItem {
  title: string;
  image: string;
  slug: string;
  link: string;
  subTitle: string;
  description: string;
}

interface StaffMember {
  title: string;
  slug: string;
  email: string;
  subTitle: string;
  image: string;
  description: string;
}

interface CourseDetailItem {
  title: string;
  description: string;
  icon: any;
}

interface TabbedPaneDataItem {
  description: string;
}

interface CategoryItem {
  menuTitle: string;
  headerIcon: string;
  slug: string;
  link?: string;
  image?: string;
  redirectLink?: string;
  subTitle?: string;
  icon?: string | ReactElement;
  courseCode?: string;
  heroImage?: string;
  faculty?: string;
  isAccredited?: boolean;
  accredited?: string[];
  courseDetails?: CourseDetailItem[];
  tabbedPaneData?: TabbedPaneDataItem[];
  CatagoriesItem?: StaffMember[] | any[];
}

interface PageContent {
  missionVision?: MissionVisionItem[];
  coreValue?: CoreValueItem[];
  message?: MessageItem[];
  related?: RelatedItem[];
}

interface NavItem {
  title: string;
  slug: string;
  headerDesc: string;
  link: string;
  page?: PageContent;
  Catagories?: CategoryItem[];
  tabTitle?: Array<{ title: string }>;
}

export type TNavItems = NavItem[];

export type {
  MissionVisionItem,
  CoreValueItem,
  MessageItem,
  RelatedItem,
  StaffMember,
  CourseDetailItem,
  TabbedPaneDataItem,
  CategoryItem,
  PageContent,
  NavItem,
};

const NEXT_PUBLIC_CHURCHILL_STUDENT_HUB_URL =
  process.env.NEXT_PUBLIC_CHURCHILL_STUDENT_HUB_URL;

const NEXT_PUBLIC_CHURCHILL_AGENT_HUB_URL =
  process.env.NEXT_PUBLIC_CHURCHILL_AGENT_HUB_URL;

export const navItems: TNavItems = [
  {
    title: "About Us",
    slug: "about-us",
    headerDesc:
      "Discover comprehensive insights into Churchill, mission, values in one space.",
    link: "",
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
        // {
        //   title: "Governance and Leadership",
        //   image: "/assets/course-c.png",
        //   slug: "governance-and-leadership",
        //   link: "",
        //   subTitle: "Bachelor of Business",
        //   description:
        //     "Churchill Institute of Higher Education's campus is located at Level 1, 16-18 Wentworth Street Parramatta NSW 2150 a major urban area of Sydney with ample access to employment, social and accommodation opportunities. The Campus is walking distance to the main public transport located at Parramatta Station, close to business facilities with touristic locations of Sydney a short train ride away. The Campus is spacious and well-equipped. The campus pro vides facilities specifically designed to provide students and staff with premises and equipment to promote and foster excellence in teaching and learning. Its facilities are allocated for teaching purpose and all other essential academic activities such as student services and academic activities as well as all general administration. New students joining Churchill Institute of Higher Education will attend the Orientation Program conducted at the beginning of each semester where details about living, getting around and about, and studying in Parramatta and Sydney are provided. The Campus is equipped with an in-house Library where students and staff have access to a number of textbooks and online databases for their reference. The library will ensure adequate computers are available for students to access online databases and the library catalogue.",
        // },
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
        // redirectLink: "/assets/CIHE-Governance-Structure-December-2022.pdf",
        CatagoriesItem: [],
      },
      // {
      //   menuTitle: "Churchill Institute of Higher Education Leadership",
      //   headerIcon: "fi fi-rr-chart-network",
      //   slug: "CIHE-organisational-chart",
      //   link: "",
      //   image: "/assets/course-c.png",
      //   // redirectLink: "/assets/Churchill-IHE-Org-Chart_v2.1-13-Dec-2021.pdf",
      //   CatagoriesItem: [],
      // },
      {
        menuTitle: "Governance and Leadership",
        headerIcon: "fi fi-rr-leadership-alt",
        slug: "governance-and-leadership",
        link: "",
        image: "/assets/course-d.png",

        CatagoriesItem: [
          // {
          //   title: "Emeritus Prof Jim Psaros",
          //   slug: "emeritus-prof-jim-psaros",
          //   email: "jim-psaros@churchil.mail",
          //   subTitle: " Chair of Governing council",
          //   image: "/assets/staff/emeritus-prof-jim-psaros.jpg",
          //   description: `<p>Emeritus Professor Jim Psaros was a Professor of Accounting at the University of Newcastle until 2015. He held senior positions at the University of Newcastle including Deputy Head - Faculty of Business and Law, Assistant Dean Teaching and Learning, Director of Executive and Corporate Programs, Head of the Department of Accounting and Finance, and Academic Director of the Sydney Campus. </p> <p>Prior to entering academia, Emeritus Professor Psaros was employed for several years in Chartered Accounting. He has experience in Australia and overseas working for Big 4 Accounting Firms. For more than 20 years he has taught and researched at Australian and British Universities. He has sat on the Board of Directors of companies and the audit committee of government authorities. He has both extensive professional accounting and research experience. </p> <p> Emeritus Professor Psaros has a PhD in Accounting from the University of New South Wales. Throughout his research career, Emeritus Professor Psaros has focused on issues of practical importance. He has conducted research in a range of areas including auditing and fraud, the inadequacies of Australian accounting standards, and more recently, corporate governance mechanisms. Emeritus Professor Psaros has published extensively and has made many presentations at professional and academic forums. Since Emeritus Professor Psaros retired from full-time academia in 2015, he has engaged in various consulting activities in the Higher Education Sector. </p>`,
          // },
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
          // {
          //   title: "Professor Rebecca Mitchell",
          //   slug: "professor-rebecca-mitchell",
          //   email: "rebecca-mitchell@churchil.mail",
          //   subTitle: "Member of Governing council",
          //   image: "/assets/staff/avatar.png",
          //   description: `<p>Rebecca is a Professor at the Macquarie University Business School and Director of the Macquarie University Health at Work Research Centre. Prior to this, Rebecca worked as Associate Dean Governance, Accreditation, Rankings and Business Intelligence and simultaneously as Associate Dean Postgraduate Programs and Pathways, taking a leadership role in rankings, accreditation, and curriculum governance.<p>In 2021, she secured international accreditation from the Association for MBAs, placing Macquarie University in the top 2% of business schools globally.<p>Rebecca's research interests lie in the area of organisational behaviour, including <em>health and wellbeing at work</em>, <em>team dynamics</em>, <em>leadership</em>, and <em>social identity in organizations</em>, particularly (but not exclusively) in healthcare organisations. Rebecca’s current research programs focus on <em>resilience and wellbeing at work</em>. She is also interested in the <em>impact of gender at work</em> as well as <em>team performance</em>, particularly <em>team innovation</em>.`,
          // },
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
      // {
      //   menuTitle: "Accreditation",
      //   headerIcon: "fi fi-rr-legal",
      //   slug: "accreditation",
      //   image: "/assets/course-c.png",
      //   CatagoriesItem: [],
      // },
      {
        menuTitle: "Gallery",
        headerIcon: "fi fi-rr-gallery",
        slug: "gallery",
        CatagoriesItem: [],
      },
      // {
      // menuTitle: "Approved Agents",
      // headerIcon: "fi fi-rr-employee-man-alt",
      // slug: "approved-agents",
      // link: "",
      // image: "/assets/course-d.png",
      // CatagoriesItem: [],
      // },
    ],
  },
  {
    title: "Courses",
    link: "",
    page: {},
    slug: "courses",
    headerDesc:
      "Explore our diverse range of courses, each carefully designed to excel you in your chosen career path.",
    // tabTitle: [
    //   { title: "Overview" },
    //   { title: "Entry Requirements" },
    //   { title: "Course Structure" },
    //   { title: "How To Apply" },
    //   { title: "Fees and Scholarship" },
    // ],
    // Catagories: [
    //   {
    //     icon: <RiExchangeDollarFill />,
    //     menuTitle: "Major in Accounting",
    //     headerIcon: "fi fi-rr-calculator-math-tax",
    //     subTitle:
    //       "Master the language of business, ensuring financial integrity and making informed decisions that drive organizational success.",
    //     slug: "major-in-accounting",
    //     link: "",
    //     icon: "/assets/major_accounting.png",
    //     courseCode: "CIHE427",
    //     heroImage: "/assets/course-a.webp",
    //     faculty: "Bachelors of Business",
    //     isAccredited: true,
    //     accredited: [
    //       "/assets/Chartered_Accountants.png",
    //       "/assets/cpa-australia.png",
    //     ],
    //     courseDetails: [
    //       {
    //         title: "duration",
    //         description: "3 Years",
    //         icon: <MdOutlineAccessTime />,
    //       },
    //       {
    //         title: "Delivery Mode",
    //         description: "Face To Face",
    //         icon: <LuScanFace />,
    //       },
    //       {
    //         title: "Credit points to complete",
    //         description: "240",
    //         icon: <CiViewList />,
    //       },
    //       {
    //         title: "IELTS Score",
    //         description: "6.0 or above",
    //         icon: <MdOutlineGrade />,
    //       },
    //       {
    //         title: "FEE-HELP applicable",
    //         description: "Fees",
    //         icon: <BiDollarCircle />,
    //       },
    //       {
    //         title: "Semester 1 : MAR 11 <br /> Semester 2: JUL 22",
    //         description: "Start Dates",
    //         icon: <IoCalendarClearOutline />,
    //       },
    //     ],
    //     tabbedPaneData: [
    //       {
    //         description:
    //           "<h3>Overview of Accounting Major</h3><p>The Accounting major provides students with a broad understanding of the accounting theory and practices. By building their knowledge on the business fundamentals through the completion of the core units of the Bachelor of Business Degree, the Accounting Major, through specialisation in areas of accounting, including financial and management accounting, auditing, and business finance, exposes the students to the mechanics of the accounting and finance functions within a business setting. Students majoring in the accounting major not only gain knowledge in theoretical aspects of accounting and financial management, they also gain exposure in the application of the knowledge in solving real business cases and problems. In addition to gaining specialised knowledge in accounting and finance, students also gain work-ready skills that enables them to engage with stakeholders in a business setting and with the society in an ethical and socially responsible manner. Graduates of the accounting major are informed, competent and responsible global citizens, and possess skills to effectively lead and manage diverse range of organisations - in profit or nonprofit, public or private, local or multinational organisations, and in domestic or international settings. They may gain employment in a diversity of roles in areas such as auditing, taxation, and financial and management accounting, by building on the knowledge gained through the accounting specialisation</p>",
    //       },
    //       {
    //         description:
    //           "<h3>Admission Requirements</h3><p>The admission applications must be submitted to the Admissions Manager before the application closing date. All applications must include:<u<l><li>completed Admission Application form for international students;<li>academic record of study previously undertaken;<li>where applicable, proof of English language proficiency;<li>a copy of the applicant's passport/photo ID;<li>other documentation to demonstrate admission criteria are met.</u<l><h3><h3>Test Acceptable Score</h3><ul><li>IELTS 6.0 (or better) (no component lower than 5.5)<li>TOEFL (paper-based) 550 (or better) (with minimum test of written English score of 4.5)<li>TOEFL (electronic) 213 (or better) (with essay rating of at least 4.5) TOEFL (internet-based) 80 (or better) (with 19 minimum in all bands)<li>Pearson (PTE Academic) 50 (or better) (no communicative score lower than 45)<li>Successful completion of an approved English for Academic Purposes (EAP) course</ul>",
    //       },
    //       {
    //         description: `<h3>Year 1</h3><table><tr><th>Semester 1</th><th></th><th>Semester 2</th><th></th></tr><tr><td>ACC101</td><td>Accounting for Decision Making</td><td>LAW101</td><td>Business and Company Law</td></tr><tr><td>BUS101</td><td>Business Communication</td><td>ECO101</td><td>Business Economics</td></tr><tr><td>INF101</td><td>Business Information System</td><td>MKT101</td><td>Principles of Marketing</td></tr><tr><td>MGN101</td><td>Foundation of Management</td><td>BST101</td><td>Business Statistics and Data Analytics</td></tr></table><h3>Year 2</h3><table><tr><th>Semester 1</th><th></th><th>Semester 2</th><th></th></tr><tr><td>ACC201</td><td>Financial Accounting</td><td>ACC203</td><td>Corporate Financial Reporting</td></tr><tr><td>ACC202</td><td>Managerial Accounting</td><td>ACC204</td><td>Accounting Theory</td></tr><tr><td></td><td>Elective 1  Level 200 Unit</td><td></td><td>Elective 3  Level 200 Unit</td></tr><tr><td></td><td>Elective 2  Level 200 Unit</td><td></td><td>Elective 4  Level 200 Unit</td></tr></table><h3>Year 3</h3><table><tr><th>Semester 1</th><th></th><th>Semester 2</th><th></th></tr><tr><td>ACC301</td><td>Corporate Accounting</td><td>ACC302</td><td>Auditing</td></tr><tr><td>TAX301</td><td>Taxation</td><td>FIN301</td><td>Business Finance</td></tr><tr><td>MGN301</td><td>Leadership and Management</td><td>MGN302</td><td>Corporate Social Responsibility</td></tr><tr><td></td><td>Elective 5  Level 300 Unit</td><td></td><td>Elective 6  Level 300 Unit</td></tr></table>`,
    //       },
    //       {
    //         description:
    //           "<h2>How to Apply</h2><p>Applications for admission to a course by Domestic or International students can be made directly to Churchill Institute of Higher Education. The admission applications must be submitted to the Admissions Manager before the application closing date. All applications must include:<ul><li>completed Admission Application form;<li>academic record of study previously undertaken;<li>proof of English language proficiency;<li>a copy of the applicant's passport;<li>any documentary evidence that admission criteria are met</ul>",
    //       },
    //       {
    //         description:
    //           "<h3>Tuition Fee</h3><ul><li>Domestic Students: $1950/subject<li>International Students: $2150/subject</ul>",
    //       },
    //     ],
    //   },
    //   {
    //     icon: <RiExchangeDollarFill />,
    //     menuTitle: "Major in Information Systems",
    //     headerIcon: "fi fi-rs-guide-alt",
    //     subTitle:
    //       "The Information Systems (IS) Major aims to provide students with a comprehensive understanding of information technology concepts.",
    //     slug: "major-in-information-systems",
    //     link: "",
    //     icon: "/assets/courses/major-it.webp",
    //     courseCode: "CIHE427",
    //     heroImage: "/assets/course-b.webp",
    //     faculty: "Bachelors of Business",
    //     courseDetails: [
    //       {
    //         title: "duration",
    //         description: "3 Years",
    //         icon: <MdOutlineAccessTime />,
    //       },
    //       {
    //         title: "Delivery Mode",
    //         description: "Face To Face",
    //         icon: <LuScanFace />,
    //       },
    //       {
    //         title: "Credit points to complete",
    //         description: "240",
    //         icon: <CiViewList />,
    //       },
    //       {
    //         title: "IELTS Score",
    //         description: "6.0 or above",
    //         icon: <MdOutlineGrade />,
    //       },
    //       {
    //         title: "FEE-HELP applicable",
    //         description: "Fees",
    //         icon: <BiDollarCircle />,
    //       },
    //       {
    //         title: "Semester 1 : MAR 11 <br /> Semester 2: JUL 22",
    //         description: "Start Dates",
    //         icon: <IoCalendarClearOutline />,
    //       },
    //     ],
    //     tabbedPaneData: [
    //       {
    //         description:
    //           "<h2>Overview</h2><p> The Information Systems (IS) Major aims to provide students with a comprehensive understanding of information technology concepts. Students will learn how to integrate conceptual to practical skills in creating and managing information systems within organisations. Building upon the business major, students will be exposed to IS issues and develop skill sets that integrate both technical and business perspectives. Students undertaking the IS major will gain specialised IT skills to develop and manage organisational computer systems applications. Students will develop understanding on how to effectively use IT in various business and organisational settings. IS courses include, for example, principles of programming, database management, system analysis and design, strategic IT management, and IS projects. Graduates of the IS major will be equipped with knowledge and skills required for them to pursue a professional career in the IT industry. Graduates may gain employment in various roles related to IT specialists such as systems analyst, IT consultant, IT project management. These roles involve helping firms with achieving the strategic and operational goals through the use of IT.</p>",
    //       },
    //       {
    //         description: `<h2>Entry Requirements</h2><p>The admission applications must be submitted to the Admissions Manager before the application closing date. All applications must include:</p><ul><li>completed Admission Application form for international students;</li><li>academic record of study previously undertaken;</li><li>where applicable, proof of English language proficiency;</li><li>a copy of the applicant's passport/photo ID;</li><li>other documentation to demonstrate admission criteria are met.</li></ul>`,
    //       },
    //       {
    //         description:
    //           "<h3>Year 1</h3><table><tr><th>Semester 1<th><th>semester 2<th><th></th><tr><td>ACC101<td>Accounting for Decision Making<td>LAW101<td>Business and Company Law<tr><td>BUS101<td>Business Communication<td>ECO101<td>Business Economics<tr><td>INF101<td>Business Information System<td>MKT101<td>Principles of Marketing<tr><td>MGN101<td>Foundation of Management<td>BST101<td>Business Statistics and Data Analytics</table><h3>Year 2</h3><table><tr><th>Semester 1<th><th>semester 2<th><th></th><tr><td>INF201<td>Principles of Programming<td>MNG201<td>Project Management<tr><td>INF202<td>User Interface Design<td>INF203<td>Database Design and Management<tr><td><td>Elective 1 - Level 200 Unit<td><td>Elective 3 - Level 200 Unit<tr><td><td>Elective 2 - Level 200 Unit<td><td>Elective 4 - Level 200 Unit</table><h3>Year 3</h3><table><tr><th>Semester 1<th><th>semester 2<th><th></th><tr><td>INF301<td>System Analysis and Design<td>INF303<td>Business Intelligence and Analytics<tr><td>INF302<td>IT Strategic Management<td>INF304<td>Information System Project<tr><td>MGN301<td>Leadership and Management<td>MGN302<td>Corporate Social Responsibility<tr><td><td>Elective 5 - Level 300 Unit<td><td>Elective 6 - Level 300 Unit</table>",
    //       },
    //       {
    //         description:
    //           "<h2>How to Apply</h2><p>Applications for admission to a course by Domestic or International students can be made directly to Churchill Institute of Higher Education. The admission applications must be submitted to the Admissions Manager before the application closing date. All applications must include:<ul><li>completed Admission Application form;<li>academic record of study previously undertaken;<li>proof of English language proficiency;<li>a copy of the applicant's passport;<li>any documentary evidence that admission criteria are met</ul>",
    //       },
    //       {
    //         description: `<h1>Bachelor of Business</h1><h2>Major in Information Systems</h2><table border=1><thead><tr><th>Major in Information Systems<th>Per Course<th>Per Semester<th>Per Year<th>Total Cost<tbody><tr><td>Domestic Students<td>$1,950<td>$7,800<td>$15,600<td>$46,800<tr><td>International Students<td>$2,150<td>$8,600<td>$17,200<td>$51,600</table><h2>Supplementary Fees</h2><table border=1><thead><tr><th>Item<th>Fee<th>Notes<tbody><tr><td>Re-Issue of Student Card<td>$20.00<td><tr><td>Re-Issue of Academic Transcript<td>$50.00<td><tr><td>Re-Issue of Testamur /Certificate<td>$50.00<td><tr><td>Re-Issue of CoE after cancellation<td>$250.00<td><tr><td>Re-exam or Reassessment Fee<td>$200.00 per subject<td><tr><td>Late payment of tuition fees<td>$100.00 per instalment<td>This fee is applicable when tuition fees have not been paid as per the due date published on Letter of Offer<tr><td>Change of course fee<td>$200.00<td>Including change of Major/ Or change to double major<tr><td>Document processing Fees<td>$50.00<td>Enrolment Letter/ Leave letter</table>`,
    //       },
    //     ],
    //   },
    //   {
    //     icon: <RiExchangeDollarFill />,
    //     menuTitle: "Major in Hospitality",
    //     headerIcon: "fi fi-rr-customer-care",
    //     subTitle:
    //       "Create unforgettable experiences and lead with excellence, crafting the future of the vibrant and dynamic hospitality industry.",
    //     slug: "major-in-hospitality",
    //     link: "",
    //     icon: "/assets/major_hospitality.png",
    //     courseCode: "CIHE427",
    //     heroImage: "/assets/course-c.webp",
    //     faculty: "Bachelors of Business",
    //     courseDetails: [
    //       {
    //         title: "duration",
    //         description: "3 Years",
    //         icon: <MdOutlineAccessTime />,
    //       },
    //       {
    //         title: "Delivery Mode",
    //         description: "Face To Face",
    //         icon: <LuScanFace />,
    //       },
    //       {
    //         title: "Credit points to complete",
    //         description: "240",
    //         icon: <CiViewList />,
    //       },
    //       {
    //         title: "IELTS Score",
    //         description: "6.0 or above",
    //         icon: <MdOutlineGrade />,
    //       },
    //       {
    //         title: "FEE-HELP applicable",
    //         description: "Fees",
    //         icon: <BiDollarCircle />,
    //       },
    //       {
    //         title: "Semester 1 : MAR 11 <br /> Semester 2: JUL 22",
    //         description: "Start Dates",
    //         icon: <IoCalendarClearOutline />,
    //       },
    //     ],
    //     tabbedPaneData: [
    //       {
    //         description:
    //           "<h3>Overview</h3><p>On the doorstep of one of the highest concentrations of diverse service delivery within Australia, the Hospitality Major has been designed to equip students with an understanding of a multiplicity of roles that exist within the hospitality/service industry and an appreciation of these. Building upon the core units, students can further their project management and service management understanding and capabilities. Facilities management is another unit equipping the students with planning, budgeting, building and maintenance awareness and mastery. The benefits gained in developing research skills will foster job readiness, enabling a more proactive rather than reactive approach to potential opportunities within this changing industry. Unpacking the Major units and based on fostering research skills, students will develop capabilities to reflect and analyse hospitality planning and suitable hospitality management leadership. Through researching case studies and reflecting on observation, students will develop an appreciation of sustainability and environmental issues both of which tend to foster eco-tourism. Working within teams and as independent learners, students appreciate the diversity of teamwork and opportunities within the service/hospitality sector. With such a geographical diversity of registered clubs within NSW and Australia and a thriving service/tourism industry, it is expected unique employment and entrepreneurial opportunities are within the grasp of Churchill graduates. Completing the degree with the Hospitality major one would consider a position as a tourism officer, event manager, bar/ café or restaurant manager or owner, hospitality marketing executive or a hotel or hospitality manager.</p>",
    //       },
    //       {
    //         description: `<h2>Entry Requirements</h2><p>The admission applications must be submitted to the Admissions Manager before the application closing date. All applications must include:</p><ul><li>completed Admission Application form for international students;</li><li>academic record of study previously undertaken;</li><li>where applicable, proof of English language proficiency;</li><li>a copy of the applicant's passport/photo ID;</li><li>other documentation to demonstrate admission criteria are met.</li></ul>`,
    //       },
    //       {
    //         description: `<h3>Year 1</h3><table><tr><th>Semester 1</th><th></th><th>Semester 2</th><th></th></tr><tr><td>ACC101</td><td>Accounting for Decision Making</td><td>LAW101</td><td>Business and Company Law</td></tr><tr><td>BUS101</td><td>Business Communication</td><td>ECO101</td><td>Business Economics</td></tr><tr><td>INF101</td><td>Business Information System</td><td>MKT101</td><td>Principles of Marketing</td></tr><tr><td>MGN101</td><td>Foundation of Management</td><td>BST101</td><td>Business Statistics and Data Analytics</td></tr></table><h3>Year 2</h3><table><tr><th>Semester 1</th><th></th><th>Semester 2</th><th></th></tr><tr><td>HOS201</td><td>Introduction to Hospitality Management</td><td>HOS203</td><td>Managing Services Experiences in Hospitality Industry</td></tr><tr><td>HOS202</td><td>Strategic Planning in Hospitality</td><td>HOS204</td><td>Hospitality Facility Management</td></tr><tr><td>Elective 1</td><td>Level 200 Unit</td><td>Elective 2</td><td>Level 200 Unit</td></tr></table><h3>Year 3</h3><table><tr><th>Semester 1</th><th></th><th>Semester 2</th><th></th></tr><tr><td>HOS301</td><td>Hospitality Financial Management</td><td>HOS303</td><td>Hospitality Business Research</td></tr><tr><td>HOS302</td><td>Hospitality Marketing and Promotion</td><td>HOS304</td><td>Hospitality Management Project</td></tr><tr><td>MGN301</td><td>Leadership and Management</td><td>MGN302</td><td>Corporate Social Responsibility</td></tr><tr><td></td><td>Elective 5 - Level 300 Unit</td><td></td><td></td></tr></table>`,
    //       },
    //       {
    //         description:
    //           "<p>Applications for admission to a course by Domestic or International students can be made directly to Churchill Institute of Higher Education. The admission applications must be submitted to the Admissions Manager before the application closing date. All applications must include:<ul><li>completed Admission Application form;<li>academic record of study previously undertaken;<li>proof of English language proficiency;<li>a copy of the applicant's passport;<li>any documentary evidence that admission criteria are met</ul>",
    //       },
    //       {
    //         description: `<h1>Bachelor of Business</h1><h2> Hospitality</h2><table border=1><thead><tr><th>Hospitality<th>Per Course<th>Per Semester<th>Per Year<th>Total Cost<tbody><tr><td>Domestic Students<td>$1,950<td>$7,800<td>$15,600<td>$46,800<tr><td>International Students<td>$2,150<td>$8,600<td>$17,200<td>$51,600</table><h2>Supplementary Fees</h2><table border=1><thead><tr><th>Item<th>Fee<th>Notes<tbody><tr><td>Re-Issue of Student Card<td>$20.00<td><tr><td>Re-Issue of Academic Transcript<td>$50.00<td><tr><td>Re-Issue of Testamur /Certificate<td>$50.00<td><tr><td>Re-Issue of CoE after cancellation<td>$250.00<td><tr><td>Re-exam or Reassessment Fee<td>$200.00 per subject<td><tr><td>Late payment of tuition fees<td>$100.00 per instalment<td>This fee is applicable when tuition fees have not been paid as per the due date published on Letter of Offer<tr><td>Change of course fee<td>$200.00<td>Including change of Major/ Or change to double major<tr><td>Document processing Fees<td>$50.00<td>Enrolment Letter/ Leave letter</table>`,
    //       },
    //     ],
    //   },
    //   {
    //     icon: <RiExchangeDollarFill />,
    //     menuTitle: "Major in Management",
    //     headerIcon: "fi fi-rr-user-gear",
    //     subTitle:
    //       "Develop visionary leadership skills, inspiring teams and driving sustainable organizational success in a constantly evolving business landscape.",
    //     slug: "major-in-management",
    //     link: "",
    //     icon: "/assets/major_management.png",
    //     courseCode: "CIHE427",
    //     heroImage: "/assets/course-d.webp",
    //     faculty: "Bachelors of Business",
    //     courseDetails: [
    //       {
    //         title: "duration",
    //         description: "3 Years",
    //         icon: <MdOutlineAccessTime />,
    //       },
    //       {
    //         title: "Delivery Mode",
    //         description: "Face To Face",
    //         icon: <LuScanFace />,
    //       },
    //       {
    //         title: "Credit points to complete",
    //         description: "240",
    //         icon: <CiViewList />,
    //       },
    //       {
    //         title: "IELTS Score",
    //         description: "6.0 or above",
    //         icon: <MdOutlineGrade />,
    //       },
    //       {
    //         title: "FEE-HELP applicable",
    //         description: "Fees",
    //         icon: <BiDollarCircle />,
    //       },
    //       {
    //         title: "Semester 1 : MAR 11 <br /> Semester 2: JUL 22",
    //         description: "Start Dates",
    //         icon: <IoCalendarClearOutline />,
    //       },
    //     ],
    //     tabbedPaneData: [
    //       {
    //         description:
    //           "<h2>Overview</h2><p>The Management Majoris designed to provide students with a broad understanding of management theory and practice. Building on the core units of the Bachelor of Business Degree, the management major extends students' exposure to specialist management functions including human resource management and business finance and engages students with contemporary and emerging issues in the management field. Students undertaking the Management major will gain specialised business knowledge and analytical skills through the study of the critical areas of management that make up the major's units and the subsequent application of this knowledge to real business cases and real business problems. Students will develop the ability to make strategic decisions, to identify the needs of business and society, and they will become informed and collaborative graduates. Graduates of the management major will be equipped with knowledge of how organisations work, with the skills to effectively lead, organise and plan in multiple types of organisations (profit, non-profit, public or private). Graduates of the management major may gain employment in a diversity of roles from general business administration to specialist functional areas building on the knowledge gained through the major's specialist units.</p>",
    //       },
    //       {
    //         description: `<h2>Entry Requirements</h2><p>The admission applications must be submitted to the Admissions Manager before the application closing date. All applications must include:</p><ul><li>completed Admission Application form for international students;</li><li>academic record of study previously undertaken;</li><li>where applicable, proof of English language proficiency;</li><li>a copy of the applicant's passport/photo ID;</li><li>other documentation to demonstrate admission criteria are met.</li></ul>`,
    //       },
    //       {
    //         description:
    //           "<h2>Year 1</h2><table><tr><th>SEMESTER 1</th><th></th><th>SEMESTER 2</th><th></th></tr><tr><td>ACC101</td><td>Accounting for Decision Making</td><td>LAW101</td><td>Business and Company Law</td></tr><tr><td>BUS101</td><td>Business Communication</td><td>ECO101</td><td>Business Economics</td></tr><tr><td>INF101</td><td>Business Information System</td><td>MKT101</td><td>Principles of Marketing</td></tr><tr><td>MGN101</td><td>Foundation of Management</td><td>BST101</td><td>Business Statistics and Data Analytics</td></tr></table><h2>Year 2</h2><table><tr><th>SEMESTER 1</th><th></th><th>SEMESTER 2</th><th></th></tr><tr><td>MGN201</td><td>Organizational Behaviour</td><td>MGN203</td><td>Human Resource Management</td></tr><tr><td>MGN202</td><td>Cross Cultural Management</td><td>MGN204</td><td>Project Management</td></tr><tr><td></td><td>Elective 1 – Level 200 Unit</td><td></td><td>Elective 3 – Level 200 Unit</td></tr><tr><td></td><td>Elective 2 – Level 200 Unit</td><td></td><td>Elective 4 – Level 200 Unit</td></tr></table><h2>Year 3</h2><table><tr><th>SEMESTER 1</th><th></th><th>SEMESTER 2</th><th></th></tr><tr><td>MGN303</td><td>Entrepreneurship and Innovation</td><td>MGN304</td><td>Strategic Business Management</td></tr><tr><td>FIN301</td><td>Business Finance</td><td>MGN305</td><td>Contemporary Issues in Management</td></tr><tr><td>MGN301</td><td>Leadership and Management</td><td>MGN302</td><td>Corporate Social Responsibility</td></tr><tr><td></td><td>Elective 5 – Level 300 Unit</td><td></td><td>Elective 6 – Level 300 Unit</td></tr></table>",
    //       },
    //       {
    //         description:
    //           "<h2>How to Apply</h2><p>Applications for admission to a course by Domestic or International students can be made directly to Churchill Institute of Higher Education. The admission applications must be submitted to the Admissions Manager before the application closing date. All applications must include:<ul><li>completed Admission Application form;<li>academic record of study previously undertaken;<li>proof of English language proficiency;<li>a copy of the applicant's passport;<li>any documentary evidence that admission criteria are met</ul>",
    //       },
    //       {
    //         description: `<h1>Bachelor of Business</h1><h2>Management</h2><table border=1><thead><tr><th>Management<th>Per Course<th>Per Semester<th>Per Year<th>Total Cost<tbody><tr><td>Domestic Students<td>$1,950<td>$7,800<td>$15,600<td>$46,800<tr><td>International Students<td>$2,150<td>$8,600<td>$17,200<td>$51,600</table><h2>Supplementary Fees</h2><table border=1><thead><tr><th>Item<th>Fee<th>Notes<tbody><tr><td>Re-Issue of Student Card<td>$20.00<td><tr><td>Re-Issue of Academic Transcript<td>$50.00<td><tr><td>Re-Issue of Testamur /Certificate<td>$50.00<td><tr><td>Re-Issue of CoE after cancellation<td>$250.00<td><tr><td>Re-exam or Reassessment Fee<td>$200.00 per subject<td><tr><td>Late payment of tuition fees<td>$100.00 per instalment<td>This fee is applicable when tuition fees have not been paid as per the due date published on Letter of Offer<tr><td>Change of course fee<td>$200.00<td>Including change of Major/ Or change to double major<tr><td>Document processing Fees<td>$50.00<td>Enrolment Letter/ Leave letter</table>`,
    //       },
    //     ],
    //   },
    // ],
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
        redirectLink: `${NEXT_PUBLIC_CHURCHILL_STUDENT_HUB_URL}/upcoming-key-dates`,
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
        icon: "RiRefund2Fill",
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
      // {
      //   menuTitle: "FAQ",
      //   slug: "faq",
      //   headerIcon: "fi fi-rr-comments-question",
      //   image: "/assets/course-b.png",
      //   link: "/contact-us/faq",
      //   redirectLink: "",
      // },
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
      // {
      //   menuTitle: "Upcoming Events",
      //   slug: "upcoming-events",
      //   headerIcon: "fi fi-rr-calendar-day",
      //   image: "/assets/course-b.png",
      //   link: "/events",
      //   redirectLink: "",
      // },
      {
        menuTitle: "Key Dates",
        slug: "upcoming-key-dates",
        headerIcon: "fi fi-rr-calendar",
        image: "/assets/course-b.png",
        link: "",
        redirectLink: `${NEXT_PUBLIC_CHURCHILL_STUDENT_HUB_URL}/upcoming-key-dates`,
      },
      {
        icon: "PiCourtBasketballBold",
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
    Catagories: [
      {
        icon: "RiRefund2Fill",
        menuTitle: "Learning Management System (LMS)",
        headerIcon: "fi fi-rr-lesson",
        subTitle: "Access your timetable, results, trimester invoices.",
        slug: "agent-login",
        redirectLink: "https://elearning.churchill.nsw.edu.au/",
        link: "",
        image: "/assets/hero-image.jpeg",
      },
      {
        icon: "RiRefund2Fill",
        menuTitle: "Agent Portal",
        headerIcon: "fi fi-rr-employee-man-alt",
        subTitle: "Access your timetable, results, trimester invoices.",
        slug: "agent-login",
        redirectLink: NEXT_PUBLIC_CHURCHILL_AGENT_HUB_URL,
        link: "",
        image: "/assets/hero-image.jpeg",
      },
      {
        icon: "PiCourtBasketballBold",
        menuTitle: "Library Portal",
        headerIcon: "fi fi-rr-diary-bookmark-down",
        subTitle: "Access your timetable, results, trimester invoices.",
        slug: "library-login",
        redirectLink: "https://churchill.softlinkhosting.com.au/",
        link: "",
        image: "/assets/hero-image.jpeg",
      },
      {
        icon: "PiCourtBasketballBold",
        menuTitle: "Staff Portal",
        headerIcon: "fi fi-rr-employee-man",
        subTitle: "Access your timetable, results, trimester invoices.",
        slug: "staff-login",
        redirectLink: "http://staff.churchill.nsw.edu.au",
        link: "/",
        image: "/assets/hero-image.jpeg",
      },
      // {
      //   icon: <RiExchangeDollarFill />,
      //   menuTitle: "Student Moodle Portal",
      //   headerIcon: "fi fi-rr-student",
      //   subTitle: "Access your timetable, results, trimester invoices.",
      //   slug: "student-login",
      //   redirectLink: "https://elearning.churchill.nsw.edu.au/login/index.php",
      //   // link: "/",
      //   image: "/assets/hero-image.jpeg",
      // },
      {
        icon: "RiExchangeDollarFill",
        menuTitle: "Attendance Portal",
        headerIcon: "fi fi-rr-user-trust",
        subTitle: "Student attendance.",
        slug: "student-attendance",
        redirectLink: "https://attendance.churchill.nsw.edu.au",
        // link: "/",
        image: "/assets/hero-image.jpeg",
      },
    ],
  },
];
