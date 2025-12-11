import FadeUpAnimation from "@/animations/FadeUp";
import GovernanceCard from "@/components/cards/GovernanceCard";
import PatternBannerCard from "@/components/cards/PatternBannerCard";
import {
  TeamMembersDocument,
  type TeamMembersQuery,
} from "@/graphql/generated/graphql";
import { runQuery, resolveFileLink } from "@/graphql/graphql";
import ContainerLayout from "@/layouts/container-layout";

const GovernancePageSection = async () => {
  const res = await runQuery(TeamMembersDocument);
  const data = res?.team_members ?? [];

  return (
    <>
      <PatternBannerCard
        title="Governance And Leadership"
        description="Churchill's senior leaders guide our institution towards big goals, focusing on excellence and innovative teaching to help our community, country, and the world."
      />

      <ContainerLayout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
        {data.map((el, index) => (
          <FadeUpAnimation
            key={el.slug ?? index}
            delay={index * 0.1}
            className="h-full"
          >
            <GovernanceCard
              image={resolveFileLink(el.photo)}
              title={el.name ?? ""}
              subTitle={el.post ?? ""}
              description={""}
              slug={el.slug ?? ""}
            />
          </FadeUpAnimation>
        ))}
      </ContainerLayout>
    </>
  );
};

export default GovernancePageSection;
