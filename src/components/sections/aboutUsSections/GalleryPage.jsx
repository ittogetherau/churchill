"use client";

import { PatternBannerCard } from "@/components";
import { useState } from "react";
import Image from "next/image";
import clsx from "clsx";

const images = [
  "0C1A3387.webp",
  "1H7A0456.webp",
  "1H7A0816.webp",
  "1H7A0852.webp",
  "1H7A0853.webp",
  "0C1A2360-159.webp",
  "0C1A2768-487.webp",
  "0C1A2794-507.webp",
  "0C1A2853-552.webp",
  "0C1A2862-559.webp",
  "0C1A2784-499.webp",
  "0C1A2828-533.webp",
  "0C1A2907-21.webp",
  "0C1A2993-79.webp",
  "0C1A3390-278.webp",
  "0C1A3568-407.webp",
  "_DSC6831.webp",
  "_DSC6912.webp",
  "_DSC6924.webp",
  "_DSC6946.webp",
  "0C1A3392-279.webp",
  "0C1A3413.webp",
  "_DSC6988.webp",
  "0C1A3206 (1).webp",
  "0C1A3645.webp",
  "0C1A3663.webp",
  "0C1A3672.webp",
  "0C1A3312.webp",
  "0C1A3384.webp",
  "1H7A1170.webp",
  "1H7A1182.webp",
  "1H7A1216.webp",
  "1H7A1217.webp",
  "1H7A1240.webp",
  "1H7A1242.webp",
  "1H7A7507.webp",
  "1H7A0993.webp",
  "1H7A0994.webp",
  "1H7A0995.webp",
  "1H7A0997.webp",
  "1H7A0998.webp",
  "1H7A0999.webp",
  "1H7A1035.webp",
  "1H7A1041.webp",
  "1H7A1213.webp",
  "1H7A0665.webp",
  "1H7A0670.webp",
  "1H7A0693.webp",
  "1H7A0713.webp",
  "1H7A0721.webp",
  "1H7A0769.webp",
  "1H7A0838.webp",
  "1H7A0859.webp",
  "1H7A0990.webp",
  "1H7A0991.webp",
  "Sajan.webp",
  "Sujan.webp",
  "1H7A0518.webp",
  "1H7A0572.webp",
  "1H7A0587.webp",
  "1H7A0599.webp",
  "1H7A0635.webp",
  "1H7A0642.webp",
  "1H7A0643.webp",
  "1H7A0646.webp",
  "1H7A0651.webp",
  "1H7A0692.webp",
  "1H7A0707.webp",
  "1H7A0764.webp",
  "1H7A0042.webp",
  "1H7A0060.webp",
  "1H7A0062.webp",
  "1H7A0065.webp",
  "1H7A0082.webp",
  "1H7A0285.webp",
  "1H7A0334.webp",
  "1H7A0415.webp",
  "1H7A0416.webp",
  "1H7A0434.webp",
  "1H7A0545.webp",
  "1H7A0558.webp",
  "1H7A0627.webp",
  "1H7A0041.webp",
  "1H7A0043.webp",
  "1H7A0044.webp",
  "1H7A0061.webp",
  "1H7A0064.webp",
  "1H7A9972.webp",
  "1H7A9996.webp",
  "1H7A9998.webp",
  "Ram Giri.webp",
  "1H7A0030.webp",
  "1H7A9915.webp",
  "1H7A9933.webp",
  "1H7A9937.webp",
  "1H7A9940.webp",
  "1H7A9960.webp",
  "1H7A9961.webp",
  "1H7A9970.webp",
  "1H7A9975.webp",
  "1H7A9979.webp",
  "1H7A8430.webp",
  "1H7A8439.webp",
  "1H7A9766.webp",
  "1H7A9774.webp",
  "1H7A9831.webp",
  "1H7A9842.webp",
  "1H7A9867.webp",
  "1H7A9874.webp",
  "1H7A9890.webp",
  "1H7A9911.webp",
  "1H7A9962.webp",
  "1H7A8270.webp",
  "1H7A8287.webp",
  "1H7A8293.webp",
  "1H7A8297.webp",
  "1H7A8310.webp",
  "1H7A8394.webp",
  "1H7A8415.webp",
  "1H7A8418.webp",
  "1H7A8480.webp",
  "1H7A9686.webp",
  "1H7A9835.webp",
  "1H7A8155.webp",
  "1H7A8211.webp",
  "1H7A8227.webp",
  "1H7A8249.webp",
  "1H7A825 Behind the Scenes.webp",
  "1H7A8255.webp",
  "1H7A8259.webp",
  "1H7A8261.webp",
  "1H7A8268.webp",
  "1H7A8308.webp",
  "1H7A8408.webp",
  "1H7A7744.webp",
  "1H7A7745.webp",
  "1H7A7768.webp",
  "1H7A7769.webp",
  "1H7A7771.webp",
  "1H7A7991.webp",
  "1H7A8084.webp",
  "1H7A8091.webp",
  "1H7A8163.webp",
  "1H7A8208.webp",
  "1H7A7543.webp",
  "1H7A7598.webp",
  "1H7A7604.webp",
  "1H7A7639.webp",
  "1H7A7656.webp",
  "1H7A7739.webp",
  "1H7A7741.webp",
  "1H7A7742.webp",
  "1H7A7743.webp",
  "1H7A0084.webp",
  "1H7A0441.webp",
  "1H7A0737.webp",
  "1H7A7512.webp",
  "1H7A7532.webp",
  "1H7A7569.webp",
  "1H7A774 | Behind the Scenes.webp",
  "1H7A9651.webp",
  "1H7A9713.webp",
  "0C1A2190-20.webp",
  "0C1A2390-189.webp",
  "0C1A2408-207.webp",
  "1H7A2756.webp",
  "1H7A2760.webp",
  "1H7A2761.webp",
  "1H7A2762.webp",
  "1H7A2766.webp",
  "1H7A2767.webp",
  "1H7A2769.webp",
  "1H7A2770.webp",
  "1H7A2773.webp",
  "1H7A2779.webp",
  "1H7A2782.webp",
  "1H7A2784.webp",
  "1H7A2801.webp",
  "1H7A2842.webp",
  "1H7A2847.webp",
  "1H7A2852.webp",
  "1H7A2913.webp",
  "1H7A2942.webp",
  "1H7A2949.webp",
  "1H7A2956.webp",
  "1H7A2960.webp",
  "1H7A2963.webp",
  "1H7A2970-Pano.webp",
  "1H7A3005.webp",
  "1H7A3053.webp",
  "1H7A3055.webp",
  "1H7A3058.webp",
  "1H7A3099.webp",
  "1H7A3100.webp",
  "1H7A3112.webp",
  "1H7A3113.webp",
  "1H7A3114.webp",
  "1H7A3115.webp",
  "1H7A3116.webp",
  "1H7A3222.webp",
  "1H7A3223.webp",
  "1H7A3224.webp",
  "1H7A3227.webp",
  "1H7A3229.webp",
  "1H7A3232.webp",
  "1H7A3233.webp",
  "1H7A3235.webp",
  "1H7A3237.webp",
  "1H7A3238.webp",
  "1H7A3241.webp",
  "1H7A3242.webp",
  "1H7A3243.webp",
  "1H7A3335.webp",
  "1H7A3336.webp",
  "1H7A3337.webp",
  "1H7A3338.webp",
  "1H7A3339.webp",
  "1H7A3341.webp",
  "1H7A3342.webp",
  "1H7A3352.webp",
  "1H7A3353.webp",
  "1H7A3357.webp",
  "1H7A3359.webp",
  "1H7A3362.webp",
  "1H7A3363.webp",
  "1H7A3364.webp",
  "1H7A3379.webp",
  "1H7A3381.webp",
  "1H7A3406.webp",
  "1H7A3434.webp",
  "1H7A3435.webp",
  "1H7A3480.webp",
  "1H7A3516.webp",
  "1H7A3518.webp",
  "1H7A3519.webp",
  "1H7A3521.webp",
  "1H7A3523.webp",
  "1H7A3524.webp",
  "1H7A3525.webp",
  "1H7A3526.webp",
  "1H7A3529.webp",
  "1H7A3532.webp",
  "1H7A3533.webp",
  "1H7A3539.webp",
  "1H7A3541.webp",
  "1H7A3542.webp",
  "1H7A3543.webp",
  "1H7A3547.webp",
  "1H7A3548.webp",
  "1H7A3549.webp",
  "1H7A3550.webp",
  "1H7A3551.webp",
  "1H7A3554.webp",
  "1H7A3555.webp",
  "1H7A3557.webp",
  "1H7A3558.webp",
  "1H7A3561.webp",
  "1H7A3562.webp",
  "1H7A3563.webp",
  "1H7A3665.webp",
  "1H7A3667.webp",
  "1H7A3681.webp",
  "1H7A3683.webp",
  "1H7A3689.webp",
];

const GalleryPage = () => {
  const step = 9;
  const [visibleImages, setVisibleImages] = useState(step);
  const [loadedImages, setLoadedImages] = useState({});
  const [isFullScreenShown, setIsFullScreenShown] = useState(false);
  const [fullScreenImage, setFullScreenImage] = useState("");

  const ImagesToShow = images.slice(0, visibleImages);

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
                onError={() => console.log("Image failed to load:", fullScreenImage)}
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