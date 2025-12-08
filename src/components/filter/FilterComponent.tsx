"use client";
import React, { ReactNode, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { LuSettings2 } from "react-icons/lu";
import { useRouter } from "next/navigation";
import Search from "../search";
import { Button } from "../ui/button";

interface FilterComponentProps {
  children?: ReactNode;
  placeholderText?: string;
}

const FilterComponent: React.FC<FilterComponentProps> = ({
  children,
  placeholderText,
}) => {
  const { replace } = useRouter();

  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    const query = searchQuery.trim().toLowerCase();
    replace(`/events?keyword=${encodeURIComponent(query)}`);
  };

  return (
    <div className="flex h-fit flex-col gap-4 rounded-xl bg-[#FAF4F4] p-4 lg:w-[21rem]">
      <h1 className="flex w-fit items-center gap-3 text-xl font-extrabold lg:text-2xl">
        <span className="grid h-12 w-12 place-items-center rounded-full bg-[#E59623] text-white">
          <LuSettings2 />
        </span>
        <span>Filters</span>
      </h1>

      <Search
        placeholderText={placeholderText}
        text={searchQuery}
        onSearchText={setSearchQuery}
      />

      {children}

      <div onClick={handleSearch} className="">
        <Button>Filter</Button>
      </div>
    </div>
  );
};

export default FilterComponent;
