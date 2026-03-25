import { PatternBannerCard } from "@/components/cards";
import RichTextRenderer from "@/components/utils/rich-text-renderer";
import ContainerLayout from "@/layouts/container-layout";
import SpacingLayout from "@/layouts/spacing-layout";

const content = `<section>
  <h2>Sydney (Parramatta Campus)</h2>

  <article>
    <h3>Find Accommodation in Sydney</h3>
    <p>Starting your studies in Sydney is exciting — but securing accommodation early is essential. Sydney has a competitive rental market, so we strongly recommend arranging your housing before you arrive.</p>
    <p>Churchill Institute of Higher Education does not provide on-campus accommodation, but our Student Services team can guide you in finding safe, suitable options.</p>
  </article>

  <article>
    <h3>Estimated Costs</h3>
    <ul>
      <li>Rent typically ranges from AUD $300–$900 per week (<a href="https://www.rent.com.au">Source</a>)</li>
      <li>Students must show access to at least AUD $29,710 per year for living costs (visa requirement) (<a href="https://australiastudy.com">Source</a>)</li>
      <li>Sydney is one of Australia’s most expensive cities — plan your budget carefully (<a href="https://www.budgetyourtrip.com">Source</a>)</li>
    </ul>
  </article>

  <article>
    <h3>Accommodation Options</h3>

    <section>
      <h4>Homestay</h4>
      <p>Live with a local family in a safe, supportive environment. Meals are usually included. Ideal for new international students.</p>
    </section>

    <section>
      <h4>Student Accommodation</h4>
      <p>Purpose-built housing with furnished rooms, study areas, and all bills included. Convenient but higher cost.</p>
    </section>

    <section>
      <h4>Shared Housing</h4>
      <p>Rent a room in a shared apartment or house. More affordable and popular among students.</p>
    </section>

    <section>
      <h4>Short-Term Stay</h4>
      <p>Temporary options like hostels or serviced apartments while you search for long-term housing. Higher cost.</p>
    </section>
  </article>

  <article>
    <h3>Popular Student Areas</h3>
    <ul>
      <li>Parramatta (walking distance to campus)</li>
      <li>Westmead, Granville (affordable &amp; close)</li>
      <li>Harris Park, Auburn (student-friendly)</li>
    </ul>
    <p>(<a href="https://amberstudent.com">Source</a>)</p>
  </article>

  <article>
    <h3>Recommended Platforms</h3>
    <ul>
      <li><a href="https://www.amberstudent.com">Amber Student</a></li>
      <li><a href="https://www.scape.com.au">Scape Student Living Sydney</a></li>
      <li><a href="https://unilodge.com.au">UniLodge</a></li>
      <li><a href="https://homestaynetwork.org">Australian Homestay Network (AHN)</a></li>
      <li><a href="https://www.flatmates.com.au">Flatmates.com.au</a></li>
      <li><a href="https://www.realestate.com.au">Realestate.com.au</a></li>
      <li><a href="https://www.domain.com.au">Domain</a></li>
    </ul>
  </article>
</section>

<br/>
<br/>
<hr/>
<br/>

<section>
  <h2>Melbourne (CBD Campus)</h2>

  <article>
    <h3>Find Accommodation in Melbourne</h3>
    <p>According to Time Out's 2026 report, Melbourne, Australia, is ranked the best city in the world, marking the first time an Australian city has topped this annual list. It was chosen for its vibrant cultural scene, exceptional food and coffee, and lively, diverse neighbourhoods, beating out cities like Shanghai and Edinburgh.</p>
    <p>Melbourne offers a wide range of student accommodation options, but demand is high. We recommend securing housing before arrival to avoid stress and higher costs.</p>
    <p>Our Student Services team is available to help you understand your options and make informed decisions.</p>
  </article>

  <article>
    <h3>Estimated Costs</h3>
    <ul>
      <li>Rent typically ranges from AUD $280–$850 per week (<a href="https://www.bing.com">Source</a>)</li>
      <li>Minimum required living funds: AUD $29,710 per year (<a href="https://australiastudy.com">Source</a>)</li>
      <li>Costs vary depending on location and accommodation type</li>
    </ul>
  </article>

  <article>
    <h3>Accommodation Options</h3>

    <section>
      <h4>Homestay</h4>
      <p>Stay with a local family and experience Australian culture. Includes meals and a private room.</p>
    </section>

    <section>
      <h4>Student Accommodation</h4>
      <p>Modern, furnished buildings with facilities and all-inclusive bills. Close to campus and transport.</p>
    </section>

    <section>
      <h4>Shared Housing</h4>
      <p>Affordable option with shared living spaces. Great for meeting other students.</p>
    </section>

    <section>
      <h4>Short-Term Stay</h4>
      <p>Temporary accommodation while searching for permanent housing. Higher weekly costs.</p>
    </section>
  </article>

  <article>
    <h3>Popular Student Areas</h3>
    <ul>
      <li>Melbourne CBD (close to campus)</li>
      <li>Carlton, Fitzroy (student hubs)</li>
      <li>Richmond, Collingwood (well connected)</li>
      <li>Footscray, Sunshine (more affordable)</li>
    </ul>
  </article>

  <article>
    <h3>Recommended Platforms</h3>
    <ul>
      <li><a href="https://www.amberstudent.com">Amber Student</a></li>
      <li><a href="https://www.scape.com.au">Scape Student Living Melbourne</a></li>
      <li><a href="http://unilodge.com.au">UniLodge</a></li>
      <li><a href="https://homestaynetwork.org">Australian Homestay Network (AHN)</a></li>
      <li><a href="https://www.realestate.com.au">Realestate.com.au</a></li>
      <li><a href="https://www.flatmates.com.au">Flatmates.com.au</a></li>
      <li><a href="https://www.domain.com.au">Domain</a></li>
    </ul>
  </article>
</section>

<br/>
<br/>
<hr/>
<br/>

<section>
  <h2>Important (ESOS Compliance – Applies to Both Cities)</h2>
  <ul>
    <li>Read your lease carefully before signing</li>
    <li>Do not pay money before verifying the property</li>
    <li>Bond cannot exceed 4 weeks’ rent</li>
    <li>Protect your personal information</li>
    <li>Use trusted platforms and licensed agents</li>
    <li>Know your rights as a tenant in Australia</li>
  </ul>
</section>`;

const Page = () => {
  return (
    <SpacingLayout>
      <PatternBannerCard
        title="Find Accommodation in Sydney"
        description="Academic Board"
      />

      <ContainerLayout size="sm">
        <RichTextRenderer content={content} />
      </ContainerLayout>
    </SpacingLayout>
  );
};

export default Page;
