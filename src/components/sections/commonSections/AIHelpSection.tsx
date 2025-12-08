import FadeUpAnimation from "@/animations/FadeUp";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/siteConfig";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const AIHelpSection = () => {
  const NEXT_PUBLIC_CHURCHILL_STUDENT_HUB_URL = siteConfig.studentHubUrl;
  return (
    <div className="container mx-auto px-5">
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <div className="row-span-2">
          <FadeUpAnimation>
            <div className="bg-light-grey hover-shadow flex flex-col justify-between rounded-md transition-all">
              <div className="flex flex-col gap-4 px-6 py-5">
                <h2 className="text-matte-purple text-[36px] font-bold">
                  How should I and shouldn't use AI as a student
                </h2>
                <p>
                  Artificial intelligence is a relatively new technology that
                  benefits users greatly but presents new challenges in
                  maintaining academic integrity. This tool aims to help users
                  understand the ethical use of AI in learning and prevent
                  academic misconduct.
                </p>
                <Link
                  href="https://forms.office.com/pages/responsepage.aspx?id=pchQSBwySU6qkkyOYABEq0c2jWIDBQtCqhGjIlivHnhUOEJQMU5YUVQ2U1A2T1A0RDM1WEFCOFBGQi4u"
                  target="_blank"
                >
                  <Button>
                    <FaArrowRight /> Learn to use AI
                  </Button>
                </Link>
              </div>
              <div className="flex items-center justify-end px-4">
                <Image
                  src="/assets/AI-image.webp"
                  width={600}
                  height={600}
                  alt="ai image"
                  className="w-[200px]"
                />
              </div>
            </div>
          </FadeUpAnimation>
        </div>

        <FadeUpAnimation delay={0.3}>
          <div className="bg-light-grey flex flex-col gap-4 rounded-md p-4">
            <h2 className="text-matte-purple text-[36px] font-bold">
              Understanding AI
            </h2>

            <div className="flex flex-col gap-4">
              {linksData.map((item, index) => (
                <Link
                  key={index}
                  href={item.link}
                  target="_blank"
                  className="h-full w-full"
                >
                  <div className="hover-shadow group font-lg flex items-center justify-between rounded-md bg-white px-6 py-3">
                    <p className="">{item.title}</p>
                    <span className="group-hover:text-primary-orange transition-all group-hover:translate-x-2">
                      <FaArrowRight />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </FadeUpAnimation>
        {/*  */}

        <FadeUpAnimation delay={0.6}>
          <div className="bg-light-grey flex h-full flex-col gap-3 rounded-md p-6">
            <h2 className="text-matte-purple text-[36px] font-bold">
              Student Support Policy
            </h2>
            <p>
              This policy explains Churchill Institute of Higher Education's
              (Churchill Institute of Higher Education or 'the Institute')
              commitment to providing the support services students need to
              successfully complete their studies at the Institute.
            </p>
            <Link
              href={`${NEXT_PUBLIC_CHURCHILL_STUDENT_HUB_URL}/assets/Policy-and-procedure/SupportforStudentsPolicy.pdf`}
              className="w-fit"
              target="_blank"
            >
              <Button>
                <FaArrowRight /> Learn more about support policy
              </Button>
            </Link>
          </div>
        </FadeUpAnimation>
      </div>
    </div>
  );
};

export default AIHelpSection;

const linksData = [
  {
    title: "Understanding how AI works",
    link: "https://theconversation.com/everyones-having-a-field-day-with-chatgpt-but-nobody-knows-how-it-actually-works-196378",
  },
  {
    title: "Ethical ways to use ChatGPT as a student",
    link: "https://theconversation.com/everyones-having-a-field-day-with-chatgpt-but-nobody-knows-how-it-actually-works-196378",
  },
  {
    title: "Using AI tools for study",
    link: "https://library.flinders.edu.au/students/ai",
  },
  {
    title: "Using Generative AI",
    link: "https://deakin.libguides.com/generative-AI",
  },
];
