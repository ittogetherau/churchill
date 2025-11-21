import { Button, PatternBannerCard } from "@/components";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-4">
            Advanced Standing
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Discover how to apply for credit towards the BBus course based on
            prior learning.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
              <svg
                className="w-6 h-6 text-orange-500 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  L
                  stroke-linecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Advanced Standing Eligibility
            </h2>
            <p className="text-gray-600 mb-4">
              Applicants for the BBus course <strong>may </strong>be eligible
              for advanced standing (credit) towards the BBus course based on
              prior qualifications (such as accredited vocational education and
              training courses at Diploma or Advanced Diploma level); and / or
              other prior learning based on the{" "}
              <a
                href="https://backend.churchill.nsw.edu.au/media/policy_pdfs/Advanced-Standing-Policy-and-Procedure_RLcCgHQ.pdf"
                className="text-orange-500 hover:underline"
                target="_blank"
              >
                Policy and Procedure
              </a>
              .
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
              <svg
                className="w-6 h-6 text-orange-500 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  L
                  stroke-linecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"
                />
              </svg>
              How and When to Apply for Advanced Standing
            </h2>
            <p className="text-gray-600 mb-4">
              To be considered for advanced standing, all* students must
            </p>
            <ul className="text-gray-600 space-y-4">
              <li className="flex items-start">
                <svg
                  className="w-5 h-5 text-orange-500 mr-2 mt-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    L
                    stroke-linecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>
                  Submit a completed Advanced Standing Application Form,{" "}
                  <strong>ideally </strong>
                  <strong>at the same time they submit their </strong>
                  <a
                    href="https://churchill.nsw.edu.au/assets/apply-at-churchill.pdf"
                    className="text-orange-500 hover:underline"
                    target="_blank"
                  >
                    Application for Admission
                  </a>
                  <strong>
                    {" "}
                    to the course; or no later than the census date of their
                    first semester of enrolment (study)
                  </strong>
                  , by attaching supporting evidence that includes:
                </span>
              </li>
              <li className="flex items-start pl-8">
                <svg
                  className="w-5 h-5 text-orange-500 mr-2 mt-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    L
                    stroke-linecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>
                  A certified copy of <strong>official</strong> academic record
                  / transcript of prior learning with either web links to or
                  hard copies of the unit/ subject outlines that you consider as
                  equivalent to a Churchill Institute unit(s).
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
            <svg
              className="w-6 h-6 text-orange-500 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                L
                stroke-linecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0-9 9 0 0118 0z"
              />
            </svg>
            Assessment of Advanced Standing and Notification of Outcome
          </h2>
          <p className="text-gray-600 mb-4">
            <strong>Applications are assessed</strong> based on the{" "}
            <a
              href="https://backend.churchill.nsw.edu.au/media/policy_pdfs/Advanced-Standing-Policy-and-Procedure_RLcCgHQ.pdf"
              className="text-orange-500 hover:underline"
              target="_blank"
            >
              Advanced Standing Policy
            </a>
            ; and the prior learning’s AQF level and academic discipline; its
            relevance to the Churchill Institute course / major and the
            equivalency to the applicable Churchill unit / course learning
            outcomes.
          </p>
          <p className="text-gray-600 mb-4">
            <strong>
              Applicants will be notified of the assessment outcome
            </strong>{" "}
            (as either successful or unsuccessful) in writing, usually within
            ten (10) working days of Churchill’s receipt of a correct and
            complete application.
          </p>
          <p className="text-gray-600 mb-4">
            <strong>Successful applicants</strong> will be notified of the
            amount of advanced standing awarded equivalent to the number of
            Churchill course units / credit points / and where applicable, the
            title of Churchill course units awarded credit.
          </p>
          <p className="text-gray-600 mb-4 italic">
            *Based on Standard 2.5 of{" "}
            <a
              href="https://www.legislation.gov.au/F2017L01182/asmade/text"
              className="text-orange-500 hover:underline"
              target="_blank"
            >
              National Code of Practice for Providers of Education and Training
              to Overseas Students 2018 (Cth),
            </a>{" "}
            an international student’s CoE will be reissued and the course
            duration reduced when awarded advanced standing to the equivalent
            of:*
          </p>
          <ul className="text-gray-600 space-y-4">
            <li className="flex items-start">
              <svg
                className="w-5 h-5 text-orange-500 mr-2 mt-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>
                1 semester of full-time study (4 units / 40 credit points) - the
                course duration will be reduced from 3.0 years (156 weeks) to
                2.5 years (130 weeks) and the student’s CoE reissued with the
                updated Course End Date;
              </span>
            </li>
            <li className="flex items-start">
              <svg
                className="w-5 h-5 text-orange-500 mr-2 mt-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  L
                  stroke-linecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>
                2 semesters or 1 year of full-time study (8 units / 80 credit
                points) = the course duration will be reduced from 3.0 years
                (156 weeks) to 2.0 years (104 weeks) and their CoE reissued with
                the updated Course End Date.
              </span>
            </li>
            <li className="flex items-start">
              <svg
                className="w-5 h-5 text-orange-500 mr-2 mt-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  L
                  stroke-linecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>
                And when the advanced standing awarded is equivalent to a
                different number of units / credit points, the course duration
                may be reduced or remain unchanged based on the number of units
                remaining to be studied full-time (8 units per year or 4 per
                semester) and the number of semesters scheduled each year
                (minimum of two) until the current CoE Course End Date.
              </span>
            </li>
            <li className="flex items-start">
              <svg
                className="w-5 h-5 text-orange-500 mr-2 mt-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  L
                  stroke-linecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>
                The student must respond to the notification in writing to
                confirm that:.
              </span>
            </li>
            <li className="flex items-start pl-8">
              <svg
                className="w-5 h-5 text-orange-500 mr-2 mt-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  L
                  stroke-linecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>
                they accept the advanced standing awarded; and when applicable,
                the reissue of their CoE with a reduced course duration and
                amended course End Date ; or
              </span>
            </li>
            <li className="flex items-start pl-8">
              <svg
                className="w-5 h-5 text-orange-500 mr-2 mt-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  L
                  stroke-linecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>
                may reject all or part of the advanced standing awarded.
              </span>
            </li>
          </ul>
          <p className="text-gray-600 mt-4">
            <strong>Unsuccessful applicants</strong> will be advised in writing
            of the reason(s) their application for advanced standing was
            unsuccessful with reference to the applicable section(s) of the
            Advanced Standing Policy and Guidelines.
          </p>
          <p className="text-gray-600 mt-4">
            <strong>Applicants for advanced standing</strong>{" "}
            <strong>may appeal the assessment outcome</strong> based on section
            1.6 of the{" "}
            <a
              href="https://backend.churchill.nsw.edu.au/media/policy_pdfs/Advanced-Standing-Policy-and-Procedure_RLcCgHQ.pdf"
              className="text-orange-500 hover:underline"
              target="_blank"
            >
              Advanced Standing Policy
            </a>
            .
          </p>
        </div>

        {/* <div className="bg-white rounded-lg shadow-lg p-8 text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center justify-center">
            <svg
              className="w-6 h-6 text-orange-500 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                L
                stroke-linecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            Get Started
          </h2>
          <a
            href="https://churchill.nsw.edu.au/assets/apply-at-churchill.pdf"
            download="apply-at-churchill.pdf"
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg inline-flex items-center space-x-2 transition-colors duration-200"
          >
            <i className="fi fi-rr-download"></i>
            <span>Download Application Form</span>
          </a>
        </div> */}
      </div>
    </div>
  );
};

export default page;
