// app/sign-in/page.tsx
"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (
      email === "admin@churchill.nsw.edu.au" &&
      password === "Churchill@2025#"
    ) {
      document.cookie =
        "auth-token=authenticated; path=/; max-age=" + 60 * 60 * 24 * 7;
      toast.success("Logged in successfully");
      router.push("/");
      router.refresh();
    } else {
      toast.error("Invalid credentials");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <div className="w-full max-w-md space-y-8 rounded-lg bg-white p-8 shadow-lg">
        <div className="flex justify-center">
          <Image
            src="/assets/logo.svg"
            alt="Logo"
            width={120}
            height={120}
            priority
          />
        </div>

        <h2 className="text-center text-2xl font-bold text-gray-900">Login</h2>

        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div className="space-y-4">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="focus:border-primary-orange w-full rounded-lg border border-gray-300 px-4 py-3 ring-0 outline-none focus:ring-2"
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="focus:border-primary-orange w-full rounded-lg border border-gray-300 px-4 py-3 ring-0 outline-none focus:ring-2"
              required
            />
          </div>

          <Button type="submit" className="w-full">
            Sign In
          </Button>
        </form>
      </div>
    </div>
  );
}
