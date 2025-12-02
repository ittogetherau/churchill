import FadeUpAnimation from "@/animations/FadeUp";
import { Button } from "@/components/ui/button";
import ContainerLayout from "@/layouts/container-layout";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

interface props {
  title?: string;
  subtitle?: string;
  linkUrl?: string;
  linkText?: string;
}

const NewsletterSection = ({
  title = "Be in the Know",
  subtitle = "For updates about our latest news, events, and more.",
  linkUrl = "https://zfrmz.com.au/DtG2T10jdX7f8egPhVzt",
  linkText = "Subscribe Now",
}: props) => {
  return (
    <FadeUpAnimation>
      <ContainerLayout>
        <div className="w-full flex flex-col md:flex-row bg-[#F3E4E4] relative hover-shadow overflow-hidden rounded-md">
          <div className="flex z-[10] flex-1 flex-col gap-6 pt-8 pl-8 md:py-20 md:pl-20">
            <h3 className="relative leading-10 font-bold text-[36px]  text-[#2C2B4B]">
              {title}
            </h3>
            <p className="max-w-lg">{subtitle}</p>
            <Link href={linkUrl} target="_blank" className="w-max">
              <Button>
                {linkText}

                <ArrowRight />
              </Button>
            </Link>
          </div>
          <div className="flex-1 pb-48 md:flex-0">
            <Image
              width={600}
              height={600}
              className="absolute z-[0] translate-y-1/2 translate-x-1/2 bottom-16 -left-1/2 md:left-auto md:right-48 group-hover:scale-105 transition-all"
              src="/assets/churchil-circle.webp"
              alt="alt image for churchil circle"
            />
          </div>
        </div>
      </ContainerLayout>
    </FadeUpAnimation>
  );
};

export default NewsletterSection;
