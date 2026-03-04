import React, { type ReactNode } from "react";
import { cn } from "@/lib/utils";

export interface Props {
  size?: "sm" | "md" | "base";
  isCenter?: boolean;
  pad?: boolean;
  className?: string;
  children: ReactNode;
}

const ContainerLayout = ({
  size = "base",
  isCenter = true,
  children,
  pad = true,
  className,
}: Props) => {
  const sizeClass =
    size === "sm"
      ? "container-sm"
      : size === "md"
        ? "container-md"
        : "container";

  return (
    <div
      className={cn(sizeClass, isCenter && "mx-auto", pad && "px-4", className)}
    >
      {children}
    </div>
  );
};

export default ContainerLayout;
