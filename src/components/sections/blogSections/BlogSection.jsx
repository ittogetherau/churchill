"use client";
import { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";
import Button from "@/components/button";
import { BlogItemCard } from "@/components";
import FadeUpAnimation from "@/animations/FadeUp";
import { FetchBlogData } from "@/components/utils/apiQueries";

function BlogSection() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    FetchBlogData()
      .then((res) => {
        const sorted = res.data.sort((prev, next) => {
          const prevDate = new Date(prev.date);
          const nextDate = new Date(next.date);
          return nextDate - prevDate;
        });
        setData(sorted);
        setIsLoading(false);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      {!isLoading && (
        <div className="container mx-auto px-5">
          <div className="flex flex-col gap-[32px] lg:gap-[44px]">
            <h2 className="font-bold text-[36px] text-center mx-auto text-[#2C2B4B]">
              Latest Blogs
            </h2>

            <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12 md:gap-4">
              {data?.slice(0, 3)?.map((item, index) => {
                const formattedDate = new Intl.DateTimeFormat("en-AU", {
                  day: "2-digit",
                  month: "2-digit",
                  year: "numeric",
                }).format(new Date(item.date));

                return (
                  <FadeUpAnimation key={index} delay={index * 0.2}>
                    <BlogItemCard
                      slug={item?.slug}
                      title={item?.title}
                      image={item?.image}
                      date={formattedDate}
                      tags={item?.tags}
                      description={item?.description}
                      index={index}
                    />
                  </FadeUpAnimation>
                );
              })}
            </section>

            {data.length > 3 && (
              <div className="flex justify-center">
                <Link href={"/blogs"} className="w-max">
                  <Button
                    btnName={"More Blogs"}
                    icon={<FaArrowRight />}
                    styleA={"flex items-center gap-1"}
                    styleType="secondary"
                  />
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default BlogSection;