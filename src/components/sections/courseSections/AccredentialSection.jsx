import React from "react";
import Image from "next/image";
import { navItems } from "@/constDatas/navItems";
import { PatternBannerCard } from "@/components";

const AccredentialSection = ({ slug }) => {
  const data = navItems[2];

  return (
    <div>
      <PatternBannerCard title="Accreditation" />

      <div className="container-blog mx-auto px-5">
        <div className="flex flex-col gap-8 mb-[48px]">
          {data?.Catagories?.map((item, index) => {
            if (item.isAccredited)
              return (
                <div
                  key={index}
                  className="bg-light-grey p-4 py-8 rounded-md flex flex-col gap-3"
                >
                  <div>
                    <p className="text-4xl font-bold text-center w-fit mx-auto">
                      {item.faculty}
                    </p>
                    <p className="text-4xl font-bold text-center w-fit mx-auto">
                      {item.menuTitle}
                    </p>
                  </div>

                  <div>
                    <p className="text-2xl font-bold text-center w-fit mx-auto">
                      CRICOS Course Code: ({item.courseCode})
                    </p>
                    <p className="text-center w-fit mx-auto text-xl font-semibold">
                      is Accrediated By
                    </p>
                  </div>

                  <h2 className="flex items-center justify-center md:gap-8 flex-wrap">
                    {item.accredited.map((item, index) => (
                      <Image
                        src={item}
                        alt={item}
                        key={index}
                        width={100}
                        height={100}
                        className="w-[12rem] aspect-square object-cover"
                      />
                    ))}
                  </h2>
                </div>
              );
          })}
        </div>
      </div>
    </div>
  );
};

export default AccredentialSection;
