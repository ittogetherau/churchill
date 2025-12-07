import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";
import Button from "@/components/button";

interface props {
  slug: string;
  title: string;
  image: string;
  date: string;
  tags?: string[];
  description: string;
  subTitle?: string;
  index?: number;
}

const BlogItemCard = ({
  slug,
  title,
  image,
  date,
  tags,
  description,
  index,
}: props) => {
  const itemDate = new Date(date)
    .toISOString()
    .split("T")[0]
    .replaceAll("-", "/");

  return (
    <div key={index} className="group overflow-hidden rounded-md">
      <div className="overflow-hidden rounded-md">
        <Link href={`/blogs/${slug.trim()}`}>
          <Image
            width={400}
            height={400}
            alt={`Image for ${title}`}
            src={image}
            className="aspect-[3/2] w-full object-cover transition-all group-hover:scale-105"
          />
        </Link>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between pt-5">
          <p className="flex items-center gap-2">
            <i className="fi fi-rr-calendar-day flex text-xl"></i>
            <span>{itemDate}</span>
          </p>

          <p className="text-md flex items-center gap-2">
            <i className="fi fi-rr-circle-user flex text-xl"></i>
            <span>Admin</span>
          </p>
        </div>

        <Link href={`/blogs/${slug}`} className="w-fit">
          <h4 className="text-matte-purple hover:text-primary-orange line-clamp-2 text-2xl leading-7 font-bold transition-all">
            {title}
          </h4>
        </Link>

        <p className="line-clamp-3 text-lg">{description}</p>

        <Link href={`/blogs/${slug}`} className="w-fit">
          <Button
            btnName="Learn More"
            icon={<FaArrowRight />}
            styleA={"flex items-center gap-1"}
            styleType="tertiary"
          />
        </Link>
      </div>
    </div>
  );
};

export default BlogItemCard;
