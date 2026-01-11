"use client";

import { useSelectedLayoutSegment } from "next/navigation";
import NewsletterSection from "./NewsletterSection";

const NewsletterSectionGate = () => {
  const segment = useSelectedLayoutSegment();

  if (segment === "find-agent") return null;

  return <NewsletterSection />;
};

export default NewsletterSectionGate;
