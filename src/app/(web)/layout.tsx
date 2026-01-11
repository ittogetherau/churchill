import Footer from "@/components/globals/footer";
import Header from "@/components/globals/header";
import NewsletterSectionGate from "@/components/sections/commonSections/NewsletterSectionGate";
import SpacingLayout from "@/layouts/spacing-layout";
import type { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />

      <SpacingLayout>
        {children}

        <NewsletterSectionGate />
      </SpacingLayout>

      {/* <ChristmasHolidayPopup /> */}

      <Footer />
    </>
  );
};

export default Layout;
