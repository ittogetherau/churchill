import Image from "next/image";
import Link from "next/link";
import React from "react";

const HandBookFloater = () => {
  return (
    <div className="group fixed bottom-3 left-3 z-[9900] grid cursor-pointer place-items-center md:bottom-8 md:left-12">
      <Link
        href={"https://churchill.edu.au/f/student-handbook"}
        target="_blank"
      >
        <div className="absolute -top-[6.5rem] left-1/2 hidden w-[8rem] -translate-x-1/2 rounded-2xl bg-neutral-800 px-3 py-2 text-center text-white transition-all group-hover:block">
          {/* arrow */}
          <div className="absolute -bottom-2 left-1/2 h-0 w-0 -translate-x-1/2 border-t-8 border-r-8 border-l-8 border-t-neutral-800 border-r-transparent border-l-transparent" />
          Download Student Handbook
        </div>

        <i className="fi bg-primary-orange fi-sr-book-open-cover grid h-16 w-16 place-items-center rounded-full text-3xl text-white shadow-xl" />
      </Link>
    </div>
  );
};

export default HandBookFloater;
