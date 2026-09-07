const formatDate = (date: string) =>
  new Date(date).toLocaleDateString("en-AU", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

const LastUpdated = ({ date }: { date?: string | null }) => {
  if (!date) return null;

  return (
    <p className="py-4 text-center text-sm text-[#323432]">
      Last updated: {formatDate(date)}
    </p>
  );
};

export default LastUpdated;
