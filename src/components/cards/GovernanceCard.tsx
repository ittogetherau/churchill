import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import RichTextRenderer from "@/components/utils/rich-text-renderer";

interface GovernanceCardProps {
  image?: string;
  title: string;
  subTitle?: string;
  description?: string;
  slug?: string;
}

const GovernanceCard: React.FC<GovernanceCardProps> = ({
  image,
  title,
  subTitle,
  description,
  slug,
}) => {
  return (
    <div className="group h-full justify-between">
      <div className="relative overflow-hidden rounded-md">
        <Image
          src={`${image}`}
          alt={`Image of ${title}`}
          width={400}
          height={400}
          quality={75}
          className="aspect-square w-full object-cover transition-all duration-500 group-hover:scale-105"
        />
      </div>
      <div className="group-hover:bg-alt-background flex -translate-y-8 flex-col gap-3 rounded-lg bg-[#f5f3ef] p-6 transition-all group-hover:-translate-y-12 md:mx-[2%]">
        <h3 className="text-2xl font-bold text-[#302f36] transition-all">
          {title}
        </h3>

        <p className="text-[#302f36]transition-all text-[16px] font-bold">
          {subTitle}
        </p>

        {description && (
          <RichTextRenderer
            content={description}
            richText={false}
            className="line-clamp-3"
          />
        )}

        <Link
          className="w-fit group-hover:text-white"
          href={`/about-us/teams/${slug}`}
        >
          <Button variant={"ghost"}>
            Learn More
            <ArrowRight />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default GovernanceCard;
