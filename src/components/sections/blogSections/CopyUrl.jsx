"use client";
 
import { toast } from "sonner";

function CopyUrl({ children }) {
 
  const handleCopy = async (e) => {
    e.preventDefault();

    await navigator.clipboard.writeText(window.location.href);

    toast("Copied...");
  };

  return (
    <div onClick={handleCopy} className="cursor-pointer">
      {children}
    </div>
  );
}

export default CopyUrl;


