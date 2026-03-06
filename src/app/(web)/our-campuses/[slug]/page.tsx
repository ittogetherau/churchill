import { HalfTopBannerCard } from "@/components/cards";
import CampusImagesCarousel from "@/components/sliders/CampusImagesCarousel";
import HeadingText from "@/components/ui/heading-text";
import RichTextRenderer from "@/components/utils/rich-text-renderer";
import { CampusDetailsDocument } from "@/graphql/generated/graphql";
import { resolveFileLink, runQuery } from "@/graphql/graphql";
import ContainerLayout from "@/layouts/container-layout";
import { Globe, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ContactItem } from "../page";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

const Page = async ({ params }: PageProps) => {
  const { slug } = await params;

  const { campus_locations, campus_locations_files } = await runQuery(
    CampusDetailsDocument,
    { slug },
  );

  const campus = campus_locations?.[0];
  const heroImage = resolveFileLink(campus?.image);
  const filePaths =
    campus_locations_files?.length > 0
      ? campus_locations_files.map((item) => {
          const src = resolveFileLink(item.directus_files_id);
          return src;
        })
      : [];
  const galleryImages = Array.from(
    new Set(
      filePaths.filter(
        (src): src is string => Boolean(src) && src !== heroImage,
      ),
    ),
  );

  if (!campus) notFound();

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
    <main>
      <HalfTopBannerCard
        title={campus.title ?? ""}
        titleSpan="Welcome to"
        image={heroImage}
        description={campus.summary ?? ""}
      />

      {campus.description && (
        <ContainerLayout>
          <RichTextRenderer content={campus.description} />
        </ContainerLayout>
      )}

      <ContainerLayout>
        <HeadingText level={3} heading={2} className="mb-4">
          Contact & Location{" "}
        </HeadingText>
        <ul className="text-foreground space-y-4 text-sm md:text-base">
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
                      rel={item.external ? "noopener noreferrer" : undefined}
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
      </ContainerLayout>

      {campus.addtional_info_section && (
        <ContainerLayout>
          <RichTextRenderer content={campus.addtional_info_section} />
        </ContainerLayout>
      )}

      <div className="mt-8">
        {galleryImages.length > 0 && (
          <CampusImagesCarousel
            title={campus.title ?? "Campus"}
            images={galleryImages}
          />
        )}
      </div>
    </main>
  );
};

export default Page;
