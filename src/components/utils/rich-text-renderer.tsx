"use client";

import { cn } from "@/lib/utils";
import { stripStyles } from "@/utils/strip-styles";
import { useMemo } from "react";

export interface RichTextRendererProps {
  content?: string | null;
  className?: string;
  richText?: boolean;
  as?: "div" | "span";
}

export default function RichTextRenderer({
  content,
  className,
  richText = true,
  as: Component = "div",
}: RichTextRendererProps) {
  const html = useMemo(() => stripStyles(content ?? ""), [content]);
  const combinedClassName = richText
    ? cn("rich_text_container", className)
    : className;

  return (
    <Component
      className={combinedClassName}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
