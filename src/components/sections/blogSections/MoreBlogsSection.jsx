"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { BlogItemCard } from "@/components";
import { FetchBlogData } from "@/components/utils/apiQueries";

const MoreBlogsSection = ({ item }) => {
  const { slug } = useParams();
  const [data, setData] = useState([]);
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
          <h3 className="font-bold text-3xl mb-12">More Blogs</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            {data.slice(0, 3).map((item, index) => {
              if (item.slug !== slug) {
                return (
                  <BlogItemCard
                    key={index}
                    slug={item?.slug}
                    title={item?.title}
                    image={item?.image}
                    date={item?.date}
                    tags={item?.tags}
                    subTitle={item?.subTitle}
                    index={item?.index}
                  />
                );
              }
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default MoreBlogsSection;
