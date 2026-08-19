import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, CheckCircle2, User, BookOpen, BarChart3, Clock, Sparkles } from 'lucide-react';

const LMS_CARDS = [
  {
    id: 'dashboard',
    title: 'Student Dashboard',
    mockupType: 'dashboard',
    color: '#3B82F6',
  },
  {
    id: 'courses',
    title: 'My Courses',
    mockupType: 'courses',
    color: '#8B5CF6',
  },
  {
    id: 'quiz',
    title: 'Quiz Analytics',
    mockupType: 'quiz',
    color: '#10B981',
  },
  {
    id: 'session',
    title: 'Session Reports',
    mockupType: 'session',
    color: '#00D4FF',
  },
  {
    id: 'progress',
    title: 'Student Progress',
    mockupType: 'progress',
    color: '#F59E0B',
  },
  {
    id: 'teacher',
    title: 'Teacher Portal',
    mockupType: 'teacher',
    color: '#EC4899',
  },
  {
    id: 'qa',
    title: 'Q&A Hub',
    mockupType: 'qa',
    color: '#14B8A6',
  },
  {
    id: 'referrals',
    title: 'Student Referrals',
    mockupType: 'referrals',
    color: '#FB7185',
  },
];

/* ── UI Mockup Visual Components matching Setu100 LMS Interface ── */
const MockupStudentDashboard = () => (
  <div className="w-full h-full bg-slate-50 flex flex-col font-sans text-[10px] select-none overflow-hidden rounded-2xl border border-slate-200/80 shadow-inner">
    {/* Top Header */}
    <div className="h-10 px-3 flex items-center justify-between text-white" style={{ background: 'linear-gradient(90deg, #6366F1 0%, #A855F7 50%, #38BDF8 100%)' }}>
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center font-bold text-white text-[9px]">A</div>
        <div>
          <div className="font-bold leading-none text-white text-[10px]">Abhay Kumar Narayanan</div>
          <div className="text-[8px] text-white/70">Class 9 A • Student</div>
        </div>
      </div>
      <div className="flex items-center gap-1.5 bg-white/10 px-2 py-0.5 rounded-full border border-white/20">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
        <span className="font-bold text-[8px]">FLOYD SCHOOL LMS</span>
      </div>
    </div>

    {/* Body */}
    <div className="flex-1 flex overflow-hidden">
      {/* Sidebar */}
      <div className="w-16 bg-white border-r border-slate-200/60 p-2 space-y-1.5 hidden sm:block">
        {['Dashboard', 'My Courses', 'Live Labs', 'Quizzes', 'Reports', 'Settings'].map((item, i) => (
          <div key={item} className={`px-1.5 py-1 rounded-md text-[8px] font-bold ${i === 0 ? 'bg-indigo-50 text-indigo-600' : 'text-slate-500'}`}>
            {item}
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="flex-1 p-3 space-y-2.5 overflow-hidden">
        {/* Banner */}
        <div className="bg-indigo-600 text-white rounded-xl p-2.5 flex items-center justify-between shadow-sm">
          <div>
            <div className="font-extrabold text-[11px]">Hello, Abhay! Welcome back</div>
            <div className="text-[8px] text-indigo-200">You have 2 upcoming AI & Robotics sessions this week.</div>
          </div>
          <button className="bg-white text-indigo-600 px-2.5 py-1 rounded-lg text-[8px] font-bold shadow-sm">
            View Schedule
          </button>
        </div>

        {/* Stats 4-Grid */}
        <div className="grid grid-cols-2 gap-2">
          <div className="bg-white p-2 rounded-xl border border-slate-200/60 flex items-center gap-2">
            <div className="w-6 h-6 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center font-bold">1</div>
            <div>
              <div className="text-[8px] text-slate-400 font-semibold">Active Courses</div>
              <div className="text-[10px] font-extrabold text-slate-800">Foundations of AI</div>
            </div>
          </div>
          <div className="bg-white p-2 rounded-xl border border-slate-200/60 flex items-center gap-2">
            <div className="w-6 h-6 rounded-lg bg-pink-50 text-pink-600 flex items-center justify-center font-bold">5</div>
            <div>
              <div className="text-[8px] text-slate-400 font-semibold">Completed Labs</div>
              <div className="text-[10px] font-extrabold text-slate-800">100% Passed</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const MockupMyCourses = () => (
  <div className="w-full h-full bg-slate-50 flex flex-col font-sans text-[10px] select-none overflow-hidden rounded-2xl border border-slate-200/80 shadow-inner">
    {/* Header */}
    <div className="h-9 px-3 bg-white border-b border-slate-200/60 flex items-center justify-between">
      <div className="font-extrabold text-slate-800 text-[11px]">Courses</div>
      <div className="flex gap-1 text-[8px] font-bold">
        <span className="px-2 py-0.5 rounded-full bg-indigo-600 text-white">ENROLLED</span>
        <span className="px-2 py-0.5 rounded-full text-slate-400">ACTIVE</span>
        <span className="px-2 py-0.5 rounded-full text-slate-400">COMPLETED</span>
      </div>
    </div>

    {/* Course Grid */}
    <div className="p-3 flex-1 grid grid-cols-2 gap-2.5">
      <div className="bg-white rounded-xl border border-slate-200/80 overflow-hidden flex flex-col justify-between shadow-sm">
        <div className="h-16 bg-gradient-to-r from-blue-600 to-indigo-600 p-2 text-white flex flex-col justify-between">
          <span className="text-[7px] bg-white/20 px-1.5 py-0.5 rounded w-max font-bold">PYTHON & AI</span>
          <div className="font-extrabold text-[9px] leading-tight">Web & Mobile App Development with AI</div>
        </div>
        <div className="p-2 space-y-1.5">
          <div className="flex justify-between text-[7px] text-slate-500 font-bold">
            <span>PROGRESS</span>
            <span className="text-indigo-600">65%</span>
          </div>
          <div className="w-full bg-slate-100 rounded-full h-1.5 overflow-hidden">
            <div className="bg-indigo-600 h-full w-[65%]" />
          </div>
          <button className="w-full py-1 rounded-lg bg-indigo-600 text-white text-[8px] font-bold">
            Continue Learning
          </button>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-slate-200/80 overflow-hidden flex flex-col justify-between shadow-sm">
        <div className="h-16 bg-gradient-to-r from-purple-600 to-pink-600 p-2 text-white flex flex-col justify-between">
          <span className="text-[7px] bg-white/20 px-1.5 py-0.5 rounded w-max font-bold">ROBOTICS</span>
          <div className="font-extrabold text-[9px] leading-tight">Autonomous Robotics & Microcontrollers</div>
        </div>
        <div className="p-2 space-y-1.5">
          <div className="flex justify-between text-[7px] text-slate-500 font-bold">
            <span>PROGRESS</span>
            <span className="text-purple-600">80%</span>
          </div>
          <div className="w-full bg-slate-100 rounded-full h-1.5 overflow-hidden">
            <div className="bg-purple-600 h-full w-[80%]" />
          </div>
          <button className="w-full py-1 rounded-lg bg-purple-600 text-white text-[8px] font-bold">
            Continue Learning
          </button>
        </div>
      </div>
    </div>
  </div>
);

const MockupQuizAnalytics = () => (
  <div className="w-full h-full bg-slate-50 flex flex-col font-sans text-[9px] select-none overflow-hidden rounded-2xl border border-slate-200/80 shadow-inner">
    <div className="h-9 px-3 bg-white border-b border-slate-200/60 flex items-center justify-between">
      <div className="font-extrabold text-slate-800 text-[11px]">Quiz Analytics & Performance</div>
      <span className="text-[8px] bg-emerald-50 text-emerald-600 font-bold px-2 py-0.5 rounded-full border border-emerald-200">92% PASS RATE</span>
    </div>

    <div className="p-2.5 flex-1 overflow-hidden space-y-1.5">
      <div className="bg-white rounded-xl border border-slate-200/60 overflow-hidden shadow-sm">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-100/70 text-slate-500 text-[7px] font-extrabold uppercase border-b border-slate-200/60">
              <th className="p-1.5">Quiz Name</th>
              <th className="p-1.5">Course</th>
              <th className="p-1.5">Score</th>
              <th className="p-1.5">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-[8px]">
            <tr>
              <td className="p-1.5 font-bold text-slate-800">Python Basics Quiz 1</td>
              <td className="p-1.5 text-slate-500">AI Foundations</td>
              <td className="p-1.5 font-extrabold text-emerald-600">18 / 20</td>
              <td className="p-1.5"><span className="bg-emerald-100 text-emerald-700 px-1.5 py-0.5 rounded text-[7px] font-bold">PASSED</span></td>
            </tr>
            <tr>
              <td className="p-1.5 font-bold text-slate-800">Robotics Circuits Test</td>
              <td className="p-1.5 text-slate-500">Robotics & IoT</td>
              <td className="p-1.5 font-extrabold text-emerald-600">19 / 20</td>
              <td className="p-1.5"><span className="bg-emerald-100 text-emerald-700 px-1.5 py-0.5 rounded text-[7px] font-bold">PASSED</span></td>
            </tr>
            <tr>
              <td className="p-1.5 font-bold text-slate-800">Web Dev HTML/CSS Lab</td>
              <td className="p-1.5 text-slate-500">Web Development</td>
              <td className="p-1.5 font-extrabold text-indigo-600">20 / 20</td>
              <td className="p-1.5"><span className="bg-indigo-100 text-indigo-700 px-1.5 py-0.5 rounded text-[7px] font-bold">EXCELLENT</span></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

const MockupSessionReports = () => (
  <div className="w-full h-full bg-slate-50 flex flex-col font-sans text-[9px] select-none overflow-hidden rounded-2xl border border-slate-200/80 shadow-inner">
    <div className="h-9 px-3 bg-white border-b border-slate-200/60 flex items-center justify-between">
      <div className="font-extrabold text-slate-800 text-[11px]">Session & Lab Summary</div>
      <span className="text-[8px] bg-sky-50 text-sky-600 font-bold px-2 py-0.5 rounded-full border border-sky-200">LIVE SYNC</span>
    </div>

    <div className="p-3 flex-1 grid grid-cols-2 gap-2">
      {[
        { label: 'Total Sessions', val: '186', color: '#0284C7', bg: '#F0F9FF' },
        { label: 'Completed Labs', val: '18', color: '#059669', bg: '#ECFDF5' },
        { label: 'Remaining Labs', val: '168', color: '#D97706', bg: '#FFFBEB' },
        { label: 'Active Batches', val: '31', color: '#7C3AED', bg: '#F5F3FF' },
      ].map((card) => (
        <div key={card.label} className="p-2.5 rounded-xl border border-slate-200/60 flex flex-col justify-between" style={{ background: card.bg }}>
          <div className="text-[8px] font-bold uppercase tracking-wider text-slate-500">{card.label}</div>
          <div className="text-xl font-black mt-1" style={{ color: card.color }}>{card.val}</div>
        </div>
      ))}
    </div>
  </div>
);

const MockupStudentProgress = () => (
  <div className="w-full h-full bg-slate-50 flex flex-col font-sans text-[9px] select-none overflow-hidden rounded-2xl border border-slate-200/80 shadow-inner">
    <div className="h-9 px-3 bg-white border-b border-slate-200/60 flex items-center justify-between">
      <div className="font-extrabold text-slate-800 text-[11px]">Competency Growth Tracker</div>
      <span className="text-[8px] bg-amber-50 text-amber-600 font-bold px-2 py-0.5 rounded-full border border-amber-200">+38% YoY</span>
    </div>

    <div className="p-3 flex-1 flex items-end justify-between gap-1.5 bg-gradient-to-b from-amber-50/40 to-amber-100/30">
      {[45, 60, 50, 75, 85, 70, 95, 90, 100].map((h, i) => (
        <div key={i} className="flex-1 bg-gradient-to-t from-amber-500 to-amber-400 rounded-t-md transition-all duration-500 hover:brightness-110" style={{ height: `${h}%` }} />
      ))}
    </div>
  </div>
);

const MockupTeacherPortal = () => (
  <div className="w-full h-full bg-slate-50 flex flex-col font-sans text-[9px] select-none overflow-hidden rounded-2xl border border-slate-200/80 shadow-inner">
    <div className="h-9 px-3 bg-white border-b border-slate-200/60 flex items-center justify-between">
      <div className="font-extrabold text-slate-800 text-[11px]">Faculty & Parent Dashboard</div>
      <span className="text-[8px] bg-pink-50 text-pink-600 font-bold px-2 py-0.5 rounded-full border border-pink-200">CLASS 9 A</span>
    </div>

    <div className="p-2.5 flex-1 space-y-2">
      <div className="bg-white p-2 rounded-xl border border-slate-200/60 flex items-center justify-between shadow-sm">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-pink-100 text-pink-600 flex items-center justify-center font-bold text-[8px]">T</div>
          <div>
            <div className="font-bold text-slate-800">Attendance Automated</div>
            <div className="text-[7px] text-slate-400">98.4% Presence across 31 Schools</div>
          </div>
        </div>
        <span className="text-[7px] bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded font-bold">VERIFIED</span>
      </div>
    </div>
  </div>
);

const MockupQAHub = () => (
  <div className="w-full h-full bg-slate-50 flex flex-col font-sans text-[10px] select-none overflow-hidden rounded-2xl border border-slate-200/80 shadow-inner">
    <div className="h-9 px-3 bg-white border-b border-slate-200/60 flex items-center justify-between">
      <div className="font-extrabold text-slate-900 text-[11px]">Q&A Hub</div>
      <span className="text-[8px] bg-teal-50 text-teal-700 font-bold px-2 py-0.5 rounded-full border border-teal-200">ASK NOW</span>
    </div>

    <div className="p-3 flex-1 space-y-2">
      {['How to submit project?', 'Can I join robotics?', 'When is the next hackathon?'].map((question, index) => (
        <div key={question} className="bg-white p-2 rounded-2xl border border-slate-200/70 shadow-sm">
          <div className="flex items-center justify-between gap-2">
            <span className="text-[8px] text-slate-500 uppercase font-semibold">Q{index + 1}</span>
            <span className="text-[7px] bg-teal-100 text-teal-700 px-2 py-0.5 rounded-full">NEW</span>
          </div>
          <div className="mt-2 text-[9px] text-slate-700 font-semibold">{question}</div>
        </div>
      ))}
      <div className="mt-2 bg-slate-100 text-[8px] text-slate-500 rounded-2xl p-2 border border-slate-200">Instant answers, instructor notes, and resource links in one place.</div>
    </div>
  </div>
);

const MockupStudentReferrals = () => (
  <div className="w-full h-full bg-slate-50 flex flex-col font-sans text-[9px] select-none overflow-hidden rounded-2xl border border-slate-200/80 shadow-inner">
    <div className="h-9 px-3 bg-white border-b border-slate-200/60 flex items-center justify-between">
      <div className="font-extrabold text-slate-900 text-[11px]">Student Referrals</div>
      <span className="text-[8px] bg-pink-50 text-pink-700 font-bold px-2 py-0.5 rounded-full border border-pink-200">REWARDS</span>
    </div>

    <div className="p-3 flex-1 space-y-2">
      <div className="bg-white p-2 rounded-2xl border border-slate-200/70 shadow-sm">
        <div className="flex items-center justify-between text-[8px] text-slate-500 uppercase font-semibold">
          <span>Referral Count</span>
          <span className="text-pink-600 font-bold">12</span>
        </div>
        <div className="mt-2 text-[9px] text-slate-700 font-semibold">Earn badges and school credits for every student referred.</div>
      </div>
      <div className="grid grid-cols-2 gap-2">
        <div className="bg-rose-50 text-rose-700 rounded-2xl p-2 text-[8px] font-semibold">Current Rank: Gold</div>
        <div className="bg-slate-100 text-slate-700 rounded-2xl p-2 text-[8px] font-semibold">Next reward in 3 referrals</div>
      </div>
      <div className="bg-slate-100 p-2 rounded-2xl text-[8px] text-slate-500 border border-slate-200">Referral dashboard, approval flow, and instant parent invites.</div>
    </div>
  </div>
);

/* Map type to Mockup */
const renderMockup = (type) => {
  switch (type) {
    case 'dashboard': return <MockupStudentDashboard />;
    case 'courses':   return <MockupMyCourses />;
    case 'quiz':      return <MockupQuizAnalytics />;
    case 'session':   return <MockupSessionReports />;
    case 'progress':  return <MockupStudentProgress />;
    case 'teacher':   return <MockupTeacherPortal />;
    case 'qa':        return <MockupQAHub />;
    case 'referrals': return <MockupStudentReferrals />;
    default:          return <MockupStudentDashboard />;
  }
};

/* ── Main Section Component ── */
const LmsSection = () => {
  const carouselRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (!carouselRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
  };

  const scroll = (direction) => {
    if (!carouselRef.current) return;
    const scrollAmount = 370;
    carouselRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
    setTimeout(checkScroll, 350);
  };

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-12 relative overflow-hidden bg-white">
      {/* Top divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-slate-200/80" />

      <div className="max-w-[1300px] mx-auto relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight" style={{ fontFamily: "'Poppins', sans-serif" }}>
            Learning Management System
          </h2>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative">

          {/* Left Arrow Button */}
          <button
            onClick={() => scroll('left')}
            disabled={!canScrollLeft}
            className={`absolute -left-3 sm:-left-6 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-white shadow-xl border border-slate-200/80 flex items-center justify-center text-slate-800 transition-all duration-300 ${
              canScrollLeft
                ? 'opacity-100 hover:scale-110 hover:bg-slate-900 hover:text-white cursor-pointer'
                : 'opacity-40 cursor-not-allowed'
            }`}
          >
            <ChevronLeft size={24} />
          </button>

          {/* Right Arrow Button */}
          <button
            onClick={() => scroll('right')}
            disabled={!canScrollRight}
            className={`absolute -right-3 sm:-right-6 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-white shadow-xl border border-slate-200/80 flex items-center justify-center text-slate-800 transition-all duration-300 ${
              canScrollRight
                ? 'opacity-100 hover:scale-110 hover:bg-slate-900 hover:text-white cursor-pointer'
                : 'opacity-40 cursor-not-allowed'
            }`}
          >
            <ChevronRight size={24} />
          </button>

          {/* Scrollable Track */}
          <div
            ref={carouselRef}
            onScroll={checkScroll}
            className="flex gap-6 overflow-x-auto scrollbar-none py-6 px-3 scroll-smooth"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {LMS_CARDS.map((card, idx) => (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                whileHover={{ y: -8, boxShadow: '0 25px 50px -12px rgba(15,23,42,0.12)' }}
                className="flex-shrink-0 w-[300px] sm:w-[350px] bg-white rounded-[32px] p-5 border border-slate-200/70 shadow-lg flex flex-col justify-between transition-all duration-300 group cursor-default"
              >
                {/* Top UI Mockup Frame */}
                <div className="h-[220px] rounded-2xl overflow-hidden relative border border-slate-200/60 shadow-sm mb-5 group-hover:border-indigo-300 transition-colors">
                  {renderMockup(card.mockupType)}
                </div>

                {/* Bottom Card Title matching Setu100 */}
                <div className="text-center pb-2 pt-1">
                  <h3 className="setu-heading font-black text-slate-900 text-xl tracking-tight" style={{ fontFamily: "'Poppins', sans-serif" }}>
                    {card.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default LmsSection;
