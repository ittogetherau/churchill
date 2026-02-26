import { CoursesCard, PatternBannerCard } from "@/components/cards";
import { DegreesDocument } from "@/graphql/generated/graphql";
import { resolveFileLink, runQuery } from "@/graphql/graphql";
import ContainerLayout from "@/layouts/container-layout";

const Page = async () => {
  const data = await runQuery(DegreesDocument);
  const degrees = data.degree ?? [];

  return (
    <>
      <PatternBannerCard
        title="Degrees"
        description="Choose a degree to explore available majors and course details."
      />

      <ContainerLayout size="sm">
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
                    ? `${degree?.short_title} - ${degree?.course_code}`
                    : "Degree"
                }
                subTitle={degree.description ?? ""}
                link={`/course/${degree.slug!}`}
              />
            ))}
          </div>
        )}
      </ContainerLayout>
    </>
  );
};

export default Page;
