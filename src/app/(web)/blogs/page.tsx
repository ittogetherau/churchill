import { PatternBannerCard } from "@/components/cards";
import BlogItemCard from "@/components/cards/BlogItemCard";
import DataNotFound from "@/components/globals/DataNotFound";
import { FetchBlogData } from "@/components/utils/apiQueries";
import { TBlogPost } from "@/constDatas/BlogData";
import { BlogPageDocument } from "@/graphql/generated/graphql";
import { resolveFileLink, runQuery } from "@/graphql/graphql";
import ContainerLayout from "@/layouts/container-layout";

const BlogsPage = async () => {
  const res = await runQuery(BlogPageDocument);
  const blogs = res.blog ?? [];

  return (
    <>
      <PatternBannerCard title="Blogs" />

      <ContainerLayout>
        {blogs.length > 0 ? (
          <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-y-[3rem] gap-4">
            {blogs.map((item, index) => (
              <BlogItemCard
                key={index}
                slug={item.slug ?? ""}
                title={item?.title ?? ""}
                description={item.description ?? ""}
                image={resolveFileLink(item?.hero_image)}
                date={item?.date_created}
                tags={[]}
              />
            ))}
          </section>
        ) : (
          <div className="md:w-1/2 md:mx-auto">
            <DataNotFound />
          </div>
        )}
      </ContainerLayout>
    </>
  );
};

export default BlogsPage;
