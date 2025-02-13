// eventData.js
import avatar1 from "../assets/avatar1.jpg"
import avatar3 from "../assets/avatar3.jpg"
import avatar2 from "../assets/avatar2.jpg"
import chapi from "../assets/chapi.jpg"
import luna from "../assets/luna.jpg"
import dagi from "../assets/dagi.jpeg"
import mirafe from "../assets/mirafe.jpg"
import beek from "../assets/beek.jpg"

export const eventData1 = {
  name: 'Dev Meetup v1',
  title: 'Everything started here',
  date: 'Sep 10, 2023',
  time: '9:00 AM',
  eventVenue: 'Addis Amba Hotel, Addis Ababa',
  organizers: 'Temikin Mengistu(chapi), Meron Abate',
  participant: '100+ developers and tech professionals',
  description: 'self sponsered by Chapi, the first dev meetup featured Join an exciting day of tech talks, workshops, and networking opportunities!'
};
export const eventData2 = {
  name: 'DevMeetup-V2',
  title: 'We are Back with Bigger Blast',
  date: '2024-03-15',
  time: '9:00 AM',
  eventVenue: 'ALX Hub, Addis Ababa',
  organizers: 'Codenight Community Admins',
  participant: '200+ developers and tech professionals',
  description: 'Join us for an exciting day of tech talks, workshops, and networking opportunities!'
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
    time: "10:00 AM - 10:15 AM",
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
    time: "10:15 AM - 10:45 AM",
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
    time: "10:45 AM - 11:15 AM",
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
    time: "11:15 AM - 11:45 AM",
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
    time: "11:45 AM - 12:15 AM",
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
    time: "12:15 AM - 12:45 AM",
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
    time: "12:45 AM - 1:15 PM",
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

// eventData.js
export const sponsors = [
  {
    name: "ALX-Ethiopia",
    logo: "/src/assets/alx.jpg",
    level: "Gold",
    description: "Leading IT training in Ethiopia.",
    socials: {
      linkedin: "https://www.linkedin.com/company/alx-ethiopia",
      instagram: "https://www.instagram.com/alx_ethiopia"
    }
  },
  {
    name: "Horan Tech",
    logo: "/src/assets/horan.jpg",
    level: "Silver",
    description: "Innovative tech solutions for modern businesses.",
    socials: {
      linkedin: "https://www.linkedin.com/company/horan-tech",
      instagram: "https://www.instagram.com/horan_tech"
    }
  },
  {
    name: "SAND Technologies",
    logo: "/src/assets/sand.jpg",
    level: "Bronze",
    description: "Pioneering technology solutions for sustainable development.",
    socials: {
      linkedin: "https://www.linkedin.com/company/sand-technologies",
      instagram: "https://www.instagram.com/sand_technologies"
    }
  }
];
// this is the volunteer section of V1, v2 and v3
export const volunteerItems = [
  {
    name: "John Doe",
    image: avatar2,
    role: "Technical Support",
    description: "Provides technical assistance and support during the event.",
    github: "https://github.com/johndoe",
    twitter: "https://twitter.com/johndoe",
    linkedin: "https://linkedin.com/in/johndoe"
  },
  {
    name: "Jane Smith",
    image: avatar2,
    role: "Workshop Assistant",
    description: "Assists in organizing and managing workshops.",
    twitter: "https://twitter.com/janesmith",
    linkedin: "https://linkedin.com/in/janesmith"
  },
  {
    name: "Michael Brown",
    image: avatar2,
    role: "Registration Coordinator",
    description: "Manages the registration process and attendee check-ins.",
    twitter: "https://twitter.com/michaelbrown",
    linkedin: "https://linkedin.com/in/michaelbrown"
  },
  {
    name: "Emily Davis",
    image: avatar2,
    role: "Logistics Manager",
    description: "Oversees logistics and ensures smooth operations.",
    github: "https://github.com/emilydavis",
    twitter: "https://twitter.com/emilydavis",
    linkedin: "https://linkedin.com/in/emilydavis"
  }
];


export const volunteersV3 = [
  {
    name: "Yohana Mekuria",
    image: "https://media.licdn.com/dms/image/v2/D5603AQF7CHAL2dhCbg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1730964323171?e=1744848000&v=beta&t=xgqMVBFSdxf-HoiZammA7keiA2QeJiAeESppkxjTDwE",
    role: "Website Developement",
    description: "building the website for the DevMeetup-v3 campaign",
    github: "https://github.com/Yohanamtesfaye",
    linkedin: "https://www.linkedin.com/in/yohana-mekuria-90607a2ab/",
    twitter: "https://x.com/Yohanamtesfaye"
  },
  {
    name: "Abrham Tilksew",
    image: "https://media.licdn.com/dms/image/v2/D4E03AQEjqIlIZKasfQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1684688080290?e=1744848000&v=beta&t=GsGdr9XeYCrizrWF1FNg-mdGewpXvkJikKYmD-Wq-4A",
    role: "Web Developement|Sponsership",
    description: "building a wesbite for the DevMeetup-v3 campaign. Also volunteer in the sponsership team",
    github: "https://github.com/Abrish-21",
    linkedin: "https://www.linkedin.com/in/abrham28/",
    twitter: "https://x.com/AbrhamTaye98",
  },
  {
    name: "Sumeya Akmel",
    image: "https://avatars.githubusercontent.com/u/155248042?v=4",
    role: "Website Developement",
    description: "building the website for the DevMeetup-v3 campaign",
    github: "https://github.com/sumeya-ak",
    linkedin: "https://www.linkedin.com/in/sumeya-akmel-2a3b9b270/",
    twitter: "https://twitter.com/"
  },
  {
    name: "Ruth Abiti",
    image: "https://media.licdn.com/dms/image/v2/D5603AQEWVzj-vh9lDw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1718301431897?e=1744848000&v=beta&t=GjzNhYhgLH_vQpPoLxjHnxhrAqkjC5x7AqNJznnVWLY",
    role: "Sponsership Team",
    description: "Reasearching potential sponsers and reaching out with proposals",
    github: "https://github.com/dot-ruth",
    twitter: "https://twitter.com/",
    linkedin: "https://www.linkedin.com/in/ruth-abiti-b8b737313/"
  },
  {
    name: "Medina Nesro",
    image: "https://media.licdn.com/dms/image/v2/D4E03AQGylRCjI0FgoQ/profile-displayphoto-shrink_200_200/B4EZTN3.ifGgAY-/0/1738620792522?e=1744848000&v=beta&t=Onvs0bSEQJcq0ktYJx7sG30W5LfhqDFnXc07wPjgGrE",
    role: "Logistics Manager",
    description: "Oversees logistics and ensures smooth operations.",
    github: "https://github.com/",
    twitter: "https://twitter.com/",
    linkedin: "https://www.linkedin.com/in/medina-nesro-297a44233/",
  },
  {
    name: "Eyob Tilahun",
    image: "https://avatars.githubusercontent.com/u/22914424?v=4",
    role: "Graphics Designer",
    description: "create different Graphics about devmeet-up v3 to be shared on across social medias",
    github: "https://github.com/eyobtilahun",
    twitter: "https://x.com/itseyobworld",
    linkedin: "https://www.linkedin.com/in/eyobtilahun/"
  }

];

export const keynoteSpeakers = [
  {
    name: "mirafe gebriel marcos ",
    image: mirafe,
    title: "Regional Director, African Leadership Group (ALG) / ALX",
    description: "a leading technology skills provider offering programs in digital transformation, business intelligence, and entrepreneurship.",
    linkedin: "https://www.linkedin.com/in/mirafegmarcos/",
    twitter: "https://x.com/GMirafe"
  },
  {
    name: "Beek Kefyalew",
    image: beek,
    title: "CEO of OPENFLOW",
    description: "Leading innovation in grant management solutions, driving OpenFlow's success with a commitment to excellence and efficiency.",
    linkedin: "https://www.linkedin.com/in/beek-kefyalew/",
    twitter: "https://twitter.com/"
  },
  {
    name: "someone",
    image: chapi,
    title: "someone from safaricom",
    description: "Gaming industry pioneer, leading the development of African-inspired games and fostering local talent.",
    linkedin: "https://www.linkedin.com/in/nael-hailemariam",
    github: "https://github.com/naelh"
  }
];