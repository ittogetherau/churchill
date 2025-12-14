"use client";
import ToastComponent from "@/components/toast/Toast";
import HeadingText from "@/components/ui/heading-text";
import ContainerLayout from "@/layouts/container-layout";
import { ChangeEvent, FormEvent, useRef, useState } from "react";
import { CgSpinner } from "react-icons/cg";

interface FormState {
  identity: string;
  firstName: string;
  lastName: string;
  email: string;
  verifyEmail: string;
  incidentDate: string;
  incidentTime: string;
  isOngoing: string;
  incidentSeverity: string;
  incidentDescription: string;
  otherIncidentType: string;
  reportingAbout: string;
  osUsed: string;
  browserUsed: string;
  deviceUsed: string;
  attachedFiles: File[];
  incidentType: string[];
  impacted: string[];
  additionalDetails?: string;
  consent?: boolean;
}

interface FileAttachment {
  name: string;
  type: string;
  data: string;
}

const defaultFormState: FormState = {
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
  const [formState, setFormState] = useState<FormState>(defaultFormState);
  const [fileError, setFileError] = useState<string>("");
  const [attachment, setAttachment] = useState<FileAttachment[]>([]);
  const [btnText, setBtnText] = useState<string>("Submit");
  const isSending = btnText === "Sending...";

  const toastRef = useRef<{
    showToast: (message: string, type?: string) => void;
  } | null>(null);

  const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked } = e.target;
    if (name === "incidentType" || name === "impacted") {
      if (checked) {
        setFormState((prevState) => ({
          ...prevState,
          [name]: [...prevState[name], value],
        }));
      } else {
        setFormState((prevState) => ({
          ...prevState,
          [name]: prevState[name].filter((item: string) => item !== value),
        }));
      }
    } else if (name === "consent") {
      setFormState((prevState) => ({
        ...prevState,
        [name]: checked,
      }));
    }
  };

  const handleRadioChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleOtherChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormState((prev) => ({
      ...prev,
      otherIncidentType: e.target.value,
    }));
  };

  const handleFormChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files ? Array.from(e.target.files) : []);

    if (files.length > 5) {
      toastRef.current?.showToast(
        "You can upload a maximum of 5 files.",
        "error",
      );
      e.target.value = "";
      return;
    }

    const totalSize = files.reduce((acc, file) => acc + file.size, 0);

    if (totalSize > 10 * 1024 * 1024) {
      toastRef.current?.showToast(
        "Total file size must not exceed 10MB.",
        "error",
      );
      e.target.value = "";
      return;
    }

    const newAttachments: FileAttachment[] = [];

    const readerPromises = files.map((file) => {
      return new Promise((resolve) => {
        const reader = new FileReader();

        reader.onload = (event) => {
          const fileData = event.target?.result as string;
          const base64Data = fileData.split(",")[1];
          newAttachments.push({
            name: file.name,
            type: file.type,
            data: base64Data,
          });
          reader.readAsDataURL(file);
        };

        reader.readAsDataURL(file);
      });
    });
    Promise.all(readerPromises).then(() => {
      setAttachment(newAttachments);
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setBtnText("Sending...");

    if (formState.email !== formState.verifyEmail) {
      toastRef.current?.showToast("Email doesn't match", "error");
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
        toastRef.current?.showToast("Email sent successfully!", "success");
        setFormState(defaultFormState);
        setAttachment([]);
        setBtnText("Submitted");
      } else {
        const errorData = await response.json();
        toastRef.current?.showToast(`Error: ${errorData.message}`);
        setBtnText("Submit");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toastRef.current?.showToast(
        "An error occurred while sending the email.",
        "error",
      );
      setBtnText("Submit");
    }
  };
  return (
    <>
      <ToastComponent ref={toastRef} />

      <ContainerLayout size="sm">
        <div className="mt-10 mb-6 text-center">
          <HeadingText>Cyber Incident Report Form</HeadingText>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-8">
          <div className="rounded-md bg-[#f2dede] p-4">
            <div className="flex flex-col gap-2">
              <label className="text-matte-purple font-semibold">
                How do you identify yourself to Churchill Institute Institute of
                Higher Education? <span className="text-[#FF0000]">*</span>
              </label>
              <select
                required
                name="identity"
                onChange={handleFormChange}
                value={formState.identity}
                className="font-inter h-auto w-full rounded-md border border-[#ABABAB] bg-transparent py-3 pr-3 pl-3 text-[12px] text-[#021327] outline-0"
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
          <h2 className="text-matte-purple text-xl font-semibold">
            Contact details (Person completing the form)
          </h2>
          <div className="rounded-md bg-[#f2dede] p-4">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div className="flex flex-col gap-2">
                <label className="text-matte-purple font-semibold">
                  First Name <span className="text-[#FF0000]">*</span>
                </label>
                <input
                  required
                  name="firstName"
                  value={formState.firstName}
                  onChange={handleFormChange}
                  className="font-inter h-auto w-full rounded-md border border-[#ABABAB] bg-transparent py-3 pr-3 pl-3 text-[12px] text-[#021327] outline-0"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-matte-purple font-semibold">
                  Last Name <span className="text-[#FF0000]">*</span>
                </label>
                <input
                  required
                  name="lastName"
                  value={formState.lastName}
                  onChange={handleFormChange}
                  className="font-inter h-auto w-full rounded-md border border-[#ABABAB] bg-transparent py-3 pr-3 pl-3 text-[12px] text-[#021327] outline-0"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-matte-purple font-semibold">
                  Email <span className="text-[#FF0000]">*</span>
                </label>
                <input
                  required
                  name="email"
                  value={formState.email}
                  onChange={handleFormChange}
                  type="email"
                  className="font-inter h-auto w-full rounded-md border border-[#ABABAB] bg-transparent py-3 pr-3 pl-3 text-[12px] text-[#021327] outline-0"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-matte-purple font-semibold">
                  Verify Email Address <span className="text-[#FF0000]">*</span>
                </label>
                <input
                  required
                  name="verifyEmail"
                  value={formState.verifyEmail}
                  onChange={handleFormChange}
                  type="email"
                  className="font-inter h-auto w-full rounded-md border border-[#ABABAB] bg-transparent py-3 pr-3 pl-3 text-[12px] text-[#021327] outline-0"
                />
              </div>
            </div>
          </div>
          <div className="rounded-md bg-[#f2dede] p-4">
            <div className="mb-6 flex flex-col gap-2">
              <label className="text-matte-purple font-semibold">
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
                    className="mt-2 w-full rounded-md border border-gray-300 p-2"
                  />
                )}
              </div>
            </div>

            <div className="mb-6 flex flex-col gap-2">
              <label className="text-matte-purple font-semibold">
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

            <div className="mb-6 grid grid-cols-1 gap-8 md:grid-cols-2">
              <div className="flex flex-col gap-2">
                <label className="text-matte-purple font-semibold">
                  Date the incident was identified{" "}
                  <span className="text-[#FF0000]">*</span>
                </label>
                <input
                  required
                  type="date"
                  name="incidentDate"
                  onChange={handleFormChange}
                  value={formState.incidentDate}
                  className="font-inter w-full rounded-md border border-[#ABABAB] bg-transparent py-3 pr-3 pl-3 text-[12px] text-[#021327] outline-0"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-matte-purple font-semibold">
                  Time the incident was identified{" "}
                  <span className="text-[#FF0000]">*</span>
                </label>
                <input
                  required
                  type="time"
                  name="incidentTime"
                  onChange={handleFormChange}
                  value={formState.incidentTime}
                  className="font-inter w-full rounded-md border border-[#ABABAB] bg-transparent py-3 pr-3 pl-3 text-[12px] text-[#021327] outline-0"
                />
              </div>
            </div>

            <div className="mb-6 flex flex-col gap-2">
              <label className="text-matte-purple font-semibold">
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

            <div className="mb-6 flex flex-col gap-2">
              <label className="text-matte-purple font-semibold">
                Severity of the incident{" "}
                <span className="text-[#FF0000]">*</span>
              </label>
              <select
                required
                name="incidentSeverity"
                onChange={handleFormChange}
                value={formState.incidentSeverity}
                className="font-inter h-auto w-full rounded-md border border-[#ABABAB] bg-transparent py-3 pr-3 pl-3 text-[12px] text-[#021327] outline-0"
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

            <div className="mb-6 flex flex-col gap-2">
              <label className="text-matte-purple font-semibold">
                Provide a brief description of the incident{" "}
                <span className="text-[#FF0000]">*</span>
              </label>
              <textarea
                required
                name="incidentDescription"
                value={formState.incidentDescription}
                onChange={handleFormChange}
                className="font-inter h-40 w-full rounded-md border border-[#ABABAB] bg-transparent py-3 pr-3 pl-3 text-[12px] text-[#021327] outline-0"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-matte-purple font-semibold">
                Attach Files (Screenshots, Documents)
              </label>

              <input
                type="file"
                name="attachedFiles"
                multiple
                onChange={handleFileChange}
                className="w-full rounded-md border border-gray-300 p-2"
              />

              {fileError && <span className="text-red-500">{fileError}</span>}
            </div>
          </div>
          <h3 className="text-matte-purple text-xl font-semibold">
            Optional Section: Please complete these if you have any of this
            information
          </h3>
          <div className="rounded-md bg-[#f2dede] p-4">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div className="flex flex-col gap-2">
                <label className="text-matte-purple font-semibold">
                  Reporting is about
                </label>
                <select
                  name="reportingAbout"
                  onChange={handleFormChange}
                  value={formState.reportingAbout}
                  className="font-inter h-auto w-full rounded-md border border-[#ABABAB] bg-transparent py-3 pr-3 pl-3 text-[12px] text-[#021327] outline-0"
                >
                  <option value="" disabled>
                    Select
                  </option>
                  <option value="website">Website</option>
                  <option value="eLearning">
                    Learning Management System (LMS)
                  </option>
                  <option value="inHouseSystem">In-House System</option>
                  <option value="others">Others</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-matte-purple font-semibold">
                  OS Used
                </label>
                <select
                  name="osUsed"
                  onChange={handleFormChange}
                  value={formState.osUsed}
                  className="font-inter h-auto w-full rounded-md border border-[#ABABAB] bg-transparent py-3 pr-3 pl-3 text-[12px] text-[#021327] outline-0"
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
                <label className="text-matte-purple font-semibold">
                  Browser Used
                </label>
                <select
                  name="browserUsed"
                  onChange={handleFormChange}
                  value={formState.browserUsed}
                  className="font-inter h-auto w-full rounded-md border border-[#ABABAB] bg-transparent py-3 pr-3 pl-3 text-[12px] text-[#021327] outline-0"
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
                <label className="text-matte-purple font-semibold">
                  Device Used
                </label>
                <select
                  name="deviceUsed"
                  onChange={handleFormChange}
                  value={formState.deviceUsed}
                  className="font-inter h-auto w-full rounded-md border border-[#ABABAB] bg-transparent py-3 pr-3 pl-3 text-[12px] text-[#021327] outline-0"
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
            <label className="text-matte-purple font-semibold">
              Please provide any further details here (if needed)
            </label>
            <textarea
              name="additionalDetails"
              onChange={handleFormChange}
              value={formState.additionalDetails}
              className="font-inter w-full rounded-md border border-[#ABABAB] bg-transparent pr-3 pl-3 text-[12px] text-[#021327] outline-0"
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
            <label className="text-matte-purple font-semibold">
              I consent to sharing this report with the Department of Home
              Affairs and relevant authorities for regulatory purposes.
            </label>
          </div>

          <div className="flex justify-center">
            {isSending ? (
              <button
                type="submit"
                className="btn-translate flex justify-center rounded-md border-2 border-[#606060] bg-[#E59623] px-6 py-3 text-center text-[14px] font-semibold md:px-8"
              >
                <div className="flex items-center">
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
                className="btn-translate flex justify-center rounded-md border-2 border-[#606060] bg-[#E59623] px-6 py-3 text-center text-[14px] font-semibold transition duration-200 ease-in-out hover:scale-105 hover:bg-[#ff9700] md:px-8"
              >
                <div className="flex items-center gap-1">
                  <div className=" "></div>
                  <div className="flex flex-col">
                    <div className="whitespace-nowrap">{btnText}</div>
                    <span className="block text-[16px] whitespace-nowrap"></span>
                  </div>
                  <div className="btn-translate-child transition-all">
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
      </ContainerLayout>
    </>
  );
};

export default CybersecurityIncident;
