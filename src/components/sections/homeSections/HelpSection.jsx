import GuideCard from "@/components/cards/GuideCard";
import HelpCard from "@/components/cards/ApplyCard";
import React from "react";
import { navItems } from "@/constDatas/navItems";
import Button from "@/components/button";
import { FaArrowRight, FaSearch } from "react-icons/fa";
import Link from "next/link";

const HelpSection = () => {
  const guideLists = navItems[1]?.Catagories;

  return (
    <div className="container mx-auto px-5">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[32px]">
        <div className="bg-[#F3E4E4] rounded-md">
          <HelpCard
            image={"/assets/help.webp"}
            title={"Need Help?"}
            description={
              "If you would like to become an authorised representative of Churchill Institute of Higher Education Sydney, please submit an Expression of Interest. Expression of interests will be assessed by the relevant Regional Recruitment Manager."
            }
          />
        </div>
        <div className="bg-[#F3E4E4] rounded-md flex flex-col">
          <div className=" px-8 py-[32px] flex flex-col gap-5">
            <div className="flex justify-between gap-4 flex-col lg:flex-row items-center">
              <h2 className="font-bold text-[36px] text-[#2C2B4B]">
                How to Guide?
              </h2>
            </div>
            {guideLists?.slice(0, 4)?.map((item, index) => (
              <GuideCard
                key={index}
                menuTitle={item?.menuTitle}
                slug={item?.slug}
              />
            ))}
          </div>
          <div className="pb-[32px]">
            <div className="flex justify-center">
              <Link href={"/how-to-guide"}>
                <Button
                  btnName={"Load More Links"}
                  icon={<FaArrowRight />}
                  styleA={"flex items-center gap-1"}
                  style={
                    "border border-2 border-[#606060] rounded-md px-4 py-3 bg-[#E59623] hover:bg-[#ff9700] transition duration-200  ease-in-out hover:scale-105"
                  }
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpSection;
