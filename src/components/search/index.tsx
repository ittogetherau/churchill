import React from "react";
import { FaSearch } from "react-icons/fa";

const Search = ({
  placeholderText = "Type Here to Search",
  icon = <FaSearch />,
  stylesInner = "",
  stylesOuter = "",
  text,
  onSearchText,
}) => {
  return (
    <>
      <div
        className={`relative w-full border border-neutral-900/25 bg-[#FAF4F4] rounded-md ${stylesOuter}`}
      >
        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[20px] flex items-center justify-center text-black">
          {icon}
        </span>
        <input
          type="text"
          placeholder={placeholderText}
          value={text}
          onChange={(e) => onSearchText(e.target.value)}
          className={`w-full pr-8 pl-3 py-3 rounded-md transparent-background outline-none ${stylesInner}`}
        />
      </div>
    </>
  );
};

export default Search;
