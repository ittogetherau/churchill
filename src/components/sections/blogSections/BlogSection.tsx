"use client";
import FadeUpAnimation from "@/animations/FadeUp";
import { BlogItemCard } from "@/components/cards";
import { Button } from "@/components/ui/button";
import { BlogFieldsFragment } from "@/graphql/generated/graphql";
import { resolveFileLink } from "@/graphql/graphql";
import ContainerLayout from "@/layouts/container-layout";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const data: headerType = {
  title: "Latest Blogs",
  isCenter: true,
};

interface headerType {
  title: string;
  isCenter: boolean;
}

function BlogSection({
  blogs,
  titleSectionData = data,
}: {
  blogs: BlogFieldsFragment[];
  titleSectionData?: headerType;
}) {
  return (
    <ContainerLayout className="container mx-auto space-y-6 px-5">
      <h2
        className={`text-[36px] font-bold text-[#2C2B4B] ${titleSectionData.isCenter ? "mx-auto text-center" : ""}`}
      >
        {titleSectionData.title}
      </h2>

      <section className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-4 xl:grid-cols-3">
        {blogs.map((item, index) => {
          const formattedDate = new Intl.DateTimeFormat("en-AU", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
          }).format(new Date(item.date_created));

          return (
            <FadeUpAnimation key={index} delay={index * 0.2}>
              <BlogItemCard
                slug={item?.slug ?? ""}
                title={item?.title ?? ""}
                image={resolveFileLink(item.hero_image)}
                date={formattedDate}
                tags={[]}
                description={item?.description ?? ""}
                index={index}
              />
            </FadeUpAnimation>
          );
        })}
      </section>

      <div className="flex justify-center">
        <Link href={"/blogs"} className="w-max">
          <Button variant={"secondary"}>
            More Blogs
            <ArrowRight />
          </Button>
        </Link>
      </div>
    </ContainerLayout>
  );
}

export default BlogSection;
