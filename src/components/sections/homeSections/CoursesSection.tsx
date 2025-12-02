import CoursesSlider from "@/components/sliders/CoursesSlider";
import HeadingText from "@/components/ui/heading-text";
import ContainerLayout from "@/layouts/container-layout";
import SpacingLayout from "@/layouts/spacing-layout";

const CoursesSection = () => {
  return (
    <ContainerLayout className="space-y-12">
      <div className="text-center">
        <HeadingText>Our Courses</HeadingText>
        <HeadingText level={4}>Bachelor of Business (BBus)</HeadingText>
        <HeadingText level={0}>CRICOS Course Code: 111749J</HeadingText>
        <p className="max-w-2xl mx-auto">
          Take charge of your future with a flexible and practical business
          degree. The Bachelor of Business at Churchill Institute of Higher
          Education is a 3-year, TEQSA-accredited course designed to equip you
          with real-world skills through four in-demand majors: Accounting,
          Hospitality, Information Systems, and Management.
        </p>
      </div>

      <CoursesSlider />
    </ContainerLayout>
  );
};

export default CoursesSection;
