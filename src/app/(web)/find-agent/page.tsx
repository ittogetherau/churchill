import PatternBannerCard from "@/components/cards/PatternBannerCard";
import NewsletterSection from "@/components/sections/commonSections/NewsletterSection";
import { FetchAgents } from "@/components/utils/apiQueries";
import AgentSearch from "./_pages/agent-search";

const Page = async () => {
  const res = await FetchAgents();
  const agents = res?.data ?? [];
  [];

  return (
    <div>
      <PatternBannerCard
        title="Find a Churchill Institute of Higher Education AGENT"
        description="Get in touch with one of our official Churchill Institute of Higher Education agents."
        BtnAText="Find an Agent"
        BtnALink="#search-agent"
        BtnBText="Become an Agent"
        BtnBLink="https://zfrmz.com.au/JgLxavLkXBxSFGUch5E6"
      />

      <AgentSearch agents={agents} />

      <NewsletterSection
        title="Interested in becoming an agent?"
        subtitle="If you would like to become an authorised representative of CIHE Sydney, please submit an Expression of Interest. Expression of interests will be assessed by the relevant Regional Recruitment Manager."
        linkUrl="https://forms.zohopublic.com.au/CIHE/form/duplicatedonottouchAgencyRequestApplicationForm/formperma/Z-cwJzbSBI4l1IJbFvia5ZwzHFxyNw2AoPgQAstZl80"
        linkText="Fill Up A Quick Form"
      />
    </div>
  );
};

export default Page;
