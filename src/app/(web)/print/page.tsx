"use client";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function ChurchillPrinterPortal() {
  const [showRechargeModal, setShowRechargeModal] = useState(false);
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [showBalanceModal, setShowBalanceModal] = useState(false);
  const [studentId, setStudentId] = useState("");
  const pathname = usePathname();
  const handleRechargeForm = () => {
    setShowRechargeModal(true);
  };

  const closeRechargeModal = () => {
    setShowRechargeModal(false);
    setStudentId("");
  };

  const handleVideoGuide = () => {
    window.open("https://www.youtube.com/shorts/UqDrdxxgl54", "_blank");
  };

  const closeVideoModal = () => {
    setShowVideoModal(false);
  };

  const handleBalanceCheck = () => {
    window.open("https://pxeserver:9192/user", "_blank");
  };

  const closeBalanceModal = () => {
    setShowBalanceModal(false);
  };

  const proceedPayment = () => {
    const trimmedStudentId = studentId.trim();

    if (!trimmedStudentId) {
      alert("Please enter your Student ID before proceeding.");
      return;
    }

    const paymentUrl = `https://cilantro.taco-tech.com/payments/412c3ac5-50b2-4e1d-b242-1b16c8e37e9d/${encodeURIComponent(
      trimmedStudentId,
    )}@churchill.edu.au`;

    window.open(paymentUrl, "_blank");
    closeRechargeModal();
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      proceedPayment();
    }
  };

  const handleModalClick = (
    event: React.MouseEvent<HTMLDivElement>,
    closeFunction: () => void,
  ) => {
    if (event.target === event.currentTarget) {
      closeFunction();
    }
  };

  useEffect(() => {
    const header = document.querySelector(".header");
    const footerBottom = document.querySelector(".footer-bottom");

    if (pathname === "/print") {
      header?.classList.add("hidden");
      footerBottom?.classList.add("hidden");
    } else {
      header?.classList.remove("hidden");
      footerBottom?.classList.remove("hidden");
    }
  }, [pathname]);

  return (
    <div className="min-h-screen bg-gray-50">
      <style jsx>{`
        .subtle-shadow {
          box-shadow:
            0 1px 3px 0 rgba(0, 0, 0, 0.1),
            0 1px 2px 0 rgba(0, 0, 0, 0.06);
        }
        .card-hover {
          transition: all 0.2s ease-in-out;
        }
        .card-hover:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px 0 rgba(0, 0, 0, 0.12);
        }
        .backdrop-blur {
          backdrop-filter: blur(10px);
        }
        .color-churchill {
          filter: invert(82%) sepia(30%) saturate(6124%) hue-rotate(346deg)
            brightness(96%) contrast(87%);
        }
        .bg-churchill {
          background-color: #e59623;
        }
        .hover\\:bg-churchill-dark:hover {
          background-color: #cc7a1a;
        }
        .focus\\:ring-churchill\\/20:focus {
          --tw-ring-color: rgba(229, 150, 35, 0.2);
        }
        .focus\\:border-churchill:focus {
          border-color: #e59623;
        }
        .bg-churchill\\/10 {
          background-color: rgba(229, 150, 35, 0.1);
        }
      `}</style>

      <header className="sticky top-0 z-40 border-b border-gray-100 bg-white bg-white/95 backdrop-blur">
        <div className="mx-auto max-w-4xl px-6 py-8">
          <div className="mx-auto flex flex-col items-center gap-3 text-center">
            <Image
              src={`/assets/logo.svg`}
              width={400}
              height={400}
              alt="Main Logo"
              className="w-[200px] object-contain"
              priority
            />
            <h1 className="mb-1 text-2xl font-semibold text-gray-900">
              Churchill Printer Portal
            </h1>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-4xl py-12">
          <div className="mb-16 text-center">
            <div className="bg-churchill/10 mb-6 inline-flex h-20 w-20 items-center justify-center rounded-lg">
              <Image
                src="https://cdn-icons-png.flaticon.com/128/3917/3917119.png"
                width={40}
                height={40}
                className="color-churchill h-10 w-10"
                alt="Printer icon"
              />
            </div>
          <h2 className="mb-3 text-xl font-medium text-gray-900">
            Manage your printing account
          </h2>
          <p className="mx-auto max-w-md text-gray-600">
            Access your printer services, check balances, and manage your
            account in one place.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="card-hover subtle-shadow rounded-xl border border-gray-100 bg-white p-6">
            <div className="mb-4 flex items-center">
              <div className="bg-churchill/10 mr-3 flex h-12 w-12 items-center justify-center rounded-lg">
                <Image
                  src="https://cdn-icons-png.flaticon.com/128/7653/7653265.png"
                  width={32}
                  height={32}
                  className="color-churchill h-8 w-8"
                  alt="Recharge icon"
                />
              </div>
              <h3 className="font-medium text-gray-900">Recharge Account</h3>
            </div>
            <p className="mb-6 text-sm text-gray-600">
              Add credits to your account
            </p>
            <button
              onClick={handleRechargeForm}
              className="bg-churchill hover:bg-churchill-dark w-full cursor-pointer rounded-lg px-4 py-2 text-sm font-medium text-white transition-colors"
            >
              Add Funds
            </button>
          </div>

          <div className="card-hover subtle-shadow rounded-xl border border-gray-100 bg-white p-6">
            <div className="mb-4 flex items-center">
              <div className="bg-churchill/10 mr-3 flex h-12 w-12 items-center justify-center rounded-lg">
                <Image
                  src="https://cdn-icons-png.flaticon.com/128/15399/15399215.png"
                  width={32}
                  height={32}
                  className="color-churchill h-8 w-8"
                  alt="Video guide icon"
                />
              </div>
              <h3 className="font-medium text-gray-900">How to Print</h3>
            </div>
            <p className="mb-6 text-sm text-gray-600">
              Step-by-step printing guide
            </p>
            <button
              onClick={handleVideoGuide}
              className="bg-churchill hover:bg-churchill-dark w-full cursor-pointer rounded-lg px-4 py-2 text-sm font-medium text-white transition-colors"
            >
              Watch Guide
            </button>
          </div>

          <div className="card-hover subtle-shadow rounded-xl border border-gray-100 bg-white p-6">
            <div className="mb-4 flex items-center">
              <div className="bg-churchill/10 mr-3 flex h-12 w-12 items-center justify-center rounded-lg">
                <Image
                  src="https://cdn-icons-png.flaticon.com/128/7653/7653142.png"
                  width={32}
                  height={32}
                  className="color-churchill h-8 w-8"
                  alt="Balance icon"
                />
              </div>
              <h3 className="font-medium text-gray-900">Check Balance</h3>
            </div>
            <p className="mb-6 text-sm text-gray-600">
              View balance and usage history
            </p>
            <button
              onClick={handleBalanceCheck}
              className="bg-churchill hover:bg-churchill-dark w-full cursor-pointer rounded-lg px-4 py-2 text-sm font-medium text-white transition-colors"
            >
              View Details
            </button>
          </div>
        </div>
      </main>

      {/* Recharge Modal */}
      {showRechargeModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4 backdrop-blur-sm"
          onClick={(e) => handleModalClick(e, closeRechargeModal)}
        >
          <div className="w-full max-w-md rounded-2xl bg-white shadow-xl">
            <div className="border-b border-gray-100 p-6">
              <h3 className="text-lg font-medium text-gray-900">
                Recharge Your Account
              </h3>
              <p className="mt-1 text-sm text-gray-600">
                Enter your Student ID to add credits
              </p>
            </div>

            <div className="p-6">
              <div className="mb-4">
                <label
                  htmlFor="studentId"
                  className="mb-2 block text-sm font-medium text-gray-700"
                >
                  Student ID
                </label>
                <input
                  type="text"
                  id="studentId"
                  value={studentId}
                  onChange={(e) => setStudentId(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="CIHE123456"
                  className="focus:ring-churchill/20 focus:border-churchill w-full rounded-lg border border-gray-300 px-3 py-2 text-sm transition-colors outline-none focus:ring-2"
                />
              </div>

              <div className="mb-6 rounded-lg border border-amber-200 bg-amber-50 p-3">
                <div className="flex">
                  <svg
                    className="mt-0.5 mr-2 h-4 w-4 flex-shrink-0 text-amber-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.382 16.5c-.77.833.192 2.5 1.732 2.5z"
                    />
                  </svg>
                  <div>
                    <p className="text-xs font-medium text-amber-800">
                      Important
                    </p>
                    <p className="mt-0.5 text-xs text-amber-700">
                      Double-check your Student ID. Incorrect entries may result
                      in lost credits.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-3 p-6 pt-0">
              <button
                onClick={closeRechargeModal}
                className="flex-1 rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-200"
              >
                Cancel
              </button>
              <button
                onClick={proceedPayment}
                className="bg-churchill hover:bg-churchill-dark flex-1 rounded-lg px-4 py-2 text-sm font-medium text-white transition-colors"
              >
                Pay Now
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Video Modal */}
      {showVideoModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4 backdrop-blur-sm"
          onClick={(e) => handleModalClick(e, closeVideoModal)}
        >
          <div className="w-full max-w-lg rounded-2xl bg-white shadow-xl">
            <div className="border-b border-gray-100 p-6">
              <h3 className="text-lg font-medium text-gray-900">
                How to Print Guide
              </h3>
              <p className="mt-1 text-sm text-gray-600">
                Learn how to use the printing system
              </p>
            </div>

            <div className="p-6">
              <div className="rounded-lg bg-gray-50 p-8 text-center">
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-gray-200">
                  <svg
                    className="h-6 w-6 text-gray-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <p className="text-sm text-gray-600">
                  Video guide will be available here
                </p>
              </div>
            </div>

            <div className="p-6 pt-0">
              <button
                onClick={closeVideoModal}
                className="bg-churchill hover:bg-churchill-dark w-full cursor-pointer rounded-lg px-4 py-2 text-sm font-medium text-white transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Balance Modal */}
      {showBalanceModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4 backdrop-blur-sm"
          onClick={(e) => handleModalClick(e, closeBalanceModal)}
        >
          <div className="w-full max-w-md rounded-2xl bg-white shadow-xl">
            <div className="border-b border-gray-100 p-6">
              <h3 className="text-lg font-medium text-gray-900">
                Balance & Usage
              </h3>
              <p className="mt-1 text-sm text-gray-600">
                View your account details
              </p>
            </div>

            <div className="p-6">
              <div className="rounded-lg bg-gray-50 p-6 text-center">
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-gray-200">
                  <svg
                    className="h-6 w-6 text-gray-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                </div>
                <p className="text-sm text-gray-600">
                  Balance information will appear here
                </p>
              </div>
            </div>

            <div className="p-6 pt-0">
              <button
                onClick={closeBalanceModal}
                className="bg-churchill hover:bg-churchill-dark w-full rounded-lg px-4 py-2 text-sm font-medium text-white transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
