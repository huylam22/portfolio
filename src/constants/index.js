import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  realEstate,
  java,
  sql,
  python,
  database,
  developer,
  ux,
  facebook,
  growth,
  linkedin,
  github,
  portfolio,
  qualistery,
  RMIT,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Business Developer/Analyst",
    icon: growth,
  },
  {
    title: "Frontend Developer",
    icon: ux,
  },

  {
    title: "Backend Developer",
    icon: database,
  },
  {
    title: "A Curious Person",
    icon: developer,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "java",
    icon: java,
  },
  {
    name: "SQL",
    icon: sql,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },

  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },

  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Business Developer",
    company_name: "Qualistery",
    icon: qualistery,
    iconBg: "#383E56",
    date: "April 2022 - Sep 2022",
    points: [
      "Email Marketing: Design email templates in HTML and CSS with call-to-action contents to increase reply and open email rates by 15% which advanced the engagement and conversion rates of prospects",
      "Strategically Identified High-Value Markets: Executed deep market research, pinpointing prime segments within the pharmaceuticals industry to elevate lead quality. Leveraged CRM insights to initiate cold calls, craft personalized emails, and establish LinkedIn connections and driving increased engagement.",
      "Client Onboarding: Spearheaded negotiations, delivered presentations, and clinched pivotal contracts on GMP and GXP outsourcing services.",
    ],
  },
  {
    title: "HR Associate",
    company_name: "RMIT Finance Club",
    icon: RMIT,
    iconBg: "#383E56",
    date: "Jul 2019 - Oct 2019",
    points: [
      "Interview, recruit new members to the club. Actively engage and communicate with new members.",
      "Task allocation within HR department and collaboration with other departments to optimize club works.",
      "Communicate & negotiate with potential sponsors - clients to fund for club operations, organize events.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Real Estate Listing",
    description:
      "Web-based platform that allows users to search, list, and manage real-estate from various agents, providing a convenient and efficient solution for home finding needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "orange-text-gradient",
      },
      {
        name: "spring3.0",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: realEstate,
    source_code_link: "https://github.com/huylam22/real-estate-client",
    url: "https://master.dct2mhtymjoyx.amplifyapp.com/",
    backend:
      "https://real-estate-production-acd8.up.railway.app/swagger-ui/index.html",
    backend_source: "https://github.com/huylam22/real-estate",
  },

  {
    name: "Portfolio",
    description:
      "A comprehensive 3d interactive portfolio website with auto-email feature that showcases my skills, experiences, and projects .",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "threejs",
        color: "green-text-gradient",
      },
      {
        name: "webgl",
        color: "pink-text-gradient",
      },
    ],
    image: portfolio,
    source_code_link: "https://github.com/huylam22/portfolio",
    url: "https://www.lamanhhuy.com",
  },
];

const contact = [
  { logo: facebook, link: "https://www.facebook.com/anhhuy.ljn/" },
  { logo: linkedin, link: "https://www.linkedin.com/in/huy-lam-7323a9171/" },
  { logo: github, link: "https://github.com/huylam22" },
];

export { services, technologies, experiences, testimonials, projects, contact };
