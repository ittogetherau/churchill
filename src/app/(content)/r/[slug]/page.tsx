import { Button } from "@/components/ui/button";
import HeadingText from "@/components/ui/heading-text";
import { routes } from "@/config/routes";
import { RedirectDocument } from "@/graphql/generated/graphql";
import { runQuery } from "@/graphql/graphql";
import ContainerLayout from "@/layouts/container-layout";
import Link from "next/link";
import { redirect } from "next/navigation";

const Page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const res = await runQuery(RedirectDocument, { slug });
  const data = res.short_urls[0] ?? null;

  if (!data) redirect(routes.home);
  if (data.link) redirect(data.link);

  return (
    <ContainerLayout>
      <HeadingText>Unable to redirect</HeadingText>

      <Link href={routes.home}>
        <Button>Return home</Button>
      </Link>
    </ContainerLayout>
  );
};

export default Page;
