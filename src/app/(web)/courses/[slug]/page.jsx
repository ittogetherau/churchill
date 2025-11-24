import { CourseDetails } from "@/components";
import React from "react";

const page = async ({ params }) => {
  const { slug } = await params;

  return (
    <>
      <CourseDetails slug={slug} />
    </>
  );
};

export default page;
