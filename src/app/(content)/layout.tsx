import Footer from "@/components/globals/footer";
import Header from "@/components/globals/header";
import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />

      {children}

      <Footer />
    </>
  );
};

export default Layout;
