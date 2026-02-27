import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import HeadingText from "../ui/heading-text";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import RichTextRenderer from "@/components/utils/rich-text-renderer";

interface props {
  image: string;
  title: string;
  faculty: string;
  subTitle: string;
  link: string;
}

const CoursesCard = ({ image, title, faculty, subTitle, link }: props) => {
  return (
    <div className="w-full rounded-md">
      <div className="flex h-full flex-col justify-between gap-2">
        <div className="">
          <div className="group relative">
            <div className="overflow-hidden rounded-md">
              <Image
                src={`${image}`}
                alt={`for ${title}`}
                width={500}
                height={500}
                className="relative aspect-[2/2] w-full object-cover transition-all group-hover:scale-105 md:aspect-[1/1]"
              />
              <div className="bg-primary-orange/0 group-hover:bg-primary-orange/30 absolute top-0 left-0 z-[8] h-full w-full rounded-md transition-all" />
            </div>

            <p className="bg-primary/75 text-primary-foreground absolute top-2 right-2 z-[10] rounded-md px-2 py-1 text-xs font-semibold">
              {faculty}
            </p>
          </div>

          <Link
            href={`${link}`}
            className="hover:text-primary mt-4 block transition-all"
          >
            <HeadingText className="leading-snug" heading={3} level={5}>
              {title}
            </HeadingText>
          </Link>
        </div>

        <div className="flex flex-col justify-between gap-4">
          <RichTextRenderer
            content={subTitle}
            richText={false}
            className="line-clamp-4"
          />

          <div className="flex flex-col items-center justify-center gap-3 pb-2 sm:flex-row sm:justify-between">
            <Link className="w-full" href={`${link}`}>
              <Button
                variant={"ghost"}
                size={"lg"}
                className="text-primary font-bold"
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
