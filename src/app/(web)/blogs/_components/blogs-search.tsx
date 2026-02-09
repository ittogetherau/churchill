"use client";

import React, { useEffect, useState } from "react";
import BlogItemCard from "@/components/cards/BlogItemCard";
import Button from "@/components/ui-elements/button";
import DataNotFound from "@/components/globals/DataNotFound";
import Search from "@/components/ui-elements";
import { resolveFileLink } from "@/graphql/graphql";
import type { BlogPageQuery } from "@/graphql/generated/graphql";

type BlogsSearchProps = {
  blogs: BlogPageQuery["blog"];
};

const BlogsSearch = ({ blogs }: BlogsSearchProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredBlogs, setFilteredBlogs] = useState(blogs);

  useEffect(() => {
    if (searchQuery.trim() === "") {
      setFilteredBlogs(blogs);
    }
  }, [searchQuery, blogs]);

  const handleSearch = () => {
    const query = searchQuery.trim().toLowerCase();
    if (query === "") {
      setFilteredBlogs(blogs);
      return;
    }

    setFilteredBlogs(
      blogs.filter((item) =>
        (item.title ?? "").trim().toLowerCase().includes(query),
      ),
    );
  };

  return (
    <div className="flex flex-col gap-8">
      {blogs.length > 0 && (
        <section>
          <div className="flex flex-col gap-5 lg:flex-row">
            <div className="flex flex-[65%] flex-col gap-5 md:max-w-[50%]">
              <h3 className="text-2xl font-bold">
                Search for blogs you want to explore.
              </h3>
              <div className="flex flex-col items-center gap-4 md:flex-row">
                <Search
                  text={searchQuery}
                  onSearchText={setSearchQuery}
                  placeholderText="Enter Your Search Query"
                />
                <div onClick={handleSearch}>
                  <Button btnName="Search" />
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {filteredBlogs.length > 0 ? (
        <section className="grid grid-cols-1 gap-4 gap-y-[3rem] md:grid-cols-2 xl:grid-cols-3">
          {filteredBlogs.map((item, index) => (
            <BlogItemCard
              key={index}
              slug={item.slug ?? ""}
              title={item?.title ?? ""}
              description={item.description ?? ""}
              image={resolveFileLink(item?.hero_image)}
              date={item?.date_created}
              tags={[]}
            />
          ))}
        </section>
      ) : (
        <div className="md:mx-auto md:w-1/2">
          <DataNotFound />
        </div>
      )}
    </div>
  );
};

export default BlogsSearch;
