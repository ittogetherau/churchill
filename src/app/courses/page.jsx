"use client";
import { useEffect, useState } from "react";
import {
  FilterComponent,
  EnquirySection,
  NewsletterSection,
  TopBannerCard,
  CoursesFilterSection,
  Spiner,
} from "@/components";
import Link from "next/link";

import { FetchCourseData } from "@/components/utils/apiQueries";
import React, { useRef } from "react";
const Courses = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    FetchCourseData()
      .then((res) => {
        setData(res.data);
        setIsLoading(false);
      })
      .catch((err) => console.error(err));
  }, []);

  const ScrollRef = useRef();
  function handleRightBtn() {
    scrollToSection("scrollToCourse");
  }

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = element.offsetTop - 170;
      window.scroll({
        top: offset,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      {isLoading ? (
        <Spiner />
      ) : (
        <>
          <div className="flex flex-col gap-[32px] lg:gap-[64px]">
            <TopBannerCard
              image={`/assets/maincoursepage.jpg`}
              titleSpan={
                <span>
                  Study Bachelor of Business at Churchill Institute of Higher
                  Education.
                </span>
              }
              subTitle="Explore our innovative programs and transform your career."
              BtnAText="Apply Now"
              BtnBText="View Courses"
              link="/assets/apply-at-churchill.pdf"
              linkA=""
              handleRightBtn={handleRightBtn}
            />
            <section className="container mx-auto px-4 py-10  fade-in">
              <div className="text-center mb-10">
                <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900">
                  Bachelor of Business (BBus)
                </h2>
                <p className="text-lg text-gray-600">
                  CRICOS Course Code:&nbsp;
                  <a
                    href="https://cricos.education.gov.au/Course/CourseDetails.aspx?CourseId=111749"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-orange-600 font-medium hover:underline"
                  >
                    111749J
                  </a>
                </p>
              </div>

              <div className="max-w-4xl mx-auto text-gray-700 text-base leading-relaxed space-y-6">
                <p>
                  The Bachelor of Business (BBus) (CRICOS Course Code&nbsp;
                  <a
                    href="https://cricos.education.gov.au/Course/CourseDetails.aspx?CourseId=111749"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-orange-600 hover:underline"
                  >
                    111749J
                  </a>
                  ) is at level 7 of the&nbsp;
                  <a
                    href="https://www.aqf.edu.au/framework/aqf-levels#toc-aqf-level-7-criteria-3"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-orange-600 hover:underline"
                  >
                    Australian Qualifications Framework (AQF)
                  </a>
                  &nbsp;and is accredited by the&nbsp;
                  <a
                    href="https://www.teqsa.gov.au/provider/mpika-holdings-pty-ltd"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-orange-600 hover:underline"
                  >
                    Tertiary Education Quality and Standards Agency (TEQSA)
                  </a>
                  . The BBus:
                </p>

                <ul className="list-disc list-inside space-y-4">
                  <li>
                    Comprises four (4) majors in&nbsp;
                    <Link
                      href="/courses/major-in-accounting"
                      className="text-orange-600 hover:underline"
                    >
                      Accounting
                    </Link>
                    ,&nbsp;
                    <Link
                      href="/courses/major-in-hospitality"
                      className="text-orange-600 hover:underline"
                    >
                      Hospitality
                    </Link>
                    ,&nbsp;
                    <Link
                      href="/courses/major-in-information-systems"
                      className="text-orange-600 hover:underline"
                    >
                      Information Systems
                    </Link>
                    &nbsp;and&nbsp;
                    <Link
                      href="/courses/major-in-management"
                      className="text-orange-600 hover:underline"
                    >
                      Management
                    </Link>
                    <ul className="list-disc ml-6 mt-3 space-y-2">
                      <li>
                        The Accounting major is accredited by&nbsp;
                        <a
                          href="https://apps.cpaaustralia.com.au/accredited-course-details/?id=c296df07-cd90-ef11-8a69-00224817f123"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-orange-600 hover:underline"
                        >
                          CPA Australia
                        </a>
                        &nbsp;and&nbsp;
                        <a
                          href="https://www.charteredaccountantsanz.com/-/media/4014530aae564cf18df73ca785a61b1c.pdf"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-orange-600 hover:underline"
                        >
                          Chartered Accountants (CA) Australia
                        </a>
                      </li>
                      <li>
                        Is delivered over 3 years full-time, face to face on
                        campus over 6 semesters.
                      </li>
                      <li>
                        Requires completion of 24 Units (240 credit points) that
                        comply with the course major rules to meet graduation
                        eligibility requirements.
                      </li>
                    </ul>
                  </li>
                  <li>
                    Each semester comprises 12 weeks of class teaching (class
                    attendance), a mid-semester break, a one (1) week study
                    break and a two (2) week exam period. Refer to the&nbsp;
                    <Link
                      href="https://student.churchill.nsw.edu.au/upcoming-key-dates"
                      className="text-orange-600 hover:underline"
                      target="_blank"
                    >
                      key dates
                    </Link>
                    &nbsp;for details.
                  </li>
                  <li>
                    Attendance for each unit includes 4 face-to-face contact
                    hours per week that are divided into lecture and tutorial
                    components (2-hour lecture + 2-hour tutorial).
                  </li>
                  <li>
                    For each contact hour, 1.5 hours of independent study is
                    expected from students for every face-to-face hour (4 + 6 =
                    10 hours’ workload per unit per week).
                  </li>
                  <li>
                    Full time workload: 4 Units x 10 hours per Unit = 40 hours
                    per week.
                  </li>
                  <li>
                    There are usually three (3) to five (5) assessments in all
                    units (subjects) that includes a final examination weighted
                    at 40% of the unit total. Other assessments in most units
                    include written assignments, reports, group or individual
                    presentations and /or in class tests of various weightings.
                  </li>
                  <li>
                    All students must additionally complete a module and quiz on
                    Academic Integrity and ethical use of Generative Artificial
                    Intelligence (GenAI) in their first semester of study at
                    Churchill Institute in addition to a standard
                    full-time study load.
                  </li>
                </ul>

                <p>
                  The BBus does not include a Work Integrated Learning (WIL)
                  component.
                </p>

                <div className="mt-10">
                  <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6">
                    Learning Outcomes
                  </h2>
                  <p className="mb-6">
                    The BBus has the following learning outcomes that are
                    consistent with AQF Level 7 qualification requirements:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      "Apply analytical skills and competencies to solve practical business problems.",
                      "Acquire, demonstrate and apply specialised knowledge to management practice.",
                      "Demonstrate the ability to develop, analyse and evaluate business reports.",
                      "Demonstrate an ability to effectively communicate in written and oral forms.",
                      "Recognise the relationship between business and society; practise social responsibility and sustainable management that is cognisant of diversity.",
                      "Demonstrate the capacity to work individually and as part of a team to solve business problems.",
                    ].map((outcome, index) => (
                      <div
                        key={index}
                        className="bg-white border-l-4 border-orange-400 p-4 shadow-sm rounded-lg transition-all duration-200 hover:shadow-md hover:border-orange-500 hover:-translate-y-0.5"
                      >
                        <p className="text-gray-700">{outcome}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            <span id="scrollToCourse" />

            <CoursesFilterSection data={data} />
            <EnquirySection />
            <NewsletterSection />
          </div>{" "}
        </>
      )}
    </>
  );
};

export default Courses;
