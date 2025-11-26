"use client";
import PatternBannerCard from "@/components/cards/PatternBannerCard";
import images from "@/constDatas/images";
import clsx from "clsx";
import Image from "next/image";
import { useState } from "react";

const GalleryPage = () => {
  const step = 9;
  const [visibleImages, setVisibleImages] = useState(step);
  const [loadedImages, setLoadedImages] = useState({});
  const [isFullScreenShown, setIsFullScreenShown] = useState(false);
  const [fullScreenImage, setFullScreenImage] = useState("");

  const ImagesToShow = imagesslice(0, visibleImages);

  const handleImageLoad = (index) => {
    setLoadedImages((prev) => ({ ...prev, [index]: true }));
  };

  return (
    <>
      <PatternBannerCard title="Gallery" />

      <div className="container mx-auto px-2 md:px-5 lg:px-20 flex flex-col gap-12 pb-12">
        <div className="grid grid-cols-3 gap-2 md:gap-4">
          {ImagesToShow.map((item, index) => (
            <div
              key={index}
              className="relative aspect-[2/2.5] w-full overflow-hidden bg-gray-200 rounded-md"
              onClick={() => {
                setIsFullScreenShown(true);
                setFullScreenImage(`/assets/gallery/${item}`);
              }}
            >
              {!loadedImages[index] && (
                <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 z-10" />
              )}
              <Image
                src={`/assets/gallery/${item}`}
                alt={`Gallery Image ${index}`}
                fill
                sizes="(max-width: 640px) 33vw, (max-width: 1024px) 33vw, 33vw"
                onLoad={() => handleImageLoad(index)}
                className={clsx(
                  "object-cover transition-opacity duration-500",
                  loadedImages[index] ? "opacity-100" : "opacity-0"
                )}
              />
            </div>
          ))}
        </div>

        {visibleImages < images.length && (
          <div className="flex justify-center">
            <button
              className="bg-primary-orange hover:bg-orange-600 px-6 py-3 rounded-md text-white font-bold transition"
              onClick={() => setVisibleImages((prev) => prev + step)}
            >
              Load More
            </button>
          </div>
        )}
      </div>

      {isFullScreenShown && (
        <div className="fixed top-0 left-0 w-screen h-screen bg-black/90 z-[5000] grid place-items-center">
          <div
            className="absolute top-8 right-12 cursor-pointer text-white text-2xl"
            onClick={() => setIsFullScreenShown(false)}
          >
            ×
          </div>
          <div className="w-[90%] md:w-[60%] min-h-[50vh] grid place-items-center">
            {fullScreenImage ? (
              <Image
                src={fullScreenImage}
                alt="Full view"
                width={1200}
                height={800}
                className="w-full h-auto object-contain"
                unoptimized
                onError={() =>
                  console.error("Image failed to load:", fullScreenImage)
                }
              />
            ) : (
              <p className="text-white">Loading image...</p>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default GalleryPage;
