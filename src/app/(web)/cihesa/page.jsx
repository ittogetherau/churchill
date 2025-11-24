import { StyledHeroCard } from "@/components";
import Image from "next/image";

const cihesaData = {
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

export default function CIHESAPage() {
  return (
    <>
      <div className="min-h-screen bg-white">
        <StyledHeroCard
          title={cihesaData.hero.title}
          breadcrumbs={cihesaData.hero.subtitle}
          subTitle={cihesaData.hero.description}
        />

        <div className="container mx-auto px-4 max-w-6xl py-16">
          {/* About CIHESA Header */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              About the CIHESA
            </h2>
            <div className="w-20 h-1 bg-[#e59623]"></div>
          </div>

          {/* Purpose Section with Image */}
          <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden mb-12">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="p-10">
                <div className="flex items-center mb-6">
                  <i className="fi fi-rr-target text-3xl text-[#e59623] mr-4 flex items-center"></i>
                  <h3 className="text-2xl font-bold text-gray-900">
                    Our Purpose
                  </h3>
                </div>
                <p className="text-gray-700 text-lg leading-relaxed">
                  {cihesaData.about.purpose}
                </p>
              </div>
              <div className="bg-gray-100">
                <Image
                  width={600}
                  height={800}
                  quality={75}
                  src="/assets/test-hero-image.webp"
                  alt="Student Community"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Membership & Term */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-8">
              <div className="flex items-center mb-4">
                <i className="fi fi-rr-users text-2xl text-[#e59623] mr-3 flex items-center"></i>
                <h3 className="text-2xl font-bold text-gray-900">Membership</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                {cihesaData.about.membership}
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-8">
              <div className="flex items-center mb-4">
                <i className="fi fi-rr-calendar text-2xl text-[#e59623] mr-3 flex items-center"></i>
                <h3 className="text-2xl font-bold text-gray-900">
                  Membership Term
                </h3>
              </div>
              <p className="text-gray-700 text-lg">
                {cihesaData.about.membershipTerm}
              </p>
            </div>
          </div>

          {/* Position Responsibilities */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-8">
              Member Position Responsibilities
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {cihesaData.positions.map((position, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow"
                >
                  <i
                    className={`fi ${position.icon} text-4xl text-[#e59623] mb-4 block text-center flex items-center justify-center`}
                  ></i>
                  <h4 className="font-bold text-gray-900 text-lg mb-3 text-center">
                    {position.title}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed text-center">
                    {position.responsibility}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Eligibility */}
          <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-8 mb-12">
            <div className="flex items-center mb-6">
              <i className="fi fi-rr-check-circle text-2xl text-[#e59623] mr-3 flex items-center"></i>
              <h3 className="text-2xl font-bold text-gray-900">
                Membership Eligibility
              </h3>
            </div>
            <ul className="space-y-3">
              {cihesaData.eligibility.map((item, index) => (
                <li key={index} className="flex items-start">
                  <i className="fi fi-rr-bullet text-[#e59623] text-xs mr-3 mt-2 flex items-center"></i>
                  <span className="text-gray-700 text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Functions */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-8">
              Our Functions
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {cihesaData.functions.map((func, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow"
                >
                  <i
                    className={`fi ${func.icon} text-3xl text-[#e59623] mb-4 block flex items-center`}
                  ></i>
                  <h4 className="font-bold text-gray-900 text-xl mb-3">
                    {func.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {func.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Meetings & Marketing */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-8">
              <div className="flex items-center mb-4">
                <i className="fi fi-rr-clock text-2xl text-[#e59623] mr-3 flex items-center"></i>
                <h3 className="text-2xl font-bold text-gray-900">
                  Frequency of Meetings
                </h3>
              </div>
              <ul className="space-y-3">
                {cihesaData.meetings.map((meeting, index) => (
                  <li key={index} className="flex items-start">
                    <i className="fi fi-rr-bullet text-[#e59623] text-xs mr-3 mt-2 flex items-center"></i>
                    <span className="text-gray-700">{meeting}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-8">
              <div className="flex items-center mb-4">
                <i className="fi fi-rr-megaphone text-2xl text-[#e59623] mr-3 flex items-center"></i>
                <h3 className="text-2xl font-bold text-gray-900">
                  Marketing & Promotion
                </h3>
              </div>
              <p className="text-gray-700 mb-3">
                Churchill Institute will provide resources including:
              </p>
              <ul className="space-y-2">
                {cihesaData.marketing.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <i className="fi fi-rr-bullet text-[#e59623] text-xs mr-2 mt-1.5 flex items-center"></i>
                    <span className="text-gray-600 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Finances & Reports */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-8">
              <div className="flex items-center mb-4">
                <i className="fi fi-rr-dollar text-2xl text-[#e59623] mr-3 flex items-center"></i>
                <h3 className="text-2xl font-bold text-gray-900">Finances</h3>
              </div>
              <ul className="space-y-3">
                {cihesaData.finances.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <i className="fi fi-rr-bullet text-[#e59623] text-xs mr-3 mt-2 flex items-center"></i>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-8">
              <div className="flex items-center mb-4">
                <i className="fi fi-rr-briefcase text-2xl text-[#e59623] mr-3 flex items-center"></i>
                <h3 className="text-2xl font-bold text-gray-900">Reports To</h3>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">
                {cihesaData.reportsTo}
              </p>
            </div>
          </div>

          {/* Meet Your Representatives Section */}
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              Meet Your CIHESA Student Representatives
            </h2>
            <div className="w-20 h-1 bg-[#e59623]"></div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 my-6">
            {cihesaData.representatives.images.map((el, i) => (
              <div
                key={el}
                className="w-full aspect-square rounded-lg overflow-hidden"
              >
                <Image
                  src={el}
                  width={500}
                  height={500}
                  className="w-full h-full object-cover"
                  alt={`Churchill Representatives image ${i + 1}`}
                />
              </div>
            ))}
          </div>

          <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
            <div className="grid md:grid-cols-3 gap-0">
              <div className="md:col-span-1 overflow-hidden rounded-lg max-h-96 flex items-center justify-center bg-gray-50">
                <Image
                  width={600}
                  height={800}
                  quality={75}
                  src={cihesaData.representatives.academicBoard.image}
                  alt={cihesaData.representatives.academicBoard.name}
                  className="w-full h-full object-cover shadow-md"
                />
              </div>
              <div className="md:col-span-2 p-8">
                <div className="mb-4">
                  <span className="bg-gray-900 text-white px-4 py-2 rounded text-sm font-semibold">
                    {cihesaData.representatives.academicBoard.role}
                  </span>
                </div>
                <h3 className="text-3xl font-bold mb-2 text-gray-900">
                  {cihesaData.representatives.academicBoard.name}
                </h3>
                <p className="text-xl font-semibold mb-4 text-[#e59623]">
                  {cihesaData.representatives.academicBoard.position}
                </p>
                <p className="text-lg leading-relaxed text-gray-700">
                  {cihesaData.representatives.academicBoard.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
