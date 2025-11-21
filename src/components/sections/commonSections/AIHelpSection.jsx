import { Button } from "@/components";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";
import FadeUpAnimation from "@/animations/FadeUp";

const AIHelpSection = () => {
  const NEXT_PUBLIC_CHURCHILL_STUDENT_HUB_URL =
    process.env.NEXT_PUBLIC_CHURCHILL_STUDENT_HUB_URL;
  return (
    <div className="container mx-auto px-5">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <div className=" row-span-2">
          <FadeUpAnimation>
            <div className="bg-light-grey hover-shadow transition-all rounded-md flex flex-col justify-between">
              <div className=" flex flex-col px-6 py-5  gap-5">
                <h2 className="font-bold text-[36px] text-matte-purple">
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
                  <Button
                    btnName={"Learn to use AI"}
                    icon={<FaArrowRight />}
                    styleA={"flex items-center gap-1"}
                  />
                </Link>
              </div>
              <div className="flex items-center px-4 justify-end">
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
          <div className="bg-light-grey rounded-md p-4 gap-4 flex flex-col">
            <h2 className="font-bold text-[36px] text-matte-purple">
              Understanding AI
            </h2>

            <div className="flex flex-col gap-4 ">
              {linksData.map((item, index) => (
                <Link
                  key={index}
                  href={item.link}
                  target="_blank"
                  className="w-full h-full"
                >
                  <div className="bg-white hover-shadow group rounded-md px-6 py-3 font-lg flex items-center justify-between ">
                    <p className="">{item.title}</p>
                    <span className="group-hover:text-primary-orange group-hover:translate-x-2 transition-all">
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
          <div className="bg-light-grey rounded-md h-full p-6 flex flex-col gap-3">
            <h2 className="font-bold text-[36px] text-matte-purple">
              Student Support Policy
            </h2>
            <p>
              This policy explains Churchill Institute of Higher Education's
              (Churchill Institute of Higher Education or 'the Institute') commitment to providing the support
              services students need to successfully complete their studies at
              the Institute.
            </p>
            <Link
              href={`${NEXT_PUBLIC_CHURCHILL_STUDENT_HUB_URL}/assets/Policy-and-procedure/SupportforStudentsPolicy.pdf`}
              className="w-fit"
              target="_blank"
            >
              <Button
                btnName={"Learn more about support policy"}
                icon={<FaArrowRight />}
                styleA={"flex items-center gap-1"}
              />
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
