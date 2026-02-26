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
      //
      // About Us Fallback
      //
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
      //
      // old Courses fallback
      //
      {
        source: "/courses",
        destination: "/course/",
        permanent: true,
      },
      {
        source: "/courses/",
        destination: "/course/",
        permanent: true,
      },
      {
        source: "/courses/major-in-accounting",
        destination: "/course/bachelor-of-business/major-in-accounting",
        permanent: true,
      },
      {
        source: "/courses/major-in-accounting/",
        destination: "/course/bachelor-of-business/major-in-accounting",
        permanent: true,
      },
      {
        source: "/courses/major-in-management",
        destination: "/course/bachelor-of-business/major-in-management",
        permanent: true,
      },
      {
        source: "/courses/major-in-management/",
        destination: "/course/bachelor-of-business/major-in-management",
        permanent: true,
      },
      {
        source: "/courses/major-in-hospitality",
        destination: "/course/bachelor-of-business/major-in-hospitality",
        permanent: true,
      },
      {
        source: "/courses/major-in-hospitality/",
        destination: "/course/bachelor-of-business/major-in-hospitality",
        permanent: true,
      },
      {
        source: "/courses/major-in-information-systems",
        destination:
          "/course/bachelor-of-business/major-in-information-systems",
        permanent: true,
      },
      {
        source: "/courses/major-in-information-systems/",
        destination:
          "/course/bachelor-of-business/major-in-information-systems",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
