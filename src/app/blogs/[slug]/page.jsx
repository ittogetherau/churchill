import { IndivisualBlogPage } from "@/components";
import React from "react";

const page = ({ params }) => {
  const { slug } = params;

  return (
    <div>
      <IndivisualBlogPage slug={slug} />
    </div>
  );
};

export default page;
