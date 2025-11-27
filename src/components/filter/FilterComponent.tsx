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
         
          
     >Filter</Button>
      </div>
    </div>
  );
};

export default FilterComponent;
