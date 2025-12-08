"use client";

import { redirect } from "next/navigation";

const FileRedirect = ({ url }: { url: string }) => {
  redirect(url);
  return null;
};
export default FileRedirect;
