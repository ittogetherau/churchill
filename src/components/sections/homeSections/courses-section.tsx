import CoursesSlider from "@/components/sliders/courses-slider";
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
    <ContainerLayout className="space-y-8">
      <div className="text-center">
        <HeadingText className="relative mx-auto mb-4 w-fit">
          Our Courses
          <span className="bg-primary-orange absolute bottom-0 left-0 z-[-1] block h-1/4 w-full"></span>
        </HeadingText>

        <HeadingText level={4} heading={0}>
          {degreeTitle}
          {degreeCode ? ` (${degree?.short_title})` : ""}
        </HeadingText>

        {degreeCode && (
          <HeadingText level={0}>CRICOS Course Code: {degreeCode}</HeadingText>
        )}

        <p className="mx-auto mt-2 max-w-4xl">{degree?.description}</p>
      </div>

      <CoursesSlider data={courses} />
    </ContainerLayout>
  );
};

export default CoursesSection;
