import PatternBannerCard from "@/components/cards/PatternBannerCard";
import NewsletterSection from "@/components/sections/commonSections/NewsletterSection";
import AgentSearch from "./_pages/agent-search";
import SpacingLayout from "@/layouts/spacing-layout";
import { runQuery } from "@/graphql/graphql";
import { AgentDocument } from "@/graphql/generated/graphql";

const Page = async () => {
  const res = await runQuery(AgentDocument);
  const data = res.active_agents ?? [];

  return (
    <SpacingLayout>
      <PatternBannerCard
        title="Find a CIHE Education Agent"
        description="Get in touch with one of our official Churchill Institute of Higher Education agents."
        BtnAText="Find an Education Agent"
        BtnALink="#search-agent"
        BtnBText="Become an Education Agent"
        BtnBLink="https://zfrmz.com.au/JgLxavLkXBxSFGUch5E6"
      />

      <AgentSearch agents={data} />

      <NewsletterSection
        title="Interested in becoming an agent?"
        subtitle="If you would like to become an authorised representative of CIHE Sydney, please submit an Expression of Interest. Expression of interests will be assessed by the relevant Regional Recruitment Manager."
        linkUrl="https://forms.zohopublic.com.au/CIHE/form/duplicatedonottouchAgencyRequestApplicationForm/formperma/Z-cwJzbSBI4l1IJbFvia5ZwzHFxyNw2AoPgQAstZl80"
        linkText="Fill Up A Quick Form"
      />
    </SpacingLayout>
  );
};

export default Page;
