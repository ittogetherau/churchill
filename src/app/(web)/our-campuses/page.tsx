import campusDetails from "@/constDatas/campusDetails";
import Image from "next/image";
import Link from "next/link";
import { FiGlobe, FiMail, FiMapPin, FiPhone } from "react-icons/fi";

const Page = () => {
  return (
    <main className="bg-[#f7f8fb]">
      <header
        className="relative overflow-hidden"
        style={{
          backgroundImage:
            "linear-gradient(120deg, rgba(255,255,255,0.9), rgba(235,147,32,0.35)), url('/assets/downtown-sydney.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-white/40"></div>
        <div className="relative container mx-auto px-5 py-16 lg:py-24 flex flex-col gap-6 text-center">
          <h1 className="text-3xl md:text-5xl font-semibold text-zinc-900">
            Explore Our Campuses
          </h1>
        </div>
      </header>

      <section className="container mx-auto px-5 pb-20">
        <div className="p-6 md:p-10 lg:p-14">
          <div className="grid gap-10 lg:grid-cols-2">
            {campusDetails.map((campus) => (
              <article
                key={campus.id}
                className="rounded-2xl border border-zinc-100 bg-gradient-to-b from-zinc-50 to-white p-6 md:p-8 flex flex-col gap-5 shadow-[0_25px_60px_rgba(26,31,55,0.08)]"
              >
                <span className="text-md font-semibold tracking-[0.2em] uppercase text-primary-orange">
                  {campus.badge}
                </span>
                {campus.image && (
                  <div className="relative w-full rounded-2xl overflow-hidden">
                    <Image
                      src={campus.image}
                      alt={`${campus.title} exterior`}
                      width={800}
                      height={500}
                      className="w-full h-full object-cover"
                      priority={campus.id === "parramatta"}
                    />
                  </div>
                )}
                <div>
                  <h3 className="text-2xl font-semibold text-zinc-900">
                    {campus.title}
                  </h3>
                </div>

                <ul className="space-y-4 text-sm md:text-base text-zinc-700">
                  <li className="flex items-start gap-3">
                    <span className="mt-1 text-primary-orange">
                      <FiMapPin />
                    </span>
                    <div>
                      <p className="text-xs uppercase tracking-wide text-zinc-500">
                        Address
                      </p>
                      <p className="font-semibold text-zinc-900">
                        {campus.address}
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 text-primary-orange">
                      <FiGlobe />
                    </span>
                    <div>
                      <p className="text-xs uppercase tracking-wide text-zinc-500">
                        Website
                      </p>
                      <Link
                        href={campus.website}
                        target="_blank"
                        className="font-semibold text-primary-orange hover:underline"
                      >
                        {campus.website.replace("https://www.", "www.")}
                      </Link>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 text-primary-orange">
                      <FiPhone />
                    </span>
                    <div>
                      <p className="text-xs uppercase tracking-wide text-zinc-500">
                        Phone
                      </p>
                      <Link
                        href={`tel:${campus.phone.replace(/[^0-9]/g, "")}`}
                        className="font-semibold hover:text-primary-orange transition-colors"
                      >
                        {campus.phone}
                      </Link>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 text-primary-orange">
                      <FiMail />
                    </span>
                    <div>
                      <p className="text-xs uppercase tracking-wide text-zinc-500">
                        Email
                      </p>
                      <Link
                        href={`mailto:${campus.email}`}
                        className="font-semibold hover:text-primary-orange transition-colors"
                      >
                        {campus.email}
                      </Link>
                    </div>
                  </li>
                </ul>

                {/* <div className="flex flex-wrap items-center gap-3 pt-2">
                  <Link
                    href={campus.mapUrl}
                    target="_blank"
                    className="inline-flex items-center justify-center rounded-full border border-zinc-800 px-5 py-2 text-sm font-semibold text-zinc-900 hover:bg-zinc-900 hover:text-white transition-colors"
                  >
                    {campus.ctaLabel}
                  </Link>
                  <Link
                    href="/contact-us"
                    className="inline-flex items-center justify-center rounded-full px-5 py-2 text-sm font-semibold text-primary-orange hover:text-zinc-900 transition-colors"
                  >
                    Talk to a team member
                  </Link>
                </div> */}
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Page;
