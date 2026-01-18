import NewsletterSectionGate from "@/components/sections/commonSections/NewsletterSectionGate";
import SpacingLayout from "@/layouts/spacing-layout";
import type { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <SpacingLayout>
      {children}

      <NewsletterSectionGate />
    </SpacingLayout>
  );
};

export default Layout;
