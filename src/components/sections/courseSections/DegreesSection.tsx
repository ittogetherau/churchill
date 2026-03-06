import CoursesCard from "@/components/cards/CoursesCard";
import { DegreesQuery } from "@/graphql/generated/graphql";
import { resolveFileLink } from "@/graphql/graphql";

type DegreesSectionProps = {
  degrees: DegreesQuery["degree"];
};

const DegreesSection = ({ degrees }: DegreesSectionProps) => {
  return (
    <>
      {degrees.length === 0 ? (
        <div className="text-muted-foreground text-sm">No degrees found.</div>
      ) : (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:mx-[10%] xl:grid-cols-2">
          {degrees.map((degree) => (
            <CoursesCard
              key={degree.slug!}
              image={resolveFileLink(degree.hero_image)}
              title={degree.title ?? degree.slug!}
              faculty={
                degree.short_title && degree.course_code
                  ? `${degree.short_title} - ${degree.course_code}`
                  : "Degree"
              }
              subTitle={degree.description ?? ""}
              link={`/course/${degree.slug!}`}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default DegreesSection;
