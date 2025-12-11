import type { ReactNode } from "react";
import NewsletterSection from "@/components/sections/commonSections/NewsletterSection";
import EnquirySection from "@/components/sections/homeSections/EnquirySection";
import SpacingLayout from "@/layouts/spacing-layout";
import Header from "@/components/globals/header";
import Footer from "@/components/globals/footer";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />

      <SpacingLayout>
        {children}

        <EnquirySection />

        <NewsletterSection />
      </SpacingLayout>

      <Footer />
    </>
  );
};

export default Layout;
