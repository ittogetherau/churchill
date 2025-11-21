import Image from "next/image";
import Link from "next/link";
import React from "react";

const HandBookFloater = () => {
  return (
    <div className="fixed bottom-3 left-3 md:bottom-8 md:left-12 cursor-pointer group grid place-items-center z-[9900]">
      <Link href={"/assets/docs/student-handbook.pdf"} target="_blank">
        <div className="hidden group-hover:block transition-all bg-neutral-800 text-white absolute -top-[6.5rem] left-1/2 -translate-x-1/2 w-[8rem] px-3 py-2 rounded-2xl text-center">
          {/* arrow */}
          <div className="absolute w-0 h-0 -bottom-2 left-1/2 -translate-x-1/2 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-neutral-800" />
          Download Student Handbook
        </div>

        <i class="fi bg-primary-orange fi-sr-book-open-cover grid place-items-center w-16 h-16 text-3xl rounded-full text-white shadow-xl" />
      </Link>
    </div>
  );
};

export default HandBookFloater;
