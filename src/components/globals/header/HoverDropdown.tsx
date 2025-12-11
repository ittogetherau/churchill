"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronUp } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";

const HoverDropdown = ({
  title,
  id,
  children,
}: {
  title: string;
  id?: string;
  children: React.ReactNode;
}) => {
  const [open, setOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const dropdownId =
    id ?? `dropdown-${title.toLowerCase().replace(/\s+/g, "-")}`;
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setOpen(false), 100);
  };

  if (!mounted) {
    return (
      <div className="flex cursor-pointer items-center gap-1 text-xs font-bold">
        <span>{title}</span>
        <ChevronUp size={12} className="transition-all" />
      </div>
    );
  }

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild id={dropdownId}>
        <div
          className="flex cursor-pointer items-center gap-1 text-xs font-bold"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          tabIndex={0}
        >
          <span>{title}</span>
          <ChevronUp
            size={12}
            className={`${open ? "rotate-180" : ""} transition-all`}
          />
        </div>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        id={`${dropdownId}-content`}
        className="border-t-primary-orange mt-[18px] w-screen rounded-none border-0 border-t-6 outline-none data-[state=closed]:animate-none data-[state=open]:animate-none"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        forceMount
      >
        {children}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default HoverDropdown;
