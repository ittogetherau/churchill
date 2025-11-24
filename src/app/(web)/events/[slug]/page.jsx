import { IndivisualEventsPage } from "@/components";

const page = ({ params }) => {
  const { slug } = params;
  return (
    <>
      <IndivisualEventsPage slug={slug} />
    </>
  );
};

export default page;
