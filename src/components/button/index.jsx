import React from "react";
import { FaArrowRight } from "react-icons/fa";

const Button = ({
  btnName,
  type,
  style,
  styleA = "flex items-center gap-1",
  icon = <FaArrowRight />,
  styleB,
  iconA,
  contact,
  styleType = "primary",
}) => {
  return (
    <button
      type={type && type}
      className={`text-center flex justify-center btn-translate border-2 rounded-md ${
        styleType == "primary"
          ? "border font-semibold text-[14px] border-[#606060] px-6 md:px-8 py-3 bg-[#E59623] hover:bg-[#ff9700] transition duration-200  ease-in-out hover:scale-105"
          : styleType == "secondary"
          ? " border-[#606060] px-5 py-3 hover:bg-[#ff9700] transition duration-200  ease-in-out hover:scale-105"
          : styleType == "tertiary"
          ? "py-2 border-hidden text-primary-orange hover:text-[#ce8720] font-bold"
          : ""
      } ${style} `}
    >
      <div className={`${styleA ? styleA : ""} `}>
        <div className={`${styleB ? styleB : ""} `}>{iconA ? iconA : ""}</div>
        <div className="flex flex-col">
          <div className="whitespace-nowrap">{btnName}</div>
          <span className="block text-[16px] whitespace-nowrap">
            {contact ? contact : ""}
          </span>
        </div>
        <div
          className={`${
            styleB ? styleB : ""
          } btn-translate-child transition-all `}
        >
          {icon ? icon : ""}
        </div>
      </div>
    </button>
  );
};

export default Button;
