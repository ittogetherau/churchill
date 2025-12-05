/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "i3.ytimg.com" },
      { protocol: "http", hostname: "localhost" },
      { protocol: "https", hostname: "backend.churchill.nsw.edu.au" },
      { protocol: "https", hostname: "cdn-icons-png.flaticon.com" },
      { protocol: "https", hostname: "cms.churchill.edu.au" },
    ],
  },
};

export default nextConfig;
