import { PatternBannerCard } from "@/components/cards";
import { BlogPageDocument } from "@/graphql/generated/graphql";
import { runQuery } from "@/graphql/graphql";
import ContainerLayout from "@/layouts/container-layout";
import BlogsSearch from "./_components/blogs-search";

const BlogsPage = async () => {
  const res = await runQuery(BlogPageDocument);
  const blogs = res.blog ?? [];

  return (
    <>
      <PatternBannerCard title="Blogs" />

      <ContainerLayout>
        <BlogsSearch blogs={blogs} />
      </ContainerLayout>
    </>
  );
};

export default BlogsPage;
