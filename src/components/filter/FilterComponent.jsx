"use client";
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { LuSettings2 } from "react-icons/lu";
import { Button, Search } from "@/components";
import { useRouter } from "next/navigation";

const FilterComponent = ({ children, placeholderText }) => {
  const { replace } = useRouter();

  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    const query = searchQuery.trim().toLowerCase();
    replace(`/events?keyword=${encodeURIComponent(query)}`);
  };

  return (
    <div className="p-4 rounded-xl bg-[#FAF4F4] lg:w-[21rem] h-fit flex flex-col gap-5">
      <h1 className="font-extrabold text-xl lg:text-2xl w-fit flex gap-3 items-center">
        <span className="bg-[#E59623] rounded-full w-12 h-12 text-white grid place-items-center">
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
        <Button
          btnName="Filter"
          style={
            "w-fit border font-semibold text-[14px] border-2 border-[#606060] rounded-md px-6 md:px-8 py-3 bg-[#E59623] hover:bg-[#ff9700] transition duration-200  ease-in-out hover:scale-105"
          }
        />
      </div>
    </div>
  );
};

export default FilterComponent;
