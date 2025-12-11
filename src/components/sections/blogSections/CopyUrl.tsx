"use client";

import { Toaster } from "@/components/ui/sonner";
import { ReactNode } from "react";
import { toast } from "sonner";

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

    toast(message || "Link copied to clipboard!");
  };

  return (
    <div onClick={handleCopy} className="cursor-pointer">
      {children}
      <Toaster />
    </div>
  );
};

export default CopyUrl;
