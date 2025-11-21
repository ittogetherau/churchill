"use client";
import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa";

const SelectComponent = ({ title, data }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <div className="w-full flex flex-col gap-3">
        <div
          onClick={() => setIsActive(!isActive)}
          className="w-full bg-[#FAF4F4] rounded-md py-2 px-4 flex items-center justify-between cursor-pointer select-none hover:outline outline-neutral-900/20"
        >
          <span>{title}</span>
          <span
            className={`w-10 h-10 grid place-items-center text-lg ${
              isActive ? "rotate-180" : ""
            }`}
          >
            <FaAngleDown />
          </span>
        </div>

        {isActive && (
          <div className="w-full bg-[#FAF4F4] rounded-md p-3 flex flex-col gap-2">
            {data?.map((item, index) => (
              <div
                key={index}
                className="flex items-center ml-2 gap-2  px-2 py-1 rounded-md"
              >
                <input
                  id="default-checkbox"
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2 overflow-hidden"
                />
                <p className="capitalize">{item.title}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};
export default SelectComponent;
