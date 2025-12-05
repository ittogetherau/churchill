import DataNotFound from "@/components/globals/DataNotFound";
import HeadingText from "@/components/ui/heading-text";
import { TeamMemberDetailDocument } from "@/graphql/generated/graphql";
import { resolveFileLink, runQuery } from "@/graphql/graphql";
import ContainerLayout from "@/layouts/container-layout";
import Image from "next/image";

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
    <ContainerLayout className="mt-8">
      <div className="flex gap-2 flex-col-reverse lg:flex-row">
        <div className="flex flex-col gap-3">
          <p className="text-xl font-semibold text-primary-orange">
            {member.post}
          </p>
          <HeadingText level={1}>{member.name}</HeadingText>

          {member.description && (
            <div
              className="rich_text_Container space-y-4"
              dangerouslySetInnerHTML={{ __html: member.description }}
            />
          )}
        </div>

        <div className="md:mx-auto flex flex-col justify-center md:justify-start">
          <div className="md-hexagon md:w-[392px] md:h-[392px] grid place-items-center bg-primary-orange md:sticky top-36">
            <div className="md-hexagon w-full aspect-square md:w-96 md:h-96 overflow-hidden">
              <Image
                src={photoUrl}
                width={1000}
                height={1000}
                className="w-full h-full object-cover"
                alt={`Image for ${member.name}`}
              />
            </div>
          </div>
          {/* <div className="w-fit mx-auto bg-primary-orange -translate-y-10 rounded-md text-white px-4 py-3">
            <p className="text-lg text-center font-semibold ">
              Email: <span>{member.email}</span>
            </p>
          </div> */}
        </div>
      </div>
    </ContainerLayout>
  );
};

export default page;
