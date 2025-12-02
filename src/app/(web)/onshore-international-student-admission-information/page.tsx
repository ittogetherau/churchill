import ContainerLayout from "@/layouts/container-layout";

const Page = () => {
  return (
    <ContainerLayout size="sm" className="mt-16">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-4">
        Onshore International Student and Domestic Student Admission Information{" "}
      </h1>

      <main className="prose prose-lg max-w-none">
        {/*  */}
        <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">
          Admission Information
        </h2>

        <p className="text-gray-700 leading-relaxed mb-6">
          <strong className="text-gray-900">
            Join Churchill's vibrant community! Discover how to apply for our
            courses as a domestic or onshore international student
          </strong>
        </p>

        <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">
          Eligibility &amp; Application Requirements - International Onshore
          Students and Domestic Students
        </h2>

        <ol className="space-y-6 list-decimal list-outside ml-6 text-gray-700">
          <li className="pl-2">
            <strong className="text-gray-900">
              International onshore students
            </strong>{" "}
            are students currently residing in Australia who have already been
            granted an Australian student visa to reside and study in Australia
          </li>

          <li className="pl-2">
            Admission is open to eligible domestic and international onshore
            students, who are 18 years of age, or older, on the day they submit
            an Application for Admission to a course.
          </li>

          <li className="pl-2">
            All applicants must apply on the{" "}
            <a
              href="https://churchill.nsw.edu.au/assets/apply-at-churchill.pdf"
              className="text-blue-600 hover:text-blue-800 underline font-semibold hover:no-underline transition-all"
            >
              Application for Admission Form
            </a>{" "}
            and meet the academic, English language proficiency (ELP) and other
            requirements, as specified in the{" "}
            <a
              href="https://backend.churchill.nsw.edu.au/media/policy_pdfs/Admissions_Policy_CIHE_v1.0_April_2025-Web_oLAnI8C.pdf"
              className="text-blue-600 hover:text-blue-800 underline font-semibold hover:no-underline transition-all"
            >
              Admissions Guidelines
            </a>{" "}
            on page 10 of the{" "}
            <a
              href="https://backend.churchill.nsw.edu.au/media/policy_pdfs/Admissions_Policy_CIHE_v1.0_April_2025-Web_oLAnI8C.pdf"
              className="text-blue-600 hover:text-blue-800 underline font-semibold hover:no-underline transition-all"
            >
              Admissions Policy
            </a>
            .
          </li>

          <li className="pl-2">
            Applications for Admission are accepted to commence in Semesters 1
            (late March) 2 (late July) and 3 (early December) each year. Refer
            to the{" "}
            <a
              href="https://student.churchill.nsw.edu.au/upcoming-key-dates"
              className="text-blue-600 hover:text-blue-800 underline font-semibold hover:no-underline transition-all"
            >
              Key Dates
            </a>{" "}
            for details.
          </li>

          <li className="pl-2">
            To apply, complete the{" "}
            <a
              href="https://churchill.nsw.edu.au/assets/apply-at-churchill.pdf"
              className="text-blue-600 hover:text-blue-800 underline font-semibold hover:no-underline transition-all"
            >
              Application for Admission Form
            </a>{" "}
            and include certified supporting documentation (to evidence you meet
            the academic and ELP requirements) documents, proof of your identity
            (current Passport data page (all applications); or an Australian
            driver's licence or government issued ID card (domestic students),
            and other requirements as specified in the Applications for
            admission Form, at least{" "}
            <strong className="text-gray-900">
              two (2) weeks before the applicable semester start date.
            </strong>{" "}
            Refer to the{" "}
            <a
              href="https://student.churchill.nsw.edu.au/upcoming-key-dates"
              className="text-blue-600 hover:text-blue-800 underline font-semibold hover:no-underline transition-all"
            >
              Key Dates page
            </a>{" "}
            for semester start dates.
          </li>

          <li className="pl-2">
            <strong className="text-gray-900">
              Late applications <span className="underline">may</span> be
              accepted
            </strong>{" "}
            (entirely at Churchill's discretion) up to the Semester Start Date
            for semesters 1 and 2 (refer to the{" "}
            <a
              href="https://student.churchill.nsw.edu.au/upcoming-key-dates"
              className="text-blue-600 hover:text-blue-800 underline font-semibold hover:no-underline transition-all"
            >
              Key Dates
            </a>{" "}
            for Semester Start Dates, which is week 1 of the semester).
          </li>

          <li className="pl-2">
            <strong className="text-gray-900">
              Late applications will not be accepted under any circumstances for
              semester 3
            </strong>{" "}
            as it comprises six (6) weeks of teaching (and not 12 weeks) as
            applies to semesters 1 and 2.
            <ul className="space-y-3 mt-3 list-disc list-outside ml-6">
              <li className="pl-2">
                if successful in their application for admission,{" "}
                <strong className="text-gray-900">
                  a student admitted late will be required to pay the deposit in
                  full and enrol in units (subjects) by the end of week 1
                </strong>{" "}
                (per section 5.2.5 of the{" "}
                <a
                  href="https://backend.churchill.nsw.edu.au/media/policy_pdfs/CIHE__Student_Enrolment__Policy.pdf"
                  className="text-blue-600 hover:text-blue-800 underline font-semibold hover:no-underline transition-all"
                >
                  Enrolment Policy
                </a>
                ); and attend an online new student orientation program
              </li>
            </ul>
          </li>
        </ol>

        <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">
          How to Submit Application for Admission:
        </h2>

        <p className="text-gray-700 leading-relaxed mb-4">
          Submit your application for admission either:
        </p>

        <ol className="space-y-4 list-decimal list-outside ml-6 text-gray-700 mb-6">
          <li className="pl-2">
            Directly to Churchill to{" "}
            <a
              href="mailto:admissions@churchill.nsw.edu.au"
              className="text-blue-600 hover:text-blue-800 underline font-semibold hover:no-underline transition-all"
            >
              admissions@churchill.nsw.edu.au
            </a>{" "}
            as stated on the{" "}
            <a
              href="https://churchill.nsw.edu.au/assets/apply-at-churchill.pdf"
              className="text-blue-600 hover:text-blue-800 underline font-semibold hover:no-underline transition-all"
            >
              Application for Admission Form
            </a>
            ; or
          </li>

          <li className="pl-2">
            Through an{" "}
            <a
              href="https://churchill.nsw.edu.au/find-agent"
              className="text-blue-600 hover:text-blue-800 underline font-semibold hover:no-underline transition-all"
            >
              authorised Churchill Institute Education Agent
            </a>
            .
          </li>
        </ol>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-6 rounded-r">
          <p className="text-gray-700 leading-relaxed m-0">
            If you have completed prior studies at Diploma level or higher in a
            related academic discipline to your chosen Churchill Course (and
            major, and no later than ten (10) years before your Churchill course
            Start Date, you <strong className="text-gray-900">may</strong> be
            eligible for advanced standing (to be awarded credit for prior
            studies). Refer to the{" "}
            <a
              href="https://churchill.nsw.edu.au/apply-for-advanced-standing"
              className="text-blue-600 hover:text-blue-800 underline font-semibold hover:no-underline transition-all"
            >
              Advanced Standing information
            </a>{" "}
            for eligibility and application details.
          </p>
        </div>

        <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">
          Application for Admission - Outcome
        </h2>

        <ol className="space-y-4 list-decimal list-outside ml-6 text-gray-700">
          <li className="pl-2">
            You'll be notified of the outcome within{" "}
            <strong className="text-gray-900">five (5) working days</strong> of
            submitting a <em>correct and complete</em> Application for Admission
            that includes all required supporting documentation (evidence).
          </li>

          <li className="pl-2">
            Applications for Admission are assessed against the course admission
            criteria as specified in the{" "}
            <a
              href="https://backend.churchill.nsw.edu.au/media/policy_pdfs/Admissions_Policy_CIHE_v1.0_April_2025-Web_oLAnI8C.pdf"
              className="text-blue-600 hover:text-blue-800 underline font-semibold hover:no-underline transition-all"
            >
              Admissions Policy (Admission Guidelines page 10/16)
            </a>{" "}
            and other requirements as specified in the Admissions Policy.
          </li>
        </ol>

        <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">
          Successful applicants
        </h2>

        <ol className="space-y-6 list-decimal list-outside ml-6 text-gray-700">
          <li className="pl-2">
            Will be issued an Offer of Admission (Written Agreement) by
            Churchill Institute that includes course administrative information
            and the terms and conditions of accepting the Offer of Admission and
            enrolment in the course.
            <ol
              type="a"
              className="space-y-3 mt-3 list-[lower-alpha] list-outside ml-6"
            >
              <li className="pl-2">
                A Conditional Offer of Admission{" "}
                <strong className="text-gray-900">may</strong> be issued per{" "}
                <a
                  href="https://backend.churchill.nsw.edu.au/media/policy_pdfs/Admissions_Policy_CIHE_v1.0_April_2025-Web_oLAnI8C.pdf"
                  className="text-blue-600 hover:text-blue-800 underline font-semibold hover:no-underline transition-all"
                >
                  section 5.3 of the Admissions Policy
                </a>{" "}
                and does <strong className="text-gray-900">not</strong>{" "}
                guarantee a place in the course; An Offer of Admission will only
                be issued when the conditions are met and evidenced per 5.3 of
                the Admissions Policy.
              </li>
            </ol>
          </li>

          <li className="pl-2">
            International students must also pay a fee deposit (as specified in
            their Offer of Admission (Written Agreement), which must be received
            in Churchill's Protected Tuition Fee Account by the specified
            payment / acceptance date in the student's Offer of Admission.
          </li>

          <li className="pl-2">
            Successful applicants (and{" "}
            <strong className="text-gray-900">not</strong> their Education Agent
            or any other person) must read, sign and return their Offer of
            Admission (Written Agreement) by the date specified to formally
            accept and secure their place in the course.
          </li>

          <li className="pl-2">
            <strong className="text-gray-900">
              A Confirmation of Enrolment (CoE) will{" "}
              <span className="underline">not</span> be issued (international
              students only) until the deposit is paid in full and is received
              in Churchill's Protected Tuition Fee Account by the date specified
              in the Offer of Admission.
            </strong>
          </li>

          <li className="pl-2">
            <strong className="text-gray-900">
              Successful applicants for admission may request to defer their
              course commencement
            </strong>{" "}
            until the next intake semester,{" "}
            <strong className="text-gray-900">
              which will be considered only
            </strong>{" "}
            when{" "}
            <strong className="text-gray-900">
              the student can demonstrate related compassionate or compelling
              circumstances and as otherwise specified in{" "}
              <a
                href="https://backend.churchill.nsw.edu.au/media/policy_pdfs/CIHE__Student_Enrolment__Policy.pdf"
                className="text-blue-600 hover:text-blue-800 underline font-semibold hover:no-underline transition-all"
              >
                section 5.8 of the Enrolment Policy
              </a>
            </strong>
            . Churchill Institute will refund and/ or hold in credit fees
            already paid based on the{" "}
            <a
              href="https://backend.churchill.nsw.edu.au/media/policy_pdfs/Student_Fees_Policy_Oct_2025_v1.1.pdf"
              className="text-blue-600 hover:text-blue-800 underline font-semibold hover:no-underline transition-all"
            >
              Student Fees Policy (Section 9. Refunding &amp; Crediting Tuition
              Fees)
            </a>
            .
          </li>
        </ol>

        <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">
          Unsuccessful applicants for admission
        </h2>

        <ol className="space-y-6 list-decimal list-outside ml-6 text-gray-700">
          <li className="pl-2">
            Will be advised by Churchill Institute that their Application for
            Admission was unsuccessful and the reason(s) will be provided,
            referencing the applicable section(s) of the{" "}
            <a
              href="https://backend.churchill.nsw.edu.au/media/policy_pdfs/Admissions_Policy_CIHE_v1.0_April_2025-Web_oLAnI8C.pdf"
              className="text-blue-600 hover:text-blue-800 underline font-semibold hover:no-underline transition-all"
            >
              Admissions Policy
            </a>
            . Churchill Institute will refund fees already paid based on the{" "}
            <a
              href="https://backend.churchill.nsw.edu.au/media/policy_pdfs/Student_Fees_Policy_Oct_2025_v1.1.pdf"
              className="text-blue-600 hover:text-blue-800 underline font-semibold hover:no-underline transition-all"
            >
              Student Fees Policy (Section 9. Refunding &amp; Crediting Tuition
              Fees)
            </a>
            .
          </li>

          <li className="pl-2">
            Unsuccessful applicants may{" "}
            <strong className="text-gray-900">appeal the unsuccessful</strong>{" "}
            admission application{" "}
            <strong className="text-gray-900">decision outcome</strong> by
            submitting the online{" "}
            <a
              href="https://forms.zohopublic.com.au/CIHE/form/Grievanceform/formperma/5jf5-XC5SXb47VhUMTlxv30fih-aqYAUbQh8V3lncvQ"
              className="text-blue-600 hover:text-blue-800 underline font-semibold hover:no-underline transition-all"
            >
              Student Grievance and Appeals Form
            </a>{" "}
            no later than ten (10) working days of the issue date of the
            unsuccessful application for admission outcome (per section 10.1 of
            the{" "}
            <a
              href="https://backend.churchill.nsw.edu.au/media/policy_pdfs/Admissions_Policy_CIHE_v1.0_April_2025-Web_oLAnI8C.pdf"
              className="text-blue-600 hover:text-blue-800 underline font-semibold hover:no-underline transition-all"
            >
              Admissions Policy
            </a>
            ) that will be considered based on the{" "}
            <a
              href="https://backend.churchill.nsw.edu.au/media/policy_pdfs/Student-Grievance-Management-Policy.pdf"
              className="text-blue-600 hover:text-blue-800 underline font-semibold hover:no-underline transition-all"
            >
              Student Grievance and Appeals Management Policy
            </a>
            .
          </li>
        </ol>
        {/*  */}
      </main>
    </ContainerLayout>
  );
};

export default Page;
