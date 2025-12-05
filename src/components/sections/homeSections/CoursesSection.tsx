import CoursesSlider from "@/components/sliders/CoursesSlider";
import HeadingText from "@/components/ui/heading-text";
import {
  CourseSummaryFieldsFragment,
  DegreeCompactFieldsFragment,
} from "@/graphql/generated/graphql";
import ContainerLayout from "@/layouts/container-layout";

const CoursesSection = ({
  courses,
  degree,
}: {
  courses: CourseSummaryFieldsFragment[];
  degree: DegreeCompactFieldsFragment | null;
}) => {
  if (!courses?.length) return null;

  const degreeTitle = degree?.title ?? "";
  const degreeCode = degree?.course_code ?? "";

  return (
    <ContainerLayout className="space-y-12">
      <div className="text-center">
        <HeadingText>Our Courses</HeadingText>

        <HeadingText level={4}>
          {degreeTitle}
          {degreeCode ? ` (${degreeCode})` : ""}
        </HeadingText>

        {degreeCode && (
          <HeadingText level={0}>CRICOS Course Code: {degreeCode}</HeadingText>
        )}

        <p className="max-w-2xl mx-auto">{degree?.description}</p>
      </div>

      <CoursesSlider data={courses} />
    </ContainerLayout>
  );
};

export default CoursesSection;
