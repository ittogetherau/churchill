"use client";
import Image from "next/image";
import Link from "next/link";
import React, { use, useState } from "react";

const EmergencyContactFloater = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showContacts, setShowContacts] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const toggleContactPopup = () => {
    setShowContacts(!showContacts);
  };

  const toggleBoth = () => {
    togglePopup();
    toggleContactPopup();
  };

  return (
    <>
      <div className="group fixed right-3 bottom-3 grid cursor-pointer place-items-center sm:z-[1] md:right-12 md:bottom-8">
        <div onClick={togglePopup}>
          <i className="fi fi-rr-menu-dots bg-primary-orange grid h-10 w-16 place-items-center rounded-full text-2xl text-white shadow-xl sm:h-16" />
        </div>

        {isOpen && (
          <div
            className="fixed right-3 bottom-20 z-[10000] rounded-lg border border-gray-300 bg-white p-4 shadow-lg md:right-12 md:bottom-24"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="ico-pri grid grid-cols-1 gap-4">
              <Link
                href={"https://churchill.edu.au/f/student-handbook"}
                target="_blank"
                className="flex items-center gap-2 overflow-hidden rounded-md bg-neutral-50 p-1"
              >
                <div className="bg-primary-orange/20 ml-2 grid aspect-square place-items-center rounded-full">
                  <i className="fi fi-rr-employee-handbook m-0 grid h-[50px] w-[50px] place-items-center text-3xl"></i>
                </div>
                <div className="py-2 pl-2">
                  <h2 className="text-left font-semibold text-wrap break-words capitalize"></h2>
                  <p className="text-xl font-bold text-wrap break-words">
                    Download Student HandBook
                  </p>
                </div>
              </Link>

              <div
                className="flex items-center gap-2 overflow-hidden rounded-md bg-neutral-50 p-1"
                onClick={toggleBoth}
              >
                <div className="bg-primary-orange/20 ml-2 grid aspect-square place-items-center rounded-full">
                  <i className="fi fi-rr-light-emergency-on m-0 grid h-[50px] w-[50px] place-items-center text-3xl"></i>
                </div>
                <div className="py-2 pl-2">
                  <p className="text-xl font-bold text-wrap break-words">
                    Emergency Contacts
                  </p>
                </div>
              </div>

              <Link
                href={"cyber-incident-report-form"}
                className="flex items-center gap-2 overflow-hidden rounded-md bg-neutral-50 p-1"
              >
                <div className="bg-primary-orange/20 ml-2 grid aspect-square place-items-center rounded-full">
                  <i className="fi fi-rr-shield-security-risk m-0 grid h-[50px] w-[50px] place-items-center text-3xl"></i>
                </div>
                <div className="py-2 pl-2">
                  <p className="text-xl font-bold text-wrap break-words">
                    Report Cyber Incident
                  </p>
                </div>
              </Link>
            </div>
          </div>
        )}

        {showContacts && (
          <div>
            <div
              className="fixed inset-0 z-[10000] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="ico-pri h-[450px] w-[400px] rounded-lg border border-gray-300 bg-white p-4 shadow-lg">
                <div className="flex justify-between">
                  <h5 className="mb-8 text-[25px] font-bold text-[#2C2B4B]">
                    Emergency Contacts
                  </h5>
                  <div
                    className="flex h-[40px] w-[40px] items-center gap-2 overflow-hidden rounded-full bg-neutral-50 p-1 transition-all hover:bg-orange-200"
                    onClick={toggleContactPopup}
                  >
                    <Image
                      width={1000}
                      height={1000}
                      src="https://cdn-icons-png.flaticon.com/128/3917/3917203.png"
                      alt=""
                      className="h-[30px] w-[30px]"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-4">
                  <a
                    href="tel:0432641386"
                    className="flex items-center gap-2 overflow-hidden rounded-md bg-neutral-50 p-1"
                  >
                    <div className="bg-primary-orange/10 ml-2 grid aspect-square place-items-center rounded-full">
                      <i className="fi fi-rr-hr-person m-0 grid h-[50px] w-[50px] place-items-center text-3xl"></i>
                    </div>
                    <div className="py-2 pl-2">
                      <h2 className="text-left font-semibold text-wrap break-words capitalize">
                        Facility Manager
                      </h2>
                      <p className="text-xl font-bold text-wrap break-words">
                        0432 641 386
                      </p>
                      <p className="font-semibold">Available 24/7</p>
                    </div>
                  </a>
                  <a
                    href="tel:094132360"
                    className="flex items-center gap-2 overflow-hidden rounded-md bg-neutral-50 p-1"
                  >
                    <div className="bg-primary-orange/10 ml-2 grid aspect-square place-items-center rounded-full">
                      <i className="fi fi-rr-building m-0 grid h-[50px] w-[50px] place-items-center text-3xl"></i>
                    </div>
                    <div className="py-2 pl-2">
                      <h2 className="text-left font-semibold text-wrap break-words capitalize">
                        Building Management
                      </h2>
                      <p className="text-xl font-bold text-wrap break-words">
                        09 413 2360
                      </p>
                      <p className="font-semibold">Mon-Fri 9am-5pm</p>
                    </div>
                  </a>
                  <a
                    href="tel:0435127197"
                    className="flex items-center gap-2 overflow-hidden rounded-md bg-neutral-50 p-1"
                  >
                    <div className="bg-primary-orange/10 ml-2 grid aspect-square place-items-center rounded-full">
                      <i className="fi fi-rr-id-card-clip-alt m-0 grid h-[50px] w-[50px] place-items-center text-3xl"></i>
                    </div>
                    <div className="py-2 pl-2">
                      <h2 className="text-left font-semibold text-wrap break-words capitalize">
                        Dean/CEO
                      </h2>
                      <p className="text-xl font-bold text-wrap break-words">
                        0435 127 197
                      </p>
                      <p className="font-semibold">Mon-Fri 9am-5pm</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div
              className="overlay fixed inset-0 bg-black opacity-50"
              onClick={toggleContactPopup}
            ></div>
          </div>
        )}
      </div>
      <div className="ico-pri fixed bottom-3 left-0 mx-2 block w-98 rounded-lg border bg-white shadow-lg sm:hidden">
        <div className="bg-primary-orange/20 m-1 grid w-100 grid-cols-3 gap-2 rounded-md">
          <Link
            href={"https://churchill.edu.au/f/student-handbook"}
            target="_blank"
            className="flex items-center gap-2 overflow-hidden rounded-md pl-2"
          >
            <div className="grid place-items-center rounded-full">
              <i className="fi fi-rr-employee-handbook m-0 grid h-[20px] w-[20px] place-items-center text-xl"></i>
            </div>
            <div className="py-2">
              <h2 className="text-left font-semibold text-wrap break-words capitalize"></h2>
              <p className="text-xs font-semibold text-wrap break-words">
                Student HandBook
              </p>
            </div>
          </Link>
          <div
            className="flex items-center gap-2 overflow-hidden rounded-md pl-2"
            onClick={toggleContactPopup}
          >
            <div className="grid place-items-center rounded-full">
              <i className="fi fi-rr-light-emergency-on m-0 grid h-[20px] w-[20px] place-items-center text-xl"></i>
            </div>
            <div className="py-2">
              <p className="text-xs font-semibold text-wrap break-words">
                Emergency Contacts
              </p>
            </div>
          </div>
          <Link
            href={"cyber-incident-report-form"}
            className="flex items-center gap-2 overflow-hidden rounded-md pl-2"
          >
            <div className="grid place-items-center rounded-full">
              <i className="fi fi-rr-shield-security-risk m-0 grid h-[20px] w-[20px] place-items-center text-xl"></i>
            </div>
            <div className="py-2">
              <p className="text-xs font-semibold text-wrap break-words">
                Report Cyber Incident
              </p>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default EmergencyContactFloater;
