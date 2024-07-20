import { DiAndroid, DiTerminal, DiJava, DiHtml5, DiMongodb, DiWordpress } from "react-icons/di";
import { SiFirebase, SiGit, SiDart, SiCss3, SiMysql, SiAmazonaws, SiShopify, SiMicrosoftsqlserver, SiFigma, SiBisecthosting, SiAdobephotoshop, SiAdobeillustrator } from "react-icons/si";
import { RiFlutterFill, RiNextjsFill, RiNodejsFill, RiReactjsFill } from "react-icons/ri";
import { TbBrandKotlin } from "react-icons/tb";
import { FaLaravel, FaPython } from "react-icons/fa";

export const Skills = [
  {
    slug: "nextjs",
    Component: RiNextjsFill,
    title: "Nextjs",
    Description: () => <>Android Apps, ROMs, & Kernels</>,
  },
  {
    slug: "reactjs",
    Component: RiReactjsFill,
    title: "Reactjs",
    Description: () => <>Cross-platform app development</>,
  },
  {
    slug: "Node",
    Component: RiNodejsFill,
    title: "Nodejs",
    Description: () => <>Android apps and Lambda functions</>,
  },
  {
    slug: "react native",
    Component: SiDart,
    title: "React Native",
    Description: () => <>Mobile apps only</>,
  },
  {
    slug: "android",
    Component: DiAndroid,
    title: "Android",
    Description: () => <>Android Apps, ROMs, & Kernels</>,
  },
  {
    slug: "hosting",
    Component: SiBisecthosting,
    title: "Hositing",
    Description: () => <>Code management and open source contributions</>,
  },
  {
    slug: "sql",
    Component: SiMysql,
    title: "MySQL",
    Description: () => <>Storing client and user data</>,
  },
  {
    slug: "sqlService",
    Component: SiMicrosoftsqlserver,
    title: "SQL Server",
    Description: () => <>Storing client and user data</>,
  },
  {
    slug: "mongodb",
    Component: DiMongodb,
    title: "MongoDB",
    Description: () => <>Static webpages and portfolio projects</>,
  },
  {
    slug: "wordpress",
    Component: DiWordpress,
    title: "WordPress",
    Description: () => <>Styling of my webpages</>,
  },
  {
    slug: "shopify",
    Component: SiShopify,
    title: "Shopify",
    Description: () => <>Code management and open source contributions</>,
  },
  {
    slug: "Laravel",
    Component: FaLaravel,
    title: "Laravel & PHP",
    Description: () => <>Lambda functions for creating APIs</>,
  },
  {
    slug: "Python",
    Component: FaPython,
    title: "Python",
    Description: () => <>Lambda functions for creating APIs</>,
  },
  {
    slug: "terminal",
    Component: DiTerminal,
    title: "Bash",
    Description: () => <>Ease of life and build scripts</>,
  },
  {
    slug: "git",
    Component: SiGit,
    title: "Git",
    Description: () => <>Code management and open source contributions</>,
  },
  {
    slug: "figma",
    Component: SiFigma,
    title: "Figma",
    Description: () => <>Code management and open source contributions</>,
  },
  {
    slug: "Photoshop",
    Component: SiAdobephotoshop,
    title: "Adobe Photoshop",
    Description: () => <>Code management and open source contributions</>,
  },
  {
    slug: "illustrator",
    Component: SiAdobeillustrator,
    title: "Adobe Illustrator",
    Description: () => <>Code management and open source contributions</>,
  },
];
