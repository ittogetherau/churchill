import { PatternBannerCard } from "@/components";
import Image from "next/image";

const GovernanceStructure = ({ slug }) => {
  return (
    <div>
      <PatternBannerCard title="Churchill Institute of Higher Education Governance" />
      <div className="container mx-auto px-5 mb-20">
        <h3 className="text-[24px] font-bold text-[#2C2B4B] text-center mb-5">Registered Company: Mpika Holdings Pty Ltd (ACN: 612 507 141 | ABN: 91 612 507 141) </h3>
        <h4 className="text-[20px] font-semibold text-[#2C2B4B] text-center mb-5">Trading Name: Churchill Institute of Higher Education</h4>
        <p className="text-[18px] text-[#2C2B4B] text-center mb-5">TEQSA Provider Number: <a href="https://www.teqsa.gov.au/provider/mpika-holdings-pty-ltd" target="_blank" className="text-blue-500 text-underline">PRV14305</a> | CRICOS Provider Number: 04082E</p>

        <h3 className="text-[24px] font-bold text-[#2C2B4B] text-center mb-5">Governance Structure & Membership</h3>
        <Image
          width={1000}
          height={800}
          alt="governance chart"
          src="/assets/Governance-Structure-Membership.svg"
          className="w-full"
        />

        <h3 className="text-[24px] font-bold text-[#2C2B4B] text-center my-20">Organisational Chart</h3>
        <Image
          width={1000}
          height={800}
          alt="governance chart"
          src="/assets/organisational-chart.svg"
          className="w-full"
        />
      </div>
    </div >
  );
};

export default GovernanceStructure;
