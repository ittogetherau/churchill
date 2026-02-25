import PatternBannerCard from "@/components/cards/pattern-banner-card";
import { GovernanceStructureDocument } from "@/graphql/generated/graphql";
import { resolveFileLink, runQuery } from "@/graphql/graphql";
import ContainerLayout from "@/layouts/container-layout";
import SpacingLayout from "@/layouts/spacing-layout";
import Image from "next/image";

const GovernanceStructure = async () => {
  const raw = await runQuery(GovernanceStructureDocument);
  const data = raw.governance_structure;

  return (
    <>
      <PatternBannerCard title="Churchill Institute of Higher Education Governance" />

      <SpacingLayout>
        <ContainerLayout>
          <h3 className="mb-5 text-center text-[24px] font-bold text-[#2C2B4B]">
            Registered Company: Mpika Holdings Pty Ltd (ACN: 612 507 141 | ABN:
            91 612 507 141){" "}
          </h3>
          <h4 className="mb-5 text-center text-[20px] font-semibold text-[#2C2B4B]">
            Trading Name: Churchill Institute of Higher Education
          </h4>
          <p className="mb-5 text-center text-[18px] text-[#2C2B4B]">
            TEQSA Provider Number:{" "}
            <a
              href="https://www.teqsa.gov.au/provider/mpika-holdings-pty-ltd"
              target="_blank"
              className="text-underline text-blue-500"
            >
              PRV14305
            </a>{" "}
            | CRICOS Provider Number: 04082E
          </p>
        </ContainerLayout>

        <ContainerLayout>
          <h3 className="mb-4 text-center text-[24px] font-bold text-[#2C2B4B]">
            Governance Structure & Membership
          </h3>

          <Image
            width={1000}
            height={800}
            alt="governance chart"
            src={resolveFileLink(data?.governance_structure_membership)}
            className="w-full"
          />
        </ContainerLayout>

        <ContainerLayout>
          <h3 className="mb-4 text-center text-[24px] font-bold text-[#2C2B4B]">
            Organisational Chart
          </h3>

          <Image
            width={1000}
            height={800}
            alt="governance chart"
            src={resolveFileLink(data?.organisational_chart)}
            className="w-full"
          />
        </ContainerLayout>
      </SpacingLayout>
    </>
  );
};

export default GovernanceStructure;
