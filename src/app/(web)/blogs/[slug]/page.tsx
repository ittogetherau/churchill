import { FetchBlogData } from "@/utils/apiQueries";
import Image from "next/image";
import Link from "next/link";
import Copyurl from "@/components/sections/blogSections/CopyUrl";
import MoreBlogsSection from "@/components/sections/blogSections/MoreBlogsSection";
import ContainerLayout from "@/layouts/container-layout";
import { resolveFileLink, runQuery } from "@/graphql/graphql";
import { BlogDetailDocument } from "@/graphql/generated/graphql";
import BlogSection from "@/components/sections/blogSections/BlogSection";

const formatDate = (dateString?: string) => {
  if (!dateString) return "";
  return new Intl.DateTimeFormat("en-AU", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(dateString));
};

const calculateReadingTime = (text?: string) => {
  if (!text) return 0;
  const cleanText = text
    .replace(/<[^>]+>/g, "")
    .replace(/\s+/g, " ")
    .trim();
  return Math.ceil(cleanText.split(" ").length / 200);
};

const SocialShare = ({ url }: { url: string }) => {
  const shareLinks = [
    {
      href: `mailto:?subject=Check this out&body=Here's the link: ${url}`,
      icon: "fi fi-rr-envelope",
      label: "Email",
    },
    {
      href: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
      icon: "fi fi-brands-facebook",
      label: "Facebook",
    },
    {
      href: `https://twitter.com/intent/tweet?url=${url}`,
      icon: "fi fi-brands-twitter-alt",
      label: "Twitter",
    },
    {
      href: `https://www.linkedin.com/shareArticle?mini=true&url=${url}`,
      icon: "fi fi-brands-linkedin",
      label: "LinkedIn",
    },
    {
      href: `https://api.whatsapp.com/send?text=Check this out: ${url}`,
      icon: "fi fi-brands-whatsapp",
      label: "WhatsApp",
    },
    {
      href: `fb-messenger://share/?link=${url}`,
      icon: "fi fi-brands-facebook-messenger",
      label: "Messenger",
    },
  ];

  return (
    <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
      <p>Share To:</p>
      <div className="flex flex-wrap gap-2 text-2xl">
        {shareLinks.map(({ href, icon, label }) => (
          <Link
            key={label}
            href={href}
            target="_blank"
            className="hover:text-primary-orange social-button transition-all"
          >
            <i className={`flex ${icon}`} />
          </Link>
        ))}
        <Copyurl url={url}>
          <div className="hover:text-primary-orange social-button copy-link transition-all">
            <i className="fi fi-rr-copy-alt" />
          </div>
        </Copyurl>
      </div>
    </div>
  );
};

const BlogPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const res = await runQuery(BlogDetailDocument, { slug });
  const blog = res.blog[0];
  const otherBlogs = res.otherBlogs ?? [];

  if (!blog) return null;

  const siteUrl = `https://churchill.nsw.edu.au/blogs/${slug}`;
  const readingTime = calculateReadingTime(blog.rich_text ?? "");

  return (
    <>
      <ContainerLayout size="sm" className="mt-8">
        <nav className="flex flex-wrap gap-1 font-semibold text-wrap">
          <Link className="hover:text-primary-orange transition-all" href="/">
            Home /
          </Link>
          <Link
            className="hover:text-primary-orange transition-all"
            href="/blogs"
          >
            Blogs /
          </Link>

          {blog.title}
        </nav>

        <hr className="border-primary-orange w-[60px] border-2" />

        <div className="mt-4 flex flex-wrap items-center gap-1">
          <i className="fi fi-rr-calendar-day" />
          <span>{formatDate(blog.date_created)}</span>
          {/* <span>·</span> <i className="fi fi-rr-circle-user" /> <span>{"Admin"}</span> */}
          <span>·</span>
          <i className="fi fi-rr-clock-three" />
          <span>{readingTime} mins read</span>
        </div>

        <h2 className="mt-4 text-4xl leading-[40px] font-bold lg:text-6xl lg:leading-[62px]">
          {blog.title}
        </h2>
      </ContainerLayout>

      <ContainerLayout>
        <Image
          width={2000}
          height={1500}
          src={resolveFileLink(blog.hero_image)}
          alt={`Blog image for ${blog.title}`}
          className="mx-auto aspect-[1.75/1] w-full rounded-md object-cover"
        />
      </ContainerLayout>

      <ContainerLayout size="sm">
        <article>
          {blog?.rich_text && (
            <div
              className="rich_text_container"
              dangerouslySetInnerHTML={{ __html: blog.rich_text }}
            />
          )}
        </article>

        <hr className="my-4 border border-black/20" />

        <SocialShare url={siteUrl} />
      </ContainerLayout>

      <ContainerLayout>
        <BlogSection blogs={otherBlogs} />
      </ContainerLayout>
    </>
  );
};

export default BlogPage;
