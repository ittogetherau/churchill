import DataNotFound from "@/components/globals/data-not-found";
import { FilesDocument } from "@/graphql/generated/graphql";
import { runQuery } from "@/graphql/graphql";
import ContainerLayout from "@/layouts/container-layout";
import FilesList from "./_components/files-list";

const Page = async () => {
  const res = await runQuery(FilesDocument);
  const data = [...res.files, ...res.policies];

  if (data.length === 0) return <DataNotFound />;

  return (
    <ContainerLayout className="mt-8 mb-12">
      <FilesList items={data} />
    </ContainerLayout>
  );
};

export default Page;
