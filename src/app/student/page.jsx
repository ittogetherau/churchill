import { NewsletterSection, StyledHeroCard } from "@/components";
import { navItems } from "@/constDatas/navItems";
import Link from "next/link";

const page = () => {
  const data = navItems[1];

  return (
    <div className="flex flex-col gap-[32px] lg:gap-[64px]">
      {/* <StyledHeroCard title="Student" /> */}

      <div className="container mx-auto px-5 mt-[48px]">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-8">
          {Array.isArray(data?.Catagories) &&
            data.Catagories.map((subItem, index) => (
              <Link
                target={`${subItem?.redirectLink ? "_blank" : ""}`}
                key={index}
                href={
                  subItem?.redirectLink
                    ? subItem?.redirectLink
                    : subItem?.link
                      ? subItem?.link
                      : `/${item.slug}/${subItem.slug}`
                }
                className="w-full h-full"
              >
                <li
                  className="bg-[#eb9320]/10 transition-all rounded-md flex flex-col flex-1 items-center text-center gap-3 px-2 py-6 hover:shadow-md hover:bg-[#eb9320]/30"
                  key={index}
                >
                  <div className="w-16 h-16 bg-[#eb9320]/20 text-2xl rounded-full grid place-items-center">
                    <i
                      className={`${subItem.headerIcon} m-0 flex items-center `}
                    />
                  </div>

                  <div className="flex flex-1 flex-col gap-1">
                    <h3 className="leading-5 font-xl capitalize font-bold">
                      {subItem.menuTitle}
                    </h3>
                  </div>
                </li>
              </Link>
            ))}
        </div>
      </div>

      <NewsletterSection />
    </div>
  );
};

export default page;
