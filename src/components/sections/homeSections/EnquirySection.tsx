import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import ApplyCard from "@/components/cards/ApplyCard";
import FadeUpAnimation from "@/animations/FadeUp";
import ContainerLayout from "@/layouts/container-layout";

interface ActionCardProps {
  title: string;
  buttonText: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
  gradient: string;
  imagePosition: "left" | "right";
  external?: boolean;
  imageWidth?: number;
}

const ActionCard = ({
  title,
  buttonText,
  href,
  imageSrc,
  imageAlt,
  gradient,
  imagePosition,
  external = false,
  imageWidth = 400,
}: ActionCardProps) => {
  return (
    <div
      className="group flex h-full w-full justify-between gap-4 overflow-hidden rounded-md px-8"
      style={{ backgroundImage: gradient }}
    >
      {imagePosition === "left" && (
        <div className="hidden items-end lg:flex">
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={imageWidth}
            height={400}
            className="h-auto w-full object-contain transition-all group-hover:scale-105"
          />
        </div>
      )}

      <div className="flex flex-col justify-center gap-4 py-8">
        <h2 className="text-[36px] leading-[38px] font-bold text-[#2C2B4B]">
          {title}
        </h2>

        <Button asChild variant="default" className="w-fit">
          <Link href={href} target={external ? "_blank" : undefined}>
            {buttonText}
            <FaArrowRight className="h-3 w-3" />
          </Link>
        </Button>
      </div>

      {imagePosition === "right" && (
        <div className="hidden items-end lg:flex">
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={imageWidth}
            height={400}
            className="w-full object-cover transition-all group-hover:scale-105"
          />
        </div>
      )}
    </div>
  );
};

const EnquirySection = () => {
  return (
    <ContainerLayout>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <div className="h-full lg:row-span-2">
          <FadeUpAnimation className="h-full" delay={0.1}>
            <ApplyCard
              image="/assets/apply-card.png"
              title="Welcome to Churchill Institute of Higher Education"
              description="We're excited you're considering joining our vibrant community of students from across Australia and around the globe."
            />
          </FadeUpAnimation>
        </div>

        <FadeUpAnimation delay={0.2}>
          <ActionCard
            title="Choosing the right course starts here"
            buttonText="View Courses"
            href="/courses"
            imageSrc="/assets/right-course.png"
            imageAlt="Choose the right course"
            gradient="linear-gradient(to bottom left, rgb(235, 124, 158), rgb(235 124 158 / 43%) 100%)"
            imagePosition="left"
          />
        </FadeUpAnimation>

        <FadeUpAnimation delay={0.2}>
          <ActionCard
            title="Ask us for more info"
            buttonText="Enquire Now"
            href="https://zfrmz.com.au/ThpIBv0BRCITpoh20tLf"
            imageSrc="/assets/ask-us.png"
            imageAlt="Ask us for more information"
            gradient="linear-gradient(to bottom right, rgb(244, 213, 107), rgb(244 213 107 / 43%) 100%)"
            imagePosition="right"
            imageWidth={350}
            external
          />
        </FadeUpAnimation>
      </div>
    </ContainerLayout>
  );
};

export default EnquirySection;
