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
      <div className="sm:z-[1] fixed bottom-3 right-3 md:bottom-8 md:right-12 cursor-pointer group grid place-items-center">
        <div onClick={togglePopup}>
          <i className="fi fi-rr-menu-dots grid place-items-center w-16 h-10 sm:h-16 bg-primary-orange text-2xl rounded-full text-white shadow-xl" />
        </div>

        {isOpen && (
          <div
            className="fixed bottom-20 right-3 md:bottom-24 md:right-12 bg-white border border-gray-300 shadow-lg p-4 rounded-lg z-[10000]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="ico-pri grid grid-cols-1 gap-4">
              <Link
                href={"/assets/docs/student-handbook.pdf"}
                target="_blank"
                className="bg-neutral-50 p-1 rounded-md flex items-center gap-2 overflow-hidden"
              >
                <div className="aspect-square ml-2 rounded-full bg-primary-orange/20 grid place-items-center">
                  <i className="fi fi-rr-employee-handbook w-[50px] h-[50px] grid place-items-center m-0 text-3xl"></i>
                </div>
                <div className="pl-2 py-2">
                  <h2 className="font-semibold break-words text-wrap capitalize text-left"></h2>
                  <p className="font-bold text-xl break-words text-wrap">
                    Download Student HandBook
                  </p>
                </div>
              </Link>

              <div
                className="bg-neutral-50 p-1 rounded-md flex items-center gap-2 overflow-hidden"
                onClick={toggleBoth}
              >
                <div className="aspect-square ml-2 rounded-full bg-primary-orange/20 grid place-items-center">
                  <i className="fi fi-rr-light-emergency-on w-[50px] h-[50px] grid place-items-center m-0 text-3xl"></i>
                </div>
                <div className="pl-2 py-2">
                  <p className="font-bold text-xl break-words text-wrap">
                    Emergency Contacts
                  </p>
                </div>
              </div>

              <Link
                href={"cyber-incident-report-form"}
                className="bg-neutral-50 p-1 rounded-md flex items-center gap-2 overflow-hidden"
              >
                <div className="aspect-square ml-2 rounded-full bg-primary-orange/20 grid place-items-center">
                  <i className="fi fi-rr-shield-security-risk w-[50px] h-[50px] grid place-items-center m-0 text-3xl"></i>
                </div>
                <div className="pl-2 py-2">
                  <p className="font-bold text-xl break-words text-wrap">
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
              className="fixed inset-0 flex items-center justify-center z-[10000] "
              onClick={(e) => e.stopPropagation()}
            >
              <div className="ico-pri bg-white border border-gray-300 shadow-lg p-4 rounded-lg w-[400px] h-[450px]">
                <div className="flex justify-between">
                  <h5 class="font-bold text-[25px] mb-8 text-[#2C2B4B]">
                    Emergency Contacts
                  </h5>
                  <div
                    className="bg-neutral-50 p-1 rounded-full flex items-center gap-2 overflow-hidden h-[40px] w-[40px] transition-all  hover:bg-orange-200"
                    onClick={toggleContactPopup}
                  >
                    <Image
                      width={1000}
                      height={1000}
                      src="https://cdn-icons-png.flaticon.com/128/3917/3917203.png"
                      alt=""
                      className="w-[30px] h-[30px]"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-4">
                  <a
                    href="tel:0432641386"
                    className="bg-neutral-50 p-1 rounded-md flex items-center gap-2 overflow-hidden"
                  >
                    <div className="aspect-square ml-2 rounded-full bg-primary-orange/10 grid place-items-center">
                      <i className="fi fi-rr-hr-person w-[50px] h-[50px] grid place-items-center m-0 text-3xl"></i>
                    </div>
                    <div className="pl-2 py-2">
                      <h2 className="font-semibold break-words text-wrap capitalize text-left">
                        Facility Manager
                      </h2>
                      <p className="font-bold text-xl break-words text-wrap">
                        0432 641 386
                      </p>
                      <p className="font-semibold">Available 24/7</p>
                    </div>
                  </a>
                  <a
                    href="tel:094132360"
                    className="bg-neutral-50 p-1 rounded-md flex items-center gap-2 overflow-hidden"
                  >
                    <div className="aspect-square ml-2 rounded-full bg-primary-orange/10 grid place-items-center">
                      <i className="fi fi-rr-building w-[50px] h-[50px] grid place-items-center m-0 text-3xl"></i>
                    </div>
                    <div className="pl-2 py-2">
                      <h2 className="font-semibold break-words text-wrap capitalize text-left">
                        Building Management
                      </h2>
                      <p className="font-bold text-xl break-words text-wrap">
                        09 413 2360
                      </p>
                      <p className="font-semibold">Mon-Fri 9am-5pm</p>
                    </div>
                  </a>
                  <a
                    href="tel:0435127197"
                    className="bg-neutral-50 p-1 rounded-md flex items-center gap-2 overflow-hidden"
                  >
                    <div className="aspect-square ml-2 rounded-full bg-primary-orange/10 grid place-items-center">
                      <i className="fi fi-rr-id-card-clip-alt w-[50px] h-[50px] grid place-items-center m-0 text-3xl"></i>
                    </div>
                    <div className="pl-2 py-2">
                      <h2 className="font-semibold break-words text-wrap capitalize text-left">
                        Dean/CEO
                      </h2>
                      <p className="font-bold text-xl break-words text-wrap">
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
      <div className="ico-pri block w-98 sm:hidden fixed bottom-3 left-0 bg-white mx-2 border shadow-lg rounded-lg">
        <div className="grid w-100 grid-cols-3 gap-2 m-1 bg-primary-orange/20 rounded-md">
          <Link
            href={"/assets/docs/student-handbook.pdf"}
            target="_blank"
            className="pl-2 rounded-md flex items-center gap-2 overflow-hidden"
          >
            <div className="rounded-full grid place-items-center">
              <i className="fi fi-rr-employee-handbook w-[20px] h-[20px] grid place-items-center m-0 text-xl"></i>
            </div>
            <div className="py-2">
              <h2 className="font-semibold break-words text-wrap capitalize text-left"></h2>
              <p className="font-semibold text-xs break-words text-wrap">
                Student HandBook
              </p>
            </div>
          </Link>
          <div
            className="pl-2 rounded-md flex items-center gap-2 overflow-hidden"
            onClick={toggleContactPopup}
          >
            <div className="rounded-full grid place-items-center">
              <i className="fi fi-rr-light-emergency-on w-[20px] h-[20px] grid place-items-center m-0 text-xl"></i>
            </div>
            <div className="py-2">
              <p className="font-semibold text-xs break-words text-wrap">
                Emergency Contacts
              </p>
            </div>
          </div>
          <Link
            href={"cyber-incident-report-form"}
            className="pl-2 rounded-md flex items-center gap-2 overflow-hidden"
          >
            <div className="rounded-full grid place-items-center">
              <i className="fi fi-rr-shield-security-risk w-[20px] h-[20px] grid place-items-center m-0 text-xl"></i>
            </div>
            <div className="py-2">
              <p className="font-semibold text-xs break-words text-wrap">
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
