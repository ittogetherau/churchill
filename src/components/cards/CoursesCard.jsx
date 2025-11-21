import Image from "next/image";
import Link from "next/link";
import React from "react";
import Button from "../button";
import { FaArrowRight } from "react-icons/fa";

const CoursesCard = ({ image, title, faculty, subTitle, link }) => {
  return (
    <div className="rounded-md w-full">
      <div className="flex flex-col gap-8 group">
        <span className="relative">
          <div className="overflow-hidden rounded-md">
            <Image
              src={`${image}`}
              alt={`for ${title}`}
              width={400}
              height={400}
              className="object-cover w-full aspect-[2/2] md:aspect-[1/1]  transition-all group-hover:scale-105 relative"
            />
            <div className="absolute rounded-md bg-primary-orange/0 group-hover:bg-primary-orange/50 transition-all w-full h-full z-[8] top-0 left-0" />
          </div>
          <p className="z-[10] absolute font-semibold top-3 right-3 bg-[#F2CF9C] text-[#2C2B4B] rounded-md text-[12px] px-3 py-1">
            {faculty}
          </p>
        </span>

        <div className="flex flex-col gap-4 justify-between">
          <Link href={`${link}`}>
            <h3 className="font-bold text-2xl clamp-2 text-[#2C2B4B] w-fit leading-[28px] transition-all hover:text-primary-orange">
              {title}
            </h3>
          </Link>

          <p
            className="clamp-3"
            dangerouslySetInnerHTML={{ __html: subTitle }}
          ></p>

          <div className="flex  pb-2 justify-center sm:justify-between flex-col items-center sm:flex-row gap-3">
            {/* <Link className="w-full" href={"/apply-now"}>
              <Button
                btnName={"Apply Now"}
                icon={<FaArrowRight />}
                styleA={"flex items-center gap-1"}
                styleType="primary"
                style={"w-fit"}
              />
            </Link> */}

            <Link className="w-full" href={`${link}`}>
              <Button
                btnName={"More Info"}
                icon={<FaArrowRight />}
                styleA={"flex items-center gap-1"}
                styleType="tertiary"
                style={"w-fit"}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursesCard;
