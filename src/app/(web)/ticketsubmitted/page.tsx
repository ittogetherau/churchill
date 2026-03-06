import { Button } from "@/components/ui/button";
import { routes } from "@/config/routes";
import Link from "next/link";

const page = () => {
  return (
    <div
      className="pbon-[10rem] flex flex-col gap-[32px] py-[100px]"
      style={{
        backgroundImage: `linear-gradient(to top, white, #00000000), url('/assets/hero-vector.svg')`,
        backgroundRepeat: "no-repeat",
        objectFit: "cover",
        width: "100%",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="border-primary-orange mx-auto grid h-[80px] w-[80px] place-items-center rounded-full border-8">
        <i className="fi fi-br-check text-primary-orange flex text-4xl"></i>
      </div>
      <h2 className="mx-auto w-fit text-3xl font-bold lg:text-5xl">
        Thankyou For Submitting Ticket to Our Churchill Representative.
      </h2>
      <p className="text-md lg:text-md mx-auto w-fit">
        We will get back to you soon with the Update. You Must have received
        ticket number in your email for reference.
      </p>

      <Link href={routes.home} className="mx-auto block w-fit">
        <Button>Return To Home page</Button>
      </Link>
    </div>
  );
};

export default page;
