import ContactUsCard from "@/components/cards/ContactUsCard";
import EnquirySection from "@/components/sections/homeSections/EnquirySection";
import { Button } from "@/components/ui/button";
import { contactData } from "@/constDatas/contactData";
import ContainerLayout from "@/layouts/container-layout";
import SpacingLayout from "@/layouts/spacing-layout";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const ContactUs = () => {
  return (
    <>
      <SpacingLayout>
        <section
          style={{
            backgroundImage: `linear-gradient(rgb(255 255 255 / 64%), rgb(255 255 255 / 64%) 100%), url(/assets/hero-image.jpeg)`,
            backgroundRepeat: "no-repeat",
            objectFit: "cover",
            width: "100%",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="h-[44vh]"
        >
          <div className="container mx-auto flex h-full flex-col items-center justify-center gap-4 px-5">
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
                  className={
                    "rounded-md border border-2 border-[#606060] bg-[#E59623] px-6 py-3 text-[14px] font-semibold transition duration-200 ease-in-out hover:scale-105 hover:bg-[#ff9700] md:px-8"
                  }
                >
                  <FaArrowRight /> Ask Us
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <ContainerLayout>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
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
        </ContainerLayout>

        <EnquirySection />
      </SpacingLayout>
    </>
  );
};

export default ContactUs;
