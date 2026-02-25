"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

const ClientRedirect = ({ url }: { url: string }) => {
  const { replace } = useRouter();

  useEffect(() => {
    replace(url);
  }, [replace, url]);

  return null;
};
export default ClientRedirect;
