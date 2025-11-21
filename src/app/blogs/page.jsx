"use client";
import React, { useState, useEffect } from "react";
import {
  Search,
  BlogItemCard,
  StyledHeroCard,
  DataNotFound,
  Button,
  Spiner,
} from "@/components";
import { FetchBlogData } from "../../components/utils/apiQueries";

const BlogsPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    setIsLoading(true);

    FetchBlogData()
      .then((res) => {
        const sortedData = res.data.sort((prev, next) => {
          const prevDate = new Date(prev.date);
          const nextDate = new Date(next.date);
          return nextDate - prevDate;
        });
        setData(sortedData);
        setFilteredData(sortedData);
        setIsLoading(false);
      })
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    if (searchQuery.trim() === "") {
      setFilteredData(data);
    }
  }, [searchQuery, data]);

  const handleSearch = () => {
    const query = searchQuery.trim().toLowerCase();
    if (query === "") {
      setFilteredData(data);
    } else {
      const filtered = data.filter((item) =>
        item.title.trim().toLowerCase().includes(query)
      );
      setFilteredData(filtered);
    }
  };

  return (
    <>
      {isLoading ? (
        <Spiner />
      ) : (
        <div className="container mx-auto px-5 flex flex-col gap-[32px] lg:gap-[64px] mb-[48px] mt-[48px]">
          <div className="container mx-auto px-5 flex flex-col gap-[32px] lg:gap-[64px]">
            <section>
              <div className="flex flex-col lg:flex-row gap-5">
                <div className="flex-[65%] flex flex-col gap-5 md:max-w-[50%]">
                  <h3 className="text-2xl font-bold">
                    Search for blogs you want to explore.
                  </h3>
                  <div className="flex items-center gap-4 flex-col md:flex-row">
                    <Search
                      text={searchQuery}
                      onSearchText={setSearchQuery}
                      placeholderText="Enter Your Search Query"
                    />
                    <div onClick={handleSearch}>
                      <Button btnName={"Search"} />
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {filteredData.length > 0 ? (
              <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-y-[3rem] gap-4">
                {filteredData.map((item, index) => (
                  <BlogItemCard
                    key={index}
                    slug={item?.slug}
                    title={item?.title}
                    image={item?.image}
                    date={item?.date}
                    tags={item?.tags}
                    description={item?.description}
                    index={item?.index}
                  />
                ))}
              </section>
            ) : (
              <div className="md:w-1/2 md:mx-auto">
                <DataNotFound />
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default BlogsPage;
