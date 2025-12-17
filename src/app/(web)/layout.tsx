import type { ReactNode } from "react";
import NewsletterSection from "@/components/sections/commonSections/NewsletterSection";
import EnquirySection from "@/components/sections/homeSections/EnquirySection";
import SpacingLayout from "@/layouts/spacing-layout";
import Header from "@/components/globals/header";
import Footer from "@/components/globals/footer";
import ChristmasHolidayPopup from "@/components/generic/ChristmasHolidayPopup";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />

      <SpacingLayout>
        {children}

        <NewsletterSection />
      </SpacingLayout>

      <ChristmasHolidayPopup />

      <Footer />
    </>
  );
};

export default Layout;
