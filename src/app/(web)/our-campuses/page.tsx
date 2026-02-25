import campusDetails from "@/constDatas/campus-details";
import { CampusDocument } from "@/graphql/generated/graphql";
import { resolveFileLink, runQuery } from "@/graphql/graphql";
import ContainerLayout from "@/layouts/container-layout";
import Image from "next/image";
import Link from "next/link";
import { FiGlobe, FiMail, FiMapPin, FiPhone } from "react-icons/fi";

const Page = async () => {
  const res = await runQuery(CampusDocument);

  const data = res.campus_locations ?? [];

  return (
    <main>
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
        <div className="relative container mx-auto flex flex-col gap-6 px-5 py-16 text-center lg:py-24">
          <h1 className="text-3xl font-semibold text-zinc-900 md:text-5xl">
            Explore Our Campuses
          </h1>
        </div>
      </header>

      <ContainerLayout className="mt-8">
        <div className="grid gap-10 lg:grid-cols-2">
          {data.map((campus, i) => (
            <article
              key={`${campus.title}-${i}`}
              className="flex flex-col gap-4 rounded-2xl border border-zinc-100 bg-gradient-to-b from-zinc-50 to-white p-6 shadow-[0_25px_60px_rgba(26,31,55,0.08)] md:p-8"
            >
              <span className="text-md text-primary-orange font-semibold tracking-[0.2em] uppercase">
                {campus.location_badge}
              </span>
              {campus.image && (
                <div className="relative w-full overflow-hidden rounded-2xl">
                  <Image
                    src={resolveFileLink(campus.image)}
                    alt={`${campus.title} exterior`}
                    width={800}
                    height={500}
                    className="h-full w-full object-cover"
                  />
                </div>
              )}
              <div>
                <h3 className="text-2xl font-semibold text-zinc-900">
                  {campus.title}
                </h3>
              </div>

              <ul className="space-y-4 text-sm text-zinc-700 md:text-base">
                <li className="flex items-start gap-3">
                  <span className="text-primary-orange mt-1">
                    <FiMapPin />
                  </span>
                  <div>
                    <p className="text-xs tracking-wide text-zinc-500 uppercase">
                      Address
                    </p>
                    <p className="font-semibold text-zinc-900">
                      {campus.address}
                    </p>
                  </div>
                </li>
                {campus.website && (
                  <li className="flex items-start gap-3">
                    <span className="text-primary-orange mt-1">
                      <FiGlobe />
                    </span>
                    <div>
                      <p className="text-xs tracking-wide text-zinc-500 uppercase">
                        Website
                      </p>
                      <Link
                        href={campus.website}
                        target="_blank"
                        className="text-primary-orange font-semibold hover:underline"
                      >
                        {campus.website}
                      </Link>
                    </div>
                  </li>
                )}
                {campus.phone && (
                  <li className="flex items-start gap-3">
                    <span className="text-primary-orange mt-1">
                      <FiPhone />
                    </span>
                    <div>
                      <p className="text-xs tracking-wide text-zinc-500 uppercase">
                        Phone
                      </p>
                      <Link
                        href={`tel:${campus.phone.replace(/[^0-9]/g, "")}`}
                        className="hover:text-primary-orange font-semibold transition-colors"
                      >
                        {campus.phone}
                      </Link>
                    </div>
                  </li>
                )}
                <li className="flex items-start gap-3">
                  <span className="text-primary-orange mt-1">
                    <FiMail />
                  </span>
                  <div>
                    <p className="text-xs tracking-wide text-zinc-500 uppercase">
                      Email
                    </p>
                    <Link
                      href={`mailto:${campus.email}`}
                      className="hover:text-primary-orange font-semibold transition-colors"
                    >
                      {campus.email}
                    </Link>
                  </div>
                </li>
              </ul>
            </article>
          ))}
        </div>
      </ContainerLayout>
    </main>
  );
};

export default Page;
