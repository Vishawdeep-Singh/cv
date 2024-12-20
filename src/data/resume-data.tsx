import {
  ClevertechLogo,
  ConsultlyLogo,
  JojoMobileLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Vishawdeep Singh",
  initials: "VS",
  location: "Hisar,Haryana",
  locationLink: "https://maps.app.goo.gl/ZQ4wLaWQ4wUKt8JA6",
  about:
    "Creative and solution-driven Full Stack Engineer focused on delivering efficient and innovative web applications.",
  summary: (
    <>
     From crafting intuitive interfaces using modern front-end frameworks to designing efficient server-side applications, I thrive in bridging the gap between user experience and complex back-end processes.
    </>
  ),
  avatarUrl: "/profile.png",
  personalWebsiteUrl: "https://drive.google.com/file/d/1Ai-0bOJKBB5m4uEdRUGemxgEczoZIjK1/view",
  contact: {
    email: "vishawdeepsingh29@gmail.com",
    tel: "+91-9467829158",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/Vishawdeep-Singh",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/vishawdeepsingh/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/Vishawdeep29",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Guru Jambheshwar University of Science and Technology",
      degree: "B.Tech. in Electronics and Communication",
      start: "2021",
      end: "2025",
    },
  ],
  work: [
    {
      company: "Film.io",
      link: "https://film.io",
      badges: ["Remote", "React", "Next.js", "TypeScript", "Node.js"],
      title: "Software Architect",
      logo: ConsultlyLogo,
      start: "2024",
      end: null,
      description: (
        <>
          Leading technical architecture of a blockchain-based film funding
          platform.
          <ul className="list-inside list-disc">
            <li>
              Architecting migration from CRA to Next.js for improved
              performance, SEO, and DX
            </li>
            <li>
              Established release process enabling faster deployments and
              reliable rollbacks
            </li>
            <li>
              Implementing system-wide monitoring and security improvements
            </li>
          </ul>
        </>
      ),
    },
    {
      company: "Parabol",
      link: "https://parabol.co",
      badges: [
        "Remote",
        "React",
        "TypeScript",
        "Node.js",
        "GraphQL",
        "Tailwind CSS",
      ],
      title: "Senior Full Stack Developer",
      logo: ParabolLogo,
      start: "2021",
      end: "2024",
      description: (
        <>
          Senior developer and squad leader for an enterprise agile meeting
          platform.
          <ul className="list-inside list-disc">
            <li>
              Built design system with Tailwind CSS, improving development speed
              and time to market
            </li>
            <li>
              Implemented engineering practices: PR automation, code review
              guidelines, and workflows
            </li>
            <li>
              Open source contributions to Relay DevTools and React i18n tooling
            </li>
          </ul>
        </>
      ),
    },
    {
      company: "Clevertech",
      link: "https://clevertech.biz",
      badges: ["Remote", "React", "TypeScript", "Node.js", "Android", "Kotlin"],
      title: "Lead Android Developer → Full Stack Developer",
      logo: ClevertechLogo,
      start: "2015",
      end: "2021",
      description: (
        <>
          Successfully transitioned from mobile to full-stack development while
          leading distributed teams.
          <ul className="list-inside list-disc">
            <li>
              Led frontend team at Evercast, building real-time platform
              supporting 30+ users per room with HD streaming and collaboration
              tools
            </li>
            <li>
              Developed offline-first Android app for DKMS, improving donor
              registration process
            </li>
            <li>
              Led development teams across multiple successful client projects
            </li>
          </ul>
        </>
      ),
    },
    {
      company: "Jojo Mobile",
      link: "https://bsgroup.eu/",
      badges: ["On Site", "Android", "Java", "Kotlin"],
      title: "Android Developer → Lead Android Developer",
      logo: JojoMobileLogo,
      start: "2012",
      end: "2015",
      description: (
        <>
          First Android developer, grew and led a team of 15+ engineers while
          establishing engineering culture.
          <ul className="list-inside list-disc">
            <li>
              Developed apps for major Polish companies including LOT, Polskie
              Radio, and Agora
            </li>
            <li>Built and mentored high-performing mobile development team</li>
          </ul>
        </>
      ),
    },
    {
      company: "Nokia Siemens Networks",
      link: "https://www.nokia.com",
      badges: ["On Site", "C/C++", "LTE", "Agile"],
      title: "C/C++ Developer",
      logo: NSNLogo,
      start: "2010",
      end: "2012",
      description:
        "Developed software for LTE base stations at enterprise scale, gaining strong fundamentals in software architecture, testing practices, and cross-team collaboration.",
    },
  ],
  skills: [
    "React/Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Postgresql",
   "Express",

   "MongoDB",
    "WebSockets",
    "Node.js",
    "GraphQL",
    "System Architecture",
    "Java (DSA)",
    "Docker",
    "AWS"
  ],
  projects: [
    {
      title: "Zeus",
      techStack: ["TypeScript", "Next.js", "PostgreSQL","Node.JS","Supabase","EC2"],
      description:
        "Gym Management System: Built for small gyms, supporting 100 daily users with features like admin dashboard, membership tracking, real-time updates, and a fast, responsive Next.js frontend.",
      logo: MonitoLogo,
      link: {
        label: "zeus",
        href: "https://zeus.vishawdeepsingh.in",
      },
    },
    {
      title: "Vault",
      techStack: [
        "TypeScript",
        "Next.js",
        "Cloudfare Workers",
        "Tailwind CSS",
        "PostgreSQL",
        "Turborepo",
        "CI/CD"
      
      ],
      description:
        "Built with Next.js and Aiven PostgreSQL, supporting 500 daily transactions. Features include P2P transfers, bank-to-wallet services, QR payments, and a merchant app for payment tracking. Managed architecture with Turborepo and deployed on EC2 with Docker and CI/CD automation.",
      logo: ConsultlyLogo,
      link: {
        label: "Vault App",
        href: "http://vault.user-app.vishawdeepsingh.in",
      },
    },
    {
      title: "Thought",
      techStack: ["TypeScript", "React.JS", "Tailwind CSS","Hono.dev","Cloudflare Workers"],
      description:
        "A social networking platform supporting 200 daily users with features like posting, liking, commenting, following, and tag-based search. Built with a responsive React.js frontend and a scalable Node.js backend using Prisma, deployed on Cloudflare Workers for performance and reliability.",
      logo: MonitoLogo,
      link: {
        label: "Thought",
        href: "https://thoughtapp.vishawdeepsingh.in",
      },
    },
  ],
  opensource:[
    {
      title: "Muzer",
      techStack: ["TypeScript", "Next.js", "PostgreSQL","Websockets"],
      description:
        "Collaborative web based youtube playlist. Useful for music lovers in workspaces.",
      logo: MonitoLogo,
      link: {
        label: "muzer",
        href: "https://muzer.100xdevs.com",
      },
    },
  ]
} as const;
