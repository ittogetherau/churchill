"use client";
import { usePathname } from "next/navigation";
import { useState, useEffect } from 'react';
import Image from "next/image";

export default function ChurchillPrinterPortal() {
    const [showRechargeModal, setShowRechargeModal] = useState(false);
    const [showVideoModal, setShowVideoModal] = useState(false);
    const [showBalanceModal, setShowBalanceModal] = useState(false);
    const [studentId, setStudentId] = useState('');
    const pathname = usePathname();
    const handleRechargeForm = () => {
        setShowRechargeModal(true);
    };

    const closeRechargeModal = () => {
        setShowRechargeModal(false);
        setStudentId('');
    };

    const handleVideoGuide = () => {
        window.open('https://www.youtube.com/shorts/UqDrdxxgl54', '_blank');
    };

    const closeVideoModal = () => {
        setShowVideoModal(false);
    };

    const handleBalanceCheck = () => {
        window.open('https://pxeserver:9192/user', '_blank');
    };

    const closeBalanceModal = () => {
        setShowBalanceModal(false);
    };

    const proceedPayment = () => {
        const trimmedStudentId = studentId.trim();

        if (!trimmedStudentId) {
            alert('Please enter your Student ID before proceeding.');
            return;
        }

        const paymentUrl = `https://cilantro.taco-tech.com/payments/412c3ac5-50b2-4e1d-b242-1b16c8e37e9d/${encodeURIComponent(trimmedStudentId)}@churchill.nsw.edu.au`;

        window.open(paymentUrl, '_blank');
        closeRechargeModal();
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            proceedPayment();
        }
    };

    const handleModalClick = (event, closeFunction) => {
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
          box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
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
          filter: invert(82%) sepia(30%) saturate(6124%) hue-rotate(346deg) brightness(96%) contrast(87%);
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

            <header className="bg-white border-b border-gray-100 sticky top-0 z-40 backdrop-blur bg-white/95">
                <div className="max-w-4xl mx-auto px-6 py-8">
                    <div className="text-center mx-auto flex items-center flex-col gap-3">
                        <Image
                            src={`/assets/logo.svg`}
                            width={400}
                            height={400}
                            alt="Main Logo"
                            className="object-contain w-[200px]"
                            priority
                        />
                        <h1 className="text-2xl font-semibold text-gray-900 mb-1">Churchill Printer Portal</h1>
                    </div>
                </div>
            </header>

            <main className="max-w-4xl mx-auto py-12">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-churchill/10 rounded-lg mb-6">
                        <img
                            src="https://cdn-icons-png.flaticon.com/128/3917/3917119.png"
                            className="w-10 h-10 color-churchill"
                            alt="Printer icon"
                        />
                    </div>
                    <h2 className="text-xl font-medium text-gray-900 mb-3">Manage your printing account</h2>
                    <p className="text-gray-600 max-w-md mx-auto">
                        Access your printer services, check balances, and manage your account in one place.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    <div className="card-hover bg-white rounded-xl subtle-shadow border border-gray-100 p-6">
                        <div className="flex items-center mb-4">
                            <div className="w-12 h-12 bg-churchill/10 rounded-lg flex items-center justify-center mr-3">
                                <img
                                    src="https://cdn-icons-png.flaticon.com/128/7653/7653265.png"
                                    className="w-8 h-8 color-churchill"
                                    alt="Recharge icon"
                                />
                            </div>
                            <h3 className="font-medium text-gray-900">Recharge Account</h3>
                        </div>
                        <p className="text-sm text-gray-600 mb-6">Add credits to your account</p>
                        <button
                            onClick={handleRechargeForm}
                            className="w-full px-4 py-2 text-sm font-medium text-white bg-churchill hover:bg-churchill-dark rounded-lg transition-colors"
                        >
                            Add Funds
                        </button>
                    </div>

                    <div className="card-hover bg-white rounded-xl subtle-shadow border border-gray-100 p-6">
                        <div className="flex items-center mb-4">
                            <div className="w-12 h-12 bg-churchill/10 rounded-lg flex items-center justify-center mr-3">
                                <img
                                    src="https://cdn-icons-png.flaticon.com/128/15399/15399215.png"
                                    className="w-8 h-8 color-churchill"
                                    alt="Video guide icon"
                                />
                            </div>
                            <h3 className="font-medium text-gray-900">How to Print</h3>
                        </div>
                        <p className="text-sm text-gray-600 mb-6">Step-by-step printing guide</p>
                        <button
                            onClick={handleVideoGuide}
                            className="w-full px-4 py-2 text-sm font-medium text-white bg-churchill hover:bg-churchill-dark rounded-lg transition-colors"
                        >
                            Watch Guide
                        </button>
                    </div>

                    <div className="card-hover bg-white rounded-xl subtle-shadow border border-gray-100 p-6">
                        <div className="flex items-center mb-4">
                            <div className="w-12 h-12 bg-churchill/10 rounded-lg flex items-center justify-center mr-3">
                                <img
                                    src="https://cdn-icons-png.flaticon.com/128/7653/7653142.png"
                                    className="w-8 h-8 color-churchill"
                                    alt="Balance icon"
                                />
                            </div>
                            <h3 className="font-medium text-gray-900">Check Balance</h3>
                        </div>
                        <p className="text-sm text-gray-600 mb-6">View balance and usage history</p>
                        <button
                            onClick={handleBalanceCheck}
                            className="w-full px-4 py-2 text-sm font-medium text-white bg-churchill hover:bg-churchill-dark rounded-lg transition-colors"
                        >
                            View Details
                        </button>
                    </div>
                </div>
            </main>

            {/* Recharge Modal */}
            {showRechargeModal && (
                <div
                    className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 p-4"
                    onClick={(e) => handleModalClick(e, closeRechargeModal)}
                >
                    <div className="bg-white rounded-2xl max-w-md w-full shadow-xl">
                        <div className="p-6 border-b border-gray-100">
                            <h3 className="text-lg font-medium text-gray-900">Recharge Your Account</h3>
                            <p className="text-sm text-gray-600 mt-1">Enter your Student ID to add credits</p>
                        </div>

                        <div className="p-6">
                            <div className="mb-4">
                                <label htmlFor="studentId" className="block text-sm font-medium text-gray-700 mb-2">
                                    Student ID
                                </label>
                                <input
                                    type="text"
                                    id="studentId"
                                    value={studentId}
                                    onChange={(e) => setStudentId(e.target.value)}
                                    onKeyPress={handleKeyPress}
                                    placeholder="CIHE123456"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-churchill/20 focus:border-churchill outline-none transition-colors text-sm"
                                />
                            </div>

                            <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 mb-6">
                                <div className="flex">
                                    <svg className="w-4 h-4 text-amber-600 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.382 16.5c-.77.833.192 2.5 1.732 2.5z" />
                                    </svg>
                                    <div>
                                        <p className="text-xs font-medium text-amber-800">Important</p>
                                        <p className="text-xs text-amber-700 mt-0.5">
                                            Double-check your Student ID. Incorrect entries may result in lost credits.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="p-6 pt-0 flex gap-3">
                            <button
                                onClick={closeRechargeModal}
                                className="flex-1 px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={proceedPayment}
                                className="flex-1 px-4 py-2 text-sm font-medium text-white bg-churchill hover:bg-churchill-dark rounded-lg transition-colors"
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
                    className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 p-4"
                    onClick={(e) => handleModalClick(e, closeVideoModal)}
                >
                    <div className="bg-white rounded-2xl max-w-lg w-full shadow-xl">
                        <div className="p-6 border-b border-gray-100">
                            <h3 className="text-lg font-medium text-gray-900">How to Print Guide</h3>
                            <p className="text-sm text-gray-600 mt-1">Learn how to use the printing system</p>
                        </div>

                        <div className="p-6">
                            <div className="bg-gray-50 rounded-lg p-8 text-center">
                                <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center mx-auto mb-3">
                                    <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <p className="text-sm text-gray-600">Video guide will be available here</p>
                            </div>
                        </div>

                        <div className="p-6 pt-0">
                            <button
                                onClick={closeVideoModal}
                                className="w-full px-4 py-2 text-sm font-medium text-white bg-churchill hover:bg-churchill-dark rounded-lg transition-colors"
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
                    className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 p-4"
                    onClick={(e) => handleModalClick(e, closeBalanceModal)}
                >
                    <div className="bg-white rounded-2xl max-w-md w-full shadow-xl">
                        <div className="p-6 border-b border-gray-100">
                            <h3 className="text-lg font-medium text-gray-900">Balance & Usage</h3>
                            <p className="text-sm text-gray-600 mt-1">View your account details</p>
                        </div>

                        <div className="p-6">
                            <div className="bg-gray-50 rounded-lg p-6 text-center">
                                <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center mx-auto mb-3">
                                    <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                    </svg>
                                </div>
                                <p className="text-sm text-gray-600">Balance information will appear here</p>
                            </div>
                        </div>

                        <div className="p-6 pt-0">
                            <button
                                onClick={closeBalanceModal}
                                className="w-full px-4 py-2 text-sm font-medium text-white bg-churchill hover:bg-churchill-dark rounded-lg transition-colors"
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