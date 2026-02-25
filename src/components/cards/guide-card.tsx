import React from "react";
import { FaArrowRight, FaSearch } from "react-icons/fa";
import Link from "next/link";

interface GuideCardProp {
  menuTitle: string;
  slug: string;
  isSearchActive?: boolean;
}

const GuideCard = ({ menuTitle, slug, isSearchActive }: GuideCardProp) => {
  return (
    <div>
      <ul className="flex flex-col gap-3">
        <Link href={`/how-to-guide/${slug}`}>
          <li className="px-4 py-3 hover:text-[#E59623] bg-white rounded-[12px] flex justify-between gap-2 items-center">
            {menuTitle}
            <span>
              <FaArrowRight />
            </span>
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default GuideCard;
