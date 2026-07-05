import { DiMongodb, DiWordpress, DiDatabase } from "react-icons/di";
import { SiGit, SiMysql, SiFigma, SiAdobephotoshop, SiAdobeillustrator, SiJira, SiTrello, SiGithub, SiGitlab, SiHtml5, SiCss3, SiJavascript, SiPhp, SiTailwindcss, SiBootstrap, SiAntdesign, SiPython } from "react-icons/si";
import { RiNextjsFill, RiNodejsFill, RiReactjsFill } from "react-icons/ri";
import { FaLaravel, FaShopify } from "react-icons/fa";

export const Skills = [
  // Frontend
  {
    slug: "html",
    Component: SiHtml5,
    title: "HTML",
    Description: () => <>Semantic markup and web structure</>,
  },
  {
    slug: "css",
    Component: SiCss3,
    title: "CSS",
    Description: () => <>Styling and responsive design</>,
  },
  {
    slug: "javascript",
    Component: SiJavascript,
    title: "JavaScript",
    Description: () => <>Interactive and dynamic web applications</>,
  },
  {
    slug: "reactjs",
    Component: RiReactjsFill,
    title: "React.js",
    Description: () => <>Component-based UI development</>,
  },
  {
    slug: "nextjs",
    Component: RiNextjsFill,
    title: "Next.js",
    Description: () => <>Server-side rendering and static generation</>,
  },
  {
    slug: "tailwindcss",
    Component: SiTailwindcss,
    title: "Tailwind CSS",
    Description: () => <>Utility-first CSS framework</>,
  },
  {
    slug: "bootstrap",
    Component: SiBootstrap,
    title: "Bootstrap",
    Description: () => <>Responsive frontend toolkit</>,
  },
  {
    slug: "antdesign",
    Component: SiAntdesign,
    title: "Ant Design",
    Description: () => <>Enterprise-level UI design language</>,
  },
  
  // Backend
  {
    slug: "nodejs",
    Component: RiNodejsFill,
    title: "Node.js",
    Description: () => <>Server-side JavaScript runtime</>,
  },
  {
    slug: "php",
    Component: SiPhp,
    title: "PHP",
    Description: () => <>Server-side scripting language</>,
  },
  {
    slug: "laravel",
    Component: FaLaravel,
    title: "Laravel",
    Description: () => <>PHP framework for web applications</>,
  },
  {
    slug: "python",
    Component: SiPython,
    title: "Python",
    Description: () => <>General-purpose programming language</>,
  },
  
  // Database
  {
    slug: "mysql",
    Component: SiMysql,
    title: "MySQL",
    Description: () => <>Relational database management</>,
  },
  {
    slug: "sqlserver",
    Component: DiDatabase,
    title: "SQL Server",
    Description: () => <>Microsoft relational database system</>,
  },
  {
    slug: "mongodb",
    Component: DiMongodb,
    title: "MongoDB",
    Description: () => <>NoSQL document database</>,
  },
  
  // Tools & Workflow
  {
    slug: "github",
    Component: SiGithub,
    title: "GitHub",
    Description: () => <>Version control and code collaboration</>,
  },
  {
    slug: "gitlab",
    Component: SiGitlab,
    title: "GitLab",
    Description: () => <>DevOps platform and CI/CD pipelines</>,
  },
  {
    slug: "jira",
    Component: SiJira,
    title: "Jira",
    Description: () => <>Agile project management</>,
  },
  {
    slug: "trello",
    Component: SiTrello,
    title: "Trello",
    Description: () => <>Task management and collaboration</>,
  },
  
  // CMS
  {
    slug: "wordpress",
    Component: DiWordpress,
    title: "WordPress",
    Description: () => <>Content management system</>,
  },
  {
    slug: "shopify",
    Component: FaShopify,
    title: "Shopify",
    Description: () => (
      <>
        Shopify is a powerful e-commerce platform that allows businesses to
        create, manage, and scale online stores with ease. It provides built-in
        tools for product management, payments, shipping, and marketing, making
        it ideal for startups and growing businesses.
      </>
    ),
  },
  
  // Optional: Design Tools (if you want to keep them)
  {
    slug: "figma",
    Component: SiFigma,
    title: "Figma",
    Description: () => <>UI/UX design and prototyping</>,
  },
  {
    slug: "photoshop",
    Component: SiAdobephotoshop,
    title: "Adobe Photoshop",
    Description: () => <>Image editing and graphic design</>,
  },
  {
    slug: "illustrator",
    Component: SiAdobeillustrator,
    title: "Adobe Illustrator",
    Description: () => <>Vector graphics and logo design</>,
  },
];