import Button from "@/components/ui-elements/button";
import ContainerLayout from "@/layouts/container-layout";
import Image from "next/image";
import Link from "next/link";

interface SplitHeroProps {
  image: string;
  description: string;
  title: string;
  cta?: {
    href: string;
    external?: boolean;
    text: string;
    icon?: React.ReactNode;
  };
}

const SplitHero = ({ image, description, title, cta }: SplitHeroProps) => {
  return (
    <ContainerLayout className="flex flex-col items-center justify-between lg:flex-row">
      <div className="mb-6 w-full md:mb-0 md:w-1/2">
        <Image
          width={500}
          height={500}
          src={image}
          alt="Hero"
          className="h-auto w-full rounded-xl"
        />
      </div>

      <div className="w-full lg:w-1/2 lg:pl-10">
        <h2 className="mb-4 text-3xl font-bold">{title}</h2>
        <div
          className="prose prose-lg mb-5 text-gray-800"
          dangerouslySetInnerHTML={{ __html: description }}
        />

        {cta && (
          <Link href={cta.href} target={cta.external ? "_blank" : "_self"}>
            <Button
              btnName={cta.text}
              icon={cta.icon}
              styleA={"flex items-center gap-4"}
              style={
                "border border-2 border-[#606060] font-semibold text-[14px] rounded-md px-4 py-3 bg-[#E59623] hover:bg-[#ff9700] transition duration-200 ease-in-out hover:scale-105"
              }
            />
          </Link>
        )}
      </div>
    </ContainerLayout>
  );
};

export default SplitHero;
