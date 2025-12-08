"use client";

import RequestIDCardForm from "@/components/forms/RequestIDCardForm";
import Timer from "@/components/timer/Timer";
import { Button } from "@/components/ui/button";
import ContainerLayout from "@/layouts/container-layout";
import Image from "next/image";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { siteConfig } from "@/config/siteConfig";

const NEXT_PUBLIC_CHURCHILL_STUDENT_HUB_URL = siteConfig.studentHubUrl;

const stepTitles = [
  { id: 1, title: "Create Your USI ID" },
  { id: 2, title: "Update Your Personal Details" },
  { id: 3, title: "Apply For ID Card" },
  { id: 4, title: "Setup Your Microsoft 365" },
];

const Page = () => {
  const [isIDFormShown, setIsIDFormShown] = useState(false);
  const [activeId, setActiveId] = useState<number | null>(1);
  const handleToggle = (id: number) => {
    setActiveId((prev) => (prev === id ? null : id));
  };

  return (
    <>
      <header
        style={{
          backgroundImage: `linear-gradient(to top, white, #00000000), url('/assets/hero-vector.svg')`,
          backgroundRepeat: "no-repeat",
          objectFit: "cover",
          width: "100%",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="items-center py-[72px]"
      >
        <ContainerLayout>
          <h2 className="text-center text-3xl font-bold text-[#eb9320] capitalize md:text-5xl">
            Welcome to Churchill Institute of Higher Education Orientation
          </h2>

          <Timer />

          <p className="text-center text-3xl text-[#eb9320] capitalize">
            Until next semester begins!
          </p>

          <Image
            src="/assets/orientation-image.jpg"
            width={1000}
            height={400}
            alt="hero image"
            className="mx-auto mix-blend-multiply"
          />
        </ContainerLayout>
      </header>

      <ContainerLayout>
        <section className="bg-primary-orange/10 border-primary-orange/50 flex flex-col rounded-md border py-4 md:px-10">
          {stepTitles.map((item) => {
            const isActive = activeId === item.id;

            return (
              <div
                key={item.id}
                className="border-b border-b-neutral-800/25 py-3 last:border-none"
              >
                <h2
                  onClick={() => handleToggle(item.id)}
                  className={`flex cursor-pointer items-center justify-between px-2 py-1 text-lg font-bold select-none hover:bg-zinc-200/20 md:py-2 md:text-2xl ${
                    isActive ? "border-b border-b-neutral-800/25" : ""
                  }`}
                >
                  <span>
                    Step {item.id}: {item.title}
                  </span>
                  <span
                    className={`transition-all ${isActive ? "rotate-180" : ""}`}
                  >
                    <IoIosArrowDown />
                  </span>
                </h2>

                {isActive && (
                  <>
                    {item.id === 1 && (
                      <div className="my-4 flex flex-col px-5">
                        <h3 className="text-primary-orange pb-2 text-xl font-bold">
                          What is USI?
                        </h3>
                        <p>
                          The Unique Student Identifier (USI) is a reference
                          number issued to students in Australia. It is a unique
                          alphanumeric code assigned to individuals when they
                          enroll in vocational education and training (VET)
                          courses.
                        </p>
                        <h3 className="text-primary-orange mt-6 pb-2 text-xl font-bold">
                          Why is it needed?
                        </h3>
                        <ul className="styled-ul">
                          <li>
                            Record Keeping: The USI allows students to access a
                            complete record of their VET achievements from a
                            single, secure online portal. This includes all
                            nationally recognized training that an individual
                            has undertaken.
                          </li>

                          <li>
                            Improved Data Management: It aids educational
                            institutions and government bodies in managing and
                            analyzing student data, ensuring accuracy and
                            consistency in records.
                          </li>
                          <li>
                            Employment and Further Education: Employers and
                            educational institutions can verify qualifications
                            more easily. This streamlines processes for further
                            education admissions and job applications.
                          </li>

                          <li>
                            Policy and Planning: It helps in policy-making and
                            planning by providing accurate data on student
                            participation and performance in VET courses.
                          </li>
                        </ul>
                        <div className="mt-6 flex flex-col gap-6 md:flex-row md:items-center">
                          <a
                            className="w-fit"
                            href="/assets/docs/Churchill-USI-Instruction-guide.pdf"
                            target="_blank"
                          >
                            <Button>Download Guide</Button>
                          </a>
                          <a
                            className="w-fit"
                            href="https://www.usi.gov.au/students/get-a-usi"
                            target="_blank"
                          >
                            <Button>Sign Up Now</Button>
                          </a>
                        </div>
                      </div>
                    )}

                    {item.id === 2 && (
                      <div className="my-4 flex flex-col gap-4 px-5">
                        <p>
                          Please Make sure that your full legal name, Australian
                          mobile number, Unique Student Identifier, Address
                          Information and Emergency Contact is Up to Date.
                        </p>
                        <a
                          className="w-fit"
                          target="_blank"
                          href="https://creatorapp.zohopublic.com.au/s.lohani_churchill2/students-self-service/form-perma/Students_Self_Service/234r8B2z6wmhnpAnerZCs3yO9NshTyemXBTwbxmkXtFKa4NAE0w1fbWdHhz3x17qGq1A2vOh1S1n7Re5YgNr3bRJRCyR8n0pBErB"
                        >
                          <button className="bg-primary-orange rounded-md border-2 border-black px-6 py-3 font-bold">
                            Update Personal Records Here
                          </button>
                        </a>
                      </div>
                    )}

                    {item.id === 3 && (
                      <div className="my-4 flex flex-col gap-4 px-5">
                        <p>
                          Quickly Fill Out the Form and Your ID Card will Be
                          ready to be Picked Up at Churchill Institute of Higher
                          Education Reception Desk
                        </p>
                        <div onClick={() => setIsIDFormShown(!isIDFormShown)}>
                          <button className="bg-primary-orange rounded-md border-2 border-black px-6 py-3 font-bold">
                            Request ID Card
                          </button>
                        </div>
                      </div>
                    )}

                    {item.id === 4 && (
                      <div className="my-4 flex flex-col gap-4 px-5">
                        <p>
                          You will be Shortly Provided with Login Details For
                          Microsoft 365 by Churchill Institute of Higher
                          Education Staff in your Personal Email. Below is
                          Office365 Guide that will be helpful.
                        </p>

                        <a
                          className="w-fit"
                          target="_blank"
                          href={`https://www.youtube.com/watch?v=xOUlxA-0u14`}
                        >
                          <button className="bg-primary-orange rounded-md border-2 border-black px-6 py-3 font-bold">
                            How to Access Student Email in Office 365
                          </button>
                        </a>
                        <a
                          className="w-fit"
                          target="_blank"
                          href={`${NEXT_PUBLIC_CHURCHILL_STUDENT_HUB_URL}/how-to-guide/how-to-install-Office-365-apps-in-personal-laptop-using-student-account`}
                        >
                          <button className="bg-primary-orange rounded-md border-2 border-black px-6 py-3 font-bold">
                            How to Download Office Apps in Laptop (Word, Excel,
                            Outlook etc)
                          </button>
                        </a>
                      </div>
                    )}
                  </>
                )}
              </div>
            );
          })}
        </section>

        {/* last element */}
      </ContainerLayout>
      <div className="my-[64px]"></div>

      {isIDFormShown && (
        <div className="fixed top-0 left-0 z-[10000] grid h-screen w-screen place-content-center bg-black/80">
          <div
            onClick={() => setIsIDFormShown(!isIDFormShown)}
            className="absolute top-2 right-2 grid h-12 w-12 cursor-pointer place-items-center rounded-full border-2 border-white text-white md:top-8 md:right-8"
          >
            <i className="fi fi-br-cross flex"></i>
          </div>

          <div className="w-screen px-2 md:w-[80vw] md:p-0">
            <RequestIDCardForm />
          </div>
        </div>
      )}
    </>
  );
};

export default Page;
