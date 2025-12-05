/** @jsxImportSource react */
"use client";

import React, { useMemo, useState } from "react";
import Image from "next/image";
import ContainerLayout from "@/layouts/container-layout";
import { resolveFileLink } from "@/graphql/graphql";
import { type GalleryQuery } from "@/graphql/generated/graphql";
import { ChevronLeft, ChevronRight, Cross, X } from "lucide-react";

type GalleryImages = NonNullable<GalleryQuery["image_gallery"]>["images"];

interface GallerySectionProps {
  images?: GalleryImages | null;
}

const GallerySection: React.FC<GallerySectionProps> = ({ images }) => {
  const files = useMemo(
    () =>
      (images ?? [])
        .map((img) => img?.directus_files_id)
        .filter((file) => Boolean(file)),
    [images]
  );
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  if (!files.length) return null;

  return (
    <ContainerLayout className="space-y-6">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {files.map((file, idx) => {
          if (!file) return;

          const src = resolveFileLink({
            id: file.id,
            filename_download: file.filename_download ?? "",
          });
          return (
            <button
              key={`${file.id}-${idx}`}
              className="relative aspect-square overflow-hidden rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-orange"
              onClick={() => setActiveIndex(idx)}
            >
              <Image
                src={src}
                alt={file.filename_download ?? "Gallery image"}
                fill
                quality={50}
                className="object-cover"
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                placeholder="blur"
                blurDataURL={src}
              />
            </button>
          );
        })}
      </div>

      {activeIndex !== null && files[activeIndex] && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          onClick={() => setActiveIndex(null)}
        >
          <button
            aria-label="Close"
            className="absolute top-4 right-4 text-white text-2xl"
            onClick={() => setActiveIndex(null)}
          >
            <X />
          </button>
          <button
            aria-label="Previous"
            className="absolute left-4 text-white text-2xl"
            onClick={(e) => {
              e.stopPropagation();
              setActiveIndex((prev) =>
                prev === null ? null : (prev - 1 + files.length) % files.length
              );
            }}
          >
            <ChevronLeft />
          </button>
          <button
            aria-label="Next"
            className="absolute right-4 text-white text-2xl"
            onClick={(e) => {
              e.stopPropagation();
              setActiveIndex((prev) =>
                prev === null ? null : (prev + 1) % files.length
              );
            }}
          >
            <ChevronRight />
          </button>
          <div className="relative w-full max-w-4xl aspect-video">
            <Image
              src={resolveFileLink({
                id: files[activeIndex].id,
                filename_download: files[activeIndex].filename_download ?? "",
              })}
              alt={files[activeIndex].filename_download ?? "Gallery image"}
              fill
              className="object-contain"
              sizes="100vw"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </ContainerLayout>
  );
};

export default GallerySection;
