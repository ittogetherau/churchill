"use client";
import React, { useState, useRef } from "react";
import { FaArrowRight, FaIdCard } from "react-icons/fa";
import Button from "../ui-elements/button";
import ToastComponent, { ToastRef } from "@/components/ui-elements/toast";
interface FormData {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
}

const defaultFormState: FormData = {
  id: "",
  firstName: "",
  lastName: "",
  email: "",
  subject: "",
};

const RequestIDCardForm = () => {
  const [formData, setFormData] = useState<FormData>(defaultFormState);
  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
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

      if (data.errorCode) throw new Error("Error submitting form");

      setFormData(defaultFormState);
      toastRef.current?.showToast("Form Submitted successfully!", "success");
    } catch (error) {
      toastRef.current?.showToast("An error Occoured", "error");
    }
  };

  const toastRef = useRef<ToastRef>(null);

  return (
    <>
      <ToastComponent ref={toastRef} />

      <div className="mx-5 rounded-md bg-white p-5 md:m-0">
        <h2 className="text-matte-purple mb-6 text-center text-3xl font-bold lg:text-5xl">
          Request ID Card
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div className="flex flex-col gap-2">
              <label className="text-matte-purple font-semibold">
                Student ID <span className="text-[#FF0000]">*</span>
              </label>
              <div className="relative">
                <span className="absolute top-3 right-5">
                  <FaIdCard />
                </span>
                <input
                  required
                  name="id"
                  onChange={handleFormChange}
                  value={formData.id}
                  className="font-inter h-auto w-full rounded-md border border-[#ABABAB] bg-transparent py-3 pr-3 pl-8 text-[12px] text-[#021327] outline-0"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-matte-purple font-semibold">
                First Name <span className="text-[#FF0000]">*</span>
              </label>
              <div className="relative">
                <span className="absolute top-3 right-5">
                  <FaIdCard />
                </span>
                <input
                  required
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleFormChange}
                  className="font-inter h-auto w-full rounded-md border border-[#ABABAB] bg-transparent py-3 pr-3 pl-8 text-[12px] text-[#021327] outline-0"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-matte-purple font-semibold">
                Last Name <span className="text-[#FF0000]">*</span>
              </label>
              <div className="relative">
                <span className="absolute top-3 right-5">
                  <FaIdCard />
                </span>
                <input
                  required
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleFormChange}
                  className="font-inter h-auto w-full rounded-md border border-[#ABABAB] bg-transparent py-3 pr-3 pl-8 text-[12px] text-[#021327] outline-0"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-matte-purple font-semibold">
                Email <span className="text-[#FF0000]">*</span>
              </label>
              <div className="relative">
                <span className="absolute top-3 right-5">
                  <FaIdCard />
                </span>
                <input
                  required
                  name="email"
                  value={formData.email}
                  onChange={handleFormChange}
                  type="email"
                  className="font-inter h-auto w-full rounded-md border border-[#ABABAB] bg-transparent py-3 pr-3 pl-8 text-[12px] text-[#021327] outline-0"
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
