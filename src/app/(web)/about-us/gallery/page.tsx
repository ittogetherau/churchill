import GallerySection from "@/components/sections/aboutUsSections/GallerySection";
import { GalleryDocument } from "@/graphql/generated/graphql";
import { runQuery } from "@/graphql/graphql";
import SpacingLayout from "@/layouts/spacing-layout";

const GalleryPage = async () => {
  const data = await runQuery(GalleryDocument);
  const images = data.image_gallery?.images;

  return (
    <SpacingLayout>
      <GallerySection images={images} />
    </SpacingLayout>
  );
};

export default GalleryPage;
