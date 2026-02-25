import { PatternBannerCard } from "@/components/cards";
import GallerySection from "@/components/sections/aboutUsSections/gallery-section";
import { GalleryDocument } from "@/graphql/generated/graphql";
import { runQuery } from "@/graphql/graphql";
import SpacingLayout from "@/layouts/spacing-layout";

const GalleryPage = async () => {
  const data = await runQuery(GalleryDocument);
  const images = data.image_gallery?.images;

  return (
    <SpacingLayout>
      <PatternBannerCard title="Gallery" />
      <div className="lg:-mt-8">
        <GallerySection images={images} />
      </div>
    </SpacingLayout>
  );
};

export default GalleryPage;
