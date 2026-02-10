import PatternBannerCard from "@/components/cards/PatternBannerCard";
import { Button } from "@/components/ui/button";
import ContainerLayout from "@/layouts/container-layout";
import Image from "next/image";
import Link from "next/link";

const Page = () => {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(to top, white, #00000000, #00000000), url('/assets/hero-vector.svg')`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top center",
        backgroundSize: "cover",
        width: "100%",
      }}
    >
      <ContainerLayout>
        <div className="grid grid-cols-1 items-center gap-4 lg:grid-cols-2">
          <div className="flex flex-col gap-6">
            <h1 className="text-4xl font-bold lg:text-7xl">How to Apply?</h1>
            <p className="text-xl">
              Applying to churchill Institute of Higher Education is Easy
            </p>
            <div className="mt-6 flex flex-col gap-4 md:flex-row">
              <Link target="_blank" href="/assets/apply-at-churchill.pdf">
                <Button>Domestic Student</Button>
              </Link>
              <Link target="_blank" href="/assets/apply-at-churchill.pdf">
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
    </div>
  );
};

export default Page;
