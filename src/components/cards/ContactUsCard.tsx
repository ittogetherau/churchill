import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import React from "react";
import type { LucideIcon } from "lucide-react";

interface SocialLink {
  url: string;
  icon: LucideIcon;
  title: string;
}

interface ContactUsProp {
  title?: string;
  description?: string;
  iconUrl: string | StaticImageData;
  redirect?: string;
  locationLinks?: {
    label: string;
    url: string;
  }[];
  socialLinks?: SocialLink[];
}
const ContactUsCard = ({
  title,
  description,
  iconUrl,
  redirect,
  locationLinks,
  socialLinks,
}: ContactUsProp) => {
  return (
    <>
      <div className="flex h-full flex-col gap-4 rounded-md bg-[#E9E9E9] p-4 hover:outline hover:outline-neutral-900/20 md:p-6">
        <Image
          src={iconUrl}
          width={100}
          height={100}
          alt={`Icon for ${description} image`}
        />
        <p className="text-2xl font-bold">{title}</p>
        {locationLinks?.length ? (
          <div className="flex flex-col gap-2">
            {locationLinks.map((item) => (
              <span
                key={item.url}
                className="font-semibold underline whitespace-pre-line"
              >
                <Link target="_blank" href={item.url}>
                  {item.label}
                </Link>
              </span>
            ))}
          </div>
        ) : redirect ? (
          <span className="font-semibold underline whitespace-pre-line">
            <Link target="_blank" href={redirect}>
              {description}
            </Link>
          </span>
        ) : (
          <p className="whitespace-pre-line">{description}</p>
        )}

        {socialLinks && (
          <div className="flex flex-wrap gap-3">
            {socialLinks?.map((item, index) => (
              <Link target="_blank" key={index} href={item.url}>
                <div className="flex flex-col items-center justify-center rounded-xl p-2 hover:bg-[#E5962310]">
                  <item.icon className="h-8 w-8 text-[#E59623]" />
                  <p>{item.title}</p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </>
  );
};
export default ContactUsCard;
