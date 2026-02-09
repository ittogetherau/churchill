"use client";

import { useRef, useState } from "react";

type ClickToPlayVideoProps = {
  src: string;
  className?: string;
};

export default function ClickToPlayVideo({ src, className }: ClickToPlayVideoProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={className}>
      <div className="relative h-full w-full">
        <video
          ref={videoRef}
          src={isLoaded ? src : undefined}
          controls={isLoaded}
          muted
          loop
          playsInline
          preload="none"
          className="h-full w-full object-cover"
        />

        {!isLoaded ? (
          <button
            type="button"
            onClick={() => {
              const el = videoRef.current;
              if (el && !isLoaded) {
                el.src = src;
                el.load();
                void el.play();
              }
              setIsLoaded(true);
            }}
            className="absolute inset-0 grid place-items-center bg-black/40 text-white transition hover:bg-black/55"
            aria-label="Play video"
          >
            <span className="grid h-14 w-14 place-items-center rounded-full bg-white/20 backdrop-blur">
              <svg
                viewBox="0 0 24 24"
                width="28"
                height="28"
                aria-hidden="true"
              >
                <path d="M8 5v14l11-7z" fill="currentColor" />
              </svg>
            </span>
          </button>
        ) : null}
      </div>
    </div>
  );
}
