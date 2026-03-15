"use client";
import React, { useEffect, useState } from "react";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { createPortal } from "react-dom";

const SearchComponent = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      const script = document.createElement("script");
      script.async = true;
      script.src = "https://cse.google.com/cse.js?cx=820c819b7996d4c87";
      document.body.appendChild(script);

      return () => {
        if (document.body.contains(script)) {
          document.body.removeChild(script);
        }
      };
    }
  }, [open]);

  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        className="hover:text-[#eb9320]"
        onClick={() => setOpen(true)}
      >
        <Search className="h-4 w-4" />
      </Button>
      {open &&
        createPortal(
          <div
            className="fixed inset-0 z-50 bg-black/75 flex items-center justify-center"
            onClick={() => setOpen(false)}
          >
            <div
              className="w-[80%] lg:w-[50%]"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="gcse-search"></div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
};

export default SearchComponent;
