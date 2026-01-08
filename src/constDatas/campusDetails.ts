export interface ICampusDetails {
  id: string;
  badge: string;
  title: string;
  summary: string;
  address: string;
  website: string;
  phone: string;
  email: string;
  mapUrl: string;
  ctaLabel: string;
  image: string;
}

const campusDetails: ICampusDetails[] = [
  {
    id: "parramatta",
    badge: "New South Wales",
    title: "Churchill Parramatta Campus",
    summary:
      "Our Parramatta campus sits in the heart of Western Sydney, moments from Parramatta Station. It features modern classrooms, a quiet library, collaborative lounges and on-campus student services so you are always close to the support you need.",
    address: "Level 1 16-18 Wentworth Street, Parramatta, NSW 2150, Australia",
    website: "https://www.churchill.edu.au",
    phone: "(02) 8856 2997",
    email: "info@churchill.edu.au",
    mapUrl: "https://maps.app.goo.gl/8atQGN3b8tx2uPAz6",
    ctaLabel: "Explore Parramatta Campus",
    image: "/assets/cihe-paramatta-campus.jpg",
  },
  {
    id: "melbourne",
    badge: "Victoria",
    title: "Churchill Melbourne Campus",
    summary:
      "Located on Queen Street in Melbourne’s CBD, this campus places you within a thriving business precinct. Bright teaching spaces, breakout zones and access to our academic and wellbeing teams make it ideal for students who prefer a city setting.",
    address: "Level 8, 85 Queen Street, Melbourne, VIC 3000, Australia",
    website: "https://www.churchill.edu.au",
    phone: "(03) 8652 9393",
    email: "info@churchill.edu.au",
    mapUrl:
      "https://maps.google.com/?q=Level+8,+85+Queen+Street,+Melbourne+VIC+3000",
    ctaLabel: "Explore Melbourne Campus",
    image: "/assets/cihe-melbourne-campus.jpg",
  },
];

export default campusDetails;
