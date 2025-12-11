"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export default function LogoutButton() {
  const router = useRouter();

  const handleLogout = () => {
    document.cookie = "auth-token=; path=/; max-age=0";
    toast.success("Logged out successfully");
    router.push("/sign-in");
    router.refresh();
  };

  return <Button onClick={handleLogout}>Logout</Button>;
}
