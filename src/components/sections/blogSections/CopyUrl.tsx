"use client";

import { ReactNode } from "react";
import { toast } from "sonner";

interface CopyTextProps {
  text: string;
  children: ReactNode;
}

export default function CopyUrl({ text, children }: CopyTextProps) {
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      toast.success("Copied text");
    } catch (err) {
      toast.error("Failed to copy");
    }
  };

  return (
    <span onClick={handleCopy} style={{ cursor: "pointer" }}>
      {children}
    </span>
  );
}
