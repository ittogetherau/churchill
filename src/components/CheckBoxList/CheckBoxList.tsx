"use client";
import React from "react";

const CheckBoxList = ({ title, data }) => {
  return (
    <>
      <div className="flex flex-col gap-3">
        <h1 className="font-bold text-xl lg:text-xl">{title}</h1>
        <div className="bg-[#FAF4F4] px-2 py-4 rounded-md flex flex-col gap-2">
          {data.map((item, index) => (
            <div key={index} className="flex items-center ml-2 gap-2 ">
              <input
                id="default-checkbox"
                type="checkbox"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2 overflow-hidden"
              />
              <p className="capitalize">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CheckBoxList;
