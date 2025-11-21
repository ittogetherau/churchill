"use client";
import React, { useEffect, useState } from "react";
import {
  TabbedPane,
  CourseOverviewSection,
  EnquirySection,
  NewsletterSection,
  TopBannerCard,
  CoursesSlider,
  Spiner,
  HalfTopBanner,
} from "@/components";
import { FetchCourseData } from "@/components/utils/apiQueries";

const CourseDetails = ({ slug }) => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    FetchCourseData(slug)
      .then((res) => {
        setData(res.data);

        setIsLoading(false);
      })
      .catch((err) => console.error(err));
  }, [slug]);

  return (
    <>
      {isLoading ? (
        <Spiner />
      ) : (
        <div className="flex flex-col gap-[32px] lg:gap-[64px]">
          <TopBannerCard
            beforeTitle={data?.faculty.faculty_name}
            // image={`/assets/banner-courses.webp`}
            image={data?.heroImage}
            // imageA={data?.heroIconImage}
            titleSpan={data?.course_name}
            courseCode={`${data?.course_code}`}
            subTitle={data?.description}
            BtnAText="Apply Now"
            BtnBText="Enquire Now"
            link={`/assets/apply-at-churchill.pdf`}
            linkA={`https://forms.zohopublic.com.au/CIHE/form/StudentHubEnquiry/formperma/XilFJje5kQ-h7f4saQYbSV4kJ-kAMiG7p1QNfWEvDXs`}
            imageAStyle={`lg:scale-[135%]`}
          />

          <CourseOverviewSection overviewData={data?.course_details} />

          <TabbedPane data={data?.tabbed_pane} />

          <EnquirySection />

          <div className="container mx-auto px-5">
            <h2 className="font-bold leading-9 mb-6 text-[36px] text-[#2C2B4B]">
              Browse Other Majors
            </h2>
            <CoursesSlider />
          </div>

          <NewsletterSection />
        </div>
      )}
    </>

  );
};
export default CourseDetails;
