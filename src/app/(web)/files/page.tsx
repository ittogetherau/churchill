import HeadingText from "@/components/ui/heading-text";
import { fetchGraphQL, resolveFileLink } from "@/graphql/graphql";
import ContainerLayout from "@/layouts/container-layout";
import { File, Download } from "lucide-react";
import Link from "next/link";
import React from "react";

const query = `
  query { 
    files {
      slug
      files {
        directus_files_id { 
          id 
          filename_download
          filesize
          type
          modified_on
        }
      }
    }
  }
`;

interface FileItem {
  slug: string;
  files: {
    directus_files_id: {
      id: string;
      filename_download: string;
      filesize: number;
      type: string;
      modified_on: string;
    };
  }[];
}

const formatFileSize = (bytes: number): string => {
  if (bytes === 0) return "0 B";
  const k = 1024;
  const sizes = ["B", "KB", "MB", "GB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return `${(bytes / Math.pow(k, i)).toFixed(1)} ${sizes[i]}`;
};

const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
};

const getFileTypeColor = (type: string): string => {
  if (type.includes("image")) return "bg-blue-100 text-blue-700";
  if (type.includes("pdf")) return "bg-red-100 text-red-700";
  if (type.includes("video")) return "bg-purple-100 text-purple-700";
  if (type.includes("audio")) return "bg-pink-100 text-pink-700";
  if (type.includes("zip") || type.includes("compressed"))
    return "bg-orange-100 text-orange-700";
  return "bg-gray-100 text-gray-700";
};

const Page = async () => {
  const response = await fetchGraphQL<{ files: FileItem[] }>(query);
  const data: FileItem[] = response?.files ?? [];

  if (!data || data.length === 0) return null;

  return (
    <ContainerLayout className="mt-8">
      <div className="flex items-center justify-between mb-6">
        <HeadingText>Files</HeadingText>

        <span className="text-sm text-gray-500">
          {data.reduce((acc, el) => acc + el.files.length, 0)} files
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.map((el) =>
          el.files.map((file) => {
            const href = resolveFileLink(file.directus_files_id);
            const fileData = file.directus_files_id;

            return (
              <Link
                href={href}
                key={fileData.id}
                className="group relative flex items-start p-4 border border-alt-background rounded-lg hover:border-gray-300 transition-all bg-white"
                target="_blank"
              >
                <div
                  className={`flex-shrink-0 w-12 h-12 rounded-lg ${getFileTypeColor(
                    fileData.type
                  )} flex items-center justify-center`}
                >
                  <File size={24} />
                </div>

                <div className="ml-4 flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate mb-1">
                    {fileData.filename_download}
                  </p>
                  <div className="flex items-center gap-3 text-xs text-gray-500">
                    <span>{formatFileSize(fileData.filesize)}</span>
                    <span>•</span>
                    <span>{formatDate(fileData.modified_on)}</span>
                  </div>
                </div>

                <Download
                  size={18}
                  className="flex-shrink-0 text-gray-400 group-hover:text-gray-600 transition-colors"
                />
              </Link>
            );
          })
        )}
      </div>
    </ContainerLayout>
  );
};

export default Page;
