export const BASE_STRING = `https://cms.churchill.edu.au`;

export const fetchGraphQL = async (query: string) => {
  try {
    const res = await fetch(`${BASE_STRING}/graphql`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query }),
      next: { revalidate: 60 },
    });
    console.log("Response status:", res.status);
    if (!res.ok) {
      const errorText = await res.text();
      throw new Error(errorText);
    }
    return res.json();
  } catch (error) {
    console.error("Fetch error:", error);
    throw error;
  }
};

export const resolveFileLink = (file?: any) => {
  if (!file) return "";
  if (typeof file === "string") return file;
  return file.id
    ? `${BASE_STRING}/assets/${file.id}${
        file.filename_download ? `/${file.filename_download}` : ""
      }`
    : "";
};
