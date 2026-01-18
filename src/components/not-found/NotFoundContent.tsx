"use client";
import Button from "@/components/button";
import Animation from "@/constDatas/animations/PageNotFound.json";
import ContainerLayout from "@/layouts/container-layout";
import dynamic from "next/dynamic";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

export default function NotFoundContent() {
  return (
    <div
      className="min-h-[80vh]"
      style={{
        backgroundImage: `linear-gradient(rgb(255 255 255 / 64%), rgb(255 255 255 / 64%) 100%), url(/assets/about-us-watermark.png)`,
        backgroundRepeat: "no-repeat",
        objectFit: "cover",
        width: "100%",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <ContainerLayout>
        <div className="flex flex-col items-center justify-center gap-4">
          {<Lottie className="w-1/2" animationData={Animation} loop={true} />}

          <h3 className="text-center text-[36px] font-bold text-[#2C2B4B]">
            Are You Lost?
          </h3>
          <p>The page you are looking for doesnt exist!</p>
          <Link href={`/`} className="w-max">
            <Button
              btnName={"Go Back Home"}
              icon={<FaArrowRight />}
              styleA={"flex items-center gap-1"}
              style={
                "border border-[#606060] mb-[10vh] rounded-md px-4 py-3 bg-[#E59623] hover:text-black hover:bg-[#424242]/25 transition delay-150"
              }
            />
          </Link>
        </div>
      </ContainerLayout>
    </div>
  );
}
