import AccordionComponent from "@/components/accordion/AccordionComponent";
import PatternBannerCard from "@/components/cards/PatternBannerCard";
import SplitHero from "@/components/split-hero";
import { checklist } from "@/constDatas/contactData";
import features from "@/constDatas/features";
import ContainerLayout from "@/layouts/container-layout";
import Image from "next/image";

const Page = () => {
  return (
    <>
      <PatternBannerCard
        title="Future Students"
        description="Welcome to Australia Your Study Abroad Journey Begins Here"
      />
      <SplitHero
        image="/assets/downtown-sydney.jpg"
        title="Information about Australia"
        description="<p>Australia is the world’s sixth largest country by land mass,  with an area of approximately 7,700,000 square kilometres . Australia’s population is 28,000 million (2024). Indigenous  Australians (Aboriginals and Torres Strait Inlanders)  are the First People of Australia, who have occupied the continent for over 65,000 years. </p></br><p>Seventy percent of Australia’s  population lives in its state capital cities, making Australia one of the world’s most urbanised countries; and thirty-three (33%) of the population was born abroad. The nation’s capital city and location of the Commonwealth (federal) parliament is Canberra  in the Australian Capital Territory (ACT).</p></br><p>More information about Australia and its culture is available on the Study Australia website.</p>"
        cta={{
          text: "Visit Study Australia website",
          href: "https://www.studyaustralia.gov.au/en/why-australia",
          external: true,
          icon: "",
        }}
      />
      <ContainerLayout>
        <h3 className="text-xl  mb-4 p-0 sm:p-10 text-center">
          Australia remains a leading study destination globally with over
          1000,000 international students studying in Australia in 2025, who
          choose Australia for its:
        </h3>
        <div className="grid grid-cols-1 h-full md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item, index) => (
            <div key={index} className="bg-[#E9E9E9] p-5 rounded-md">
              <div className="flex flex-col gap-2 justify-center items-center">
                <Image
                  src={item.image}
                  alt={`${item.title} image`}
                  width={400}
                  height={400}
                  className="object-contain w-[90px] h-[90px] mix-blend-multiply"
                />
                <h3 className="text-center font-semibold text-[18px]">
                  {item.title}
                </h3>
                <p className="text-center">{item.subTitle}</p>
              </div>
            </div>
          ))}
        </div>
      </ContainerLayout>

      <ContainerLayout>
        <h3 className="text-xl font-bold mb-10 p-0 sm:p-10 text-center">
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
        <h3 className="text-2xl font-bold p-5 text-center">
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
        <div className="flex flex-col md:flex-row items-center gap-4">
          <img
            src="/assets/route-paramatta.png"
            alt="First Image"
            className="w-full md:w-1/2 object-cover"
          />
          <img
            src="/assets/sydney-paramatta.png"
            alt="Second Image"
            className="w-full md:w-1/2 object-cover"
          />
        </div>
        <section className="mt-10">
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
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
                className="underline text-blue-600 hover:text-blue-800"
              >
                https://www.sydney.com/
              </a>{" "}
              for more information.
            </p>
          </div>

          <div className="relative w-full h-[50vh] mt-10">
            <img
              src="/assets/opera-bridge.jpg" // Replace with your image path
              alt="Sydney Harbour and the iconic Sydney Opera House and Harbour Bridge"
              className="object-cover object-center w-full h-full"
            />
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-center bg-black/50 text-white px-4 py-2 rounded-md">
              <p className="text-lg">
                Sydney Harbour and the iconic Sydney Opera House and Harbour
                Bridge.
              </p>
            </div>
          </div>
        </section>
      </ContainerLayout>

      <ContainerLayout>
        <h3 className="text-2xl font-bold p-5 text-center">
          Pre-Departure Information and about Living in Australia
        </h3>
        <p className="text-center mb-10">
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
