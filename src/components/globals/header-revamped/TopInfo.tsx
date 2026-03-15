import Link from "next/link";

interface LinkItem {
  href: string;
  text: string;
  iconClass: string;
  external?: boolean;
}

const links: LinkItem[] = [];

const TopInfo = () => {
  return (
    <div>
      <ul className="flex flex-col gap-4 text-[14px] font-semibold text-[#424242] lg:flex-row">
        {links.map((link, index) => (
          <li key={index} className="flex cursor-pointer items-center gap-2">
            <Link href={link.href} target={link.external ? "_blank" : "_self"}>
              <p className="flex items-center gap-1">
                <span className="text-matte-purple">{link.text}</span>
                <i className={`${link.iconClass} flex`}></i>
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopInfo;
