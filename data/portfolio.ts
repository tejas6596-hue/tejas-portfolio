export interface Project {
  id: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  problem: string;
  solution: string;
  features: string[];
  techStack: string[];
  image: string;
  githubUrl: string;
  demoUrl?: string;
}

export interface Certification {
  id: string;
  title: string;
  subtitle: string;
  issuer: string;
  year: string;
  category: string;
  filePath: string;
  verified: boolean;
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  period: string;
  score?: string;
  description: string;
}

export interface Strength {
  title: string;
  desc: string;
  icon: string;
}

export const PORTFOLIO_DATA = {
  personal: {
    name: "Tejas K",
    brand: "TEJAS.",
    role: "Full-Stack Developer / MCA Candidate",
    headline: "Building modern digital experiences with code, creativity and problem solving.",
    bio: "Master of Computer Applications (MCA) student at Christ University, Central Campus. Passionate about building production-grade web applications, cloud infrastructure, and solving real-world software engineering challenges.",
    email: "tejas6596@gmail.com",
    phone: "+91 8197893919",
    location: "SG Palya, Bengaluru, Karnataka - 560029",
    profileImage: "/profile/profile.JPG",
    resumePath: "/resume/Tejas_K_Resume.pdf",
    status: "Available for Software Engineering Internships & Roles",
    roles: [
      "Full-Stack Developer",
      "React & Next.js Developer",
      "Java & Spring Boot Engineer",
      "Cloud Computing Enthusiast",
      "Problem Solver & MCA Candidate"
    ],
    social: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      email: "mailto:tejas6596@gmail.com",
      phone: "tel:+918197893919"
    }
  },

  education: [
    {
      degree: "Master of Computer Applications (MCA)",
      institution: "Christ University, Central Campus",
      location: "Bengaluru, Karnataka",
      period: "2024 — Present",
      score: "Pursuing",
      description: "Focusing on software architecture, advanced full-stack application development, distributed systems, cloud computing, and enterprise database systems."
    },
    {
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "Tumkur University",
      location: "Tumkur, Karnataka",
      period: "2021 — 2024",
      score: "CGPA: 8.61",
      description: "Graduated with distinction. Rigorous coursework in Data Structures, Object-Oriented Programming, RDBMS, Web Technologies, and Software Engineering principles."
    }
  ] as Education[],

  skillCategories: [
    {
      name: "Programming Languages",
      skills: [
        { name: "Java", level: "Advanced" },
        { name: "Python", level: "Intermediate" },
        { name: "JavaScript", level: "Advanced" },
        { name: "TypeScript", level: "Intermediate" },
        { name: "C", level: "Intermediate" },
        { name: "C++", level: "Intermediate" },
        { name: "PHP", level: "Basic" },
        { name: "R-Programming", level: "Basic" }
      ]
    },
    {
      name: "Frontend Development",
      skills: [
        { name: "React.js", level: "Advanced" },
        { name: "Next.js", level: "Intermediate" },
        { name: "Tailwind CSS", level: "Advanced" },
        { name: "HTML5", level: "Advanced" },
        { name: "CSS3", level: "Advanced" },
        { name: "Bootstrap", level: "Intermediate" }
      ]
    },
    {
      name: "Backend & Databases",
      skills: [
        { name: "Spring Boot", level: "Advanced" },
        { name: "Node.js", level: "Intermediate" },
        { name: "Express", level: "Intermediate" },
        { name: "REST APIs", level: "Advanced" },
        { name: "MySQL", level: "Advanced" },
        { name: "SQLite", level: "Intermediate" },
        { name: "JDBC", level: "Advanced" }
      ]
    },
    {
      name: "Tools & Cloud",
      skills: [
        { name: "Git", level: "Advanced" },
        { name: "GitHub", level: "Advanced" },
        { name: "VS Code", level: "Advanced" },
        { name: "Postman", level: "Advanced" },
        { name: "Maven", level: "Intermediate" },
        { name: "AWS Academy Cloud", level: "Certified" },
        { name: "IBM Cloud Essentials", level: "Certified" }
      ]
    }
  ],

  projects: [
    {
      id: "smart-recruitment",
      title: "Smart AI Recruitment System",
      category: "Full Stack",
      tagline: "End-to-end recruitment platform with candidate management & analytics.",
      description: "An end-to-end recruitment platform with secure authentication, candidate management, and a recruiter dashboard. Engineered with RESTful APIs and a normalized relational database schema.",
      problem: "Traditional hiring processes suffer from manual resume screening bottlenecks, inconsistent candidate tracking, and lack of unified recruiter analytics.",
      solution: "Built a centralized web system featuring role-based authentication, candidate tracking pipelines, automated evaluation metrics, and relational database persistence.",
      features: [
        "Secure recruiter and candidate authentication mechanisms",
        "Normalized relational database schema optimized for candidate query retrieval",
        "Robust RESTful API service layer built with Spring Boot",
        "Dynamic recruiter dashboard created with React for real-time candidate management"
      ],
      techStack: ["Spring Boot", "React", "MySQL", "REST APIs", "Tailwind CSS"],
      image: "/projects/smart-recruitment.png",
      githubUrl: "https://github.com",
      demoUrl: ""
    },
    {
      id: "park-easy",
      title: "ParkEasy",
      category: "Web App",
      tagline: "Smart real-time parking spot reservation and location discovery system.",
      description: "A smart parking reservation system enabling users to search, view, and book available slots in real time. Integrated with mapping APIs to visually locate and select nearby parking spaces.",
      problem: "Drivers in congested urban areas lose time and fuel looking for parking spaces due to zero real-time visibility into availability.",
      solution: "Developed an interactive web app integrating mapping APIs, live slot state updates, and instantaneous booking confirmations.",
      features: [
        "Interactive map UI utilizing Google Maps API for spatial parking spot discovery",
        "Live indicator toggling between available and reserved parking slots",
        "Seamless reservation workflow with dynamic fee computation",
        "Mobile-first responsive interface design"
      ],
      techStack: ["JavaScript", "Tailwind CSS", "Google Maps API", "HTML5"],
      image: "/projects/park-easy.png",
      githubUrl: "https://github.com",
      demoUrl: ""
    },
    {
      id: "train-booking",
      title: "Train Ticket Booking System",
      category: "Java",
      tagline: "Robust Java desktop & database booking engine for railway seat reservation.",
      description: "A robust booking engine supporting user authentication, dynamic seat reservation, and secure cancellation workflows with persistent data storage.",
      problem: "Ticketing services need strict transactional integrity, ACID guarantees, and dynamic seat map synchronization under heavy booking load.",
      solution: "Architected a pure Java engine using JDBC transaction boundaries and SQL relational procedures for crash-safe booking operations.",
      features: [
        "ACID-compliant transaction processing for ticket issuance and cancellations",
        "JDBC database connectivity with prepared statement parameterized security",
        "Dynamic seat availability calculation and passanger roster tracking",
        "User registration, login, and transaction history log"
      ],
      techStack: ["Java", "JDBC", "MySQL", "SQL"],
      image: "/projects/train-booking.png",
      githubUrl: "https://github.com",
      demoUrl: ""
    },
    {
      id: "skill-exchange",
      title: "Skill Exchange Platform",
      category: "Python",
      tagline: "Peer-to-peer mentorship and skill sharing community platform.",
      description: "A peer-to-peer platform designed to connect learners with mentors. Features complete user registration, skill listing, and advanced search functionality.",
      problem: "Students lack structured networks to find peer mentors for specialized coding and technical skills.",
      solution: "Built a community matching web platform where students list their expertise and request pair-learning sessions with mentors.",
      features: [
        "Dual mentor/learner profile registration system",
        "Searchable skill database with tag indexing and keyword filters",
        "Session scheduling and peer communication requests",
        "Persistent SQLite data store for profiles and listings"
      ],
      techStack: ["Python", "SQLite", "HTML/CSS"],
      image: "/projects/skill-exchange.png",
      githubUrl: "https://github.com",
      demoUrl: ""
    }
  ] as Project[],

  certifications: [
    {
      id: "aws-cloud",
      title: "AWS Academy Cloud Foundations",
      subtitle: "Cloud Computing Fundamentals",
      issuer: "AWS Academy",
      year: "2024",
      category: "Cloud",
      filePath: "/certificates/aws-cloud-foundations.pdf",
      verified: true
    },
    {
      id: "ibm-cloud-essentials",
      title: "IBM Cloud Essentials",
      subtitle: "Cloud Architecture & Services",
      issuer: "IBM",
      year: "2024",
      category: "Cloud",
      filePath: "/certificates/ibm-cloud-essentials.pdf",
      verified: true
    },
    {
      id: "ibm-cloud-fundamentals",
      title: "IBM Cloud Computing Fundamentals",
      subtitle: "Infrastructure & Virtualization",
      issuer: "IBM",
      year: "2024",
      category: "Cloud",
      filePath: "/certificates/ibm-cloud-fundamentals.pdf",
      verified: true
    },
    {
      id: "ibm-skillsbuild",
      title: "IBM SkillsBuild - Introduction to Cloud",
      subtitle: "Foundational Cloud Concepts",
      issuer: "IBM SkillsBuild",
      year: "2023",
      category: "Cloud",
      filePath: "/certificates/ibm-skillsbuild-cloud.pdf",
      verified: true
    },
    {
      id: "c-programming",
      title: "C Programming Certification",
      subtitle: "Core Algorithms & Memory Management",
      issuer: "Professional Certification",
      year: "2023",
      category: "Programming",
      filePath: "/certificates/c-programming.pdf",
      verified: true
    }
  ] as Certification[],

  strengths: [
    {
      title: "Problem Solving",
      desc: "Strong algorithmic mindset with a methodical approach to analyzing complex system bottlenecks and debugging errors.",
      icon: "Brain"
    },
    {
      title: "Quick Learner",
      desc: "Eager and fast at mastering new programming paradigms, cloud services, and full-stack frameworks.",
      icon: "Zap"
    },
    {
      title: "Communication",
      desc: "Articulate in technical discussions, clean documentation writing, and team progress updates.",
      icon: "MessageSquare"
    },
    {
      title: "Team Collaboration",
      desc: "Adept at Git feature branch workflows, code reviews, and productive cross-functional pair programming.",
      icon: "Users"
    },
    {
      title: "Time Management",
      desc: "Efficient project planning, prioritizing critical path tasks to consistently meet delivery milestones.",
      icon: "Clock"
    },
    {
      title: "Leadership & Adaptability",
      desc: "Proactively takes ownership of project architecture while remaining highly flexible to changing requirements.",
      icon: "Award"
    }
  ] as Strength[]
};
