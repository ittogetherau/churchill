"use client";
import React, { useState } from "react";
import {
  Timer,
  Button,
  RequestIDCardForm,
  NewsletterSection,
} from "@/components";
import Image from "next/image";
import { IoIosArrowDown } from "react-icons/io";

const NEXT_PUBLIC_CHURCHILL_STUDENT_HUB_URL =
  process.env.NEXT_PUBLIC_CHURCHILL_STUDENT_HUB_URL;

const stepTitles = [
  { id: 1, title: "Create Your USI ID" },
  { id: 2, title: "Update Your Personal Details" },
  { id: 3, title: "Apply For ID Card" },
  { id: 4, title: "Setup Your Microsoft 365" },
];

const Page = () => {
  const [isIDFormShown, setIsIDFormShown] = useState(false);
  const [activeId, setActiveId] = useState(1);

  const handleToggle = (id) => {
    setActiveId(activeId === id ? null : id);
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
        className="py-[72px] items-center"
      >
        <div className="container flex flex-col gap-[52px]  mx-auto px-5">
          <h2 className="text-3xl md:text-5xl font-bold text-center text-[#eb9320] capitalize">
            Welcome to Churchill Institute of Higher Education Orientation
          </h2>

          <Timer />

          <p className="text-3xl text-center text-[#eb9320] capitalize">
            Until next semester begins!
          </p>

          <Image
            src="/assets/orientation-image.jpg"
            width={1000}
            height={400}
            alt="hero image"
            className="mix-blend-multiply mx-auto"
          />
        </div>
      </header>

      <div className="container mx-auto px-5 flex flex-col gap-[52px] ">
        <section className="flex flex-col py-4 md:px-10 rounded-md bg-primary-orange/10 border border-primary-orange/50">
          {stepTitles.map((item) => {
            const isActive = activeId === item.id;

            return (
              <div
                key={item.id}
                className="py-3 border-b border-b-neutral-800/25 last:border-none"
              >
                <h2
                  onClick={() => handleToggle(item.id)}
                  className={`text-lg md:text-2xl font-bold py-1 md:py-2 px-2 flex items-center justify-between cursor-pointer select-none hover:bg-zinc-200/20 ${isActive ? "border-b-neutral-800/25 border-b" : ""
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
                      <div className="my-4 px-5 flex flex-col">
                        <h3 className="text-xl font-bold  text-primary-orange pb-2">
                          What is USI?
                        </h3>
                        <p>
                          The Unique Student Identifier (USI) is a reference
                          number issued to students in Australia. It is a unique
                          alphanumeric code assigned to individuals when they
                          enroll in vocational education and training (VET)
                          courses.
                        </p>
                        <h3 className="text-xl font-bold  text-primary-orange pb-2 mt-6">
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
                        <div className="flex flex-col gap-6 md:flex-row md:items-center mt-6">
                          <a
                            className="w-fit"
                            href="/assets/docs/Churchill-USI-Instruction-guide.pdf"
                            target="_blank"
                          >
                            <Button btnName={"Download Guide"} />
                          </a>
                          <a
                            className="w-fit"
                            href="https://www.usi.gov.au/students/get-a-usi"
                            target="_blank"
                          >
                            <Button btnName={"Sign Up Now"} />
                          </a>
                        </div>
                      </div>
                    )}

                    {item.id === 2 && (
                      <div className="my-4 px-5 flex flex-col gap-5">
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
                          <button className="border-2 border-black px-6 py-3 bg-primary-orange rounded-md font-bold">
                            Update Personal Records Here
                          </button>
                        </a>
                      </div>
                    )}

                    {item.id === 3 && (
                      <div className="my-4 px-5 flex flex-col gap-5">
                        <p>
                          Quickly Fill Out the Form and Your ID Card will Be
                          ready to be Picked Up at Churchill Institute of Higher Education Reception Desk
                        </p>
                        <div onClick={() => setIsIDFormShown(!isIDFormShown)}>
                          <button className="border-2 border-black px-6 py-3 bg-primary-orange rounded-md font-bold">
                            Request ID Card
                          </button>
                        </div>
                      </div>
                    )}

                    {item.id === 4 && (
                      <div className="my-4 px-5 flex flex-col gap-5">
                        <p>
                          You will be Shortly Provided with Login Details For
                          Microsoft 365 by Churchill Institute of Higher Education Staff in your Personal
                          Email. Below is Office365 Guide that will be helpful.
                        </p>

                        <a
                          className="w-fit"
                          target="_blank"
                          href={`https://www.youtube.com/watch?v=xOUlxA-0u14`}
                        >
                          <button className="border-2 border-black px-6 py-3 bg-primary-orange rounded-md font-bold">
                            How to Access Student Email in Office 365
                          </button>
                        </a>
                        <a
                          className="w-fit"
                          target="_blank"
                          href={`${NEXT_PUBLIC_CHURCHILL_STUDENT_HUB_URL}/how-to-guide/how-to-install-Office-365-apps-in-personal-laptop-using-student-account`}
                        >
                          <button className="border-2 border-black px-6 py-3 bg-primary-orange rounded-md font-bold">
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
      </div>
      <div className="my-[64px]"></div>

      <NewsletterSection />

      {isIDFormShown && (
        <div className="fixed top-0 left-0 w-screen h-screen bg-black/80 z-[10000] grid place-content-center">
          <div
            onClick={() => setIsIDFormShown(!isIDFormShown)}
            className="absolute top-2 right-2 md:top-8 md:right-8 w-12 h-12 grid place-items-center text-white border-2 border-white rounded-full cursor-pointer"
          >
            <i className="fi fi-br-cross flex"></i>
          </div>

          <div className="w-screen px-2 md:p-0 md:w-[80vw] ">
            <RequestIDCardForm />
          </div>
        </div>
      )}
    </>
  );
};

export default Page;
