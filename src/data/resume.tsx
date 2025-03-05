import { Icons } from "@/components/icons";
import { Badge, HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Atharva Deshmukh",
  initials: "AD",
  url: "https://atharva-builds.vercel.app/",
  location: "Madhya Pradesh, India",
  locationLink: "https://www.google.com/maps/place/Ratlam,+Madhya+Pradesh+457001",
  description:
    "Software Engineer (Web Full Stack) with a knack for Design and WEB3. | Looking for Opportunities |",
  summary:
    "I am a final year Computer Science Engineering student, currently engaged in building *full-stack scalable apps* with a knack for Blockchain Tech, I am extensively contributing to open source, ranked [**#10** out of 4700+ in oss.gg 2024](https://oss.gg/), I have also participated in various National as well as International hackathons and have infact [won a few of them](/#hackathons), apart from this, I have also designed websites for clients on **Figma** and have also been a part of the *Web3 Community*. Currently **Looking for Opportunities**",
  avatarUrl: "/me.png",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Go",
    "Postgres",
    "Docker",
    "Kubernetes",
    "Figma",
    "MongoDB",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "https://dev.to/atharva3000", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "atharvadeshmukh.dev@gmail.com",
    tel: "+91 8103548618",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/atharva-3000",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/atharvadeshmukh3000/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/0x_atharva",
        icon: Icons.x,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Project-X (Stealth Start-up) ",
      href: "https://projectxfrontend-six.vercel.app/",
      badges: ["Latest"],
      location: "Remote",
      title: "Backend Engineer",
      logoUrl: "/project-x.png",
      start: "Nov 2024",
      end: "Present",
      description:
        "Implemented the entire backend for the platform using node.js, express and PostgresSQL. Developer a custom endpoint to fetch filtered candidate data from GitHub API, as well the functionality to connect your gmail account and send custom emails to candidates in one go.",
    },
    {
      company: "ONWE",
      badges: [],
      href: "https://www.linkedin.com/company/onwe-in/",
      location: "Vadodara, Gujarat",
      title: "Backend Developer",
      logoUrl: "/onwe.jpg",
      start: "June 2024",
      end: "Oct 2024",
      description:
        "Implemented a custom Kubernetes controller in Go to automate the deployment of MySQL and ProxySQL custom resources in order to enable 2,000+ internal developers to instantly deploy their app databases to production. Wrote several scripts in Go to automate MySQL database failovers while maintaining master-slave replication topologies and keeping Zookeeper nodes consistent with changes.",
    },
    {
      company: "Google Developers Student Club",
      href: "https://www.linkedin.com/company/dscpu/",
      badges: [],
      location: "Vadodara, Gujarat",
      title: "Web Track Lead",
      logoUrl: "/gdsc.png",
      start: "August 2023",
      end: "August 2024",
      description:
        "Taught over 200+ students the basics of web development, including HTML, CSS, JavaScript, React, and Node.js along with Projects. Organized a Week Long cohort.Apart from this hosted various workshops on Web3 and Blockchain Tech.",
    },

  ],
  education: [
    {
      school: "Parul University",
      href: "https://paruluniversity.ac.in/",
      degree: "Computer Science Engineering Degree",
      logoUrl: "/parul.png",
      start: "2021",
      end: "2025",
    },
    {
      school: "Shri Guru Tegh Bahadur Academy",
      href: "http://www.sgtba.in/",
      degree: "High School Certificate (11th & 12th Grade)",
      logoUrl: "/sgtba.jpg",
      start: "2019",
      end: "2021",
    },

  ],
  projects: [
    {
      title: "S.Y.N.X: Self-evolving Yottascale Network eXchange",
      href: "https://agentic-ethereum.vercel.app/",
      dates: "January 2025 - February 2025",
      active: true,
      description:
        "Developed a seamless way for web2 users to **interact with web3 utilities with the help of an AI agent by just giving out prompts**. Powered by [Coinbase Agentkit](https://docs.cdp.coinbase.com/agentkit/docs/welcome), capable of creating wallets, funding via faucets as well as **creating and signing a transaction on users behalf**, auth supported by [Privy](https://www.privy.io/).",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Privy",
        "Shadcn UI",
        "Radix UI",
        "Coinbase Agentkit",
      ],
      links: [
        {
          type: "Website",
          href: "https://agentic-ethereum.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Atharva-3000/agentic-ethereum",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/synx.png",
      video:
        "",
    },
    {
      title: "Yoom: Your Personal Meetings Platform",
      href: "https://video-conferencing-yoom.vercel.app/",
      dates: "March 2024 - April 2024",
      active: true,
      description:
        "A platform to  host meetings, kinda like Zoom but **open-sourced** and with the ability to create **Private rooms** as well as **record and preview** your recorded meetings. Auth by [Clerk](https://clerk.com/) and the audio-video streaming sdk provided by [getStream](https://getstream.io/).",
      technologies: [
        "Next.js",
        "Typescript",
        "getStream SDK",
        "TailwindCSS",
        "Clerk Auth",
        "Shadcn UI",
        "Radix UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://video-conferencing-yoom.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Atharva-3000/video-conferencing-yoom/tree/master",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/yoom.png",
      video: "",
    },
    {
      title: "Reown Chat",
      href: "https://reown-chat.vercel.app/",
      dates: "January 2025 - January 2025",
      active: true,
      description:
        "An AI powered chat where you can interact with your solana powered wallet, auth powered by [Reown's AppKit](https://reown.com/appkit), allowing you to **fetch your wallet's data via simple prompts.**",
      technologies: [
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "Shadcn UI",
        "Reown AppKit",
        "Google Generative A.I.",
        "Radix UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://reown-chat.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Atharva-3000/reown-chat/tree/main/reown-fe",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/reown.png",
      video: "",
    },
    {
      title: "cli-tools",
      href: "https://github.com/Atharva-3000/commit-cli",
      dates: "October 2024 - November 2024",
      active: true,
      description:
        "Created a bunch of cli tools in **golang**, including a powerful, no GUI command line tool to check out your recent **git commits as well as GitHub events**, utilizing the [GitHub API](https://docs.github.com/en/rest) to fetch the data. and a simple yet powerful **tasks keeper inside cli** with all the operations you will ever need to manage your tasks.",
      technologies: [
        "Golang",
        "GitHub API",
        "Prompt UI"
      ],
      links: [
        {
          type: "Cli Tool 1 (commit-cli)",
          href: "https://github.com/Atharva-3000/commit-cli",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Cli Tool 2 (tasker)",
          href: "https://github.com/Atharva-3000/To-cli",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/git-cli.png",
      video:
        "",
    },
  ],
  hackathons: [
    {
      title: "Agentic Ethereum Async Hackathon",
      dates: "January 31st - February 14th, 2025",
      location: "Online, Remote",
      description:
        "Developed S.Y.N.X, a platform which allows web2 users to interact with web3 utilities with the help of an AI agent by just giving out prompts. Powered by Coinbase Agentkit and auth using Privy, giving financial freedom to the a.i.",
      image:
        "/agentic.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [,
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Atharva-3000/agentic-ethereum",
        },
        {
          title: "Website",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://agentic-ethereum.vercel.app/",
        }

      ],
    },
    {
      title: "Hacker House Goa",
      dates: "August 4th - 10th, 2024",
      location: "Goa, India",
      description:
        "Created a platform which allows users to get loan by leasing there NFT's and there identity is verified using Anon Aadhaar.",
      image:
        "/hh-goa.jpg",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Atharva-3000/EngageLoan-HH-GOA",
        },
        {
          title: "Website",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://engage-loan-hh-goa.vercel.app/",
        },
        {
          title: "Mocks",
          icon: <Icons.googleDrive className="h-4 w-4" />,
          href: "https://drive.google.com/drive/folders/1PW2peFwbOYIe_qOiaLLfQzOiJuO2ytHV?usp=drive_link",
        }
      ],
    },
    {
      title: "oss.gg 🕹️ Open Source Month",
      dates: "October 1st -31th, 2024",
      location: "Remote, Online",
      description:
        "Ranked #10 out of 4700 participants in the Open Source Month, contributing to various projects.",
      image:
        "/joystick.svg",
      links: [
        {
          title: "Leaderboard",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://oss.gg/leaderboard",
        },
      ],
    },
    {
      title: "AceHack 3.0",
      dates: "April 6th - 7th, 2024",
      location: "Jaipur, India",
      description:
        "Developed a platform which allows the users to generate there land ownership onchain and also allows them to sell/transfer it to other users via NFT.",
      icon: "public",
      image:
        "/acehack.jpg",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Atharva-3000/ace-hacks-landchain",
        },
      ],
    },
    {
      title: "Mozohack 5.0",
      dates: "March 29th - 30th, 2024",
      location: "Vadodara, India",

      description:
        "Created a smart ADAS sofware system capable of detecting and alerting the driver of any potential accidents as well as the driver's drowsiness.",
      image:
        "/mozo.png",
      links: [
      ],
    },
    {
      title: "Arweave Hacker House Cohort #1",
      dates: "December 21th - 24st, 2023",
      location: "Bangalore, India ",
      description:
        "Lead designer for the team that came 2nd, we developed a pipeline to backup your S3 bucket onto Arweave, making it immutable and decentralized for upto 100 years.",
      image:
        "/arweave.png",
      win: "Best Data Hack",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg",
      links: [
        {
          title: "Winner Announcements",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://x.com/arweaveindia/status/1734972927286935897",
        },
      ],
    },
    {
      title: "Parul Let's Hack",
      dates: "July 15th - 16th, 2023",
      location: "Vadodara, India",
      description:
        "Created a Mobile App which allows small music artists to earn more by allowing the public to make paid music requests during live performances.",
      image:
        "/lets-hack.jpg",
      links: [
      ],
    },

    {
      title: "HackVengers 1.0",
      dates: "March 13th - 19th, 2023",
      location: "Vadodara, India",
      description:
        "Developed a blockchain application for doctors and pharmacists to perform trustless transactions and prevent overdosage in patients.",
      image:
        "/hackvengers.png",
      links: [
        {
          title: "Source",
          href: "https://github.com/Atharva-3000/h2023",
          icon: <Icons.github className="size-3" />,
        },
        {
          title: "Project Submission",
          href: "https://devfolio.co/projects/disability-suite-6678",
          icon: <Icons.globe className="size-3" />,
        },
      ],
    },
  ],
} as const;
