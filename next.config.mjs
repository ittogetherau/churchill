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
    qualities: [25, 50, 75],
  },
  async redirects() {
    return [
      {
        source: "/about-us/teams/professor-ashish-malik",
        destination: "/about-us/teams/ashish-malik",
        permanent: true,
      },
      {
        source: "/about-us/teams/professor-ashish-malik/",
        destination: "/about-us/teams/ashish-malik",
        permanent: true,
      },
      {
        source: "/about-us/teams/assoc-prof-maria-varua",
        destination: "/about-us/teams/maria-varua",
        permanent: true,
      },
      {
        source: "/about-us/teams/assoc-prof-maria-varua/",
        destination: "/about-us/teams/maria-varua",
        permanent: true,
      },
      {
        source: "/about-us/teams/assoc-prof-ravi-seethamraju",
        destination: "/about-us/teams/ravi-seethamraju",
        permanent: true,
      },
      {
        source: "/about-us/teams/assoc-prof-ravi-seethamraju/",
        destination: "/about-us/teams/ravi-seethamraju",
        permanent: true,
      },
      {
        source: "/about-us/teams/associate-prof-brendan-boyle",
        destination: "/about-us/teams/brendan-boyle",
        permanent: true,
      },
      {
        source: "/about-us/teams/associate-prof-brendan-boyle/",
        destination: "/about-us/teams/brendan-boyle",
        permanent: true,
      },
      {
        source: "/about-us/teams",
        destination: "/about-us/governance-and-leadership",
        permanent: true,
      },
      {
        source: "/about-us/teams/",
        destination: "/about-us/governance-and-leadership/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
