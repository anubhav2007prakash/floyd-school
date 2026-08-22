import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, CheckCircle2, User, BookOpen, BarChart3, Clock, Sparkles } from 'lucide-react';

const LMS_CARDS = [
  {
    id: 'live-sessions',
    title: 'Live Interactive Sessions',
    image: '/images/lms/live_session_student.png',
    tag: 'LIVE SESSIONS',
    color: '#3B82F6',
  },
  {
    id: 'student-dashboard',
    title: 'Student Dashboard',
    mockupType: 'dashboard',
    tag: 'STUDENT DASHBOARD',
    color: '#8B5CF6',
  },
  {
    id: 'project-workspace',
    title: 'Project Workspace',
    mockupType: 'courses',
    tag: 'PROJECT WORKSPACE',
    color: '#10B981',
  },
  {
    id: 'assessments',
    title: 'Assessments & Quizzes',
    mockupType: 'quiz',
    tag: 'ASSESSMENTS',
    color: '#00D4FF',
  },
  {
    id: 'mentor-support',
    title: 'Mentor Support & Q&A Hub',
    mockupType: 'qa',
    tag: 'MENTOR SUPPORT',
    color: '#EC4899',
  },
  {
    id: 'progress-insights',
    title: 'Progress Insights & Reports',
    mockupType: 'progress',
    tag: 'PROGRESS INSIGHTS',
    color: '#F59E0B',
  },
  {
    id: 'admin-analytics',
    title: 'Platform Analytics',
    mockupType: 'adminAnalytics',
    tag: 'ADMIN PORTAL',
    color: '#6366F1',
  },
  {
    id: 'admin-broadcast',
    title: 'Global Broadcast',
    mockupType: 'adminBroadcast',
    tag: 'ADMIN PORTAL',
    color: '#EC4899',
  },
  {
    id: 'admin-users',
    title: 'User Account Management',
    mockupType: 'adminUsers',
    tag: 'ADMIN PORTAL',
    color: '#0EA5E9',
  },
  {
    id: 'admin-settings',
    title: 'System Settings',
    mockupType: 'adminSettings',
    tag: 'ADMIN PORTAL',
    color: '#10B981',
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

/* ── Admin Portal Mockups ── */
const AdminSidebar = ({ active }) => (
  <div className="w-[110px] shrink-0 bg-white border-r border-slate-100 flex flex-col py-2 px-1.5 gap-0.5">
    <div className="flex items-center gap-1.5 px-1.5 py-2 mb-1">
      <span className="font-black text-[9px] text-slate-900 tracking-tight leading-none">FLOYD SCHOOL</span>
      <span className="text-[7px] font-bold text-indigo-600 bg-indigo-50 px-1 rounded">Admin</span>
    </div>
    {['Analytics','User Governance','Attendance Software','Access Requests','Student Registrations','Guest Details','Courses','Lead Intel','Chatbot Leads','School Partners','Offline Schools','Hackathon Leads','Success Engine','Live Monitor','Recordings','Payments','Broadcast','System Settings'].map((item) => (
      <div key={item} className={`px-1.5 py-[3px] rounded text-[7px] font-semibold truncate ${
        item === active ? 'bg-slate-900 text-white' : 'text-slate-500 hover:bg-slate-50'
      }`}>{item}</div>
    ))}
    <div className="mt-auto px-1.5 py-1">
      <div className="text-[7px] font-bold text-rose-500">→ Sign Out</div>
    </div>
  </div>
);

const AdminTopBar = ({ page }) => (
  <div className="h-8 bg-white border-b border-slate-100 flex items-center justify-between px-2 shrink-0">
    <div className="flex items-center gap-1.5 bg-slate-50 border border-slate-200 rounded-full px-2 py-0.5">
      <span className="text-[7px] text-slate-400">🔍</span>
      <span className="text-[7px] text-slate-400">Search platform...</span>
    </div>
    <div className="flex items-center gap-2">
      <div className="flex items-center gap-1 bg-emerald-50 px-1.5 py-0.5 rounded-full">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
        <span className="text-[7px] font-bold text-emerald-700">⚡ Latency: 24ms</span>
      </div>
      <div className="text-right">
        <div className="text-[7px] font-bold text-slate-800">Abhay Admin</div>
        <div className="text-[6px] text-slate-400">Primary Controller</div>
      </div>
      <div className="w-5 h-5 rounded-full bg-indigo-600 flex items-center justify-center text-white text-[7px] font-bold">O</div>
    </div>
  </div>
);

const MockupAdminAnalytics = () => (
  <div className="w-full h-full bg-slate-50 flex font-sans text-[9px] select-none overflow-hidden">
    <AdminSidebar active="Analytics" />
    <div className="flex-1 flex flex-col overflow-hidden">
      <AdminTopBar />
      <div className="flex-1 p-2.5 overflow-hidden space-y-2">
        <div className="flex items-center justify-between">
          <div>
            <div className="font-black text-[13px] text-slate-900">Platform <span className="text-indigo-600">Analytics</span></div>
            <div className="text-[7px] text-slate-400 uppercase tracking-widest font-bold">Global System Performance & User Growth Matrix</div>
          </div>
          <span className="text-[7px] font-bold text-emerald-600 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full">● LIVE PLATFORM FEED</span>
        </div>
        <div className="grid grid-cols-4 gap-1.5">
          {[
            { icon: '👤', label: 'TOTAL USERS', val: '33', pct: '+12%', color: '#6366F1' },
            { icon: '$', label: 'TOTAL ENROLLMENTS', val: '72', pct: '+8%', color: '#10B981' },
            { icon: '⚡', label: 'ACTIVE STUDENTS', val: '22', pct: '+24%', color: '#F59E0B' },
            { icon: '🔧', label: 'PENDING SUPPORT', val: '9', pct: '-5%', color: '#EF4444' },
          ].map((s) => (
            <div key={s.label} className="bg-white rounded-xl border border-slate-100 p-2 flex flex-col gap-1 shadow-sm">
              <div className="flex justify-between items-center">
                <span className="text-base">{s.icon}</span>
                <span className={`text-[7px] font-bold ${s.pct.startsWith('+') ? 'text-emerald-600' : 'text-rose-500'}`}>{s.pct}</span>
              </div>
              <div className="text-[6px] font-bold text-slate-400 uppercase tracking-wider">{s.label}</div>
              <div className="text-xl font-black" style={{ color: s.color }}>{s.val}</div>
            </div>
          ))}
        </div>
        <div className="bg-white rounded-xl border border-slate-100 p-2 shadow-sm">
          <div className="text-[8px] font-black text-slate-800 mb-1.5">📈 New Signups (Last 7 Days)</div>
          <div className="flex items-end gap-1 h-12">
            {[55, 75, 60, 90, 70, 80, 45].map((h, i) => (
              <div key={i} className="flex-1 rounded-t-sm" style={{ height: `${h}%`, background: i === 1 || i === 3 ? '#6366F1' : '#C7D2FE' }} />
            ))}
          </div>
          <div className="flex justify-between mt-1">
            {['DAY 1','DAY 2','DAY 3','DAY 4','DAY 5','DAY 6','DAY 7'].map(d => (
              <span key={d} className="text-[6px] text-slate-400">{d}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

const MockupAdminBroadcast = () => (
  <div className="w-full h-full bg-slate-50 flex font-sans text-[9px] select-none overflow-hidden">
    <AdminSidebar active="Broadcast" />
    <div className="flex-1 flex flex-col overflow-hidden">
      <AdminTopBar />
      <div className="flex-1 p-2.5 overflow-hidden">
        <div className="text-center mb-2">
          <div className="font-black text-[14px] text-slate-900">Global <span className="text-indigo-600">Broadcast</span></div>
          <div className="text-[7px] text-slate-400">Send platform-wide alerts and announcements to students, mentors, or all users.</div>
        </div>
        <div className="bg-white rounded-xl border border-slate-100 p-2.5 shadow-sm space-y-2">
          <div className="grid grid-cols-2 gap-2">
            <div>
              <div className="text-[7px] font-bold text-slate-600 mb-1">Target Audience</div>
              <div className="flex gap-1">
                {['GLOBAL','STUDENTS','MENTORS'].map((a, i) => (
                  <div key={a} className={`px-1.5 py-0.5 rounded text-[6px] font-bold flex flex-col items-center gap-0.5 border ${
                    i === 0 ? 'bg-indigo-50 border-indigo-300 text-indigo-700' : 'border-slate-200 text-slate-500'
                  }`}>
                    <span>{a === 'GLOBAL' ? '🌐' : a === 'STUDENTS' ? '🎓' : '💬'}</span>
                    <span>{a}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="text-[7px] font-bold text-slate-600 mb-1">Alert Level</div>
              <div className="flex gap-1">
                {['INFO','WARNING','SUCCESS'].map((l, i) => (
                  <div key={l} className={`px-1.5 py-0.5 rounded text-[6px] font-bold ${
                    i === 0 ? 'bg-slate-900 text-white' : 'border border-slate-200 text-slate-500'
                  }`}>{l}</div>
                ))}
              </div>
            </div>
          </div>
          <div>
            <div className="text-[7px] font-bold text-slate-600 mb-0.5">Broadcast Title</div>
            <div className="w-full border border-slate-200 rounded-lg px-2 py-1 text-[7px] text-slate-400">e.g. Schedule Update for AI Workshop</div>
          </div>
          <div>
            <div className="text-[7px] font-bold text-slate-600 mb-0.5">Message Content</div>
            <div className="w-full border border-slate-200 rounded-lg px-2 py-2 text-[7px] text-slate-300 h-8">Enter the broadcast message...</div>
          </div>
          <div className="w-full py-1.5 bg-indigo-600 rounded-lg text-white text-[7px] font-bold text-center">📤 SEND BROADCAST</div>
        </div>
      </div>
    </div>
  </div>
);

const MockupAdminUsers = () => (
  <div className="w-full h-full bg-slate-50 flex font-sans text-[9px] select-none overflow-hidden">
    <AdminSidebar active="User Governance" />
    <div className="flex-1 flex flex-col overflow-hidden">
      <AdminTopBar />
      <div className="flex-1 p-2.5 overflow-hidden space-y-1.5">
        <div className="flex items-center justify-between">
          <div>
            <div className="font-black text-[12px] text-slate-900 flex items-center gap-1">👥 User Account Management</div>
            <div className="text-[6px] text-slate-400">Manage logins, staff permissions, partner school coordinators, and student accounts.</div>
          </div>
          <div className="px-2 py-1 bg-slate-900 text-white text-[7px] font-bold rounded-lg">+ Register New Account</div>
        </div>
        <div className="flex gap-1 border-b border-slate-200">
          {['Online Students','Mentors & Teachers','Growth Associates','Partner Schools','School Students','Administrators'].map((t, i) => (
            <div key={t} className={`px-1.5 py-1 text-[6px] font-bold whitespace-nowrap ${
              i === 0 ? 'border-b-2 border-indigo-600 text-indigo-600' : 'text-slate-400'
            }`}>{t}</div>
          ))}
        </div>
        <div className="bg-white rounded-xl border border-slate-100 overflow-hidden shadow-sm">
          <div className="grid grid-cols-4 gap-0 bg-slate-50 border-b border-slate-100 px-2 py-1">
            {['USER NAME','EMAIL / LOGIN ID','ASSIGNED ROLE','ACCOUNT STATUS'].map(h => (
              <div key={h} className="text-[6px] font-black uppercase tracking-wider text-slate-400">{h}</div>
            ))}
          </div>
          {[
            { name: '07 Abhay Singh Chauhan', email: 'abhaysinghchauha...' },
            { name: 'unknown', email: 'let.unknownn@...' },
            { name: 'Shan Sharma', email: 'edu.shan24@...' },
            { name: 'Floyd School', email: 'floydschoolhq@...' },
          ].map((u, i) => (
            <div key={i} className="grid grid-cols-4 gap-0 px-2 py-1 border-b border-slate-50">
              <div className="text-[7px] font-bold text-slate-800 truncate">{u.name}</div>
              <div className="text-[7px] text-slate-400 truncate">{u.email}</div>
              <div className="text-[7px]"><span className="bg-indigo-50 text-indigo-700 px-1 rounded text-[6px] font-bold">Online Students</span></div>
              <div className="flex items-center gap-1">
                <span className="bg-emerald-50 text-emerald-700 px-1 rounded text-[6px] font-bold">Active</span>
                <span className="text-slate-300 text-[8px]">🔒 🗑</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const MockupAdminSettings = () => (
  <div className="w-full h-full bg-slate-50 flex font-sans text-[9px] select-none overflow-hidden">
    <AdminSidebar active="System Settings" />
    <div className="flex-1 flex flex-col overflow-hidden">
      <AdminTopBar />
      <div className="flex-1 p-2.5 overflow-hidden space-y-1.5">
        <div className="bg-white rounded-xl border border-slate-100 p-2 shadow-sm">
          <div className="font-bold text-[8px] text-slate-800">🔒 Modular Access Locks</div>
          <div className="text-[6px] text-slate-400 mb-1.5">Fine-grained Sector Access Control</div>
          <div className="grid grid-cols-2 gap-1">
            {['coding Lab','assignments','live Classes','masterclasses','chat','scheduled Live'].map((m) => (
              <div key={m} className="flex items-center justify-between bg-slate-50 border border-slate-100 rounded-lg px-1.5 py-1">
                <div>
                  <div className="text-[7px] font-bold text-slate-700 capitalize">{m}</div>
                  <div className="text-[6px] font-bold text-emerald-600">OPERATIONAL</div>
                </div>
                <span className="text-[6px] font-black text-slate-500 border border-slate-200 px-1 rounded">HALT</span>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-slate-900 rounded-xl p-2 shadow-sm">
          <div className="flex items-center justify-between mb-1">
            <div className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-red-500"></span>
              <span className="w-2 h-2 rounded-full bg-yellow-400"></span>
              <span className="w-2 h-2 rounded-full bg-green-500"></span>
              <span className="text-[7px] font-bold text-slate-400 ml-1">DIAGNOSTIC TERMINAL</span>
            </div>
            <span className="text-[6px] font-bold text-emerald-400">⚡ LIVE</span>
          </div>
          <div className="text-[7px] text-emerald-400 font-mono">[SYSTEM] Connection established. Floyd School Admin Shell.</div>
          <div className="text-[7px] text-slate-500 font-mono">Type &apos;help&apos; for available system commands.</div>
          <div className="text-[7px] text-sky-400 font-mono">admin@floydschool:~$</div>
        </div>
      </div>
    </div>
  </div>
);

/* Map type to Mockup */
const renderMockup = (type) => {
  switch (type) {
    case 'dashboard':     return <MockupStudentDashboard />;
    case 'courses':       return <MockupMyCourses />;
    case 'quiz':          return <MockupQuizAnalytics />;
    case 'session':       return <MockupSessionReports />;
    case 'progress':      return <MockupStudentProgress />;
    case 'teacher':       return <MockupTeacherPortal />;
    case 'qa':            return <MockupQAHub />;
    case 'referrals':     return <MockupStudentReferrals />;
    case 'adminAnalytics':return <MockupAdminAnalytics />;
    case 'adminBroadcast':return <MockupAdminBroadcast />;
    case 'adminUsers':    return <MockupAdminUsers />;
    case 'adminSettings': return <MockupAdminSettings />;
    default:              return <MockupStudentDashboard />;
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
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest text-indigo-600 bg-indigo-50 border border-indigo-100 uppercase mb-4">
            CONNECTED LEARNING
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight uppercase" style={{ fontFamily: "'Poppins', sans-serif" }}>
            ONE PLACE FOR THE{' '}
            <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(135deg, #4f46e5 0%, #0284c7 100%)' }}>
              ENTIRE LEARNING JOURNEY.
            </span>
          </h2>
          <p className="mt-4 text-slate-600 text-sm sm:text-base max-w-2xl mx-auto font-medium leading-relaxed">
            Our digital learning environment connects students, mentors, parents and school teams throughout the program.
          </p>
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
                <div className="h-[220px] rounded-2xl overflow-hidden relative border border-slate-200/60 shadow-sm mb-5 group-hover:border-indigo-300 transition-colors bg-slate-950">
                  {card.image ? (
                    <div className="w-full h-full relative overflow-hidden group/img">
                      <img
                        src={card.image}
                        alt={card.title}
                        className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                      {card.tag && (
                        <span className="absolute top-2.5 right-2.5 px-2.5 py-1 rounded-full text-[9px] font-black uppercase tracking-wider bg-black/70 backdrop-blur-md text-white border border-white/20 shadow-md">
                          {card.tag}
                        </span>
                      )}
                    </div>
                  ) : (
                    renderMockup(card.mockupType)
                  )}
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
