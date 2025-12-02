import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import HeadingText from "../ui/heading-text";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

interface props {
  image: string;
  title: string;
  faculty: string;
  subTitle: string;
  link: string;
}

const CoursesCard = ({ image, title, faculty, subTitle, link }: props) => {
  return (
    <div className="rounded-md w-full ">
      <div className="h-full flex flex-col justify-between gap-2">
        <div className="">
          <div className="relative">
            <div className="overflow-hidden rounded-md">
              <Image
                src={`${image}`}
                alt={`for ${title}`}
                width={500}
                height={500}
                className="object-cover w-full aspect-[2/2] md:aspect-[1/1]  transition-all group-hover:scale-105 relative"
              />
              <div className="absolute rounded-md bg-primary-orange/0 group-hover:bg-primary-orange/50 transition-all w-full h-full z-[8] top-0 left-0" />
            </div>

            <p className="z-[10] absolute font-semibold top-2 right-2 bg-primary text-primary-foreground rounded-md text-xs px-2 py-1">
              {faculty}
            </p>
          </div>

          <Link
            href={`${link}`}
            className="block mt-4 hover:text-primary transition-all"
          >
            <HeadingText className="leading-snug" heading={3} level={5}>
              {title}
            </HeadingText>
          </Link>
        </div>

        <div className="flex flex-col gap-4 justify-between">
          <div
            className=" line-clamp-3"
            dangerouslySetInnerHTML={{ __html: subTitle }}
          ></div>

          <div className="flex  pb-2 justify-center sm:justify-between flex-col items-center sm:flex-row gap-3">
            <Link className="w-full" href={`${link}`}>
              <Button
                variant={"ghost"}
                size={"lg"}
                className="font-bold text-primary"
              >
                More Info
                <ArrowRight size={22} />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursesCard;
