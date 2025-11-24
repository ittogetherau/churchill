import { FaArrowRight } from "react-icons/fa";
import { contactData, contactFaqs } from "@/constDatas/contactData";
import Link from "next/link";
import {
  Button,
  ContactUsCard,
  EnquirySection,
  AccordionComponent,
  AskAQeustionForm,
} from "@/components";

const ContactUs = () => {
  return (
    <>
      <section
        style={{
          backgroundImage: `linear-gradient(rgb(255 255 255 / 64%), rgb(255 255 255 / 64%) 100%), url(/assets/hero-image.jpeg)`,
          backgroundRepeat: "no-repeat",
          objectFit: "cover",
          width: "100%",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className=" h-[44vh]"
      >
        <div className="container mx-auto px-5 h-full flex flex-col items-center justify-center gap-5">
          <h2 className="text-[40px] leading-[48px] font-bold">Contact Us</h2>
          <p className="font-semibold">We are here to answer Your Query</p>
          <div className="flex gap-3">
            <Link
              target="_blank"
              href={
                "https://forms.zohopublic.com.au/CIHE/form/StudentHubEnquiry/formperma/XilFJje5kQ-h7f4saQYbSV4kJ-kAMiG7p1QNfWEvDXs"
              }
            >
              <Button
                btnName="Ask Us"
                icon={<FaArrowRight />}
                styleA={"flex items-center gap-1"}
                style={
                  "border font-semibold text-[14px] border-2 border-[#606060] rounded-md px-6 md:px-8 py-3 bg-[#E59623] hover:bg-[#ff9700] transition duration-200  ease-in-out hover:scale-105"
                }
              />
            </Link>
            {/* <Link href={"/contact-us/faq"}>
              <Button
                btnName="FAQ"
                icon={<FaArrowRight />}
                styleA={"flex items-center gap-1"}
                style={
                  "border font-semibold text-[14px] border-2 border-[#606060] rounded-md px-4 py-3 hover:bg-[#ff9700] transition duration-200  ease-in-out hover:scale-105"
                }
              />
            </Link> */}
          </div>
        </div>
      </section>

      <div className="container mx-auto px-5">
        <div className="flex flex-col gap-[32px] lg:gap-[64px]">
          <section className="mt-[64px]">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {contactData?.map((item, index) => (
                <div key={index}>
                  <ContactUsCard
                    key={index}
                    title={item?.title}
                    description={item?.description}
                    iconUrl={item?.iconUrl}
                    redirect={item?.redirect}
                    socialLinks={item?.socialLinks}
                  />
                </div>
              ))}
            </div>
          </section>

          {/* <section className="flex flex-col gap-12 mt-[32px]">
            <h2 className=" text-3xl md:text-4xl font-bold text-center w-fit mx-auto">
              Frequently Asked Questions
            </h2>

            <AccordionComponent data={contactFaqs?.slice(0, 3)} />

            <span className="w-fit mx-auto">
              <Link href="/contact-us/faq">
                <Button
                  btnName="Load More FAQ"
                  icon={<FaArrowRight />}
                  styleA={"flex items-center gap-1"}
                  style={
                    "border font-semibold text-[14px] border-2 border-[#606060] rounded-md px-4 py-3 hover:bg-[#ff9700] transition duration-200  ease-in-out hover:scale-105"
                  }
                />
              </Link>
            </span>
          </section> */}

          <EnquirySection />
        </div>
      </div>

      <hr className="mb-[64px]" />
    </>
  );
};

export default ContactUs;
