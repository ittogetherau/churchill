"use client";
import React, { useState, useRef } from "react";
import { FaArrowRight, FaIdCard } from "react-icons/fa";
import Button from "../button";
import { ToastComponent } from "@/components";

const defaultFormState = {
  id: "",
  firstName: "",
  lastName: "",
  email: "",
  subject: "",
};

const RequestIDCardForm = () => {
  const [formData, setFormData] = useState(defaultFormState);

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      formData.subject = `ID Card Request by ${formData.firstName}`;

      const response = await fetch("/api/request-id-card", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.errorCode) throw error(err);

      setFormData(defaultFormState);
      toastRef.current.showToast("Form Submitted successfully!", "success");
    } catch (error) {
      toastRef.current.showToast("An error Occoured", "error");
    }
  };

  const toastRef = useRef();

  return (
    <>
      <ToastComponent ref={toastRef} />

      <div className="mx-5 md:m-0 p-5 rounded-md bg-white ">
        <h2 className="text-matte-purple text-3xl lg:text-5xl font-bold mb-6 text-center">
          Request ID Card
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-8 ">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="flex flex-col gap-2">
              <label className="font-semibold text-matte-purple">
                Student ID <span className="text-[#FF0000]">*</span>
              </label>
              <div className="relative">
                <span className="absolute right-5 top-3">
                  <FaIdCard />
                </span>
                <input
                  required
                  name="id"
                  onChange={handleFormChange}
                  value={formData.id}
                  className="w-full h-auto font-inter text-[12px] text-[#021327] bg-transparent border border-[#ABABAB] outline-0 pl-8 pr-3 py-3 rounded-md"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-semibold text-matte-purple">
                First Name <span className="text-[#FF0000]">*</span>
              </label>
              <div className="relative">
                <span className="absolute right-5 top-3">
                  <FaIdCard />
                </span>
                <input
                  required
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleFormChange}
                  className="w-full h-auto font-inter text-[12px] text-[#021327] bg-transparent border border-[#ABABAB] outline-0 pl-8 pr-3 py-3 rounded-md"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-semibold text-matte-purple">
                Last Name <span className="text-[#FF0000]">*</span>
              </label>
              <div className="relative">
                <span className="absolute right-5 top-3">
                  <FaIdCard />
                </span>
                <input
                  required
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleFormChange}
                  className="w-full h-auto font-inter text-[12px] text-[#021327] bg-transparent border border-[#ABABAB] outline-0 pl-8 pr-3 py-3 rounded-md"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-semibold text-matte-purple">
                Email <span className="text-[#FF0000]">*</span>
              </label>
              <div className="relative">
                <span className="absolute right-5 top-3">
                  <FaIdCard />
                </span>
                <input
                  required
                  name="email"
                  value={formData.email}
                  onChange={handleFormChange}
                  type="email"
                  className="w-full h-auto font-inter text-[12px] text-[#021327] bg-transparent border border-[#ABABAB] outline-0 pl-8 pr-3 py-3 rounded-md"
                />
              </div>
            </div>
          </div>
          <div className="flex justify-start">
            <Button
              type={"submit"}
              btnName={"Submit"}
              icon={<FaArrowRight />}
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default RequestIDCardForm;
