import NewsletterSection from "@/components/sections/commonSections/NewsletterSection";
import EnquirySection from "@/components/sections/homeSections/EnquirySection";

 

const Layout = ({ children }) => {
  return (
    <div className="space-y-24">
      {children}

      <EnquirySection />
      <NewsletterSection />
    </div>
  );
};

export default Layout;
