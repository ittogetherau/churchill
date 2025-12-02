import videoFiles from "@/constDatas/videoFiles";
import ContainerLayout from "@/layouts/container-layout";
import React from "react";

const VideoSection = () => {
  return (
    <ContainerLayout>
      <h2 className="text-3xl font-bold mb-12 text-center">
        Explore Churchill Institute of Higher Education
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {videoFiles.map((file, index) => (
          <div key={index} className="aspect-[9/16] overflow-hidden rounded-lg">
            <video
              src={`/assets/videos/${file}#t=0.001`}
              controls
              muted
              loop
              preload="metadata"
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </ContainerLayout>
  );
};

export default VideoSection;
