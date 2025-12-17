"use client";

import { PatternBannerCard } from "@/components/cards";
import HeadingText from "@/components/ui/heading-text";
import ContainerLayout from "@/layouts/container-layout";
import SpacingLayout from "@/layouts/spacing-layout";
import React from "react";

type ContactType = "phone" | "mail" | "link";

type Contact = {
  label: string;
  value: string;
  type: ContactType;
};

type Service = {
  title: string;
  iconClass: string;
  contacts: Contact[];
};

const services: Service[] = [
  {
    title: "24 Hour Emergency Contacts",
    iconClass: "fi fi-rr-light-emergency-on",
    contacts: [
      {
        label: "NSW Emergency (Police/Medical/Fire) Dial",
        value: "000",
        type: "phone",
      },
      { label: "Victims Access Line", value: "1800 633 063", type: "phone" },
      { label: "Rape and Crisis Centre", value: "1800 424 017", type: "phone" },
      { label: "Crime Stoppers", value: "1800 333 000", type: "phone" },
    ],
  },
  {
    title: "Mental Health Services (Free)",
    iconClass: "fi fi-rr-brain",
    contacts: [
      { label: "NSW Mental Health Line", value: "1800 011 511", type: "phone" },
      { label: "Lifeline", value: "131 114", type: "phone" },
    ],
  },
  {
    title: "Drug and Alcohol Counselling",
    iconClass: "fi fi-rr-syringe",
    contacts: [
      {
        label: "Alcoholics Anonymous NSW (24 hours)",
        value: "02 9799 1199",
        type: "phone",
      },
      { label: "Family Drug Support", value: "02 4782 9222", type: "phone" },
      { label: "Family Drug Support", value: "1300 368 186", type: "phone" },
    ],
  },
  {
    title: "Victims of Crime Support",
    iconClass: "fi fi-rr-street-view",
    contacts: [
      {
        label: "24-hour information, support and referrals",
        value: "02 9374 3000",
        type: "phone",
      },
      { label: "Interpreting Services", value: "131 450", type: "phone" },
    ],
  },
  {
    title: "Rape & Domestic Violence",
    iconClass: "fi fi-rr-sad-tear",
    contacts: [
      { label: "NSW Rape Crisis", value: "1800 424 017", type: "phone" },
      {
        label: "Sexual Assault Counselling Australia",
        value: "1800 211 028",
        type: "phone",
      },
      {
        label: "Domestic Violence Impact Line",
        value: "1800 943 539",
        type: "phone",
      },
    ],
  },
  {
    title: "NSW International Student Legal Service [Free]",
    iconClass: "fi fi-rr-student",
    contacts: [
      {
        label: "Website",
        value: "https://rlc.org.au/do-you-need-legal-help",
        type: "link",
      },
    ],
  },
  {
    title: "Legal Aid",
    iconClass: "fi fi-rr-legal",
    contacts: [
      { label: "LawAccess NSW", value: "1300 888 529", type: "phone" },
    ],
  },
  {
    title: "Cultural Support Services",
    iconClass: "fi fi-rr-praying-hands",
    contacts: [
      {
        label: "Anti-Discrimination NSW",
        value: "1800 670 812",
        type: "phone",
      },
    ],
  },
  {
    title: "Aboriginal Legal Service",
    iconClass: "fi fi-rr-house-user",
    contacts: [
      {
        label: "For police and court matters",
        value: "1800 765 767",
        type: "phone",
      },
      {
        label: "For care, protection and family matters",
        value: "1800 733 233",
        type: "phone",
      },
    ],
  },
];

const formatContactHref = (contact: Contact) => {
  switch (contact.type) {
    case "phone":
      return `tel:${contact.value.replace(/\s+/g, "")}`;
    case "mail":
      return `mailto:${contact.value}`;
    case "link":
      return contact.value;
    default:
      return "#";
  }
};

const EmergencyServicesPage = () => {
  return (
    <SpacingLayout>
      <div className="mx-auto mb-8 w-fit max-w-2xl pt-9 text-center">
        <HeadingText>Emergency Services</HeadingText>
        <HeadingText level={6} className="font-normal">
          Churchill Institute of Higher Education Students can call the services
          below in the case of an emergency 24 Hours, 7 Days a week.
        </HeadingText>
      </div>

      <ContainerLayout size="sm">
        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-alt-background/25 rounded-lg p-5 shadow"
            >
              <div className="bg-primary-orange/25 mb-5 grid aspect-square h-[70px] w-[70px] place-items-center rounded-full">
                <i
                  className={`${service.iconClass} m-0 grid h-[50px] w-[50px] place-items-center text-3xl`}
                ></i>
              </div>
              <h3 className="mb-4 text-xl font-semibold text-orange-600">
                {service.title}
              </h3>
              <ul className="space-y-3 text-gray-700">
                {service.contacts.map((contact, i) => (
                  <li key={i}>
                    {contact.label}:{" "}
                    <a
                      href={formatContactHref(contact)}
                      target={contact.type === "link" ? "_blank" : undefined}
                      className="font-semibold text-orange-600 hover:underline"
                    >
                      {contact.value}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </ContainerLayout>

      <ContainerLayout size="sm">
        <div className="mt-12 rounded-lg bg-orange-50 p-6 text-center">
          <h3 className="mb-2 text-lg font-semibold text-gray-800">
            Need Immediate Help?
          </h3>
          <p className="mb-4 text-gray-600">
            Don’t hesitate to reach out to these services for support, 24/7.
          </p>
          <a
            href="tel:000"
            className="inline-block rounded-lg bg-orange-500 px-6 py-2 text-white transition-colors hover:bg-orange-600"
          >
            Call Emergency: 000
          </a>
        </div>
      </ContainerLayout>
    </SpacingLayout>
  );
};

export default EmergencyServicesPage;
