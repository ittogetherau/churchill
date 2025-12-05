"use client";
import FadeUpAnimation from "@/animations/FadeUp";
import { BlogItemCard } from "@/components/cards";
import { Button } from "@/components/ui/button";
import { BlogFieldsFragment } from "@/graphql/generated/graphql";
import { resolveFileLink } from "@/graphql/graphql";
import ContainerLayout from "@/layouts/container-layout";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

function BlogSection({ blogs }: { blogs: BlogFieldsFragment[] }) {
  return (
    <ContainerLayout className="container mx-auto px-5 space-y-6">
      <h2 className="font-bold text-[36px] text-center mx-auto text-[#2C2B4B]">
        Latest Blogs
      </h2>

      <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12 md:gap-4">
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
          <Button>
            More Blogs
            <ArrowRight />
          </Button>
        </Link>
      </div>
    </ContainerLayout>
  );
}

export default BlogSection;
