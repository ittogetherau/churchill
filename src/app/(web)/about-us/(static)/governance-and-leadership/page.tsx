import FadeUpAnimation from "@/animations/FadeUp";
import { GovernanceCard, PatternBannerCard } from "@/components/cards";
import { TeamMembersDocument } from "@/graphql/generated/graphql";
import { resolveFileLink, runQuery } from "@/graphql/graphql";
import ContainerLayout from "@/layouts/container-layout";
import SpacingLayout from "@/layouts/spacing-layout";

const content = `<div>
  <h3>Governance</h3>
  <p>Churchill Institute of Higher Education is governed by:</p>
  <ul>
    <li>
      The <a href="/about-us/governance-council">Governing Council</a> as the Institute’s corporate governing body; and its sub-committees:
      <ul>
        <li>The <a href="/about-us/audit-and-risk-management-committee">Audit &amp; Risk Management Committee (ARMC)</a></li>
        <li>
          The <a href="/about-us/academic-board">Academic Board</a> (the primary academic governing body), supported by:
          <ul>
            <li>The Teaching and Learning Committee</li>
            <li>The Course and Industry Advisory Committee</li>
          </ul>
        </li>
      </ul>
    </li>
  </ul>
  <h3>Leadership</h3>
  <p>
    Executive leadership is provided by the CEO &amp; Dean, who is accountable to the Governing Council
    for the implementation of Churchill Institute’s strategic and operational plans, and for the
    day-to-day operational management of the Institute.
  </p>
  <p>
    The CEO &amp; Dean is supported by the Executive Management Team (EMT), an advisory body
    comprising senior staff of the Institute.
  </p>
</div>`;

const Page = async () => {
  const res = await runQuery(TeamMembersDocument);
  const data = res?.team_members ?? [];
  return (
    <SpacingLayout>
      <PatternBannerCard title="Governance & Leadership" />

      <ContainerLayout size="sm">
        <div
          className="rich_text_container"
          dangerouslySetInnerHTML={{ __html: content }}
        ></div>
      </ContainerLayout>
    </SpacingLayout>
  );
};

export default Page;
