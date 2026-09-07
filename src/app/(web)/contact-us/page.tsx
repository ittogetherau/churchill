import ContactUsCard from "@/components/cards/ContactUsCard";
import EnquirySection from "@/components/sections/homeSections/EnquirySection";
import { Button } from "@/components/ui/button";
import { contactData } from "@/constDatas/contactData";
import ContainerLayout from "@/layouts/container-layout";
import SpacingLayout from "@/layouts/spacing-layout";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

type ContactTableRow = {
  label: string;
  value: string;
  href: string;
};

type ContactTableSection = {
  title: string;
  rows: ContactTableRow[];
};

const contactTableSections: ContactTableSection[] = [
  {
    title: "Emergency and General Contacts",
    rows: [
      {
        label: "Emergency Contacts",
        value: "https://churchill.edu.au/emergency-contact",
        href: "https://churchill.edu.au/emergency-contact",
      },
      {
        label: "Admission Enquiries",
        value: "admissions@churchill.edu.au",
        href: "mailto:admissions@churchill.edu.au",
      },
    ],
  },
  {
    title: "Key Churchill Staff",
    rows: [
      {
        label: "CEO & Dean (Mr David Knight)",
        value: "d.knight@churchill.edu.au",
        href: "mailto:d.knight@churchill.edu.au",
      },
      {
        label: "Deputy Dean & Course Coordinator - Management (Dr. Tom Denigan)",
        value: "tom.denigan@churchill.edu.au",
        href: "mailto:tom.denigan@churchill.edu.au",
      },
      {
        label: "Course Coordinator - Accounting (Dr. Siddharth Jain)",
        value: "siddharth.jain@churchill.edu.au",
        href: "mailto:siddharth.jain@churchill.edu.au",
      },
      {
        label: "Course Coordinator - Hospitality (Dr. Ali Abusalem)",
        value: "ali.abusalem@churchill.edu.au",
        href: "mailto:ali.abusalem@churchill.edu.au",
      },
      {
        label: "BIT Course Director (Dr. Prabhu Singh)",
        value: "prabhu.singh@churchill.edu.au",
        href: "mailto:prabhu.singh@churchill.edu.au",
      },
      {
        label: "Student Services Manager (Mr. Ralph Dy)",
        value: "ralph.dy@churchill.edu.au",
        href: "mailto:ralph.dy@churchill.edu.au",
      },
      {
        label: "Library / eLibrary (Mrs. Sirjana Subedi)",
        value: "elibrary@churchill.edu.au",
        href: "mailto:elibrary@churchill.edu.au",
      },
      {
        label: "IT Support / Help (Mr. Jeevan Shah)",
        value: "Jeevan.Shah@churchill.edu.au",
        href: "mailto:Jeevan.Shah@churchill.edu.au",
      },
      {
        label:
          "Finance / Student Tuition Fee / Refund Enquiries (Mrs Binu Shrestha & Mrs Asmita Khatri)",
        value: "finance@churchill.edu.au",
        href: "mailto:finance@churchill.edu.au",
      },
      {
        label: "Marketing / Education Agents Contact - Parramatta - NSW (Mr. Shivang)",
        value: "marketing@churchill.edu.au",
        href: "mailto:marketing@churchill.edu.au",
      },
      {
        label: "Marketing / Education Agents Contact - Melbourne - VIC (Mr. Sudeep Singh)",
        value: "sudeep.singh@churchill.edu.au",
        href: "mailto:sudeep.singh@churchill.edu.au",
      },
    ],
  },
  {
    title: "Student Representatives",
    rows: [
      {
        label: "Academic Board Student Member (Mr. Arjun Silwal)",
        value: "CIHE22525@churchill.edu.au",
        href: "mailto:CIHE22525@churchill.edu.au",
      },
      {
        label:
          "Churchill Institute of Higher Education Students' Association (CIHESA) - President (Mr Sujuuk K.C)",
        value: "CIHE22938@churchill.edu.au",
        href: "mailto:CIHE22938@churchill.edu.au",
      },
      {
        label: "Churchill Institute of Higher Education Students' Association (CIHESA) - webpage",
        value: "https://churchill.edu.au/cihesa",
        href: "https://churchill.edu.au/cihesa",
      },
    ],
  },
];

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
                <Button>
                  Ask us
                  <ChevronRight />
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
                  title={item?.title}
                  description={item?.description}
                  iconUrl={item?.iconUrl}
                  redirect={item?.redirect}
                  locationLinks={item?.locationLinks}
                  socialLinks={item?.socialLinks}
                />
              </div>
            ))}
          </div>
        </ContainerLayout>

        <ContainerLayout>
          <div className="mt-10 rounded-md bg-[#E9E9E9] p-4 md:p-6">
            <h3 className="text-2xl font-bold md:text-3xl">
              Emergency, General and Staff Contacts (Parramatta & Melbourne Campuses)
            </h3>
            <p className="mt-2 text-sm text-neutral-700 md:text-base">
              Updated contact table for emergency, key staff, and student representatives.
            </p>

            <div className="mt-6 overflow-x-auto rounded-md border border-neutral-300 bg-white">
              <table className="min-w-full border-collapse text-left text-sm md:text-base">
                <thead>
                  <tr className="bg-[#f5f5f5]">
                    <th className="border-b border-neutral-300 px-4 py-3 font-semibold">
                      Contact Group / Role
                    </th>
                    <th className="border-b border-neutral-300 px-4 py-3 font-semibold">
                      Webpage / Email
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {contactTableSections.flatMap((section) => {
                    const sectionRows = section.rows.map((row) => {
                      const isExternal = row.href.startsWith("http");

                      return (
                        <tr key={`${section.title}-${row.label}`} className="align-top">
                          <td className="border-b border-neutral-200 px-4 py-3 text-neutral-900">
                            {row.label}
                          </td>
                          <td className="border-b border-neutral-200 px-4 py-3">
                            <a
                              href={row.href}
                              target={isExternal ? "_blank" : undefined}
                              rel={isExternal ? "noreferrer noopener" : undefined}
                              className="text-[#c87400] underline break-all hover:text-[#a45f00]"
                            >
                              {row.value}
                            </a>
                          </td>
                        </tr>
                      );
                    });

                    return [
                      <tr key={`${section.title}-heading`} className="bg-[#fafafa]">
                        <td
                          colSpan={2}
                          className="border-b border-neutral-300 px-4 py-3 font-bold"
                        >
                          {section.title}
                        </td>
                      </tr>,
                      ...sectionRows,
                    ];
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </ContainerLayout>

        <EnquirySection />
      </SpacingLayout>
    </>
  );
};

export default ContactUs;
