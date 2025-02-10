import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Atharva Deshmukh",
  initials: "AD",
  url: "https://atharva-builds.vercel.app/",
  location: "Madhya Pradesh, India",
  locationLink: "https://www.google.com/maps/place/Ratlam,+Madhya+Pradesh+457001",
  description:
    "Software Engineer (Web Full Stack) with a knack for Design and WEB3. | Looking for Opportunities |",
  summary:
    "I am a final year Computer Science Engineering student, currently engaged in building *full-stack scalable apps* with a knack for Blockchain Tech, I am extensively contributing to open source, ranked [**#10** out of 4000 in oss.gg 2024](https://oss.gg/), I have also participated in various National as well as International hackathons and have infact [won a few of them](/#hackathons), apart from this, I have also designed websites for clients on **Figma** and have also been a part of the *Web3 Community*. Currently **Looking for Opportunities**",
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
      title: "Freelance Backend Developer",
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
      title: "DeveloperWeek Hackathon",
      dates: "February 3rd - 4th, 2018",
      location: "San Francisco, California",
      description:
        "Developed a web application which aggregates social media data regarding cryptocurrencies and predicts future prices.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/developer-week.jpg",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/cryptotrends/cryptotrends",
        },
      ],
    },
    {
      title: "HackDavis",
      dates: "January 20th - 21st, 2018",
      location: "Davis, California",
      description:
        "Developed a mobile application which allocates a daily carbon emission allowance to users to move towards a sustainable environment.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-davis.png",
      win: "Best Data Hack",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/my6footprint",
        },
        {
          title: "ML",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/my6footprint-machine-learning",
        },
        {
          title: "iOS",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/CarbonWallet",
        },
        {
          title: "Server",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/wallet6-server",
        },
      ],
    },
    {
      title: "ETH Waterloo",
      dates: "October 13th - 15th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed a blockchain application for doctors and pharmacists to perform trustless transactions and prevent overdosage in patients.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/eth-waterloo.png",
      links: [
        {
          title: "Organization",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ethdocnet",
        },
      ],
    },
    {
      title: "Hack The North",
      dates: "September 15th - 17th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed a virtual reality application allowing users to see themselves in third person.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Streamer Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/justinmichaud/htn2017",
        },
        {
          title: "Client Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/RTSPClient",
        },
      ],
    },
    {
      title: "Hack The 6ix",
      dates: "August 26th - 27th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed an open platform for people shipping items to same place to combine shipping costs and save money.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-6ix.jpg",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ShareShip/ShareShip",
        },
        {
          title: "Site",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://share-ship.herokuapp.com/",
        },
      ],
    },
    {
      title: "Stupid Hack Toronto",
      dates: "July 23rd, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a chrome extension which tracks which facebook profiles you have visited and immediately texts your girlfriend if you visited another girls page.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/stupid-hackathon.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/nsagirlfriend/nsagirlfriend",
        },
      ],
    },
    {
      title: "Global AI Hackathon - Toronto",
      dates: "June 23rd - 25th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a python library which can be imported to any python game and change difficulty of the game based on real time emotion of player. Uses OpenCV and webcam for facial recognition, and a custom Machine Learning Model trained on a [Kaggle Emotion Dataset](https://www.kaggle.com/c/challenges-in-representation-learning-facial-expression-recognition-challenge/leaderboard) using [Tensorflow](https://www.tensorflow.org/Tensorflow) and [Keras](https://keras.io/). This project recieved 1st place prize at the Global AI Hackathon - Toronto and was also invited to demo at [NextAI Canada](https://www.nextcanada.com/next-ai).",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/global-ai-hackathon.jpg",
      win: "1st Place Winner",
      links: [
        {
          title: "Article",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://syncedreview.com/2017/06/26/global-ai-hackathon-in-toronto/",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/TinySamosas/",
        },
      ],
    },
    {
      title: "McGill AI for Social Innovation Hackathon",
      dates: "June 17th - 18th, 2017",
      location: "Montreal, Quebec",
      description:
        "Developed realtime facial microexpression analyzer using AI",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/ai-for-social-good.jpg",
      links: [],
    },
    {
      title: "Open Source Circular Economy Days Hackathon",
      dates: "June 10th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a custom admin interface for food waste startup <a href='http://genecis.co/'>Genecis</a> to manage their data and provide analytics.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/open-source-circular-economy-days.jpg",
      win: "1st Place Winner",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/genecis",
        },
      ],
    },
    {
      title: "Make School's Student App Competition 2017",
      dates: "May 19th - 21st, 2017",
      location: "International",
      description: "Improved PocketDoc and submitted to online competition",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/make-school-hackathon.png",
      win: "Top 10 Finalist | Honourable Mention",
      links: [
        {
          title: "Medium Article",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://medium.com/make-school/the-winners-of-make-schools-student-app-competition-2017-a6b0e72f190a",
        },
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/pocketdoc-react-native",
        },
        {
          title: "YouTube",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/pocketdoc-react-native",
        },
      ],
    },
    {
      title: "HackMining",
      dates: "May 12th - 14th, 2017",
      location: "Toronto, Ontario",
      description: "Developed neural network to optimize a mining process",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-mining.png",
      links: [],
    },
    {
      title: "Waterloo Equithon",
      dates: "May 5th - 7th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed Pocketdoc, an app in which you take a picture of a physical wound, and the app returns common solutions or cures to the injuries or diseases.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/waterloo-equithon.png",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/pocketdoc-react-native",
        },
        {
          title: "YouTube",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/pocketdoc-react-native",
        },
      ],
    },
    {
      title: "SpaceApps Waterloo",
      dates: "April 28th - 30th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed Earthwatch, a web application which allows users in a plane to virtually see important points of interest about the world below them. They can even choose to fly away from their route and then fly back if they choose. Special thanks to CesiumJS for providing open source world and plane models.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/space-apps.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/earthwatch",
        },
      ],
    },
    {
      title: "MHacks 9",
      dates: "March 24th - 26th, 2017",
      location: "Ann Arbor, Michigan",
      description:
        "Developed Super Graphic Air Traffic, a VR website made to introduce people to the world of air traffic controlling. This project was built completely using THREE.js as well as a node backend server.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/mhacks-9.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/threejs-planes",
        },
      ],
    },
    {
      title: "StartHacks I",
      dates: "March 4th - 5th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed at StartHacks 2017, Recipic is a mobile app which allows you to take pictures of ingredients around your house, and it will recognize those ingredients using ClarifAI image recognition API and return possible recipes to make. Recipic recieved 1st place at the hackathon for best pitch and hack.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/starthacks.png",
      win: "1st Place Winner",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source (Mobile)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/recipic-ionic",
        },
        {
          title: "Source (Server)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/recipic-rails",
        },
      ],
    },
    {
      title: "QHacks II",
      dates: "February 3rd - 5th, 2017",
      location: "Kingston, Ontario",
      description:
        "Developed a mobile game which enables city-wide manhunt with random lobbies",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/qhacks.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source (Mobile)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/human-huntr-react-native",
        },
        {
          title: "Source (API)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/human-huntr-rails",
        },
      ],
    },
    {
      title: "Terrible Hacks V",
      dates: "November 26th, 2016",
      location: "Waterloo, Ontario",
      description:
        "Developed a mock of Windows 11 with interesting notifications and functionality",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/terrible-hacks-v.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/justinmichaud/TerribleHacks2016-Windows11",
        },
      ],
    },
    {
      title: "Portal Hackathon",
      dates: "October 29, 2016",
      location: "Kingston, Ontario",
      description:
        "Developed an internal widget for uploading assignments using Waterloo's portal app",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/portal-hackathon.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/UWPortalSDK/crowmark",
        },
      ],
    },
  ],
} as const;
