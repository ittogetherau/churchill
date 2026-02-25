import { PatternBannerCard } from "@/components/cards";
import AboutSection from "@/components/sections/aboutUsSections/AboutSection";
import ContainerLayout from "@/layouts/container-layout";

const Page = () => {
  return (
    <>
      <PatternBannerCard title="Welcome From The CEO & Dean" />
      <ContainerLayout>
        <AboutSection />
      </ContainerLayout>
    </>
  );
};

export default Page;
