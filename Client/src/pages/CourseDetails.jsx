import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    ArrowLeft, 
    ArrowRight, 
    Download, 
    Sparkles, 
    Brain, 
    Cpu, 
    Code, 
    Layers, 
    Award, 
    Users, 
    CheckCircle2, 
    ChevronDown, 
    Calendar, 
    Terminal, 
    Lightbulb, 
    Rocket, 
    ShieldCheck, 
    Laptop, 
    Target,
    HelpCircle,
    Eye,
    MessageSquare,
    Compass,
    Wrench,
    Share2,
    BookOpen,
    Globe,
    School
} from 'lucide-react';
import SEO from '../components/common/SEO';
import sampleCertificate from '../assets/images/course_certificate.png';
import LeadFormModal from '../components/LeadFormModal';

/* ─── 4-Month AI & ML Roadmap Data ────────────────────────────── */
const MONTHLY_JOURNEY = [
    {
        monthNum: "01",
        monthTitle: "PYTHON & COMPUTATIONAL THINKING",
        subtitle: "Programming fundamentals, logic and data handling from the ground up.",
        badgeColor: "bg-blue-500/15 border-blue-500/30 text-blue-300",
        weeks: [
            { weekNum: "Week 01", title: "Python From Scratch", desc: "Variables, data types, basic logic and programming fundamentals." },
            { weekNum: "Week 02", title: "Logic, Loops & Functions", desc: "Build problem solving skills through programming challenges." },
            { weekNum: "Week 03", title: "Data, Files & Libraries", desc: "Work with data and explore useful Python libraries." },
            { weekNum: "Week 04", title: "Building With Python", desc: "Apply your foundations through practical coding projects." }
        ]
    },
    {
        monthNum: "02",
        monthTitle: "AI & MACHINE LEARNING",
        subtitle: "Understanding models, data preparation and introductory Machine Learning.",
        badgeColor: "bg-purple-500/15 border-purple-500/30 text-purple-300",
        weeks: [
            { weekNum: "Week 05", title: "Understanding AI", desc: "Learn how Artificial Intelligence works and how machines learn from data." },
            { weekNum: "Week 06", title: "Working With Data", desc: "Explore datasets, patterns and the fundamentals of preparing data for models." },
            { weekNum: "Week 07", title: "Machine Learning", desc: "Build and experiment with introductory Machine Learning models." },
            { weekNum: "Week 08", title: "AI In Action", desc: "Apply Machine Learning concepts to practical problems and guided projects." }
        ]
    },
    {
        monthNum: "03",
        monthTitle: "AI INNOVATION & COMPUTER VISION",
        subtitle: "Generative AI, modern AI tools, image understanding and application building.",
        badgeColor: "bg-indigo-500/15 border-indigo-500/30 text-indigo-300",
        weeks: [
            { weekNum: "Week 09", title: "Generative AI", desc: "Understand how modern AI systems generate text, images and other outputs." },
            { weekNum: "Week 10", title: "AI Tools & Applications", desc: "Learn how to use modern AI tools to research, create and solve problems responsibly." },
            { weekNum: "Week 11", title: "Computer Vision", desc: "Explore how AI can understand images, objects and visual information." },
            { weekNum: "Week 12", title: "Build With AI", desc: "Combine coding, AI and creative problem solving to develop an application." }
        ]
    },
    {
        monthNum: "04",
        monthTitle: "PROJECT BUILD & SHOWCASE",
        subtitle: "From idea to problem solving, iterative building, testing and final demonstration.",
        badgeColor: "bg-emerald-500/15 border-emerald-500/30 text-emerald-300",
        weeks: [
            { weekNum: "Week 13", title: "Idea To Problem", desc: "Identify a real problem and design a technology based solution." },
            { weekNum: "Week 14", title: "Build", desc: "Develop the project using Python, AI and other technologies learned during the program." },
            { weekNum: "Week 15", title: "Test & Improve", desc: "Test the solution, identify problems and improve the final build." },
            { weekNum: "Week 16", title: "Showcase", desc: "Present the project, explain the solution and demonstrate what you built." }
        ]
    }
];

/* ─── Project Examples ────────────────────────────────────────── */
const PROJECT_EXAMPLES = [
    { title: "AI CHATBOT", desc: "Build an intelligent conversational application.", icon: MessageSquare, gradient: "from-blue-500 to-indigo-600" },
    { title: "IMAGE CLASSIFIER", desc: "Train an AI system to recognise visual patterns.", icon: Eye, gradient: "from-purple-500 to-pink-600" },
    { title: "AI RECOMMENDATION SYSTEM", desc: "Create a system that makes intelligent recommendations.", icon: Sparkles, gradient: "from-amber-500 to-orange-600" },
    { title: "COMPUTER VISION APPLICATION", desc: "Use AI to understand images and visual information.", icon: Brain, gradient: "from-emerald-500 to-teal-600" },
    { title: "AI POWERED WEB APPLICATION", desc: "Combine AI with a functional digital product.", icon: Globe, gradient: "from-cyan-500 to-blue-600" },
    { title: "STUDENT INNOVATION PROJECT", desc: "Students can develop their own AI based solution around a problem they care about.", icon: Rocket, gradient: "from-rose-500 to-red-600" }
];

/* ─── Frequently Asked Questions ──────────────────────────────── */
const FAQS = [
    { q: "What classes is this program designed for?", a: "The program is designed for students from Classes 7 to 12." },
    { q: "Is prior coding experience required?", a: "No. Students begin with programming fundamentals and progressively move toward AI and Machine Learning." },
    { q: "How long is the program?", a: "The flagship school program runs for four months." },
    { q: "Where are the sessions conducted?", a: "The program is delivered on the partner school's campus according to the agreed school schedule." },
    { q: "What will students learn?", a: "Students explore Python, Artificial Intelligence, Machine Learning, Generative AI, Computer Vision and practical AI applications." },
    { q: "Will students build projects?", a: "Yes. Project based learning is a core part of the program. Students apply what they learn to build practical technology projects." },
    { q: "Do students receive a certificate?", a: "Students who complete the applicable program requirements receive a Floyd School certificate." },
    { q: "How is student progress tracked?", a: "Progress can be monitored through practical assessments and the Floyd Smart Portal for authorised school and parent users." }
];

const CourseDetails = () => {
    const { courseId } = useParams();
    const navigate = useNavigate();
    const [openFaqIndex, setOpenFaqIndex] = useState(null);
    const [isDiscoveryModalOpen, setIsDiscoveryModalOpen] = useState(false);
    const [expandedMonth, setExpandedMonth] = useState(0);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [courseId]);

    const handleDownloadBrochure = () => {
        const link = document.createElement('a');
        link.href = '/Floyd_School_Brochure.pdf';
        link.download = 'Floyd_School_Brochure.pdf';
        link.target = '_blank';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const scrollToSection = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="min-h-screen bg-[#050716] text-white selection:bg-purple-500 selection:text-white font-sans overflow-x-hidden">
            <SEO 
                title="Foundations of AI & Machine Learning — Floyd School" 
                description="4 Month In-School Program for Classes 7 to 12. Learn Python, AI, Machine Learning, Generative AI, and Computer Vision with Floyd mentors." 
            />

            {/* Glowing Ambient Mesh */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[140px]" />
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[140px]" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-500/5 rounded-full blur-[180px]" />
            </div>

            {/* Sticky Navigation Bar */}
            <nav className="fixed top-0 left-0 right-0 z-50 h-20 flex items-center justify-between px-6 md:px-12 backdrop-blur-2xl border-b border-white/10" style={{ background: 'rgba(5, 7, 22, 0.85)' }}>
                <Link to="/school-partnerships" className="flex items-center gap-3">
                    <img src="/logo-white.png" alt="Floyd School" className="h-7 sm:h-8 w-auto object-contain" />
                </Link>

                <div className="flex items-center gap-3">
                    <button 
                        onClick={() => navigate('/school-partnerships')}
                        className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-slate-300 hover:text-white hover:bg-white/5 transition-all border border-white/10 cursor-pointer"
                    >
                        <ArrowLeft size={14} /> BACK TO PROGRAMS
                    </button>
                    <button 
                        onClick={() => setIsDiscoveryModalOpen(true)}
                        className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:scale-[1.02] shadow-lg shadow-purple-600/30 transition-all cursor-pointer"
                    >
                        Explore Program
                    </button>
                </div>
            </nav>

            <div className="relative z-10 pt-28">

                {/* ── 1. PROGRAM DETAIL HERO ── */}
                <section className="py-16 md:py-24 px-6 md:px-12 max-w-7xl mx-auto border-b border-white/10">
                    <div className="grid lg:grid-cols-12 gap-12 items-center">
                        <div className="lg:col-span-7">
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-xs font-black uppercase tracking-[0.2em] mb-6 shadow-sm">
                                <Sparkles className="w-3.5 h-3.5 text-pink-400" />
                                4 MONTH IN SCHOOL PROGRAM
                            </div>

                            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight leading-[1.08] mb-6 text-white">
                                <span className="block text-sm sm:text-base font-semibold text-slate-400 mb-1">FOUNDATIONS OF</span>
                                <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">
                                    AI &amp; MACHINE LEARNING
                                </span>
                            </h1>

                            <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-6 font-medium max-w-2xl">
                                Explore how AI works, learn Python and Machine Learning fundamentals, experiment with modern AI tools, and build practical technology projects with Floyd mentors.
                            </p>

                            <div className="inline-block px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-emerald-400 font-bold text-xs uppercase tracking-wider mb-8">
                                Designed for Classes 7 to 12
                            </div>

                            <div className="flex flex-wrap items-center gap-4">
                                <button 
                                    onClick={() => setIsDiscoveryModalOpen(true)}
                                    className="px-8 py-4 rounded-xl font-black text-xs uppercase tracking-widest text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:scale-[1.02] shadow-xl shadow-purple-600/30 transition-all cursor-pointer flex items-center gap-2"
                                >
                                    Explore Program <ArrowRight size={15} />
                                </button>
                                <button 
                                    onClick={handleDownloadBrochure}
                                    className="px-6 py-4 rounded-xl font-bold text-xs uppercase tracking-widest text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-all cursor-pointer flex items-center gap-2"
                                >
                                    <Download size={15} /> Download Curriculum
                                </button>
                            </div>
                        </div>

                        {/* Real Classroom Hero Image */}
                        <div className="lg:col-span-5">
                            <div className="relative rounded-3xl overflow-hidden border border-white/15 bg-gradient-to-b from-purple-950/20 to-slate-900 shadow-2xl group">
                                <img 
                                    src="/images/courses/ai_ml_robot.png" 
                                    alt="Floyd Foundations of AI and Machine Learning" 
                                    className="w-full h-[340px] sm:h-[420px] object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#050716] via-transparent to-transparent" />
                                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[11px] font-bold text-white uppercase tracking-widest bg-black/70 backdrop-blur-md px-4 py-2.5 rounded-xl border border-white/10">
                                    <span>ON CAMPUS DELIVERY</span>
                                    <span className="text-purple-400">FLOYD MENTORS</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── 2. PROGRAM SNAPSHOT ── */}
                <section className="py-14 px-6 md:px-12 max-w-7xl mx-auto border-b border-white/10">
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                        {[
                            { title: "4 MONTHS", sub: "Structured Learning", icon: Calendar },
                            { title: "MENTOR LED", sub: "Expert Guidance", icon: Users },
                            { title: "70% HANDS ON", sub: "30% Theory", icon: Terminal },
                            { title: "PROJECT BASED", sub: "Build While Learning", icon: Layers },
                            { title: "CLASSES 7 TO 12", sub: "School Ready", icon: School }
                        ].map((snap, idx) => {
                            const Icon = snap.icon;
                            return (
                                <div key={idx} className="p-5 rounded-2xl border border-white/10 bg-white/[0.03] text-center flex flex-col items-center justify-center hover:border-purple-500/30 transition-all">
                                    <Icon className="w-5 h-5 text-purple-400 mb-2" />
                                    <span className="font-black text-white text-sm sm:text-base uppercase tracking-tight">{snap.title}</span>
                                    <span className="text-slate-400 text-xs font-medium mt-0.5">{snap.sub}</span>
                                </div>
                            );
                        })}
                    </div>
                </section>

                {/* ── 3. THE 4 MONTH LEARNING JOURNEY ── */}
                <section id="journey" className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-b border-white/10">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <span className="text-[11px] font-black uppercase tracking-[0.25em] text-purple-400 block mb-2">Curriculum Roadmap</span>
                        <h2 className="text-3xl sm:text-5xl font-black uppercase text-white tracking-tight mb-4">
                            THE 4 MONTH LEARNING JOURNEY
                        </h2>
                        <p className="text-slate-300 text-base sm:text-lg font-medium leading-relaxed">
                            From programming fundamentals to AI innovation and building real projects.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {MONTHLY_JOURNEY.map((month, mIdx) => (
                            <div 
                                key={mIdx}
                                className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-white/[0.01] p-6 sm:p-7 flex flex-col justify-between hover:border-purple-500/40 transition-all shadow-xl"
                            >
                                <div>
                                    <div className="flex items-center justify-between mb-4">
                                        <span className="text-xs font-black uppercase tracking-widest text-slate-400">MONTH</span>
                                        <span className={`px-3 py-1 rounded-full text-xs font-black ${month.badgeColor} border`}>
                                            {month.monthNum}
                                        </span>
                                    </div>
                                    <h3 className="text-lg font-black uppercase tracking-tight text-white mb-2 leading-tight">
                                        {month.monthTitle}
                                    </h3>
                                    <p className="text-xs text-slate-400 font-medium mb-6 leading-relaxed">
                                        {month.subtitle}
                                    </p>

                                    <div className="space-y-4 pt-4 border-t border-white/5">
                                        {month.weeks.map((wk, wIdx) => (
                                            <div key={wIdx} className="bg-black/40 rounded-xl p-3.5 border border-white/5">
                                                <div className="text-[10px] font-bold text-purple-400 uppercase tracking-wider mb-0.5">
                                                    {wk.weekNum}
                                                </div>
                                                <h4 className="text-xs font-black text-white mb-1">{wk.title}</h4>
                                                <p className="text-[11px] text-slate-400 leading-relaxed font-medium">{wk.desc}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* ── 4. AI INNOVATION (Key Thread Section) ── */}
                <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-b border-white/10">
                    <div className="rounded-3xl p-8 sm:p-14 border border-purple-500/30 bg-gradient-to-br from-indigo-950/40 via-purple-950/20 to-black relative overflow-hidden shadow-2xl">
                        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
                        
                        <div className="max-w-3xl mb-12 relative z-10">
                            <span className="text-[11px] font-black uppercase tracking-[0.25em] text-pink-400 block mb-2">AI Innovation</span>
                            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white mb-6">
                                DON'T JUST USE AI. BUILD WITH IT.
                            </h2>
                            <p className="text-slate-200 text-base sm:text-lg leading-relaxed font-medium mb-4">
                                Students go beyond simply asking AI questions.
                            </p>
                            <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-medium">
                                They learn how AI works, experiment with modern AI tools, combine AI with programming and turn ideas into working solutions.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
                            {[
                                { title: "EXPLORE", desc: "Understand AI, Machine Learning and Generative AI.", icon: Compass, color: "text-blue-400" },
                                { title: "EXPERIMENT", desc: "Test ideas using modern AI tools and technologies.", icon: Wrench, color: "text-purple-400" },
                                { title: "BUILD", desc: "Create practical applications using AI and code.", icon: Code, color: "text-pink-400" },
                                { title: "SOLVE", desc: "Use technology to address real problems and challenges.", icon: Target, color: "text-emerald-400" }
                            ].map((pillar, idx) => {
                                const Icon = pillar.icon;
                                return (
                                    <div key={idx} className="p-6 rounded-2xl bg-black/50 border border-white/10 backdrop-blur-md">
                                        <Icon className={`w-8 h-8 ${pillar.color} mb-4`} />
                                        <h3 className="font-black text-white text-lg uppercase tracking-tight mb-2">{pillar.title}</h3>
                                        <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-medium">{pillar.desc}</p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* ── 5. CAPSTONE PROJECT ── */}
                <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-b border-white/10">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <span className="text-[11px] font-black uppercase tracking-[0.25em] text-purple-400 block mb-2">Capstone Experience</span>
                        <h2 className="text-3xl sm:text-5xl font-black uppercase text-white tracking-tight mb-4">
                            BUILD SOMETHING REAL.
                        </h2>
                        <p className="text-slate-300 text-base sm:text-lg font-medium leading-relaxed">
                            Students apply everything they learn to create a practical AI or Machine Learning project with mentor guidance.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
                        {[
                            { step: "01", title: "IDEA", desc: "Choose a problem worth solving." },
                            { step: "02", title: "BUILD", desc: "Turn the idea into a working technology project." },
                            { step: "03", title: "IMPROVE", desc: "Test, refine and improve the solution." },
                            { step: "04", title: "SHOWCASE", desc: "Present the final project and demonstrate how it works." }
                        ].map((cap, idx) => (
                            <div key={idx} className="p-7 rounded-2xl border border-white/10 bg-white/[0.02] relative group hover:border-purple-500/40 transition-all">
                                <div className="text-4xl font-black text-purple-500/20 mb-4 group-hover:text-purple-400/40 transition-colors">
                                    {cap.step}
                                </div>
                                <h3 className="font-black text-white text-xl uppercase tracking-tight mb-2">{cap.title}</h3>
                                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-medium">{cap.desc}</p>
                            </div>
                        ))}
                    </div>

                    {/* ── 6. PROJECT EXAMPLES ── */}
                    <div>
                        <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-white mb-8 text-center sm:text-left">
                            PROJECT EXAMPLES
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {PROJECT_EXAMPLES.map((proj, idx) => {
                                const Icon = proj.icon;
                                return (
                                    <div key={idx} className="p-6 rounded-2xl border border-white/10 bg-white/[0.02] hover:border-purple-500/30 transition-all flex flex-col justify-between">
                                        <div>
                                            <div className="w-10 h-10 rounded-xl bg-purple-500/15 border border-purple-500/30 flex items-center justify-center mb-4 text-purple-300">
                                                <Icon size={20} />
                                            </div>
                                            <h4 className="font-black text-white text-base uppercase tracking-tight mb-2">{proj.title}</h4>
                                            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-medium">{proj.desc}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* ── 7. YOUR STUDENTS. OUR MENTORS. ── */}
                <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-b border-white/10">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <span className="text-[11px] font-black uppercase tracking-[0.25em] text-purple-400 block mb-2">Mentor-Led Pedagogy</span>
                        <h2 className="text-3xl sm:text-5xl font-black uppercase text-white tracking-tight mb-4">
                            YOUR STUDENTS. OUR MENTORS.
                        </h2>
                        <p className="text-slate-300 text-base sm:text-lg font-medium leading-relaxed">
                            Floyd mentors guide students through concepts, practical activities, coding and project development throughout the program.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { title: "EXPERT MENTORS", desc: "Learn directly from technology professionals." },
                            { title: "HANDS ON GUIDANCE", desc: "Students build alongside mentors instead of simply watching demonstrations." },
                            { title: "PROJECT SUPPORT", desc: "Mentors help students move from an idea to a working solution." },
                            { title: "REAL WORLD CONTEXT", desc: "Students understand where the technology they learn is actually used." }
                        ].map((item, idx) => (
                            <div key={idx} className="p-7 rounded-2xl border border-white/10 bg-white/[0.02] hover:border-purple-500/30 transition-all">
                                <h3 className="font-black text-white text-lg uppercase tracking-tight mb-2.5 text-purple-300">{item.title}</h3>
                                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-medium">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* ── 8. BUILT AROUND THE STUDENT ── */}
                <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-b border-white/10">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <span className="text-[11px] font-black uppercase tracking-[0.25em] text-purple-400 block mb-2">Student Architecture</span>
                        <h2 className="text-3xl sm:text-5xl font-black uppercase text-white tracking-tight mb-4">
                            BUILT AROUND THE STUDENT
                        </h2>
                        <p className="text-slate-300 text-base sm:text-lg font-medium leading-relaxed">
                            Everything is designed to move students from curiosity to creation.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { title: "WEEKLY ASSESSMENT", desc: "Track progress through practical tests, coding exercises and real world tasks." },
                            { title: "PROGRESS MONITORING", desc: "Student progress can be viewed through the Floyd Smart Portal by authorised school and parent users." },
                            { title: "1 ON 1 SUPPORT", desc: "Students receive individual guidance when they need additional help." },
                            { title: "PROJECT BASED LEARNING", desc: "Learning is reinforced through practical activities and real builds." },
                            { title: "AI & MODERN TECHNOLOGY", desc: "Students explore AI, Machine Learning, Generative AI, Computer Vision and other emerging technologies." },
                            { title: "CERTIFICATION", desc: "Students completing the applicable program requirements receive a Floyd School certificate." }
                        ].map((item, idx) => (
                            <div key={idx} className="p-6 rounded-2xl border border-white/10 bg-white/[0.02] hover:border-purple-500/30 transition-all">
                                <h3 className="font-black text-white text-base uppercase tracking-tight mb-2 text-white">{item.title}</h3>
                                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-medium">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* ── 9. FROM CLASSROOM TO CREATION (WHAT STUDENTS TAKE AWAY) ── */}
                <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-b border-white/10">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <span className="text-[11px] font-black uppercase tracking-[0.25em] text-purple-400 block mb-2">Core Outcomes</span>
                        <h2 className="text-3xl sm:text-5xl font-black uppercase text-white tracking-tight mb-2">
                            FROM CLASSROOM TO CREATION
                        </h2>
                        <p className="text-purple-400 text-sm font-black uppercase tracking-widest">
                            WHAT STUDENTS TAKE AWAY
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { title: "MODERN TECH EXPOSURE", desc: "AI, Machine Learning, Generative AI, Cybersecurity, IoT and Development." },
                            { title: "PRACTICAL SKILLS", desc: "Learn by building, testing and experimenting." },
                            { title: "PROBLEM SOLVING", desc: "Develop logical thinking and the ability to break complex problems into smaller parts." },
                            { title: "CREATIVE CONFIDENCE", desc: "Turn ideas into working technology projects." },
                            { title: "BUILDER MINDSET", desc: "Learn to experiment, troubleshoot and figure things out independently." },
                            { title: "PROJECT PORTFOLIO", desc: "Graduate with projects that demonstrate what they can actually build." }
                        ].map((item, idx) => (
                            <div key={idx} className="p-6 rounded-2xl border border-white/10 bg-white/[0.02] hover:border-purple-500/30 transition-all">
                                <h3 className="font-black text-white text-base uppercase tracking-tight mb-2 text-indigo-300">{item.title}</h3>
                                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-medium">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* ── 10. WHY FLOYD ── */}
                <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-b border-white/10">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <span className="text-[11px] font-black uppercase tracking-[0.25em] text-purple-400 block mb-2">The Floyd Advantage</span>
                        <h2 className="text-3xl sm:text-5xl font-black uppercase text-white tracking-tight mb-4">
                            WHY FLOYD
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { title: "ACTION OVER OBSERVATION", desc: "Students write code, build projects and solve problems instead of passively watching lessons." },
                            { title: "BUILDER MINDSET", desc: "We teach students how to think, experiment and solve problems, not just follow tutorials." },
                            { title: "INDUSTRY MENTORS", desc: "Students learn from professionals who bring real world context into the classroom." },
                            { title: "BEYOND THE CLASSROOM", desc: "AI, Machine Learning, Generative AI, Cybersecurity, IoT, Robotics and Development." },
                            { title: "DESIGNED FOR STUDENTS", desc: "Structured to keep students challenged without leaving beginners behind." },
                            { title: "REAL PROJECTS", desc: "Students finish with things they can demonstrate, explain and improve." }
                        ].map((item, idx) => (
                            <div key={idx} className="p-6 rounded-2xl border border-white/10 bg-white/[0.02] hover:border-purple-500/30 transition-all">
                                <h3 className="font-black text-white text-base uppercase tracking-tight mb-2 text-purple-300">{item.title}</h3>
                                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-medium">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* ── 11. STUDENT SHOWCASE & CERTIFICATION ── */}
                <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-b border-white/10">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <span className="text-[11px] font-black uppercase tracking-[0.25em] text-purple-400 block mb-2">Student Showcase</span>
                            <h2 className="text-3xl sm:text-4xl font-black uppercase text-white tracking-tight mb-4">
                                LEARNING SHOULD END IN SOMETHING YOU CAN SHOW.
                            </h2>
                            <p className="text-slate-300 text-sm sm:text-base font-medium leading-relaxed mb-8">
                                Students get opportunities to demonstrate their projects and explain the problems they solved.
                            </p>

                            <div className="flex flex-wrap gap-3 mb-10">
                                {['Build', 'Test', 'Present', 'Innovate'].map((tag, idx) => (
                                    <span key={idx} className="px-4 py-2 rounded-xl bg-purple-500/15 border border-purple-500/30 text-purple-300 font-bold text-xs uppercase tracking-wider">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <div className="border-t border-white/10 pt-8">
                                <span className="text-[11px] font-black uppercase tracking-[0.25em] text-emerald-400 block mb-2">Official Certification</span>
                                <h3 className="text-xl font-black uppercase text-white tracking-tight mb-3">
                                    RECOGNITION FOR THE JOURNEY
                                </h3>
                                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-medium mb-4">
                                    Students who complete the applicable program requirements receive a Floyd School certificate recognising their participation, learning and project work.
                                </p>
                                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                                    FLOYD SCHOOL • FOUNDATIONS OF AI &amp; MACHINE LEARNING • PROGRAM CERTIFICATE
                                </div>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="p-2 rounded-3xl border border-white/15 bg-gradient-to-br from-slate-900 to-black shadow-2xl">
                                <img 
                                    src={sampleCertificate} 
                                    alt="Floyd School AI & ML Program Certificate" 
                                    className="w-full h-auto rounded-2xl"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── 12. FREQUENTLY ASKED QUESTIONS ── */}
                <section className="py-24 px-6 md:px-12 max-w-4xl mx-auto border-b border-white/10">
                    <div className="text-center mb-16">
                        <span className="text-[11px] font-black uppercase tracking-[0.25em] text-purple-400 block mb-2">Clarifications</span>
                        <h2 className="text-3xl sm:text-5xl font-black uppercase text-white tracking-tight mb-4">
                            FREQUENTLY ASKED QUESTIONS
                        </h2>
                    </div>

                    <div className="space-y-4">
                        {FAQS.map((faq, idx) => {
                            const isOpen = openFaqIndex === idx;
                            return (
                                <div key={idx} className="rounded-2xl border border-white/10 bg-white/[0.02] overflow-hidden">
                                    <button 
                                        onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                                        className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-white/5 transition-colors"
                                    >
                                        <span className="font-bold text-white text-sm sm:text-base">{faq.q}</span>
                                        <ChevronDown size={18} className={`text-purple-400 transition-transform duration-300 shrink-0 ${isOpen ? 'rotate-180' : ''}`} />
                                    </button>
                                    <AnimatePresence>
                                        {isOpen && (
                                            <motion.div 
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: 'auto', opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                className="overflow-hidden"
                                            >
                                                <div className="px-6 pb-6 pt-2 text-slate-300 text-xs sm:text-sm leading-relaxed border-t border-white/5 font-medium">
                                                    {faq.a}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            );
                        })}
                    </div>
                </section>

                {/* ── 13. READY TO BUILD? (FINAL CTA) ── */}
                <section className="py-24 px-6 md:px-12 max-w-5xl mx-auto text-center">
                    <div className="rounded-3xl p-10 sm:p-16 border border-purple-500/30 bg-gradient-to-b from-[#0d102e] to-[#050716] shadow-2xl relative overflow-hidden">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-xs font-black uppercase tracking-widest mb-6">
                            READY TO BUILD?
                        </div>
                        <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white mb-6">
                            GIVE STUDENTS A REAL EXPERIENCE WITH TECHNOLOGY.
                        </h2>
                        <p className="text-slate-300 text-sm sm:text-base font-medium max-w-2xl mx-auto leading-relaxed mb-10">
                            Start with Floyd's complimentary 1 Day AI &amp; Technology Immersion and let students experience our hands on approach before continuing into the full program.
                        </p>
                        <div className="flex flex-wrap items-center justify-center gap-4">
                            <button 
                                onClick={() => setIsDiscoveryModalOpen(true)}
                                className="px-8 py-4 rounded-xl font-black text-xs uppercase tracking-widest text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:scale-[1.02] shadow-xl shadow-purple-600/30 transition-all cursor-pointer"
                            >
                                Book a Discovery Session
                            </button>
                            <button 
                                onClick={handleDownloadBrochure}
                                className="px-8 py-4 rounded-xl font-bold text-xs uppercase tracking-widest text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-all cursor-pointer flex items-center gap-2"
                            >
                                <Download size={15} /> Download Curriculum
                            </button>
                        </div>
                    </div>
                </section>

                {/* ── 14. FOOTER ── */}
                <footer className="border-t border-white/10 bg-black/60 py-16 px-6 md:px-12 text-slate-400 text-xs">
                    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
                        <div>
                            <img src="/logo-white.png" alt="Floyd School" className="h-7 w-auto object-contain mb-4" />
                            <p className="text-slate-400 text-xs leading-relaxed font-medium">
                                Helping students move beyond textbooks, explore modern technology and build real solutions.
                            </p>
                        </div>

                        <div>
                            <h4 className="font-bold text-white uppercase tracking-wider mb-4">Company</h4>
                            <ul className="space-y-2 font-medium">
                                <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
                                <li><Link to="/school-partnerships" className="hover:text-white transition-colors">School Partnerships</Link></li>
                                <li><Link to="/school-partnerships#online-focus" className="hover:text-white transition-colors">Programs</Link></li>
                                <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
                                <li><Link to="/terms" className="hover:text-white transition-colors">Terms &amp; Conditions</Link></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-bold text-white uppercase tracking-wider mb-4">Explore</h4>
                            <ul className="space-y-2 font-medium">
                                <li><Link to="/school-partnerships#online-focus" className="hover:text-white transition-colors">All Programs</Link></li>
                                <li><Link to="/school-partnerships#student-projects" className="hover:text-white transition-colors">Student Projects</Link></li>
                                <li><Link to="/school-partnerships#bootcamp-gallery" className="hover:text-white transition-colors">Bootcamp Gallery</Link></li>
                                <li><Link to="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
                                <li><a href="/Floyd_School_Brochure.pdf" download className="hover:text-white transition-colors">Downloads</a></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-bold text-white uppercase tracking-wider mb-4">Student Portal</h4>
                            <ul className="space-y-2 font-medium">
                                <li><Link to="/login" className="hover:text-white transition-colors">Student Login</Link></li>
                                <li><Link to="/student/signup" className="hover:text-white transition-colors">Classroom Access</Link></li>
                                <li><Link to="/student/dashboard" className="hover:text-white transition-colors">Progress Tracking</Link></li>
                            </ul>
                        </div>
                    </div>

                    <div className="max-w-7xl mx-auto pt-8 border-t border-white/5 text-center text-slate-500 text-[11px] font-bold uppercase tracking-widest">
                        EVERY STUDENT HAS A DESTINATION. WE FIND THE SHORTEST PATH.
                    </div>
                </footer>

            </div>

            {/* Discovery / Lead Form Modal */}
            <LeadFormModal 
                isOpen={isDiscoveryModalOpen}
                onClose={() => setIsDiscoveryModalOpen(false)}
                defaultTitle="Book a Discovery Session"
            />
        </div>
    );
};

export default CourseDetails;
