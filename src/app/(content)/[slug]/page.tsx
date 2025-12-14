import { PatternBannerCard } from "@/components/cards";
import { Button } from "@/components/ui/button";
import HeadingText from "@/components/ui/heading-text";
import {
  ColumnFieldsFragment,
  CustomPageDocument,
  SectionFieldsFragment,
} from "@/graphql/generated/graphql";
import { resolveFileLink, runQuery } from "@/graphql/graphql";
import ContainerLayout from "@/layouts/container-layout";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

const GRID_COLS_MAP: Record<number, string> = {
  1: "grid grid-cols-1",
  2: "grid grid-cols-1 md:grid-cols-2",
  3: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
  4: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4",
};
const cardClass = "bg-alt-background rounded-md border p-4";

function getGridColsClass(columns: number): string {
  return GRID_COLS_MAP[columns] ?? GRID_COLS_MAP[1];
}

function Column({ column }: { column: ColumnFieldsFragment["columns_id"] }) {
  if (!column) return;

  return (
    <div className={`${column.is_card ? cardClass : ""}`}>
      {column.image && (
        <div className="aspect-[4/3.25] w-full overflow-hidden rounded lg:aspect-video">
          <Image
            src={resolveFileLink(column.image)}
            width={1000}
            height={1000}
            alt={
              column.title
                ? `Image for ${column.title} section`
                : "Section image"
            }
            className="h-full w-full object-cover"
          />
        </div>
      )}

      {column.title && (
        <HeadingText level={5} heading={2}>
          {column.title}
        </HeadingText>
      )}

      {column.description && <p>{column.description}</p>}

      {column.rich_text && (
        <div
          className="rich_text_container"
          dangerouslySetInnerHTML={{ __html: column.rich_text }}
        />
      )}

      {column.button_label && column.button_url && (
        <Link
          href={column.button_url}
          className="mt-6 block w-fit"
          target={column.open_in_new_tab ? "_blank" : ""}
        >
          <Button>{column.button_label}</Button>
        </Link>
      )}
    </div>
  );
}

function Section({
  section,
}: {
  section: SectionFieldsFragment["sections_id"];
}) {
  if (!section) return;

  const colCount = section.column_count
    ? parseInt(section.column_count, 10)
    : 1;
  const validColumns = section.columns?.filter((c) => c?.columns_id) ?? [];

  return (
    <section className={`${section.is_card ? cardClass : ""}`}>
      {section.section_title && (
        <HeadingText level={4} heading={2} className="mb-2">
          {section.section_title}
        </HeadingText>
      )}

      {section.rich_text && (
        <div
          className="rich_text_container"
          dangerouslySetInnerHTML={{ __html: section.rich_text }}
        />
      )}

      {validColumns.length > 0 && (
        <div className={`${getGridColsClass(colCount)} gap-4`}>
          {validColumns.map((c, idx) => (
            <Column key={idx} column={c!.columns_id!} />
          ))}
        </div>
      )}
    </section>
  );
}

const Page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const res = await runQuery(CustomPageDocument, { slug });
  const data = res.pages[0];

  if (!data) notFound();

  const validSections = data.sections?.filter((s) => s?.sections_id) ?? [];

  return (
    <>
      {data.view_title_in_banner && (
        <PatternBannerCard
          title={data.title ?? ""}
          description={data.description ?? ""}
        />
      )}

      <ContainerLayout size="sm" className="mt-6 mb-12">
        {!data.view_title_in_banner && (
          <>
            <HeadingText className="mb-2" level={2} heading={1}>
              {data.title}
            </HeadingText>

            {data.description && <p>{data.description}</p>}
          </>
        )}

        {validSections.length > 0 && (
          <div className="mt-6 space-y-8">
            {validSections.map((s, idx) => (
              <Section key={idx} section={s!.sections_id!} />
            ))}
          </div>
        )}
      </ContainerLayout>
    </>
  );
};

export default Page;
