import { PatternBannerCard } from "@/components/cards";
import DegreesSection from "@/components/sections/courseSections/DegreesSection";
import { DegreesDocument } from "@/graphql/generated/graphql";
import { runQuery } from "@/graphql/graphql";
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

      <ContainerLayout>
        <DegreesSection degrees={degrees} />
      </ContainerLayout>
    </>
  );
};

export default Page;
