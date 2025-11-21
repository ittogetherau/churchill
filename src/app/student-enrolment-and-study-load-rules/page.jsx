import {
  EnquirySection,
  KeyDatesCard,
  NewsletterSection,
  TopBannerCard,
  UpcomingKeyDates,
} from "@/components";
import React from "react";

const page = () => {
  return (
    <div>
      <TopBannerCard
        image="/assets/std-load.webp"
        title="Student Enrolment and Study Load Rules"
        subTitle="Semesters 1, 2 and 3 - Important Information for Current Students<br/>Understanding your academic requirements and progression policies"
        titleSpan=""
        BtnAText="Visit Student Support"
        link="https://student.churchill.nsw.edu.au/"
        beforeTitle="Current Students"
        showBtnB={false}
      />

      <div className="max-w-6xl mx-auto px-6 py-12">
        <section className="mb-12">
          <div className="bg-white rounded-lg shadow-lg border-primary-orange p-8">
            <h2 className="text-2xl font-bold text-primary-green mb-6">
              Overview
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>
                The commencement and finish dates for semesters 1, 2 and 3
                (including orientation, mid-semester breaks, the census date,
                exam study week and examination weeks) are outlined on the{" "}
                <a
                  href="https://student.churchill.nsw.edu.au/upcoming-key-dates"
                  className="text-primary-orange font-semibold underline"
                >
                  Key Dates
                </a>{" "}
                webpage.
              </li>
              <li>
                Semesters 1 and 2 are compulsory enrolment semesters for all
                students.
              </li>
              <li>
                Semester 3 is not compulsory for currently enrolled students who
                satisfactorily completed (passed) 8 subjects in semesters 1 and
                2.
              </li>
              <li>Refer to semester 3 enrolment below for further details.</li>
            </ul>
          </div>
        </section>

        <section className="mb-12">
          <div className="bg-white rounded-lg shadow-lg border-primary-orange p-8">
            <h2 className="text-2xl font-bold text-primary-green mb-6">
              Semester 3 Enrolment
            </h2>
            <p className="text-gray-700 mb-4">
              Semester 3 enrolment is open to:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>
                New students who accept an Offer of Admission to commence their
                course in December each year.
              </li>
              <li>
                Continuing students who did not successfully complete (pass) 8
                units (subjects) in semesters 1 and 2; and who did not
                previously contact Churchill Institute / provide evidence of
                compassionate or compelling circumstances.
              </li>
            </ul>
            <p className="mt-4 text-gray-700">
              Refer to the international student study load and course
              completion requirements below for further information.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <div className="bg-white rounded-lg shadow-lg border-primary-orange p-8">
            <h2 className="text-2xl font-bold text-primary-green mb-6">
              Semester 3 Duration and Structure
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>
                Semester 3 classes commence in early December and finish in
                mid-February of the following year. Refer to the Key Dates
                webpage for exact dates.
              </li>
              <li>
                Semester 3 comprises six (6) weeks of classes for each unit
                (subject); a 2-week mid-semester break over the Christmas-New
                Year period; one (1) examination study week and one (1)
                examination week.
              </li>
              <li>
                Each unit has 8 hours of classes delivered each week (48 hours
                total).
              </li>
              <li>
                Students enrol in a maximum of 2 units (subjects) in semester 3.
              </li>
            </ul>
          </div>
        </section>

        <section className="mb-12">
          <div className="bg-white rounded-lg shadow-lg border-primary-orange p-8">
            <h2 className="text-2xl font-bold text-primary-green mb-6">
              International Student Study Load Requirements
            </h2>
            <p className="text-gray-700 mb-4">
              International students enrolled in the Bachelor of Business (BBus)
              course (all majors) are required to complete their course no later
              than 156 weeks (3 years) from the course commencement date. This
              requires students to satisfactorily complete (pass) eight (8)
              units per year to complete the 24 units in three years.
            </p>
            <p className="text-gray-700 mb-4">
              All students complete four (4) units in semesters 1 and 2 (8
              annually). However, students who do not pass eight units annually
              are required to repeat failed subjects (maximum of 2 units) in
              semester 3 to maintain their academic progress and complete their
              course on time, unless they have previously demonstrated
              compassionate or compelling circumstances or have engaged with the
              Learning Management Plan (LMP) issued by Churchill Institute.
            </p>
            <p className="text-gray-700">
              Based on Standard 8 of the{" "}
              <a
                href="https://www.education.gov.au/esos-framework/national-code-practice-providers-education-and-training-overseas-students-2018"
                className="text-primary-orange font-semibold underline"
              >
                {" "}
                the National Code of Practice for Providers of Education and
                Training{" "}
              </a>{" "}
              to Overseas Students 2018 (Cth) and Churchill Institute’s{" "}
              <a
                href="https://backend.churchill.nsw.edu.au/media/policy_pdfs/Academic_Progress__Completion_Policy_v1.0_July_2025.pdf"
                target="_blank"
                className="text-primary-orange font-semibold underline"
              >
                Academic Progress Completion Policy
              </a>
              , CoE extensions (changing the course end date to a later date)
              are only considered based on compassionate or compelling
              circumstances, or when a student can show they tried to improve
              their academic performance by completing activities outlined in
              the LMP.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <div className="bg-white rounded-lg shadow-lg border-primary-orange p-8">
            <h2 className="text-2xl font-bold text-primary-green mb-6">
              Students Awarded Advanced Standing
            </h2>
            <p className="text-gray-700 mb-4">
              Students awarded advanced standing will have their CoE course end
              date reduced when they have been approved for four (4) units or
              more in advanced standing (as required per Standard 2.5 of the
              National Code of Practice 2018 (Cth)).
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>
                They are required to complete the remaining course units – eight
                (8) per year – within the reduced (revised) CoE end date.
              </li>
              <li>
                They are required to repeat failed subjects (maximum of 2 units)
                in semester 3 to maintain their academic progress and complete
                their course on time, unless they have previously demonstrated
                compassionate or compelling circumstances or have engaged with
                the LMP issued by Churchill Institute.
              </li>
            </ul>
          </div>
        </section>
      </div>

      <br />
      <EnquirySection />
      <br />
      <NewsletterSection />
    </div>
  );
};

export default page;
