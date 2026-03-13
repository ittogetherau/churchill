"use client";

import { PatternBannerCard } from "@/components/cards";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import RichTextRenderer from "@/components/utils/rich-text-renderer";
import ContainerLayout from "@/layouts/container-layout";
import { ChevronDown, Star, Trophy } from "lucide-react";
import { useState } from "react";

const awards = [
  {
    id: 1,
    icon: Trophy,
    name: "Dean's Award for Exceptional Academic Achievement",
    approvalDate: "5 Mar 2026",
    tag: "Annual · GPA-Based",
    value: "$2,500",
    meta: "Max 5 recipients · $12,500 / yr",
    fields: [
      {
        title: "Applicable Policy",
        valueHtml: `<a href="https://churchill.edu.au/f/scholarships-and-prizes-policy" target="_blank"}>Scholarships & Prizes Policy </a> <br /> <a href="https://cms.churchill.edu.au/assets/fadf12b4-bc82-49ed-921b-7d2821ba5b8c/Assessment_Exams_Policy_v2.5_July_2025.pdf">Assessment & Examinations Policy</a> (Sections 12.3 and 12.4)`,
      },
      {
        title: "Scholarship Owner / Administrator",
        valueHtml: "CEO & Dean or delegate ",
      },
      {
        title: "Rationale",
        valueHtml:
          "To recognise students who have achieved an exceptional level of academic achievement after completing each year of their course of study.",
      },
      {
        title: "Award Criteria",
        valueHtml: `
        <p>
        The Dean’s Award for Exceptional Academic Achievement is awarded to a maximum of five (5) students each year who achieve:
        </p>
        <ol type="a">
          <li>
            a GPA of ≥ 6.0 / 7.0 after completing their first, second and third year of enrolment in the course; and
          </li>

          <li>
            Students with a GPA of ≥ 6.0/7.0 will be ranked from highest to lowest each year to determine the awardees based on the number of awards available.
          </li>

          <li>
            If 2 eligible students achieve exactly the same GPA, the monetary value will be halved and the award issued to both students.
          </li>
        </ol>
        `,
      },
      {
        title: "Applicable to commencing or continuing students?",
        valueHtml:
          "Continuing students after completion of their first, second and third year of their course enrolment .  ",
      },
      {
        title: "Monetary Award / Gift",
        valueHtml:
          "Yes. $2,500 for each awardee ($12,500 annually for 5 awardees) will be allocated as a tuition fee reduction for the student’s next semester of enrolment at Churchill Institute  and when awarded at the end of a student’s final year of the course, the  amount will be deposited into each  recipient’s nominated bank account (less any outstanding fees or fines owed to the Institute). ",
      },
      { title: "Certificate Awarded? ", valueHtml: "Yes" },
      {
        title: "Maximum Number of Scholarships Awarded Annually ",
        valueHtml:
          "Up to five (5) awarded annually,  totalling $12,500, which is  subject to annual review.  ",
      },
      {
        title: "Approval of Awardees & Awardee Notification Process ",
        valueHtml: "",
      },
      {
        title: "",
        valueHtml:
          "The Academic Board (AB) at its grade approval meeting each semester will approve the recipients of this award who meet the Award Criteria, as evidenced by the awardee(s) academic transcript(s); and recipients shall be notified of their award in writing by the CEO & Dean within  five (5) working days of the applicable AB  meeting. . ",
      },
      {
        title: "Ceremony?",
        valueHtml: `<p>Yes. Awardees will have the option to either:</p>
        <ul>
          <li>
            Be issued their award certificate at an internal awards ceremony (year 1, 2 and 3 recipients); or
          </li>

          <li>
            At the annual Churchill Institute graduation ceremony (year 3 recipients only); or
          </li>

          <li>
            may collect their Certificate from the Student Services Office at the time advised by the Institute
          </li>
        </ul>`,
      },
      {
        title: `Included in <a href="https://www.education.gov.au/quality-and-legislative-frameworks/australian-higher-education-graduation-statement">AHEGS Statement?</a>`,
        valueHtml: "Yes.",
      },
      {
        title: "Other Information  ",
        valueHtml: `A student’s GPA is calculated  per the formula described in section 12.4 of the <a href="https://churchill.edu.au/f/assessments-and-examinations-policy">Assessment & Examinations Policy</a>`,
      },
    ],
  },
  {
    id: 2,
    icon: Star,
    name: "Churchill Institute Academic Achievement Award",
    approvalDate: "5 Mar 2026",
    tag: "Per Unit · HD-Based",
    value: "$500",
    meta: "Max 15 awards · $7,500 / yr",
    fields: [
      {
        title: `Renewal Date `,
        valueHtml: `No later than three (3)  years from the approval date or  as the Academic Board otherwise determines. `,
      },
      {
        title: "Applicable Policy",
        valueHtml: `<a href="https://churchill.edu.au/f/scholarships-and-prizes-policy" target="_blank"}>Scholarships & Prizes Policy </a> <br /> <a href="https://cms.churchill.edu.au/assets/fadf12b4-bc82-49ed-921b-7d2821ba5b8c/Assessment_Exams_Policy_v2.5_July_2025.pdf">Assessment & Examinations Policy</a> (Sections 12.3)`,
      },
      {
        title: `Scholarship Owner / Administrator `,
        valueHtml: `CEO & Dean or delegate `,
      },
      {
        title: `Rationale `,
        valueHtml: `To recognise students who have achieved a grade of High Distinction (HD) for the unit(s) they are enrolled in each semester; to motivate and recognise students generally and  to provide financial support to high achieving students.`,
      },
      {
        title: `Applicable Course(s) / Unit(s) `,
        valueHtml: `All  courses currently accredited by TEQSA and all units delivered in semesters 1, 2 and 3 each year. `,
      },
      {
        title: `Award Criteria `,
        valueHtml: `<p>
The Churchill Institute Academic Achievement Award will be awarded to students who:
</p>

<ol>
  <li>
    achieve a grade of High Distinction (HD) for the unit(s) they complete in each semester of their course enrolment; and
  </li>

  <li>
    should the number of eligible students exceed the number of awards available each semester / year, the award will be issued based on a ranking of students with the highest mark(s) in the HD grade range for the applicable unit(s), relative to the number of awards available each semester / year; and
  </li>

  <li>
    if ≥ 2 students obtain the same mark in the HD grade range after ranking who are deemed eligible for the award, the award value will be equally split between the number of affected students.
  </li>

  <li>
    A student who meets 1-3 above will be issued a maximum of four (4) awards per year
  </li>
</ol>`,
      },
      {
        title: `Monetary  Award / Gift `,
        valueHtml: `<p><strong>Yes.</strong></p> <p> $500 for each award issued in the form of a <strong>tuition fee reduction, applied to the student’s next semester of enrolment;</strong> or if awarded in the students’ final semester, the <strong>$500</strong> will be deposited into the student’s nominated bank account for each unit they achieved an HD grade (less any outstanding fees or fines owed to the Institute). </p>`,
      },
      {
        title: `Maximum Number of Awards issued annually `,
        valueHtml: `Up to 15 awards @ $500 each, totalling $7,500 annually, distributed across Semesters 1,2 and 3, which is subject to review each year. `,
      },
      {
        title: `Selection & Notification Process `,
        valueHtml: `The Academic Board (AB) at its grade approval meetings will approve the recipients of this award who meet the Award Criteria, as evidenced by the awardee(s) academic transcript(s); and recipients shall be notified of their award in writing by the CEO & Dean or delegate within five (5) working days of the applicable AB  meeting.  `,
      },
      {
        title: `Ceremony? `,
        valueHtml: `<strong>Yes.</strong> An informal recognition ceremony will be held on campus, twice annually (nominally),  where certificates will be issued to awardees by the Dean / Deputy Dean / Course Coordinator along with light refreshments.   `,
      },
      {
        title: `Included in <a href="https://www.education.gov.au/quality-and-legislative-frameworks/australian-higher-education-graduation-statement">AHEGS Statement?</a>`,
        valueHtml: "Yes.",
      },
      { title: `Other Information`, valueHtml: `Nil` },
    ],
  },
];

function AwardCard({
  award,
  isLast,
}: {
  award: (typeof awards)[number];
  isLast: boolean;
}) {
  const [open, setOpen] = useState(false);
  const Icon = award.icon;

  const PRIMARY = 4;
  const primaryFields = award.fields.slice(0, PRIMARY);
  const extraFields = award.fields.slice(PRIMARY);

  return (
    <div className="relative flex gap-6">
      <div className="flex flex-col items-center">
        <div className="bg-primary z-10 flex size-10 shrink-0 items-center justify-center rounded-full ring-4 ring-white">
          <Icon className="size-[18px] text-white" strokeWidth={1.75} />
        </div>
        {!isLast && <div className="bg-alt-background mt-1 w-px flex-1" />}
      </div>

      <div className={`flex-1 ${isLast ? "pb-0" : "pb-10"}`}>
        <p className="text-muted-foreground mb-3 text-xs tabular-nums">
          {award.approvalDate}
        </p>

        <div className="border-border overflow-hidden rounded-xl border bg-white shadow-xs">
          <div className="flex items-start justify-between gap-4 px-5 pt-4 pb-3">
            <div className="min-w-0 flex-1 space-y-1">
              <span className="bg-alt-background text-primary inline-block rounded-sm px-2 py-0.5 text-[10px] font-medium tracking-wide">
                {award.tag}
              </span>

              <h2 className="text-[17px] leading-snug font-semibold text-slate-900">
                {award.name}
              </h2>
            </div>

            <div className="shrink-0 text-right">
              <p className="text-primary text-3xl leading-none font-black tracking-tight tabular-nums">
                {award.value}
              </p>
              <p className="text-muted-foreground mt-0.5 text-[9px] tracking-widest uppercase">
                per award
              </p>
            </div>
          </div>

          <div className="text-foreground bg-alt-background mx-5 mb-4 rounded px-3 py-1.5 text-[11px] font-medium">
            {award.meta}
          </div>

          <div className="space-y-4 px-5 py-4">
            {primaryFields.map((f, i) => (
              <div key={i}>
                <RichTextRenderer content={`<h6>${f.title}</h6>`} />
                <RichTextRenderer content={f.valueHtml} />
              </div>
            ))}

            <Collapsible open={open} onOpenChange={setOpen}>
              <CollapsibleTrigger className="text-primary flex items-center gap-1 text-[11px] font-medium hover:opacity-80">
                <ChevronDown
                  className={`size-3.5 transition-transform ${
                    open ? "rotate-180" : ""
                  }`}
                />
                {open ? "Less" : "Full details"}
              </CollapsibleTrigger>

              <CollapsibleContent className="pt-3">
                <div className="space-y-4">
                  {extraFields.map((f, i) => (
                    <div key={i}>
                      <RichTextRenderer content={`<h6>${f.title}</h6>`} />
                      <RichTextRenderer content={f.valueHtml} />
                    </div>
                  ))}
                </div>
              </CollapsibleContent>
            </Collapsible>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <>
      <PatternBannerCard title="Dean's Awards and Prizes" />

      <ContainerLayout size="sm">
        <div className="py-8">
          {awards.map((award, i) => (
            <AwardCard
              key={award.id}
              award={award}
              isLast={i === awards.length - 1}
            />
          ))}
        </div>
      </ContainerLayout>
    </>
  );
}
