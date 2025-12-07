"use client";

import { BlogItemCard } from "@/components/cards";
import { FetchBlogData } from "@/components/utils/apiQueries";
import { useEffect, useState } from "react";

interface Blog {
  slug: string;
  title: string;
  image: string;
  date: string;
  tags?: string[];
  description: string;
  subTitle?: string;
  index?: number;
}

interface MoreBlogsSectionProps {
  slug: string;
}

const MoreBlogsSection = ({ slug }: MoreBlogsSectionProps) => {
  const [data, setData] = useState<Blog[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    FetchBlogData()
      .then((res) => {
        setData(res.data);
        setIsLoading(false);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      {!isLoading && (
        <div className="container mx-auto px-5">
          <h3 className="mb-12 text-3xl font-bold">More Blogs</h3>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
            {data
              .filter((item) => item.slug !== slug)
              .slice(0, 3)
              .map((item, index) => (
                <BlogItemCard
                  key={item.slug}
                  slug={item.slug}
                  title={item.title}
                  image={item.image}
                  date={item.date}
                  tags={item.tags}
                  description={item.description}
                  subTitle={item.subTitle}
                  index={item.index}
                />
              ))}
          </div>
        </div>
      )}
    </>
  );
};

export default MoreBlogsSection;
