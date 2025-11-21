import Image from "next/image";
import Link from "next/link";
import React from "react";
import NavList from "./NavList";
import TopInfo from "./TopInfo";

import NavListVTwo from "./NavListVTwo";

const DesktopNav = () => {
  return (
    <div className="container mx-auto px-5">
      <div className="flex justify-between items-center gap-4 ">
        <Link className="block" href="/">
          <Image
            src={`/assets/logo.svg`}
            width={400}
            height={400}
            alt="Main Logo"
            className="object-contain w-[240px] h-auto"
            priority
          />
        </Link>

        <div className="">
          <NavList
            style={
              "flex gap-5 md:gap-3 text-[16px] font-inter font-bold text-[#2C2B4B]"
            }
            isDropdownActive={true}
            handleOnclick={() => ""}
            handleOnclickA={() => ""}
          />
        </div>
      </div>
    </div>
  );
};

export default DesktopNav;
