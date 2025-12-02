import { PatternBannerCard } from "@/components/cards";
import BlogItemCard from "@/components/cards/BlogItemCard";
import DataNotFound from "@/components/globals/DataNotFound";
import { FetchBlogData } from "@/components/utils/apiQueries";
import { TBlogPost } from "@/constDatas/BlogData";
import ContainerLayout from "@/layouts/container-layout";

const BlogsPage = async () => {
  const items = await FetchBlogData();
  const data: TBlogPost[] = await items.data;

  return (
    <>
      <PatternBannerCard title="Blogs" />

      <ContainerLayout>
        {data.length > 0 ? (
          <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-y-[3rem] gap-4">
            {data.map((item, index) => (
              <BlogItemCard
                key={index}
                slug={item?.slug}
                title={item?.title}
                image={item?.image}
                date={item?.date}
                tags={item?.tags}
                description={item?.description}
                index={index}
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
