"use client";
import { Button } from "@/components/ui/button";
import HeadingText from "@/components/ui/heading-text";
import ContainerLayout from "@/layouts/container-layout";
import Link from "next/link";

const Error = () => {
  return (
    <ContainerLayout className="my-32">
      <div className="mx-auto max-w-md text-center">
        <div className="mb-8 inline-flex h-20 w-20 items-center justify-center rounded-full bg-red-50">
          <svg
            className="h-10 w-10 text-red-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>

        <HeadingText>An error occurred</HeadingText>
        <p className="mt-4 text-gray-600">
          Something went wrong while processing your request.
        </p>

        <Link className="mt-8 inline-block" href="/">
          <Button size="lg">Return home</Button>
        </Link>
      </div>
    </ContainerLayout>
  );
};

export default Error;
