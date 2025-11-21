import { CourseDetails } from "@/components";
import React from "react";

const page = ({ params }) => {
  const { slug } = params;

  return (
    <div>
      <CourseDetails slug={slug} />
    </div>
  );
};

export default page;
