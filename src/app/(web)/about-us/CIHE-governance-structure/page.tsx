import PatternBannerCard from "@/components/cards/PatternBannerCard";
import Image from "next/image";

const GovernanceStructure = () => {
  return (
    <div>
      <PatternBannerCard title="Churchill Institute of Higher Education Governance" />
      <div className="container mx-auto mb-20 px-5">
        <h3 className="mb-5 text-center text-[24px] font-bold text-[#2C2B4B]">
          Registered Company: Mpika Holdings Pty Ltd (ACN: 612 507 141 | ABN: 91
          612 507 141){" "}
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

        <h3 className="mb-5 text-center text-[24px] font-bold text-[#2C2B4B]">
          Governance Structure & Membership
        </h3>
        <Image
          width={1000}
          height={800}
          alt="governance chart"
          src="/assets/Governance-Structure-Membership.svg"
          className="w-full"
        />

        <h3 className="my-20 text-center text-[24px] font-bold text-[#2C2B4B]">
          Organisational Chart
        </h3>
        <Image
          width={1000}
          height={800}
          alt="governance chart"
          src="/assets/organisational-chart.svg"
          className="w-full"
        />
      </div>
    </div>
  );
};

export default GovernanceStructure;
