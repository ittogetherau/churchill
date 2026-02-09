import CustomPage from "@/components/globals/custom-page";

const page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  return <CustomPage slug={slug} parent="about-us" />;
};

export default page;
