// "use client";
// import {

//   Spiner,
//   TopBannerCard,
// } from "@/components";
// import React, { useEffect, useState } from "react";
// import { navItems } from "@/constDatas/navItems";

// const ReportFormSection = ({ slug }) => {
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     const delay = setTimeout(() => {
//       setIsLoading(false);
//     }, 500);

//     return () => clearTimeout(delay);
//   }, [isLoading]);

//   const [data, setData] = useState({});

//   useEffect(() => {
//     const info = navItems[3]?.Catagories?.find((item) => item?.slug === slug);
//     setData(info);
//   }, [slug]);

//   return (
//     <div>
//       {isLoading ? (
//         <div className="">
//           <Spiner />
//         </div>
//       ) : (
//         <>
//           <div className="flex flex-col gap-[32px] lg:gap-[64px]">
//             <div>
//               <TopBannerCard
//                 image={`${data?.image}`}
//                 titleSpan={"Refund"}
//                 title={"Form"}
//                 subTitle={`Student Hub > Request Form > ${data?.menuTitle}`}
//               />
//             </div>

//             <div className="container mx-auto px-5">
//               <div className="flex flex-col gap-[44px]">
//                 <div className="text-center">
//                   <h2 className="font-bold text-[36px] text-[#2C2B4B]">
//                     {data?.menuTitle}
//                   </h2>
//                 </div>
//                 <div className="bg-[#E9E9E9] px-[44px] py-[54px] rounded-md">
//                   <div>
//                     {slug === "refund-request" && <RefundRequestForm />}
//                   </div>
//                   <div>
//                     {slug === "apply-for-special-consideration" && (
//                       <ApplyConsiderationForm />
//                     )}
//                   </div>
//                   <div>{slug === "course-change" && <CourseChangeForm />}</div>
//                   <div>
//                     {slug === "apply-for-payment-plan" && <RefundRequestForm />}
//                   </div>
//                   <div>
//                     {slug === "sexual-harrasment-report" && (
//                       <SexualHarrasmentForm />
//                     )}
//                   </div>
//                   <div>
//                     {slug === "credit-transfer" && <CreditTransferForm />}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default ReportFormSection;

import React from "react";

const ReportFormSection = () => {
  return null;
};

export default ReportFormSection;
