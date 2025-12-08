import Image from "next/image";
import Link from "next/link";
import { FetchUpcomingKeyEventsData } from "@/utils/apiQueries";
import Copyurl from "../../../../components/sections/blogSections/CopyUrl";
import MoreEventsSection from "@/components/sections/EventsSection/MoreEventsSection";
import { TEvent, TStaticEvent } from "@/constDatas/eventsData";
import { siteConfig } from "@/config/siteConfig";

interface PageProps {
  params: { slug: string };
}
const page = async ({ params }: PageProps) => {
  const monthArray = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const isStaticEvent = (event: TEvent): event is TStaticEvent => {
    return (event as TStaticEvent).author !== undefined;
  };

  const { slug } = params;
  const items = await FetchUpcomingKeyEventsData(slug);
  const data: TEvent = await items.data;
  const eventDate = data.start_time ? new Date(data.start_time) : new Date();
  const readTime = data.rich_text ? Math.ceil(data.rich_text.length / 300) : 0;
  const siteUrl = siteConfig.churchillUrl;

  const author = isStaticEvent(data) ? data.author : "admin";
  const categories = isStaticEvent(data) ? data.catagories : [];
  const image = data.image || "/assets/placeholder-event.png"; // fallback image

  return (
    <>
      <>
        <div className="flex flex-col gap-[32px] lg:gap-[64px]">
          <section className="mx-auto py-[7rem] lg:py-20">
            <div className="flex flex-col gap-[32px] px-5 md:gap-[64px]">
              <article className="flex flex-col gap-6">
                <div className="container-blog flex flex-col gap-4">
                  <nav className="flex flex-wrap gap-1 font-semibold text-wrap">
                    <Link
                      className="hover:text-primary-orange text-nowrap transition-all"
                      href="/"
                    >
                      Home /
                    </Link>
                    <Link
                      className="hover:text-primary-orange text-nowrap transition-all"
                      href="/events"
                    >
                      Events /
                    </Link>
                    {data?.title}
                  </nav>
                  <hr className="border-primary-orange w-[60px] border-2" />

                  <div className="flex flex-row flex-wrap items-center gap-1">
                    <i className="fi fi-rr-calendar-day flex" />
                    <span>{monthArray[eventDate.getMonth()]}</span>
                    <span>{eventDate.getDay()}</span>
                    <span>{eventDate.getFullYear()}</span>
                    <span>·</span>

                    <i className="fi fi-rr-circle-user flex" />
                    <span>{author}</span>
                    <span>·</span>

                    <i className="fi fi-rr-clock-three flex"></i>
                    <>{readTime} min read</>
                  </div>

                  <h2 className="text-4xl leading-[40px] font-bold lg:text-6xl lg:leading-[62px]">
                    {data?.title}
                  </h2>

                  <div
                    dangerouslySetInnerHTML={{ __html: data.description ?? "" }}
                  />
                </div>

                <div className="container mx-auto">
                  <Image
                    width={2000}
                    height={1500}
                    src={image}
                    alt={`event image for ${data.title}`}
                    className="mx-auto aspect-[1.78/1] w-full rounded-md object-cover lg:w-[75%]"
                  />
                </div>

                <div className="container-blog">
                  <div
                    className="rich_text_container"
                    dangerouslySetInnerHTML={{ __html: data.rich_text ?? "" }}
                  />
                </div>
              </article>

              <div className="container mx-auto flex flex-col gap-[32px] px-5">
                <hr className="border border-black/20" />
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                  <div className="flex flex-row flex-wrap gap-2">
                    {categories?.map((item, index) => (
                      <p
                        key={index}
                        className="h-fit rounded-full bg-[#F2CF9C] px-3 py-1 text-[14px] font-semibold text-[#2C2B4B]"
                      >
                        {item?.title}
                      </p>
                    ))}
                  </div>

                  <div className="flex flex-col gap-2 md:flex-row">
                    <p>Share To:</p>
                    <div className="flex flex-wrap gap-2 text-2xl">
                      <a
                        href={`mailto:?subject=Check this out&body=Here's the link: ${siteUrl}`}
                        className="hover:text-primary-orange social-button email transition-all"
                      >
                        <i className="fi fi-rr-envelope flex"></i>
                      </a>
                      <a
                        href={`https://www.facebook.com/sharer/sharer.php?u=${siteUrl}`}
                        target="_blank"
                        className="hover:text-primary-orange social-button facebook transition-all"
                      >
                        <i className="fi fi-brands-facebook flex"></i>
                      </a>
                      <a
                        href={`https://twitter.com/intent/tweet?url=${siteUrl}`}
                        target="_blank"
                        className="hover:text-primary-orange social-button twitter transition-all"
                      >
                        <i className="fi fi-brands-twitter-alt flex"></i>
                      </a>
                      <a
                        href={`https://www.linkedin.com/shareArticle?mini=true&url=${siteUrl}`}
                        target="_blank"
                        className="hover:text-primary-orange social-button linkedin transition-all"
                      >
                        <i className="fi fi-brands-linkedin flex"></i>
                      </a>
                      <a
                        href={`https://api.whatsapp.com/send?text=Check this out: ${siteUrl}`}
                        target="_blank"
                        className="hover:text-primary-orange social-button whatsapp transition-all"
                      >
                        <i className="fi fi-brands-whatsapp flex"></i>
                      </a>
                      <a
                        href={`fb-messenger://share/?link=${siteUrl}`}
                        target="_blank"
                        className="hover:text-primary-orange social-button messenger transition-all"
                      >
                        <i className="fi fi-brands-facebook-messenger flex"></i>
                      </a>
                      <Copyurl url={siteUrl} message={`Copied: ${siteUrl}`}>
                        <div className="hover:text-primary-orange social-button copy-link transition-all">
                          <i className="fi fi-rr-copy-alt"></i>
                        </div>
                      </Copyurl>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <MoreEventsSection slug={slug} />
        </div>
      </>
    </>
  );
};

export default page;
