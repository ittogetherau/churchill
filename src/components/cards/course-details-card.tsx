import Button from "@/components/ui-elements/button";
import { type CourseDetailFieldsFragment } from "@/graphql/generated/graphql";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

type ProgramDetail = NonNullable<
  CourseDetailFieldsFragment["program_details"]
>[number];

interface CourseDetailsProp {
  title: string;
  subTitle: string;
  slug: string;
  faculty: string;
  courseDetails: ProgramDetail[];
}
const CourseDetailsCard = ({
  title,
  subTitle,
  slug,
  faculty,
  courseDetails,
}: CourseDetailsProp) => {
  return (
    <div className="flex flex-col gap-4 rounded-md bg-[#FAF4F4] p-4 md:flex-row md:items-center md:gap-3">
      <div className="flex flex-1 flex-col gap-3">
        <span className="w-fit rounded-md bg-[#F2CF9C] px-3 py-1 text-sm capitalize">
          {faculty}
        </span>

        <h2 className="text-matte-purple text-2xl font-extrabold lg:text-3xl">
          {title}
        </h2>

        <div
          dangerouslySetInnerHTML={{ __html: subTitle }}
          className="overflow-hidden md:max-h-[4.5rem]"
        ></div>

        <div className="flex flex-col justify-around gap-4 md:justify-start md:gap-12 lg:flex-row">
          {courseDetails
            ?.filter((detail): detail is ProgramDetail => Boolean(detail))
            ?.slice(0, 3)
            ?.map((item, index) => (
              <div className="flex flex-row items-center gap-3" key={index}>
                <div className="grid h-12 w-12 place-items-center rounded-full bg-white text-2xl">
                  <i className={`flex text-[#E59623] ${item?.icon ?? ""}`}></i>
                </div>

                <div className="">
                  <h3 className="text-lg font-bold text-[#2C2B4B]">
                    {item?.description ?? ""}
                  </h3>
                  <p className="text-[#2C2B4B]">{item?.label ?? ""}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
      <div className="flex max-w-fit flex-col gap-3">
        <Link href={`/courses/${slug}`} className="w-full flex-1">
          <Button
            btnName="Learn More"
            icon={<FaArrowRight />}
            styleA={"flex items-center gap-1"}
            style="w-full"
          />
        </Link>
        <Link
          href={"https://churchill.edu.au/apply-for-course-admission"}
          className="w-full flex-1"
        >
          <Button
            btnName="Apply Now"
            icon={<FaArrowRight />}
            styleA={"flex items-center gap-1"}
            style="w-full"
            styleType="secondary"
          />
        </Link>
      </div>
    </div>
  );
};

export default CourseDetailsCard;
