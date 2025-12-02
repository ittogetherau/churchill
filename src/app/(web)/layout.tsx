import type { ReactNode } from "react";
import NewsletterSection from "@/components/sections/commonSections/NewsletterSection";
import EnquirySection from "@/components/sections/homeSections/EnquirySection";
import SpacingLayout from "@/layouts/spacing-layout";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <SpacingLayout>
      {children}

      <EnquirySection />

      <NewsletterSection />
    </SpacingLayout>
  );
};

export default Layout;
