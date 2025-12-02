"use client";
import React, { useEffect, useState } from "react";
import NavList from "./NavList";
import Link from "next/link";
import { CgMenuRight } from "react-icons/cg";
import { IoMdCloseCircleOutline } from "react-icons/io";
import Image from "next/image";
import { usePathname } from "next/navigation";
import TopInfo from "./TopInfo";

const MobileNav = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [isDropdownActive, setIsDropdownActive] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    setIsDropdownActive(false);
    setOpenMenu(false);
  }, [pathname]);

  return (
    <>
      <div className="flex justify-between gap-8 items-center px-[24px] py-2 shadow bg-white w-full">
        <div className="py-2">
          <Link href={"/"}>
            <Image
              src={`/assets/logo.svg`}
              width={400}
              height={400}
              alt="Main Logo"
              className="object-contain w-[190px]"
              priority
            />
          </Link>
        </div>
        <div className="">
          <div
            className="text-[44px]"
            onClick={() => {
              setOpenMenu(true);
            }}
          >
            <CgMenuRight />
          </div>
        </div>
      </div>

      {openMenu && (
        <div className="w-full">
          <div
            className="z-40 fixed top-0 right-0 left-0 bottom-0 bg-[#fff] pl-8 pt-4 flex flex-col gap-[40px]"
            style={{
              animation: "sidebarAnimate linear 0.2s",
            }}
          >
            <div className="flex justify-between gap-8 items-center">
              <Image
                src={`/assets/logo.svg`}
                width={400}
                height={400}
                alt="Main Logo"
                className="object-contain w-[190px]"
                onClick={() => {
                  setOpenMenu(false);
                }}
                priority
              />
              <div
                className="pr-8 text-[32px] text-[#000]/[72%]"
                onClick={() => {
                  setOpenMenu(false);
                }}
              >
                <IoMdCloseCircleOutline />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <NavList
                style={`flex flex-col gap-2`}
                handleOnclick={() => {
                  setOpenMenu(false);
                }}
                handleOnclickA={() => setIsDropdownActive((prev) => !prev)}
                isDropdownActive={isDropdownActive}
              />

              <TopInfo />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MobileNav;
