import axiosBaseURL from "../../../baseUrl";

export const FetchBlogData = (slug) => {
  const data = axiosBaseURL.get(
    `/api/v1/edu_hub/blog${slug ? `/${slug}` : ""}`
  );
  return data;
};

export const FetchUpcomingKeyEventsData = (slug) => {
  const data = axiosBaseURL.get(
    `/api/v1/edu_hub/upcoming-key-events${slug ? `/${slug}` : ""}`
  );
  return data;
};

export const FetchUpcomingKeyDate = () => {
  const data = axiosBaseURL.get(`/api/v1/edu_hub/upcoming-key-date`);
  return data;
};

export const FetchFaqData = () => {
  const data = axiosBaseURL.get(`/api/v1/cms/faq`);
  return data;
};

export const FetchCourseData = (slug) => {
  const data = axiosBaseURL.get(
    `/api/v1/edu_hub/courses${slug ? `/${slug}` : ""}`
  );
  return data;
};


export const FetchAgents = () => {
  const data = axiosBaseURL.get("/api/v1/cms/get-active-agents");
  return data;
};

export const AgentUserData = (slug) => {
  const data = axiosBaseURL.get(
    `/api/v1/cms/get-active-agents`
  );
  return data;
};

