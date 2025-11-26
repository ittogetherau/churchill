import { EnquirySection, NewsletterSection } from "@/components";

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
