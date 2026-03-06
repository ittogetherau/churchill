import { Button } from "@/components/ui/button";
import { routes } from "@/config/routes";
import { CampusDocument } from "@/graphql/generated/graphql";
import { resolveFileLink, runQuery } from "@/graphql/graphql";
import ContainerLayout from "@/layouts/container-layout";
import {
  ChevronRight,
  Globe,
  Mail,
  MapPin,
  Phone,
  type LucideIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export type ContactItem = {
  key: string;
  label: string;
  value?: string | null;
  icon: LucideIcon;
  href?: string;
  external?: boolean;
};

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
        <div className="absolute inset-0 bg-white/40" />
        <div className="relative container mx-auto flex flex-col gap-6 px-5 py-16 text-center lg:py-24">
          <h1 className="text-foreground text-3xl font-semibold md:text-5xl">
            Explore Our Campuses
          </h1>
        </div>
      </header>

      <ContainerLayout className="mt-8">
        <div className="grid gap-8 lg:grid-cols-2">
          {data.map((campus, i) => {
            const contactItems: ContactItem[] = [
              {
                key: "address",
                label: "Address",
                value: campus.address,
                icon: MapPin,
              },
              {
                key: "website",
                label: "Website",
                value: campus.website,
                icon: Globe,
                href: campus.website ?? undefined,
                external: true,
              },
              {
                key: "phone",
                label: "Phone",
                value: campus.phone,
                icon: Phone,
                href: campus.phone
                  ? `tel:${campus.phone.replace(/[^0-9]/g, "")}`
                  : undefined,
              },
              {
                key: "email",
                label: "Email",
                value: campus.email,
                icon: Mail,
                href: campus.email ? `mailto:${campus.email}` : undefined,
              },
            ].filter((item) => item.value);

            return (
              <article
                key={`${campus.title}-${i}`}
                className="flex flex-col gap-4 rounded-2xl border border-gray-100 p-6"
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
                  <h3 className="text-foreground text-2xl font-semibold">
                    {campus.title}
                  </h3>
                </div>

                <ul className="text-foreground space-y-4 text-sm md:text-base lg:grid lg:grid-cols-2">
                  {contactItems.map((item) => {
                    const Icon = item.icon;

                    return (
                      <li key={item.key} className="flex items-start gap-3">
                        <Icon className="text-primary-orange mt-1 h-5 w-5" />

                        <div>
                          <p className="text-muted-foreground text-xs tracking-wide uppercase">
                            {item.label}
                          </p>

                          {item.href ? (
                            <Link
                              href={item.href}
                              target={item.external ? "_blank" : undefined}
                              rel={
                                item.external
                                  ? "noopener noreferrer"
                                  : undefined
                              }
                              className="hover:text-primary-orange font-semibold transition-colors"
                            >
                              {item.value}
                            </Link>
                          ) : (
                            <p className="text-foreground font-semibold">
                              {item.value}
                            </p>
                          )}
                        </div>
                      </li>
                    );
                  })}
                </ul>

                <Link href={routes.ourCampuses.slug(campus.slug ?? "")}>
                  <Button>
                    Learn More
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Button>
                </Link>
              </article>
            );
          })}
        </div>
      </ContainerLayout>
    </main>
  );
};

export default Page;
