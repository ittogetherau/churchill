export interface THeroSection {
  title: string;
  subtitle: string;
  description: string;
}
export interface TAboutSection {
  purpose: string;
  membership: string;
  membershipTerm: string;
}
export interface TPosition {
  title: string;
  responsibility: string;
  icon: string;
}

export interface TFunctionItem {
  title: string;
  description: string;
  icon: string;
}

export interface TAcademicBoardRepresentative {
  name: string;
  position: string;
  role: string;
  description: string;
  image: string;
}

export interface TRepresentatives {
  images: string[];
  academicBoard: TAcademicBoardRepresentative;
}
export interface TCIHESAData {
  hero: THeroSection;
  about: TAboutSection;
  positions: TPosition[];
  eligibility: string[];
  functions: TFunctionItem[];
  meetings: string[];
  marketing: string[];
  finances: string[];
  reportsTo: string;
  representatives: TRepresentatives;
}

const cihesaData: TCIHESAData = {
  hero: {
    title: "Churchill Institute of Higher Education Students Association",
    subtitle: "CIHESA & Academic Board Student Representative",
    description:
      "Supporting, representing, and enriching the experience of CIHE students",
  },
  about: {
    purpose:
      "To support, represent and enrich the experience of students studying at Churchill Institute of Higher Education (CIHE).",
    membership:
      "Membership comprises five (5) students, elected by and from enrolled students of CIHE. This includes three executive positions (President, Treasurer, and Secretary) who will be chosen amongst the 5 students elected by the student body.",
    membershipTerm: "One (1) Year (all positions).",
  },
  positions: [
    {
      title: "President",
      responsibility:
        "Leads CIHESA members to achieve and deliver CIHESA's functions.",
      icon: "fi-rr-shirt",
    },
    {
      title: "Treasurer",
      responsibility:
        "Provides advice on the CIHESA's finance and expenditure to CIHESA members and the CEO & Dean",
      icon: "fi-rr-calculator",
    },
    {
      title: "Secretary",
      responsibility: "Prepares agenda and minutes CIHESA meetings.",
      icon: "fi-rr-file",
    },
    {
      title: "Members",
      responsibility:
        "Liaise with other students and the CIHESA executive for CIHESA to deliver its functions.",
      icon: "fi-rr-users",
    },
  ],
  eligibility: [
    "Must be currently enrolled as a student at CIHE.",
    "Must maintain satisfactory academic standing as per CIHE policies.",
    "Must demonstrate a commitment to representing and supporting the student body.",
  ],
  functions: [
    {
      title: "Advocacy",
      description:
        "Advocate for student interests and welfare to CIHE management.",
      icon: "fi fi-rr-bullhorn",
    },
    {
      title: "Events & Engagement",
      description:
        "Organise events and activities to enhance student engagement and campus life.",
      icon: "fi-rr-calendar-check",
    },
    {
      title: "Student Feedback",
      description:
        "Provide a platform for student feedback and consultation on academic and other matters.",
      icon: "fi-rr-comments",
    },
    {
      title: "Promotion",
      description:
        "Promote the activities and achievements of the CIHESA through approved Churchill marketing medium to the student body.",
      icon: "fi-rr-megaphone",
    },
    {
      title: "Collaboration",
      description:
        "Collaborate with CIHE staff to improve educational and support services.",
      icon: "fi-rr-handshake",
    },
  ],
  meetings: [
    "The association will meet at least once every three (3) months each year.",
    "Additional meetings may be scheduled as required.",
  ],
  marketing: [
    "A noticeboard on campus with photographs of CIHESA members.",
    "CIHESA-branded merchandise (T-Shirts and other) as agreed between CIHESA members and Churchill Institute",
    "A webpage on Churchill's website to promote the CIHESA and its activities",
    "Other promotional mediums as agreed between the CIHESA and Churchill Institute.",
  ],
  finances: [
    "The association will be allocated an expenditure budget CIHE for approved activities and initiatives to relate to the purpose of the CIHESA.",
    "All expenditure must be approved and reported in accordance with CIHE financial policies.",
  ],
  reportsTo:
    "The CEO & Dean or nominee, who will attend CIHESA meetings and guide the CIHESA to succeed.",
  representatives: {
    images: [
      "/assets/chiesa/cihesa-1.jpeg",
      "/assets/chiesa/cihesa-2.jpeg",
      "/assets/chiesa/cihesa-3.jpeg",
      "/assets/chiesa/cihesa-4.jpeg",
    ],
    academicBoard: {
      name: "Arjun Silwal",
      position: "Academic Board Student Representative",
      role: "Member",
      description:
        "Arjun was elected by Churchill student representative on the Academic Board (AB) as Churchill's a primary academic governing body that approves courses, academic policy; and oversees academic quality and the student experience and their performance outcomes. Arjun provides a report at each AB meeting that provides the AB with a students' perspective, and participation academic decision making.",
      image: "/assets/chiesa/image-4.jpeg",
    },
  },
};

export default cihesaData;
