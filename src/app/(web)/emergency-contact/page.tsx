import { PatternBannerCard } from "@/components/cards";
import { Button } from "@/components/ui/button";
import HeadingText from "@/components/ui/heading-text";
import {
  EmergencyContactDocument,
  EmergencyContactQuery,
} from "@/graphql/generated/graphql";
import { runQuery } from "@/graphql/graphql";
import ContainerLayout from "@/layouts/container-layout";
import SpacingLayout from "@/layouts/spacing-layout";

type EmergencyContactItem = EmergencyContactQuery["emergency_contact"][number];
type EmergencyContactValue = NonNullable<
  NonNullable<EmergencyContactItem["values"]>[number]
>;

const normalizeType = (type?: string) =>
  type === "mail" ? "email" : type === "link" ? "url" : type;

const getHref = (value: string, type?: string) => {
  const t = normalizeType(type);
  if (t === "phone") return `tel:${value.replace(/\s+/g, "")}`;
  if (t === "email") return `mailto:${value}`;
  return value;
};

const EmergencyServicesPage = async () => {
  const raw = await runQuery(EmergencyContactDocument);
  const data = raw.emergency_contact ?? [];

  return (
    <>
      <PatternBannerCard
        title="Emergency Services"
        description="Churchill Institute of Higher Education Students can call the services below in the case of an emergency 24 Hours, 7 Days a week."
      />

      <SpacingLayout>
        <ContainerLayout
          size="sm"
          className="grid gap-4 md:grid-cols-2 lg:grid-cols-3"
        >
          {data.map((item) => {
            const values =
              item.values?.filter((v): v is EmergencyContactValue =>
                Boolean(v),
              ) ?? [];

            return (
              <div
                key={item.id}
                className="bg-sidebar rounded-lg p-4 transition-all hover:shadow"
              >
                <div className="bg-primary-orange/15 mb-5 grid aspect-square h-[70px] w-[70px] place-items-center rounded-full">
                  <i
                    className={`${item.icon_string} m-0 grid h-[50px] w-[50px] place-items-center text-3xl`}
                  />
                </div>

                <h2 className="text-primary-orange mb-4 text-xl font-semibold">
                  {item.title}
                </h2>

                {values.length > 0 ? (
                  <ul className="space-y-3 text-gray-700">
                    {values.map((contact) => {
                      const type = normalizeType(contact.type ?? "");
                      const isExternal = type === "url";
                      const value = contact.value ?? "";

                      return (
                        <li key={contact.id}>
                          <span className="text-muted-foreground">
                            {contact.title ? `${contact.title}: ` : null}
                          </span>
                          <a
                            href={getHref(value, type)}
                            target={isExternal ? "_blank" : undefined}
                            rel={isExternal ? "noreferrer" : undefined}
                            className="text-primary-orange font-semibold hover:underline"
                          >
                            {type === "url" ? value || "Open website" : value}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                ) : (
                  <p>No items for this...</p>
                )}
              </div>
            );
          })}
        </ContainerLayout>

        <ContainerLayout size="sm">
          <div className="bg-alt-background mt-12 rounded-lg p-6 text-center">
            <HeadingText className="mb-2" heading={2} level={4}>
              Need Immediate Help?
            </HeadingText>
            <p className="text-muted-foreground mb-4">
              Don&apos;t hesitate to reach out to these services for support,
              24/7.
            </p>
            <a href="tel:000">
              <Button>Call Emergency: 000</Button>
            </a>
          </div>
        </ContainerLayout>
      </SpacingLayout>
    </>
  );
};

export default EmergencyServicesPage;
