"use client";

import { Toaster } from "@/components/ui/sonner";
import { ReactNode } from "react";

interface CopyUrlProps {
  url?: string;
  message?: string;
  children: ReactNode;
}

const CopyUrl: React.FC<CopyUrlProps> = ({ url, message, children }) => {
  const handleCopy = async (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    const textToCopy = url || window.location.href;

    await navigator.clipboard.writeText(textToCopy);

    Toaster(message || "Copied...");
  };

  return (
    <div onClick={handleCopy} className="cursor-pointer">
      {children}
    </div>
  );
};

export default CopyUrl;

// "use client";

// import { toast } from "sonner";

// function CopyUrl({ children }) {

//   const handleCopy = async (e) => {
//     e.preventDefault();

//     await navigator.clipboard.writeText(window.location.href);

//     toast("Copied...");
//   };

//   return (
//     <div onClick={handleCopy} className="cursor-pointer">
//       {children}
//     </div>
//   );
// }

// export default CopyUrl;
