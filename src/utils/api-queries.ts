import axiosBaseURL from "../../baseUrl";

export const FetchUpcomingKeyEventsData = (slug?: string) => {
  const data = axiosBaseURL.get(
    `/api/v1/edu_hub/upcoming-key-events${slug ? `/${slug}` : ""}`,
  );
  return data;
};
