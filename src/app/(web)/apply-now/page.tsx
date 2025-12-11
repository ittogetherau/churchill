import PatternBannerCard from "@/components/cards/PatternBannerCard";
import { Button } from "@/components/ui/button";
import ContainerLayout from "@/layouts/container-layout";
import Image from "next/image";
import Link from "next/link";

const Page = () => {
  return (
    <ContainerLayout>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-6 items-center">
        <div className="flex flex-col gap-6">
          <h1 className="text-4xl lg:text-7xl font-bold">How to Apply?</h1>
          <p className="text-xl">
            Applying to churchill Institute of Higher Education is Easy{" "}
          </p>
          <div className="flex flex-col md:flex-row gap-4 mt-6">
            <Link target="_blank" href={"/assets/apply-at-churchill.pdf"}>
              <Button>Domestic Student</Button>
            </Link>
            <Link target="_blank" href={"/assets/apply-at-churchill.pdf"}>
              <Button>International Student</Button>
            </Link>
          </div>
        </div>

        <div className="grid place-items-center">
          <Image
            src="/assets/apply-card.png"
            alt="hero image"
            width={1000}
            height={1000}
            className="w-[50%]"
          />
        </div>
      </div>
    </ContainerLayout>
  );
};

export default Page;
