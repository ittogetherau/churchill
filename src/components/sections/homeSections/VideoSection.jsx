import React from "react";

const videoFiles = [
    "cihe-vid-one.mp4",
    "cihe-vid-two.mp4",
    "cihne-vid-three.mp4",
    "cihne-vid-four.mp4",
];

const VideoSection = () => {
    return (
        <div className="container mx-auto px-0 md:px-0 lg:px-20">
            <h2 className="text-3xl font-bold mb-12 text-center">Explore Churchill Institute of Higher Education</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
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
        </div>
    );
};

export default VideoSection;