"use client";
import React, { useState, useRef } from "react";
import { Spiner, ToastComponent } from "@/components";
import { CgSpinner } from "react-icons/cg";

const defaultFormState = {
  identity: "",
  firstName: "",
  lastName: "",
  email: "",
  verifyEmail: "",
  incidentDate: "",
  incidentTime: "",
  isOngoing: "",
  incidentSeverity: "",
  incidentDescription: "",
  otherIncidentType: "",
  reportingAbout: "",
  osUsed: "",
  browserUsed: "",
  deviceUsed: "",
  attachedFiles: [],
  incidentType: [],
  impacted: [],
};

const CybersecurityIncident = () => {
  const [formState, setFormState] = useState(defaultFormState);
  const [fileError, setFileError] = useState("");
  const [attachment, setAttachment] = useState("");
  const [btnText, setBtnText] = useState("Submit");
  const isSending = btnText === "Sending...";

  const toastRef = useRef();

  const handleCheckboxChange = (e) => {
    const { name, value, checked } = e.target;
    if (checked) {
      setFormState((prevState) => ({
        ...prevState,
        [name]: [...prevState[name], value],
      }));
    } else {
      setFormState((prevState) => ({
        ...prevState,
        [name]: prevState[name].filter((item) => item !== value),
      }));
    }
  };

  const handleRadioChange = (e) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleOtherChange = (e) => {
    setFormState((prev) => ({
      ...prev,
      otherIncidentType: e.target.value,
    }));
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;

    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);

    if (files.length > 5) {
      toastRef.current.showToast(
        "You can upload a maximum of 5 files.",
        "error"
      );

      e.target.value = "";
      return;
    }

    const totalSize = files.reduce((acc, file) => acc + file.size, 0);

    if (totalSize > 10 * 1024 * 1024) {
      toastRef.current.showToast(
        "Total file size must not exceed 10MB.",
        "error"
      );

      e.target.value = "";
      return;
    }

    const newAttachments = [];

    const readerPromises = files.map((file) => {
      return new Promise((resolve) => {
        const reader = new FileReader();

        reader.onload = (event) => {
          const fileData = event.target.result.split(",")[1];
          newAttachments.push({
            name: file.name,
            type: file.type,
            data: fileData,
          });
          resolve();
        };

        reader.readAsDataURL(file);
      });
    });

    Promise.all(readerPromises).then(() => {
      setAttachment(newAttachments);
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setBtnText("Sending...");

    if (formState.email !== formState.verifyEmail) {
      toastRef.current.showToast("Email doesn't match", "error");
      setBtnText("Submit");
      return;
    }

    // if (!attachment) {
    //   setFileError("Please upload a file");
    //   setBtnText("Submit");
    //   return;
    // }

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formState,
          attachedFiles: attachment,
        }),
      });

      if (response.ok) {
        toastRef.current.showToast("Email sent successfully!", "success");
        setFormState(defaultFormState);
        setAttachment(null);
        setBtnText("Submitted");
      } else {
        const errorData = await response.json();
        toastRef.current.showToast(`Error: ${errorData.message}`);
        setBtnText("Submit");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toastRef.current.showToast(
        "An error occurred while sending the email.",
        "error"
      );
      setBtnText("Submit");
    }
  };

  return (
    <>
      <ToastComponent ref={toastRef} />

      <div className="md:container sm:px-20 px-0  form-fileds mx-auto mb-20">
        <div className=" max-w-[800px] mx-auto p-5 rounded-md bg-white">
          <h2 className="text-matte-purple py-10 text-3xl lg:text-5xl font-bold mb-6 text-center">
            Cyber Incident Report Form
          </h2>
          <form onSubmit={handleSubmit} className="flex flex-col gap-8">
            <div className="bg-[#f2dede] p-4 rounded-md">
              <div className="flex flex-col gap-2">
                <label className="font-semibold text-matte-purple">
                  How do you identify yourself to Churchill Institute Institute of Higher Education?{" "}
                  <span className="text-[#FF0000]">*</span>
                </label>
                <select
                  required
                  name="identity"
                  onChange={handleFormChange}
                  value={formState.identity}
                  className="w-full h-auto font-inter text-[12px] text-[#021327] bg-transparent border border-[#ABABAB] outline-0 pl-3 pr-3 py-3 rounded-md"
                >
                  <option value="" disabled>
                    Select
                  </option>
                  <option value="current student">Current Student</option>
                  <option value="alumni">Alumni</option>
                  <option value="staff">Staff</option>
                  <option value="organization">Organization</option>
                  <option value="others">Others</option>
                </select>
              </div>
            </div>
            <h2 className="font-semibold text-xl text-matte-purple">
              Contact details (Person completing the form)
            </h2>
            <div className="bg-[#f2dede] p-4 rounded-md">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col gap-2">
                  <label className="font-semibold text-matte-purple">
                    First Name <span className="text-[#FF0000]">*</span>
                  </label>
                  <input
                    required
                    name="firstName"
                    value={formState.firstName}
                    onChange={handleFormChange}
                    className="w-full h-auto font-inter text-[12px] text-[#021327] bg-transparent border border-[#ABABAB] outline-0 pl-3 pr-3 py-3 rounded-md"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="font-semibold text-matte-purple">
                    Last Name <span className="text-[#FF0000]">*</span>
                  </label>
                  <input
                    required
                    name="lastName"
                    value={formState.lastName}
                    onChange={handleFormChange}
                    className="w-full h-auto font-inter text-[12px] text-[#021327] bg-transparent border border-[#ABABAB] outline-0 pl-3 pr-3 py-3 rounded-md"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="font-semibold text-matte-purple">
                    Email <span className="text-[#FF0000]">*</span>
                  </label>
                  <input
                    required
                    name="email"
                    value={formState.email}
                    onChange={handleFormChange}
                    type="email"
                    className="w-full h-auto font-inter text-[12px] text-[#021327] bg-transparent border border-[#ABABAB] outline-0 pl-3 pr-3 py-3 rounded-md"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="font-semibold text-matte-purple">
                    Verify Email Address{" "}
                    <span className="text-[#FF0000]">*</span>
                  </label>
                  <input
                    required
                    name="verifyEmail"
                    value={formState.verifyEmail}
                    onChange={handleFormChange}
                    type="email"
                    className="w-full h-auto font-inter text-[12px] text-[#021327] bg-transparent border border-[#ABABAB] outline-0 pl-3 pr-3 py-3 rounded-md"
                  />
                </div>
              </div>
            </div>
            <div className="bg-[#f2dede] p-4 rounded-md">
              <div className="flex flex-col mb-6 gap-2">
                <label className="font-semibold text-matte-purple">
                  Type of Incident <span className="text-[#FF0000]">*</span>
                </label>
                <div className="flex flex-wrap gap-4">
                  <label>
                    <input
                      type="checkbox"
                      name="incidentType"
                      value="DOS"
                      onChange={handleCheckboxChange}
                    />{" "}
                    Denial of Service (DOS)
                  </label>

                  <label>
                    <input
                      type="checkbox"
                      name="incidentType"
                      value="unauthorizedAccess"
                      onChange={handleCheckboxChange}
                    />{" "}
                    Unauthorized access to network or device
                  </label>

                  <label>
                    <input
                      type="checkbox"
                      name="incidentType"
                      value="maliciousCode"
                      onChange={handleCheckboxChange}
                    />{" "}
                    Malicious code/malware
                  </label>

                  <label>
                    <input
                      type="checkbox"
                      name="incidentType"
                      value="phishing"
                      onChange={handleCheckboxChange}
                    />{" "}
                    Phishing/spear phishing
                  </label>

                  <label>
                    <input
                      type="checkbox"
                      name="incidentType"
                      value="scanningRecon"
                      onChange={handleCheckboxChange}
                    />{" "}
                    Scanning and reconnaissance
                  </label>

                  <label>
                    <input
                      type="checkbox"
                      name="incidentType"
                      value="dataExposure"
                      onChange={handleCheckboxChange}
                    />{" "}
                    Data exposure, theft, or leak
                  </label>

                  <label>
                    <input
                      type="checkbox"
                      name="incidentType"
                      value="ransomware"
                      onChange={handleCheckboxChange}
                    />{" "}
                    Ransomware
                  </label>

                  <label>
                    <input
                      type="checkbox"
                      name="incidentType"
                      value="other"
                      onChange={handleCheckboxChange}
                    />{" "}
                    Other (Please specify)
                  </label>

                  {/* Conditionally render the input field if "Other" is selected */}
                  {formState.incidentType.includes("other") && (
                    <input
                      type="text"
                      name="otherIncidentType"
                      value={formState.otherIncidentType}
                      onChange={handleOtherChange}
                      placeholder="Please specify other incident"
                      className="w-full mt-2 p-2 border border-gray-300 rounded-md"
                    />
                  )}
                </div>
              </div>

              <div className="flex flex-col mb-6 gap-2">
                <label className="font-semibold text-matte-purple">
                  Are any of the following impacted? (Select if applicable)
                </label>
                <div className="flex flex-wrap gap-4">
                  <label>
                    <input
                      type="checkbox"
                      name="impacted"
                      value="IT systems"
                      onChange={handleCheckboxChange}
                    />{" "}
                    Information Technology Systems
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      name="impacted"
                      value="operational systems"
                      onChange={handleCheckboxChange}
                    />{" "}
                    Operational Technology Systems
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      name="impacted"
                      value="customerData"
                      onChange={handleCheckboxChange}
                    />{" "}
                    Customer or Staff/Student Data
                  </label>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
                <div className="flex flex-col gap-2">
                  <label className="font-semibold text-matte-purple">
                    Date the incident was identified{" "}
                    <span className="text-[#FF0000]">*</span>
                  </label>
                  <input
                    required
                    type="date"
                    name="incidentDate"
                    onChange={handleFormChange}
                    value={formState.incidentDate}
                    className="w-full font-inter text-[12px] text-[#021327] bg-transparent border border-[#ABABAB] outline-0 pl-3 pr-3 py-3 rounded-md"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="font-semibold text-matte-purple">
                    Time the incident was identified{" "}
                    <span className="text-[#FF0000]">*</span>
                  </label>
                  <input
                    required
                    type="time"
                    name="incidentTime"
                    onChange={handleFormChange}
                    value={formState.incidentTime}
                    className="w-full font-inter text-[12px] text-[#021327] bg-transparent border border-[#ABABAB] outline-0 pl-3 pr-3 py-3 rounded-md"
                  />
                </div>
              </div>

              <div className="flex flex-col mb-6 gap-2">
                <label className="font-semibold text-matte-purple">
                  Is the incident ongoing?{" "}
                  <span className="text-[#FF0000]">*</span>
                </label>
                <div className="flex gap-4">
                  <label>
                    <input
                      type="radio"
                      name="isOngoing"
                      value="yes"
                      checked={formState.isOngoing === "yes"}
                      onChange={handleRadioChange}
                    />{" "}
                    Yes
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="isOngoing"
                      value="no"
                      checked={formState.isOngoing === "no"}
                      onChange={handleRadioChange}
                    />{" "}
                    No
                  </label>
                </div>
              </div>

              <div className="flex flex-col mb-6 gap-2">
                <label className="font-semibold text-matte-purple">
                  Severity of the incident{" "}
                  <span className="text-[#FF0000]">*</span>
                </label>
                <select
                  required
                  name="incidentSeverity"
                  onChange={handleFormChange}
                  value={formState.incidentSeverity}
                  className="w-full h-auto font-inter text-[12px] text-[#021327] bg-transparent border border-[#ABABAB] outline-0 pl-3 pr-3 py-3 rounded-md"
                >
                  <option value="" disabled>
                    Select
                  </option>
                  <option value="minor">Minor</option>
                  <option value="moderate">Moderate</option>
                  <option value="major">Major</option>
                  <option value="critical">Critical</option>
                </select>
              </div>

              <div className="flex flex-col mb-6 gap-2">
                <label className="font-semibold text-matte-purple">
                  Provide a brief description of the incident{" "}
                  <span className="text-[#FF0000]">*</span>
                </label>
                <textarea
                  required
                  name="incidentDescription"
                  value={formState.incidentDescription}
                  onChange={handleFormChange}
                  className="w-full h-40 font-inter text-[12px] text-[#021327] bg-transparent border border-[#ABABAB] outline-0 pl-3 pr-3 py-3 rounded-md"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-semibold text-matte-purple">
                  Attach Files (Screenshots, Documents)
                </label>

                <input
                  type="file"
                  name="attachedFiles"
                  multiple
                  onChange={handleFileChange}
                  className="w-full p-2 border border-gray-300 rounded-md"
                />

                {fileError && <span className="text-red-500">{fileError}</span>}
              </div>
            </div>
            <h3 className="font-semibold  text-xl  text-matte-purple">
              Optional Section: Please complete these if you have any of this
              information
            </h3>
            <div className="bg-[#f2dede] p-4 rounded-md">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col gap-2">
                  <label className="font-semibold text-matte-purple">
                    Reporting is about
                  </label>
                  <select
                    name="reportingAbout"
                    onChange={handleFormChange}
                    value={formState.reportingAbout}
                    className="w-full h-auto font-inter text-[12px] text-[#021327] bg-transparent border border-[#ABABAB] outline-0 pl-3 pr-3 py-3 rounded-md"
                  >
                    <option value="" disabled>
                      Select
                    </option>
                    <option value="website">Website</option>
                    <option value="eLearning">Learning Management System (LMS)</option>
                    <option value="inHouseSystem">In-House System</option>
                    <option value="others">Others</option>
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="font-semibold text-matte-purple">
                    OS Used
                  </label>
                  <select
                    name="osUsed"
                    onChange={handleFormChange}
                    value={formState.osUsed}
                    className="w-full h-auto font-inter text-[12px] text-[#021327] bg-transparent border border-[#ABABAB] outline-0 pl-3 pr-3 py-3 rounded-md"
                  >
                    <option value="" disabled>
                      Select
                    </option>
                    <option value="Windows">Windows</option>
                    <option value="MAC">MAC</option>
                    <option value="LINUX">LINUX</option>
                    <option value="N/A">N/A</option>
                    <option value="others">Others</option>
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="font-semibold text-matte-purple">
                    Browser Used
                  </label>
                  <select
                    name="browserUsed"
                    onChange={handleFormChange}
                    value={formState.browserUsed}
                    className="w-full h-auto font-inter text-[12px] text-[#021327] bg-transparent border border-[#ABABAB] outline-0 pl-3 pr-3 py-3 rounded-md"
                  >
                    <option value="" disabled>
                      Select
                    </option>
                    <option value="Chrome">Chrome</option>
                    <option value="Firefox">Firefox</option>
                    <option value="Edge">Edge</option>
                    <option value="Brave">Brave</option>
                    <option value="Safari">Safari</option>
                    <option value="others">Others</option>
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="font-semibold text-matte-purple">
                    Device Used
                  </label>
                  <select
                    name="deviceUsed"
                    onChange={handleFormChange}
                    value={formState.deviceUsed}
                    className="w-full h-auto font-inter text-[12px] text-[#021327] bg-transparent border border-[#ABABAB] outline-0 pl-3 pr-3 py-3 rounded-md"
                  >
                    <option value="" disabled>
                      Select
                    </option>
                    <option value="mobile">Mobile</option>
                    <option value="computer">Computer/Laptop</option>
                    <option value="others">Others</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-semibold text-matte-purple">
                Please provide any further details here (if needed)
              </label>
              <textarea
                name="additionalDetails"
                onChange={handleFormChange}
                value={formState.additionalDetails}
                rows="4"
                className="w-full font-inter text-[12px] text-[#021327] bg-transparent border border-[#ABABAB] outline-0 pl-3 pr-3 rounded-md"
              />
            </div>

            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                name="consent"
                checked={formState.consent}
                className="h-4 w-4"
                required
              />
              <label className="font-semibold text-matte-purple">
                I consent to sharing this report with the Department of Home
                Affairs and relevant authorities for regulatory purposes.
              </label>
            </div>

            <div className="flex justify-center">
              {isSending ? (
                <button
                  type="submit"
                  className="text-center flex justify-center btn-translate border-2 rounded-md font-semibold text-[14px] border-[#606060] px-6 md:px-8 py-3 bg-[#E59623]"
                >
                  <div className="flex items-center ">
                    <div className="flex flex-col">
                      <div className="whitespace-nowrap">Sending</div>
                      <span className="block text-[16px] whitespace-nowrap"></span>
                    </div>
                    <div className="ml-4">
                      <CgSpinner size={30} className="spinner" />
                    </div>
                  </div>
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={btnText === "Sending..."}
                  className="text-center flex justify-center btn-translate border-2 rounded-md font-semibold text-[14px] border-[#606060] px-6 md:px-8 py-3 bg-[#E59623] hover:bg-[#ff9700] transition duration-200 ease-in-out hover:scale-105"
                >
                  <div className="flex items-center gap-1 ">
                    <div className=" "></div>
                    <div className="flex flex-col">
                      <div className="whitespace-nowrap">{btnText}</div>
                      <span className="block text-[16px] whitespace-nowrap"></span>
                    </div>
                    <div className=" btn-translate-child transition-all ">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 448 512"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path>
                      </svg>
                    </div>
                  </div>
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default CybersecurityIncident;
