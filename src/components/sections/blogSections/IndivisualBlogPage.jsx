"use client";
import {
  NewsletterSection,
  MoreBlogsSection,
  Spiner,
  ToastComponent,
} from "@/components";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState, useEffect } from "react";
import { motion, useScroll } from "framer-motion";
import { FetchBlogData } from "@/components/utils/apiQueries";

import { BlogData } from "@/constDatas/BlogData";
import { SlGameController } from "react-icons/sl";

// Date formatter function
const formatDate = (dateString) => {
  if (!dateString) return "";
  const date = new Date(dateString);
  return new Intl.DateTimeFormat("en-AU", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);
};

const IndivisualBlogPage = ({ slug }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    FetchBlogData(slug)
      .then((res) => {
        setData(res.data);
        setIsLoading(false);
      })
      .catch((err) => console.error(err));
  }, [slug]);

  //-- animation
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: [".3 end", "end end"],
  });

  const siteUrl = process.env.NEXT_PUBLIC_CHURCHILL_URL;
  const toastRef = useRef();

  const cleanText = (data?.rich_text || "")
    .replace(/<[^>]+>/g, "")
    .replace(/\s+/g, " ")
    .trim();
  const wordCount = cleanText.split(" ").length;
  const readingTime = Math.ceil(wordCount / 200);

  return (
    <>
      {isLoading ? (
        <Spiner />
      ) : (
        <>
          <ToastComponent ref={toastRef} />

          <motion.div
            className="h-[8px] z-[100] fixed bottom-[-1px] left-0 right-0 bg-primary-orange"
            style={{ scaleX: scrollYProgress }}
          />

          <section className="mx-auto py-[7rem] lg:py-20">
            <div className="px-5 flex flex-col gap-[32px] md:gap-[64px]">
              <article className="flex flex-col gap-6" ref={containerRef}>
                <div className="container-blog flex flex-col gap-5">
                  <nav className="font-semibold flex flex-wrap text-wrap gap-1">
                    <Link
                      className="hover:text-primary-orange transition-all"
                      href="/"
                    >
                      Home /
                    </Link>
                    <Link
                      className="hover:text-primary-orange transition-all"
                      href="/blogs"
                    >
                      Blogs /
                    </Link>
                    {data?.title}
                  </nav>
                  <hr className="border-2 w-[60px]  border-primary-orange" />

                  <div className="flex flex-wrap flex-row items-center gap-1">
                    <i className="fi fi-rr-calendar-day flex" />
                    <span>{formatDate(data?.date)}</span>
                    <span>·</span>

                    <i className="fi fi-rr-circle-user flex" />
                    <span>{data?.author ? data?.author : "Admin"}</span>
                    <span>·</span>

                    <i className="fi fi-rr-clock-three flex"></i>
                    <>{readingTime} mins read</>
                  </div>

                  <h2 className="text-4xl leading-[40px] lg:text-6xl lg:leading-[62px] font-bold">
                    {data?.title}
                  </h2>
                </div>

                <div className="container mx-auto">
                  <Image
                    width={2000}
                    height={1500}
                    src={data?.image}
                    alt={`event image for ${data?.title}`}
                    className="w-full aspect-[1.78/1] lg:w-[75%] mx-auto object-cover rounded-md"
                  />
                </div>

                <div className="container-blog">
                  <div
                    className="rich-text-container"
                    dangerouslySetInnerHTML={{ __html: data?.rich_text }}
                  />
                </div>
              </article>

              <div className="container mx-auto px-5 flex flex-col gap-[32px]">
                <hr className="border border-black/20" />
                <div className="flex gap-4 md:items-center md:justify-between flex-col md:flex-row">
                  <div className="flex flex-col md:flex-row gap-2">
                    <p>Share To:</p>
                    <div className="flex gap-2 text-2xl flex-wrap">
                      <a
                        href={`mailto:?subject=Check this out&body=Here's the link: ${siteUrl}`}
                        className="hover:text-primary-orange transition-all social-button email"
                      >
                        <i className="flex fi fi-rr-envelope"></i>
                      </a>
                      <a
                        href={`https://www.facebook.com/sharer/sharer.php?u=${siteUrl}`}
                        target="_blank"
                        className="hover:text-primary-orange transition-all social-button facebook"
                      >
                        <i className="flex fi fi-brands-facebook"></i>
                      </a>
                      <a
                        href={`https://twitter.com/intent/tweet?url=${siteUrl}`}
                        target="_blank"
                        className="hover:text-primary-orange transition-all social-button twitter"
                      >
                        <i className="flex fi fi-brands-twitter-alt"></i>
                      </a>
                      <a
                        href={`https://www.linkedin.com/shareArticle?mini=true&url=${siteUrl}`}
                        target="_blank"
                        className="hover:text-primary-orange transition-all social-button linkedin"
                      >
                        <i className="flex fi fi-brands-linkedin"></i>
                      </a>
                      <a
                        href={`https://api.whatsapp.com/send?text=Check this out: ${siteUrl}`}
                        target="_blank"
                        className="hover:text-primary-orange transition-all social-button whatsapp"
                      >
                        <i className="flex fi fi-brands-whatsapp"></i>
                      </a>
                      <a
                        href={`fb-messenger://share/?link=${siteUrl}`}
                        target="_blank"
                        className="hover:text-primary-orange transition-all social-button messenger"
                      >
                        <i className="flex fi fi-brands-facebook-messenger"></i>
                      </a>
                      <div
                        onClick={(e) => {
                          e.preventDefault();
                          navigator.clipboard.writeText(window.location.href);
                          toastRef.current.showToast(
                            "Copied To Clipboard",
                            "success"
                          );
                        }}
                        className="hover:text-primary-orange transition-all social-button cursor-pointer copy-link"
                      >
                        <i className="fi fi-rr-copy-alt"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <MoreBlogsSection slug={slug} />
              <NewsletterSection />
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default IndivisualBlogPage;
