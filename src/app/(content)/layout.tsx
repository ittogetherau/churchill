import NewsletterSection from "@/components/sections/commonSections/newsletter-section";
import SpacingLayout from "@/layouts/spacing-layout";
import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <SpacingLayout>
      {children}
      <NewsletterSection />
    </SpacingLayout>
  );
};

export default Layout;
