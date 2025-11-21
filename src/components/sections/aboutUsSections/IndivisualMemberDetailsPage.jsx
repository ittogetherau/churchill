"use client";
import { useState, useEffect } from "react";
import { navItems } from "@/constDatas/navItems";
import Image from "next/image";
import { Loading, NewsletterSection } from "@/components";

const IndivisualMemberDetailsPage = ({ slug }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    try {
      const info = navItems[0]?.Catagories.filter(
        (item) => item?.slug.toLowerCase() === "governance-and-leadership"
      )[0].CatagoriesItem.find((item) => item.slug === slug);

      setData(info);
    } finally {
      setIsLoading(false);
    }
  }, [slug]);

  if (isLoading) return <Loading />;
  else {
    return (
      <div className="flex flex-col gap-[32px] lg:gap-[64px]">
        <main className="md:mt-[100px] lg:mt-12 container mx-auto px-5">
          <div className="flex gap-2 flex-col-reverse lg:flex-row">
            <div className=" flex flex-col gap-3">
              <p className="text-xl font-semibold text-primary-orange">
                {data?.subTitle}
              </p>
              <h2 className="text-3xl lg:text-6xl  font-bold">{data?.title}</h2>
              <div className="flex items-start">
                <div
                  className="flex flex-col gap-6 text-lg flex-1"
                  dangerouslySetInnerHTML={{ __html: data?.description }}
                />
              </div>
            </div>
            <div className="md:mx-auto flex flex-col justify-center md:justify-start">
              <div className=" md-hexagon md:w-[392px] md:h-[392px] grid place-items-center bg-primary-orange">
                <div className="md-hexagon w-full aspect-square md:w-96 md:h-96 overflow-hidden">
                  <Image
                    src={data?.image}
                    width={1000}
                    height={1000}
                    className="w-full h-full object-cover"
                    alt={`Image for ${data?.title}`}
                  />
                </div>
              </div>
              {/* <div className="w-fit mx-auto bg-primary-orange -translate-y-10 rounded-md text-white px-4 py-3">
                <p className="text-lg text-center font-semibold ">
                  Email: <span>{data?.email}</span>
                </p>
              </div> */}
            </div>
          </div>
        </main>
        <NewsletterSection />
      </div>
    );
  }
};

export default IndivisualMemberDetailsPage;
