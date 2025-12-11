import DataNotFound from "@/components/globals/DataNotFound";
import { Button } from "@/components/ui/button";
import HeadingText from "@/components/ui/heading-text";
import ClientRedirect from "@/components/utils/FileRedirect";
import { FileBySlugDocument } from "@/graphql/generated/graphql";
import { resolveFileLink, runQuery } from "@/graphql/graphql";
import ContainerLayout from "@/layouts/container-layout";
import { FileText } from "lucide-react";
import Link from "next/link";

const Page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const res = await runQuery(FileBySlugDocument, { slug });
  const data = [...res.files, ...res.policies];

  if (data.length === 0)
    return (
      <ContainerLayout size="sm">
        <DataNotFound />
      </ContainerLayout>
    );

  const file = data[0];
  const fileUrl = resolveFileLink(file.file);

  return (
    <>
      <ClientRedirect url={fileUrl} />

      <ContainerLayout size="sm" className="my-32">
        <div className="">
          <div className="bg-alt-background mb-6 flex h-20 w-20 items-center justify-center rounded-full">
            <FileText className="text-primary-orange h-10 w-10" />
          </div>

          <HeadingText level={1} className="mb-3">
            {file.title}
          </HeadingText>

          <p className="mb-8 text-gray-600">
            Your file is ready. Click below to open or download.
          </p>

          <Link href={fileUrl} target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="lg:px-12">
              Open File
            </Button>
          </Link>
        </div>
      </ContainerLayout>
    </>
  );
};

export default Page;
