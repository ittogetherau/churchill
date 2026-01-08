import AccordionComponent from "@/components/accordion/AccordionComponent";
import Button from "@/components/button";
import PatternBannerCard from "@/components/cards/PatternBannerCard";
import { checklist } from "@/constDatas/contactData";
import features from "@/constDatas/features";
import ContainerLayout from "@/layouts/container-layout";
import TwoColumnLayout from "@/layouts/two-column-layout";
import Image from "next/image";
import Link from "next/link";

const Page = () => {
  const title = "Information about Australia";
  const description =
    "<p>Australia is the world’s sixth largest country by land mass,  with an area of approximately 7,700,000 square kilometres . Australia’s population is 28,000 million (2024). Indigenous  Australians (Aboriginals and Torres Strait Inlanders)  are the First People of Australia, who have occupied the continent for over 65,000 years. </p></br><p>Seventy percent of Australia’s  population lives in its state capital cities, making Australia one of the world’s most urbanised countries; and thirty-three (33%) of the population was born abroad. The nation’s capital city and location of the Commonwealth (federal) parliament is Canberra  in the Australian Capital Territory (ACT).</p></br><p>More information about Australia and its culture is available on the Study Australia website.</p>";
  const cta = {
    text: "Visit Study Australia website",
    href: "https://www.studyaustralia.gov.au/en/why-australia",
    external: true,
    icon: "",
  };
  const image = "/assets/downtown-sydney.jpg";

  return (
    <>
      <PatternBannerCard
        title="Future Students"
        description="Welcome to Australia Your Study Abroad Journey Begins Here"
      />

      <TwoColumnLayout
        sidebar={
          <Image
            width={500}
            height={500}
            src={image}
            alt="Hero"
            className="h-auto w-full rounded-xl"
          />
        }
        isEqual={true}
        reversed={true}
      >
        <h2 className="mb-4 text-3xl font-bold">{title}</h2>
        <div
          className="prose prose-lg mb-5 text-gray-800"
          dangerouslySetInnerHTML={{ __html: description }}
        />

        <Link href={cta.href} target={cta.external ? "_blank" : "_self"}>
          <Button
            btnName={cta.text}
            icon={cta.icon}
            styleA={"flex items-center gap-4"}
            style={
              "border border-2 border-[#606060] font-semibold text-[14px] rounded-md px-4 py-3 bg-[#E59623] hover:bg-[#ff9700] transition duration-200 ease-in-out hover:scale-105"
            }
          />
        </Link>
      </TwoColumnLayout>
      <ContainerLayout>
        <h3 className="mb-4 p-0 text-center text-xl sm:p-10">
          Australia remains a leading study destination globally with over
          1000,000 international students studying in Australia in 2025, who
          choose Australia for its:
        </h3>
        <div className="grid h-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((item, index) => (
            <div key={index} className="rounded-md bg-[#E9E9E9] p-5">
              <div className="flex flex-col items-center justify-center gap-2">
                <Image
                  src={item.image}
                  alt={`${item.title} image`}
                  width={400}
                  height={400}
                  className="h-[90px] w-[90px] object-contain mix-blend-multiply"
                />
                <h3 className="text-center text-[18px] font-semibold">
                  {item.title}
                </h3>
                <p className="text-center">{item.subTitle}</p>
              </div>
            </div>
          ))}
        </div>
      </ContainerLayout>

      <ContainerLayout>
        <h3 className="mb-10 p-0 text-center text-xl font-bold sm:p-10">
          The below map of Australia shows the states and location of the
          national capital (Canberra) and state capitals (capital cities):
        </h3>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29342471.43105036!2d126.27452645104982!3d-26.13660754270196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2b2bfd076787c5df%3A0x538267a1955b1352!2sAustralia!5e0!3m2!1sen!2snp!4v1744000380229!5m2!1sen!2snp"
          height="600"
          style={{
            border: 0,
            margin: "auto",
            minWidth: "100%",
            maxWidth: "800px",
          }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </ContainerLayout>

      <ContainerLayout>
        <h3 className="p-5 text-center text-2xl font-bold">
          Information about Sydney
        </h3>
        <p className="mb-10">
          Churchill Institute of Higher Education (CIHE) is located in the
          Sydney suburb of Parramatta – Sydney’s “second city”, a vibrant,
          multi-cultural, commercial, retail and residential hub that is only 30
          minutes by train from Sydney ‘s Central Business District (CBD). Our
          campus is less than 5 minutes’ walk from Parramatta station at level
          1/16-18 Wentworth St. Parramatta.{" "}
        </p>
        <div className="flex flex-col items-center gap-4 md:flex-row">
          <img
            src="/assets/route-paramatta.png"
            alt="First Image"
            className="w-full object-cover md:w-1/2"
          />
          <img
            src="/assets/sydney-paramatta.png"
            alt="Second Image"
            className="w-full object-cover md:w-1/2"
          />
        </div>
        <section className="mt-10">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-800 md:text-3xl">
              Sydney, Australia
            </h2>

            <p className="text-gray-600">
              Sydney is Australia’s largest city with a population of 5.2million
              residents (2024) and is the capital city of the state of New South
              Wales (NSW).
            </p>

            <p className="text-gray-600">
              Sydney has over one hundred beaches from Palm Beach in the north
              to Cronulla in the south; and the world-famous Bondi Beach just 5
              kilometres from the city centre.
            </p>

            <p className="text-gray-600">
              Sydney is a city of local, national, and international commerce,
              and is also a centre of shopping, culture, and entertainment for
              the state of New South Wales. In the 1970s Sydney superseded
              Melbourne as the country’s financial centre, and it is now the top
              choice for international corporate headquarters, especially in
              activities such as banking, computers, and mining.
            </p>

            <p className="text-gray-600">
              Sydney has a sub-tropical climate. January is the hottest month
              with average temperatures from 19-27◦c. July is the coldest month
              with average temperatures between 8-17◦ Celsius. Visit{" "}
              <a
                href="https://www.sydney.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline hover:text-blue-800"
              >
                https://www.sydney.com/
              </a>{" "}
              for more information.
            </p>
          </div>

          <div className="relative mt-10 h-[50vh] w-full">
            <img
              src="/assets/opera-bridge.jpg" // Replace with your image path
              alt="Sydney Harbour and the iconic Sydney Opera House and Harbour Bridge"
              className="h-full w-full object-cover object-center"
            />
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 transform rounded-md bg-black/50 px-4 py-2 text-center text-white">
              <p className="text-lg">
                Sydney Harbour and the iconic Sydney Opera House and Harbour
                Bridge.
              </p>
            </div>
          </div>
        </section>
      </ContainerLayout>

      <ContainerLayout>
        <h3 className="p-5 text-center text-2xl font-bold">
          Pre-Departure Information and about Living in Australia
        </h3>
        <p className="mb-10 text-center">
          Relocating to Australia to study for three or more years is a
          significant decision and life event , and it is important to be
          prepared for your arrival in Australia before you leave your home
          country. Churchill Institute of Higher Education has compiled this
          checklist to inform you about living in Australia and what to consider
          and pack before leaving home.
        </p>

        <AccordionComponent data={checklist} />
      </ContainerLayout>
    </>
  );
};

export default Page;
