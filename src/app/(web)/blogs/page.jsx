import {
  Search,
  BlogItemCard,
  DataNotFound,
  Button,
  Spiner,
} from "@/components";
import { FetchBlogData } from "@/components/utils/apiQueries";
const BlogsPage = async () => {
  const items = await FetchBlogData();
  const data = await items.data;

  return (
    <>
      <div className="container mx-auto px-5 flex flex-col gap-[32px] lg:gap-[64px] mb-[48px] mt-[48px]">
        <div className="container mx-auto px-5 flex flex-col gap-[32px] lg:gap-[64px] mb-[48px] mt-[48px]">
          <section>
            <h3 className="text-2xl font-bold">
              Search for blogs you want to explore.
            </h3>
          </section>
        </div>

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
                index={item?.index}
              />
            ))}
          </section>
        ) : (
          <div className="md:w-1/2 md:mx-auto">
            <DataNotFound />
          </div>
        )}
      </div>
    </>
  );
};

export default BlogsPage;
