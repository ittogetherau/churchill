import { resolveFileLink } from "@/graphql/graphql";
import { type HomepageQuery } from "@/graphql/generated/graphql";
import ContainerLayout from "@/layouts/container-layout";

type ExploreContent = NonNullable<HomepageQuery["explore_churchill"]>;

const VideoSection = ({ data }: { data: ExploreContent | null }) => {
  if (!data) return null;

  const videos =
    data.videos
      ?.map((item) => item?.directus_files_id)
      .filter((file) => Boolean(file)) ?? [];

  if (!videos.length) return null;

  return (
    <ContainerLayout>
      <h2 className="text-3xl font-bold mb-12 text-center">
        {data.section_title}
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {videos.map((file, index) => {
          const videoUrl = resolveFileLink(file);

          return (
            <div
              key={`${file?.id}-${index}`}
              className="aspect-[9/16] overflow-hidden rounded-lg"
            >
              <video
                src={`${videoUrl}#t=0.001`}
                controls
                muted
                loop
                preload="metadata"
                className="w-full h-full object-cover"
              />
            </div>
          );
        })}
      </div>
    </ContainerLayout>
  );
};

export default VideoSection;
