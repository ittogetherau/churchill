import NewsletterSection from "@/components/sections/commonSections/NewsletterSection";
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
