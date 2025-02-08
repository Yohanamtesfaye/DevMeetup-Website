export const eventDetails = {
  name: "DevMeetup V3",
  date: "March 15, 2025",
  time: "9:00 AM - 6:00 PM",
  location: "Tech Hub Conference Center, Addis Ababa"
};

export const scheduleItems = [
  {
    time: "8:30 AM - 9:00 AM",
    title: "Registration & Check-in",
    speaker: "Event Organizers",
    description: "Registration, check-in process, and initial venue orientation.",
    type: "break"
  },
  {
    time: "9:00 AM - 9:15 AM",
    title: "Welcome & Opening Vibe",
    speaker: {
      name: "Mirafe Gebriel Marcos",
      role: "Country GM",
      company: "Sand Technologies"
    },
    description: "Topic: ALX Ethiopia: Empowering Developers. Content: Introduces ALX Ethiopia and its offerings, sets an energetic tone, and creates a vibrant morning vibe for the day.",
    type: "keynote"
  },
  {
    time: "9:15 AM - 9:45 AM",
    title: "Digital Business Solutions & The Business Side",
    speaker: {
      name: "Meried Bekele",
      role: "CEO",
      company: "IE Networks"
    },
    description: "Topic: Digital Business Solutions & Business Strategies. Content: Discusses transforming business through digital solutions and shares strategic insights on how developers can thrive in today's competitive market.",
    type: "talk"
  },
  {
    time: "9:45 AM - 10:15 AM",
    title: "Business Side of Development",
    speaker: {
      name: "Israel Goytom",
      role: "CTO",
      company: "Chapa"
    },
    description: "Topic: Building a Business in Tech: The Chapa Story. Content: Explores how Chapa evolved from a startup to a leading fintech in Ethiopia, highlighting the essential blend of technical expertise and business acumen.",
    type: "talk"
  },
  {
    time: "10:15 AM - 10:45 AM",
    title: "Turning Passion into Enterprise",
    speaker: {
      name: "Kidus Asfaw",
      role: "CEO",
      company: "RUBIK"
    },
    description: "Topic: From Passion to Business. Content: Explains how personal passion for technology can be transformed into a profitable business venture through innovative and sustainable solutions.",
    type: "talk"
  },
  {
    time: "10:45 AM - 11:15 AM",
    title: "Mindset for Developers to Succeed",
    speaker: {
      name: "Beek Kefyalew",
      role: "Founder",
      company: "OPENFLOW Business Group"
    },
    description: "Topic: The Developer's Mindset in Business. Content: Outlines the essential mental frameworks and strategies that developers must adopt to excel both technically and in the business realm.",
    type: "talk"
  },
  {
    time: "11:15 AM - 11:45 AM",
    title: "Entrepreneurial Journey & Strategic Insights",
    speaker: {
      name: "Nebiyu Zekeriyas",
      role: "CEO",
      company: "Mereb"
    },
    description: "Topic: Entrepreneurship & Strategic Growth. Content: Shares insights from his entrepreneurial journey, discussing challenges, successes, and strategic advice for emerging tech innovators in Ethiopia.",
    type: "talk"
  },
  {
    time: "11:45 AM - 12:15 PM",
    title: "Panel Discussion: How to grow",
    speakers: [
      {
        name: "Leoul Mekonen",
        role: "CEO",
        company: "Hulugram"
      }
    ],
    description: "Topic: Two tech giants in Ethiopia Hulugram and Gebeta Maps explain how they managed to scale up their business with a small team and limited resources.",
    type: "panel"
  },
  {
    time: "1:15 PM - 2:15 PM",
    title: "Panel Discussion on Artificial Intelligence",
    speakers: [
      {
        name: "Hiruy",
        roles: ["CEO at Mindplex", "Product Manager at SingularityNet"],
        company: "Mindplex & SingularityNet"
      },
      {
        name: "Abdulrahman Omar",
        role: "Machine Learning Engineer",
        company: "SingularityNet"
      },
      {
        name: "Solomon Kassa",
        role: "CEO",
        company: "1888EC"
      },
      {
        name: "Temkin Mengistu",
        role: "Lead Software Developer",
        company: "Tena Solution"
      }
    ],
    moderator: {
      name: "Temkin Mengistu",
      role: "Lead Software Developer",
      company: "Tena Solution"
    },
    description: "Topic: The Future of AI in Tech. Content: Focused discussion on emerging AI trends, practical applications, and the transformative impact of AI on technical development and business strategies.",
    type: "panel"
  },
  {
    time: "2:15 PM - 3:15 PM",
    title: "Q&A Session",
    speakers: [
      {
        name: "Rehana Abubakar",
        role: "Senior Frontend Engineer",
        company: "UNICEF"
      },
      {
        name: "Cherinet Hailu",
        role: "Software Engineer",
        company: "NID"
      },
      {
        name: "Berhan Nega",
        role: "Senior Software Engineer",
        company: "Exelia"
      }
    ],
    description: "Topic: Open Q&A: Diverse Tech Perspectives. Content: Interactive session where the audience engages with panelists on a range of topics including technical challenges, AI integration, and innovative business strategies.",
    type: "panel"
  },
  {
    time: "3:15 PM - 4:00 PM",
    title: "Community Products Showcase",
    speaker: "Selected Community Members / Startups",
    description: "Topic: Showcase of Community Innovations. Content: Highlights cutting-edge products and projects from the local tech community, demonstrating innovative, community-driven tech solutions.",
    type: "showcase"
  },
  {
    time: "4:00 PM - 4:15 PM",
    title: "Closing Remarks & Networking",
    type: "closing"
  }
];

export const organizers = [
  {
    name: "Mirafe Gebriel Marcos",
    role: "Country GM",
    company: "Sand Technologies",
    description: "Leading tech innovator with 8+ years of experience in software development and team management. Passionate about fostering tech communities and mentoring aspiring developers.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop",
    linkedin: "https://linkedin.com/in/mirafe",
    github: "https://github.com/mirafe",
    twitter: "https://twitter.com/mirafe"
  },
  {
    name: "Yohana Mekuria",
    role: "Technical Lead",
    company: "CodeWave Solutions",
    description: "Full-stack developer specializing in cloud architecture and DevOps. Dedicated to building scalable solutions and sharing knowledge through community events.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&h=500&fit=crop",
    linkedin: "https://linkedin.com/in/yohana",
    github: "https://github.com/yohana",
    twitter: "https://twitter.com/yohana"
  },
  {
    name: "Dawit Alemu",
    role: "Community Manager",
    company: "TechHub Africa",
    description: "Community builder and tech evangelist. Focused on creating inclusive spaces for developers to learn, grow, and connect through meaningful experiences.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&h=500&fit=crop",
    linkedin: "https://linkedin.com/in/dawit",
    github: "https://github.com/dawit",
    twitter: "https://twitter.com/dawit"
  },
  {
    name: "Bethlehem Dessie",
    role: "Innovation Director",
    company: "iCog Labs",
    description: "AI researcher and education advocate. Leading initiatives to bring cutting-edge technology education to young developers across Ethiopia.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&h=500&fit=crop",
    linkedin: "https://linkedin.com/in/bethlehem",
    github: "https://github.com/bethlehem",
    twitter: "https://twitter.com/bethlehem"
  },
  {
    name: "Henok Tadesse",
    role: "Operations Lead",
    company: "DevHub Ethiopia",
    description: "Operations specialist with a focus on creating seamless developer experiences. Expert in event management and community building.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&h=500&fit=crop",
    linkedin: "https://linkedin.com/in/henok",
    github: "https://github.com/henok",
    twitter: "https://twitter.com/henok"
  }
];

export const volunteers = [
  {
    name: "Simon Tekle",
    role: "Technical Support",
    description: "Backend developer with expertise in API development and database optimization. Enjoys helping others debug and solve technical challenges.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=500&h=500&fit=crop",
    linkedin: "https://linkedin.com/in/simon",
    github: "https://github.com/simon"
  },
  {
    name: "Luna Hailu",
    role: "Event Coordinator",
    description: "Experienced event planner with a knack for creating engaging developer workshops and hackathons. Passionate about tech education.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&h=500&fit=crop",
    linkedin: "https://linkedin.com/in/luna",
    twitter: "https://twitter.com/luna"
  },
  {
    name: "Abel Kebede",
    role: "Content Creator",
    description: "Digital content specialist focusing on tech education and community engagement. Creates engaging content to help developers learn and grow.",
    image: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=500&h=500&fit=crop",
    linkedin: "https://linkedin.com/in/abel",
    github: "https://github.com/abel"
  },
  {
    name: "Sara Mekonnen",
    role: "Workshop Facilitator",
    description: "Frontend developer and UI/UX enthusiast. Leads workshops on modern web development technologies and best practices.",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=500&h=500&fit=crop",
    linkedin: "https://linkedin.com/in/sara",
    github: "https://github.com/sara"
  },
  {
    name: "Kidus Solomon",
    role: "Design Lead",
    description: "Creative designer specializing in UI/UX and branding. Helps create visually appealing and user-friendly experiences for tech events.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&h=500&fit=crop",
    linkedin: "https://linkedin.com/in/kidus",
    github: "https://github.com/kidus"
  },
  {
    name: "Helen Tadesse",
    role: "Documentation Lead",
    description: "Technical writer and documentation specialist. Ensures all event materials and resources are well-documented and accessible.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&h=500&fit=crop",
    linkedin: "https://linkedin.com/in/helen",
    github: "https://github.com/helen"
  },
  {
    name: "Natnael Berhanu",
    role: "Student Coordinator",
    description: "Computer science student and coding bootcamp mentor. Helps bridge the gap between academic learning and practical development.",
    image: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=500&h=500&fit=crop",
    linkedin: "https://linkedin.com/in/natnael",
    github: "https://github.com/natnael"
  },
  {
    name: "Martha Girma",
    role: "Social Media Manager",
    description: "Digital marketing specialist with a focus on tech communities. Manages online presence and engagement for developer events.",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=500&h=500&fit=crop",
    linkedin: "https://linkedin.com/in/martha",
    twitter: "https://twitter.com/martha"
  }
];

export const sponsorshipTiers = [
  {
    tier: "Platinum",
    benefits: [
      "Premium booth location",
      "20-minute speaking slot",
      "Logo on main stage",
      "6 VIP passes",
      "Social media promotion",
      "Company banner display"
    ]
  },
  {
    tier: "Gold",
    benefits: [
      "Booth space",
      "Logo on event materials",
      "4 VIP passes",
      "Social media mention",
      "Company banner display"
    ]
  },
  {
    tier: "Silver",
    benefits: [
      "Small booth space",
      "Logo on website",
      "2 VIP passes",
      "Social media mention"
    ]
  }
];

export const sponsors = {
  platinum: [
    {
      name: "iCog Labs",
      description: "Leading AI research and development company in Ethiopia",
      logo: "https://icog-labs.com/wp-content/uploads/2019/02/icog-labs-white.png",
      website: "https://icog-labs.com"
    },
    {
      name: "Google",
      description: "Technology company specializing in internet-related services",
      logo: "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png",
      website: "https://google.com"
    },
    {
      name: "Microsoft",
      description: "Leading global technology corporation",
      logo: "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1Mu3b?ver=5c31",
      website: "https://microsoft.com"
    }
  ],
  gold: [
    {
      name: "GitHub",
      description: "The world's leading software development platform",
      logo: "https://github.githubassets.com/images/modules/logos_page/GitHub-Logo.png",
      website: "https://github.com"
    },
    {
      name: "AWS",
      description: "Cloud computing and platform services",
      logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
      website: "https://aws.amazon.com"
    },
    {
      name: "Meta",
      description: "Social technology company",
      logo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg",
      website: "https://meta.com"
    },
    {
      name: "Digital Ocean",
      description: "Cloud infrastructure provider",
      logo: "https://upload.wikimedia.org/wikipedia/commons/f/ff/DigitalOcean_logo.svg",
      website: "https://digitalocean.com"
    }
  ],
  silver: [
    {
      name: "MongoDB",
      logo: "https://webimages.mongodb.com/_com_assets/cms/mongodb_logo1-76twgcu2dm.png",
      website: "https://mongodb.com"
    },
    {
      name: "Vercel",
      logo: "https://assets.vercel.com/image/upload/v1588805858/repositories/vercel/logo.png",
      website: "https://vercel.com"
    },
    {
      name: "Netlify",
      logo: "https://www.netlify.com/img/press/logos/full-logo-light.svg",
      website: "https://netlify.com"
    },
    {
      name: "Auth0",
      logo: "https://cdn.auth0.com/website/bob/press/logo-light.png",
      website: "https://auth0.com"
    },
    {
      name: "Stripe",
      logo: "https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg",
      website: "https://stripe.com"
    },
    {
      name: "Twilio",
      logo: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Twilio-logo-red.svg",
      website: "https://twilio.com"
    }
  ]
};
