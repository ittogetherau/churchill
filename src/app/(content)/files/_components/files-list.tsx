"use client";

import HeadingText from "@/components/ui/heading-text";
import Link from "next/link";
import { useMemo, useState } from "react";
import { Download, FileText, Search } from "lucide-react";

type FileListItem = {
  slug?: string | null;
  title?: string | null;
  file?: { filename_download?: string | null } | null;
};

interface FilesListProps {
  items: FileListItem[];
}

const toLower = (value?: string | null) => value?.toLowerCase() ?? "";

const FilesList = ({ items }: FilesListProps) => {
  const [query, setQuery] = useState("");

  const filteredItems = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    if (!normalizedQuery) return items;

    return items.filter((item) => {
      const title = toLower(item.title);
      const filename = toLower(item.file?.filename_download);

      return (
        title.includes(normalizedQuery) || filename.includes(normalizedQuery)
      );
    });
  }, [items, query]);

  const resultCount = filteredItems.length;
  const totalCount = items.length;

  return (
    <>
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <HeadingText>Files</HeadingText>

        <label className="flex w-full max-w-md items-center gap-2 rounded-md border border-gray-200 px-3 py-2 focus-within:border-gray-300 focus-within:ring-1 focus-within:ring-gray-300">
          <Search className="h-4 w-4 shrink-0 text-gray-500" />
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search by name or filename"
            className="w-full bg-transparent text-sm text-gray-900 outline-none placeholder:text-gray-400"
          />
        </label>
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {filteredItems.length > 0
          ? filteredItems.map((el, index) => {
              const key = el.slug ?? `${el.title ?? "file"}-${index}`;

              return (
                <Link
                  key={key}
                  href={`/f/${el.slug}`}
                  className="group flex items-center gap-3 rounded-lg border-2 border-gray-200 p-4 hover:border-gray-300"
                >
                  <div className="bg-alt-background flex h-10 w-10 shrink-0 items-center justify-center rounded-full">
                    <FileText className="h-5 w-5 text-[#E59623]" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="truncate font-medium text-gray-900">
                      {el.title}
                    </p>
                    {el.file?.filename_download && (
                      <p className="truncate text-sm text-gray-500">
                        {el.file.filename_download}
                      </p>
                    )}
                  </div>
                  <Download className="h-4 w-4 shrink-0 text-gray-400 group-hover:text-[#E59623]" />
                </Link>
              );
            })
          : "No items matches your query!"}
      </div>

      <span className="text-muted-foreground mt-4 block text-sm">
        {resultCount} of {totalCount} item{totalCount === 1 ? "" : "s"}
      </span>
    </>
  );
};

export default FilesList;
