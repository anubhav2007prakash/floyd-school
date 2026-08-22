import { Zap, Users, Clock, BookOpen, ShieldCheck, Target, GraduationCap, Cpu, Code, Terminal, Brain, Globe, Star, Headphones, MessageSquare, Calendar, Video, Rocket } from 'lucide-react';

const AI_IMG = '/images/courses/AI&ML.png';
const IOT_IMG = '/images/courses/IOT.png';
const WEB_IMG = '/images/courses/WEB DEV.png';
const CYBER_IMG = '/images/courses/CYBER.png';

export const FALLBACK_COURSES = [
    {
        _id: '1',
        title: "FOUNDATIONS OF AI & MACHINE LEARNING",
        image: '/images/courses/ai_ml_robot.png',
        featured: true,
        icon: 'Cpu',
        status: 'published',
        description: "A hands on AI & Machine Learning program delivered on campus by Floyd mentors, with practical learning and real student projects.",
        detailedDescription: "A hands on AI & Machine Learning program delivered on campus by Floyd mentors, with practical learning and real student projects.",
        color: "#2563EB",
        duration: "4 Months",
        tags: ["AI", "Python", "ML", "Project Based"],
        live: true,
        deliveryDetails: { inSchool: { bootcamp: "1 Day Immersion", program: "4 Month Guided Program" } },
        curriculum: [
            "Neural Network Architectures",
            "Natural Language Processing",
            "Computer Vision & GANs",
            "Reinforcement Learning"
        ],
        outcomes: [
            "Build & Deploy AI Models",
            "Real World Student Projects",
            "National Hackathon Representation"
        ]
    },
    {
        _id: '2',
        title: "CODING & WEB DEVELOPMENT",
        image: '/images/courses/WEB DEV.png',
        icon: 'Code',
        status: 'published',
        description: "A practical coding and web development program where students build interactive web applications and software tools from scratch.",
        detailedDescription: "A practical coding and web development program where students build interactive web applications and software tools from scratch.",
        color: "#2563EB",
        duration: "4 Months",
        tags: ["Web Dev", "React", "JavaScript", "Project Based"],
        deliveryDetails: { inSchool: { bootcamp: "1 Day Immersion", program: "4 Month Guided Program" } },
        curriculum: [
            "Modern Web Architectures",
            "Frontend Systems & UI Design",
            "Backend APIs & Databases",
            "Full Product Launch"
        ],
        outcomes: [
            "Build Real Web Applications",
            "Frontend & Backend Mastery",
            "Live Project Portfolios"
        ]
    },
    {
        _id: '3',
        title: "IOT & ROBOTICS",
        image: '/images/courses/IOT.png',
        icon: 'Terminal',
        status: 'published',
        description: "A hands on IoT and robotics program where students program microcontrollers, sensors, and build automated physical systems.",
        detailedDescription: "A hands on IoT and robotics program where students program microcontrollers, sensors, and build automated physical systems.",
        color: "#2563EB",
        duration: "4 Months",
        tags: ["Robotics", "IoT", "Sensors", "Project Based"],
        deliveryDetails: { inSchool: { bootcamp: "1 Day Immersion", program: "4 Month Guided Program" } },
        curriculum: [
            "Microcontroller Programming",
            "Sensor Networks & Telemetry",
            "Automated Robotic Systems",
            "Physical Computing Prototypes"
        ],
        outcomes: [
            "Program Physical Robots",
            "IoT Smart Systems",
            "Hardware Innovation Showcases"
        ]
    },
    {
        _id: '4',
        title: "CYBERSECURITY & DIGITAL SAFETY",
        image: '/images/courses/CYBER.png',
        icon: 'Shield',
        status: 'published',
        description: "A comprehensive digital safety and cybersecurity program teaching students security fundamentals, ethical hacking principles, and network protection.",
        detailedDescription: "A comprehensive digital safety and cybersecurity program teaching students security fundamentals, ethical hacking principles, and network protection.",
        color: "#2563EB",
        duration: "4 Months",
        tags: ["Cybersecurity", "Network Safety", "Ethical Hacking", "Project Based"],
        deliveryDetails: { inSchool: { bootcamp: "1 Day Immersion", program: "4 Month Guided Program" } },
        curriculum: [
            "Network Architecture & Protocols",
            "Digital Safety & Defense",
            "Ethical Hacking Foundations",
            "Security Threat Analysis"
        ],
        outcomes: [
            "Secure System Defense",
            "Network Protection",
            "Cyber Safety Best Practices"
        ]
    },
    {
        _id: '5',
        title: "GENERATIVE AI & AI APPLICATIONS",
        image: '/startup_media/photo_5.jpg',
        icon: 'Rocket',
        status: 'published',
        description: "An interactive program exploring generative AI tools, prompt engineering, and intelligent application building for future innovators.",
        detailedDescription: "An interactive program exploring generative AI tools, prompt engineering, and intelligent application building for future innovators.",
        color: "#2563EB",
        duration: "4 Months",
        tags: ["GenAI", "LLMs", "AI Apps", "Project Based"],
        deliveryDetails: { inSchool: { bootcamp: "1 Day Immersion", program: "4 Month Guided Program" } },
        curriculum: [
            "Generative AI Models & LLMs",
            "Prompt Engineering & Workflows",
            "Intelligent Application Building",
            "Autonomous Agents"
        ],
        outcomes: [
            "Build Custom AI Tools",
            "LLM Applications",
            "Hands-on AI Products"
        ]
    }
];

export const schoolBenefits = [
    { title: "Campus Elevation", desc: "Elite engineering hubs in your labs." },
    { title: "Zero Setup Cost", desc: "No infrastructure investment required." },
    { title: "Flexible Scheduling", desc: "Fits your school's academic calendar." },
    { title: "Expert Led", desc: "Industrial veterans delivering training." },
    { title: "Real time Tracking", desc: "Performance insights for institutions." },
    { title: "Offline Impact", desc: "Hands on in school mastery." }
];

export const studentBenefits = [
    { title: "Self Paced Mastery", desc: "Learn with 24/7 portal access." },
    { title: "Global Community", desc: "Connect with world class engineers." },
    { title: "Production Portal", desc: "Build in real world IDEs." },
    { title: "Direct Mentorship", desc: "1 on 1 support from architects." },
    { title: "Independent Portfolio", desc: "Graduate with active GitHub apps." },
    { title: "Floyd School Online Batches", desc: "High octane online curriculum." }
];

export const supportRoles = [
    {
        title: "Adaptive Learning Systems",
        role: "Cognitive Engine",
        image: "/images/ecosystem/adaptive_learning.jpg",
        desc: "Personalized AI driven learning paths that adapt to individual student progress.",
        benefits: ["Personalized Pace", "Gap Analysis", "Dynamic Content"],
        icon: 'Brain',
        color: "from-blue-600 to-indigo-600",
        delay: 0
    },
    {
        title: "Professional Cloud IDE",
        role: "Engineering Workspace",
        image: "/images/ecosystem/cloud_ide.jpg",
        desc: "Industry standard cloud development environment for real world engineering.",
        benefits: ["Zero Setup", "Cloud Power", "Collab Tools"],
        icon: 'Code',
        color: "from-blue-500 to-cyan-400",
        delay: 0.1
    },
    {
        title: "Performance Analytics Center",
        role: "Industrial Dashboard",
        image: "/images/ecosystem/performance.jpg",
        desc: "Deep insights into student technical growth and skill acquisition metrics.",
        benefits: ["Real time Tracking", "Skill Heatmaps", "Progress Reports"],
        icon: 'Target',
        color: "from-slate-700 to-slate-900",
        delay: 0.2
    },
    {
        title: "Global Industry Network",
        role: "Professional Placement",
        image: "/images/ecosystem/networking.jpg",
        desc: "Connection to elite industrial partners and technical career opportunities.",
        benefits: ["Job Referrals", "Portfolio Review", "Exhibition Space"],
        icon: 'Globe',
        color: "from-blue-600 to-blue-800",
        delay: 0.3
    },
    {
        title: "Enterprise Security Protocols",
        role: "Data Protection",
        image: "/images/ecosystem/security.jpg",
        desc: "Advanced security training and zero trust protocol implementation mastery.",
        benefits: ["Threat Models", "Zero Trust", "Data Privacy"],
        icon: 'ShieldCheck',
        color: "from-indigo-600 to-purple-600",
        delay: 0.4
    },
    {
        title: "Neural Mentorship Network",
        role: "AI Diagnostics",
        image: "/images/ecosystem/mentorship.jpg",
        desc: "Direct access to AI augmented mentorship for immediate technical clearing.",
        benefits: ["Instant Doubt Clear", "Code Review", "Expert AMA"],
        icon: 'Zap',
        color: "from-slate-800 to-black",
        delay: 0.5
    }
];

export const SchoolSteps = [
    {
        title: "Strategy Scan",
        icon: 'School',
        color: "from-blue-500 to-blue-600"
    },
    {
        title: "Free Bootcamp",
        icon: 'Calendar',
        color: "from-blue-500 to-purple-600"
    },
    {
        title: "Lab Integration",
        icon: 'Cpu',
        color: "from-purple-500 to-blue-600"
    },
    {
        title: "Certification",
        icon: 'Trophy',
        color: "from-blue-500 to-[#2563EB]"
    }
];

export const StudentSteps = [
    {
        title: "Portal Access",
        icon: 'Globe',
        color: "from-cyan-500 to-blue-600"
    },
    {
        title: "Live Mentoring",
        icon: 'Video',
        color: "from-blue-500 to-blue-600"
    },
    {
        title: "Code Support",
        icon: 'MessageSquare',
        color: "from-blue-500 to-purple-600"
    },
    {
        title: "Career Launch",
        icon: 'Rocket',
        color: "from-purple-500 to-[#2563EB]"
    }
];

export const timelineSteps = [
    {
        phase: "Week 01",
        title: "Zero Risk Spark",
        subtitle: "Free Bootcamp",
        icon: 'Zap',
        description: "Deploy expert mentors for a seven day intensive bootcamp.",
        color: "bg-blue-500"
    },
    {
        phase: "Week 02",
        title: "Active Selection",
        subtitle: "Direct Enrollment",
        icon: 'Users',
        description: "Motivated students choose to continue their engineering journey.",
        color: "bg-purple-500"
    },
    {
        phase: "Ongoing",
        title: "Sync Integration",
        subtitle: "Zero Disruption",
        icon: 'Clock',
        description: "Classes mapped to existing periods with zero schedule overhead.",
        color: "bg-blue-500"
    },
    {
        phase: "Year Round",
        title: "Curriculum Sync",
        subtitle: "Academic Link",
        icon: 'BookOpen',
        description: "Modules aligned with school physics and math syllabus.",
        color: "bg-emerald-500"
    }
];

export const valueProps = [
    {
        icon: 'ShieldCheck',
        title: "Zero Setup Cost",
        description: "Elite innovation hubs in your labs at zero capital expenditure."
    },
    {
        icon: 'Target',
        title: "Industrial Edge",
        description: "Industry standard engineering training that elevates school status."
    },
    {
        icon: 'GraduationCap',
        title: "Elite Portfolio",
        description: "Students graduate with active GitHub apps and industrial experience."
    }
];

export const detailedCurriculums = {
    "1": {
        roadmap: [
            {
                month: "01",
                title: "Python Fundamentals",
                phaseDescription: "The absolute baseline: build high performance logic with world class Python patterns.",
                color: "primary",
                weeks: [
                    { week: "Week 01", title: "Python from Scratch", description: "Variables, Datatypes and Basic Logic." },
                    { week: "Week 02", title: "Loops & Functions", description: "Automating repetitive tasks with ease." },
                    { week: "Week 03", title: "Files & Libraries", description: "Handling external data and open source tools." },
                    { week: "Week 04", title: "Python Like a Pro", description: "Writing clean, production level code.", isSpecial: true }
                ]
            },
            {
                month: "02",
                title: "APIs, AI & ML",
                phaseDescription: "From static code to intelligent systems: Integrating LLMs and predictive models.",
                color: "secondary",
                weeks: [
                    { week: "Week 05", title: "ChatGPT & OpenAI API", description: "Integrating LLMs into your own projects." },
                    { week: "Week 06", title: "APIs & Live Data", description: "Connecting your apps to the real world." },
                    { week: "Week 07", title: "Intro to Machine Learning", description: "Teaching computers to recognize patterns." },
                    { week: "Week 08", title: "Classification", description: "Building models that predict and group data.", isSpecial: true }
                ]
            },
            {
                month: "03",
                title: "Vision, Web & Demo",
                phaseDescription: "The Grand Finale: Give your AI 'eyes' and deploy your masterpiece to the internet.",
                color: "primary",
                weeks: [
                    { week: "Week 09", title: "OpenCV & Vision", description: "Developing apps that can see and perceive." },
                    { week: "Week 10", title: "Flask Web Framework", description: "Turning scripts into web apps that anyone can use." },
                    { week: "Final Milestone", title: "Final Project & Demo Day", description: "Intensive building followed by a live global presentation of your Face Recognition system.", isSpecial: true }
                ]
            }
        ],
        finalProject: {
            title: "Face Recognition System",
            description: "Build a live system that opens the webcam, recognises student faces in real time, logs attendance automatically with timestamps and displays everything on a web dashboard. Every part of it written and built by you.",
            videoUrl: "https://www.youtube.com/embed/BREYIm9ctQU",
            features: [
                { icon: "👤", label: "Face Recognition Engine", desc: "Detects and identifies faces live using OpenCV and Dlib." },
                { icon: "📋", label: "Live Attendance Logger", desc: "Automatically records name and timestamp instantly." },
                { icon: "🖥️", label: "Flask Web Dashboard", desc: "View and manage records from a clean browser interface." }
            ]
        }
    },
    "5": {
        roadmap: [
            {
                month: "01",
                title: "30 Day Builder Roadmap",
                phaseDescription: "A high intensity sprint from software fundamentals to AI powered production apps.",
                color: "primary",
                weeks: [
                    { week: "Week 01", title: "Foundations of Software Development", description: "Mastering the core logic and architecture of modern software development." },
                    { week: "Week 02", title: "Building Real Applications", description: "Transitioning from simple scripts to fully functional, interactive user applications." },
                    { week: "Week 03", title: "AI Tool & Smart Applications", description: "Integrating LLMs and AI services to build intelligent, autonomous features." },
                    { week: "Week 04", title: "Final Project Build & Demo", description: "Intensive project building followed by a professional demo day presentation.", isSpecial: true }
                ]
            }
        ],
        finalProject: {
            title: "AI Personal Assistant",
            description: "Build your own voice activated AI personal assistant that can manage tasks, answer complex queries using GPT-4, and interact with external APIs to fetch real world data like weather or news.",
            videoUrl: "https://www.youtube.com/embed/BREYIm9ctQU",
            features: [
                { icon: "🎙️", label: "Voice Recognition", desc: "Process natural language commands in real time." },
                { icon: "🧠", label: "GPT-4 Integration", desc: "Powered by advanced LLMs for intelligent responses." },
                { icon: "🔌", label: "API Ecosystem", desc: "Connects with weather, maps, and productivity tools." }
            ]
        }
    }
};
