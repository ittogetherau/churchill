import React from "react";
import { cn } from "@/lib/utils";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const SpacingLayout = ({ children, className, ...props }: Props) => {
  return (
    <div
      {...props}
      className={cn("mb-16 space-y-16 md:mb-22 md:space-y-22", className)}
    >
      {children}
    </div>
  );
};

export default SpacingLayout;
