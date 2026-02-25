import { PatternBannerCard } from "@/components/cards";
import ContainerLayout from "@/layouts/container-layout";
import SpacingLayout from "@/layouts/spacing-layout";

const content = `<div>
  <h2>Audit and Risk Management Committee</h2>

  <p>
    Per Churchill Institute’s Governance Framework, the Audit and Risk Management Committee (ARMC) was established to ensure the development and implementation of the Churchill Institute’s Risk Management Plan; to ensure that appropriate procedures are in place to identify, assess and manage risk from a strategic and operational perspective; to monitor the implementation of risk management procedures and to report to the <a href="/about-us/governance-council">Governing Council</a> after each meeting.
  </p>

  <h3>Functions</h3>
  <p>The functions of the Audit and Risk Management Committee (ARMC) are to:</p>
  <ol>
    <li>Oversee the processes for the identification and assessment of the general risk spectrum, review the outcomes of risk management processes and monitor emerging risks based on changes in the external environment;</li>
    <li>Review and recommend to the Governing Council new and significant amendments to policies and related items, in the areas of risk management;</li>
    <li>Oversee the adequacy of measures taken to mitigate organisational exposure to identified operational and strategic risks, including receiving a report at  every meeting detailing all significant incidents and the manner in which they were dealt with;</li>
    <li>Monitor the process for complaints referred to external authorities, and all matters relating to failures of internal controls, cyber security or possible fraud;</li>
    <li>Oversee internal controls and related risk reporting in all areas of the Institute operations including but not limited to commercial activities, workplace health and safety (including sexual harassment and bullying), security and staff, and student conduct;</li>
    <li>Ensure an Institute wide risk assessment, or update, involving all key stakeholders is undertaken at least annually;</li>
    <li>Oversee the operation of delegations at the Institute, including receiving a report at least annually detailing all significant changes to the Delegation of Authority;</li>
    <li>Provide an annual report outlining the Institute’s risk profile to the Governing Council;</li>
    <li>Oversee the processes of compliance with external compliance obligations and reporting, including but not limited to TEQSA requirements;</li>
    <li>Oversee the process for the management of legislative compliance requirements.</li>
    <li>Assure that all Churchill Institute annual financial statements comply with accounting standards, fairly represent the financial position and performance of the Institute, including utilisation of appropriate estimates and judgements; </li>
    <li>Review annual statutory financial statements, ensure that Churchill Institute’s financial statements are audited annually, including recommending to the Governing Council a qualified auditor, recommend and provide advice to the Governing Council (including whether appropriate action has been taken in response to audit recommendations and adjustments, including relevant internal financial controls systems), and recommend their approval; and assure that financial statements are signed off by appropriate persons approved by the Institute;</li>
    <li>Undertake any other risk assessment, monitoring, reporting mitigation activities as required to ensure risks are identified, assessed and managed from a strategic and operational perspective.</li>
  </ol>

  <h3>Membership</h3>
  <p>
    Members of the Audit and Risk Management Committee (ARMC) are approved by the Governing Council, and its membership comprises a majority of members who are independent and external to Churchill Institute.
  </p>

  <table>
    <thead>
      <tr>
        <th>Position</th>
        <th>Independent &amp; External Member (Yes or No)</th>
        <th>Name</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Chairperson</td>
        <td>Yes</td>
        <td>Dr Joo-Gim Heaney</td>
      </tr>
      <tr>
        <td>Member</td>
        <td>Yes</td>
        <td>Mr Ron Day</td>
      </tr>
      <tr>
        <td>Member</td>
        <td>Yes</td>
        <td>Dr Angela Hecimovic</td>
      </tr>
      <tr>
        <td>CEO &amp; Dean</td>
        <td>No</td>
        <td>Mr. David Knight</td>
      </tr>
    </tbody>
  </table>
</div>`;

const Page = () => {
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
