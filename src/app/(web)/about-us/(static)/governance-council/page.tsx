import { PatternBannerCard } from "@/components/cards";
import ContainerLayout from "@/layouts/container-layout";
import SpacingLayout from "@/layouts/spacing-layout";
import RichTextRenderer from "@/components/utils/rich-text-renderer";

const content = `<div>
  <h2>Governing Council</h2>
  <p>
    Per Churchill Institute’s Governance Framework, the Governing Council is Churchill Institute’s corporate and independent governing body, with powers over all matters related to the management of higher education. The Governing Council is advised on financial and risk management matters by the <a href="/about-us/audit-and-risk-management-committee">Audit &amp; Risk Management Committee (ARMC)</a> and delegates the academic governance of the Institute to the <a href="/about-us/academic-board">Academic Board</a>.
  </p>

  <h3>Functions</h3>
  <p>The functions of the Governing Council include:</p>
  <ol>
    <li>Exercising overall responsibility for the pursuit and implementation of the mission and goals of the higher education institution and ensuring the Institute’s compliance with legislative requirements.</li>
    <li>Obtaining and using appropriate information and advice to assist strategy and decision making.</li>
    <li>Identifying and monitoring the implementation of the Institute’s strategic direction, business plan, risk management and annual budget in relation to its higher education operations.</li>
    <li>Establishing an Academic Board to oversee the academic governance of the higher education institution, determining membership and monitoring its activities.</li>
    <li>Awarding qualifications on recommendation of the Academic Board.</li>
    <li>Ensuring that operational policies and procedures are consistent with legal requirements and equity principles, enabling freedom of intellectual inquiry, fostering the well-being of students and staff, supporting student participation in decision making, supporting participation by Aboriginal and Torres Strait Islander people and ensuring that policies and procedures are implemented and applied.</li>
    <li>Ensuring effective action is undertaken to address issues underlying complaints, allegations of misconduct and breaches of academic integrity.</li>
    <li>Undertaking periodic independent reviews of the Institute’s governance and ensuring agreed actions for improvement are implemented.</li>
  </ol>

  <h3>Membership</h3>
  <p>
    The Governing Council’s membership comprises a majority of members who are independent and external to Churchill Institute.
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
        <td><a href="/about-us/teams/brendan-boyle">Professor Brendan Boyle</a></td>
      </tr>
      <tr>
        <td>Chair of the Academic Board</td>
        <td>Yes</td>
        <td><a href="/about-us/teams/maria-varua">Assoc Prof Maria Varua</a></td>
      </tr>
      <tr>
        <td>Chair of the Audit &amp; Risk Management Committee</td>
        <td>Yes</td>
        <td><a href="/about-us/teams/dr-joo-gim-heaney">Dr Joo-Gim Heaney</a></td>
      </tr>
      <tr>
        <td>Member</td>
        <td>Yes</td>
        <td><a href="/about-us/teams/ravi-seethamraju">Assoc Prof Ravi Seethamraju</a></td>
      </tr>
      <tr>
        <td>Member</td>
        <td>Yes</td>
        <td>Vacant (October 2025)</td>
      </tr>
      <tr>
        <td>CEO &amp; Dean</td>
        <td>No</td>
        <td><a href="/about-us/teams/david-knight">Mr. David Knight</a></td>
      </tr>
    </tbody>
  </table>
</div>`;

const Page = () => {
  return (
    <SpacingLayout>
      <PatternBannerCard title="Governance & Leadership" />

      <ContainerLayout size="sm">
        <RichTextRenderer content={content} richText />
      </ContainerLayout>
    </SpacingLayout>
  );
};

export default Page;
