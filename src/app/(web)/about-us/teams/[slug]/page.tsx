import DataNotFound from "@/components/globals/data-not-found";
import { Button } from "@/components/ui/button";
import HeadingText from "@/components/ui/heading-text";
import { TeamMemberDetailDocument } from "@/graphql/generated/graphql";
import { resolveFileLink, runQuery } from "@/graphql/graphql";
import ContainerLayout from "@/layouts/container-layout";
import TwoColumnLayout from "@/layouts/two-column-layout";
import { ChevronLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;

  const data = await runQuery(TeamMemberDetailDocument, { slug });
  const member = data.team_members?.[0];

  if (!member)
    return (
      <ContainerLayout size="sm">
        <DataNotFound />
      </ContainerLayout>
    );

  const photoUrl = resolveFileLink(member.photo);

  return (
    <>
      <ContainerLayout className="mt-8 mb-4">
        <Link href={"/about-us/governance-and-leadership"}>
          <Button variant={"secondary"} size={"sm"}>
            <ChevronLeft /> Back
          </Button>
        </Link>
      </ContainerLayout>

      <ContainerLayout>
        <TwoColumnLayout
          sidebar={
            <div className="grid place-items-center">
              <div className="bg-primary-orange w-full max-w-sm p-1.5 md:[clip-path:polygon(50%_0%,95%_25%,95%_75%,50%_100%,10%_75%,10%_25%)]">
                <div className="relative aspect-square w-full overflow-hidden md:[clip-path:polygon(50%_0%,95%_25%,95%_75%,50%_100%,10%_75%,10%_25%)]">
                  <Image
                    src={photoUrl}
                    fill
                    className="object-cover"
                    alt={`Image for ${member.name}`}
                  />
                </div>
              </div>
            </div>
          }
          isReversedInSmall={true}
          isContainer={false}
        >
          <p className="text-primary-orange text-xl font-semibold">
            {member.post}
          </p>

          <HeadingText className="mb-1" level={1}>
            {member.name}
          </HeadingText>

          {member.description && (
            <div
              className="rich_text_Container space-y-4"
              dangerouslySetInnerHTML={{ __html: member.description }}
            />
          )}
        </TwoColumnLayout>
      </ContainerLayout>
    </>
  );
};

export default page;
