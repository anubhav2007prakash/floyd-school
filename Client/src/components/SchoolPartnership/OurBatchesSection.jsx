import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  Users, 
  Calendar, 
  Layers, 
  Sparkles, 
  BookOpen, 
  ShieldCheck, 
  Clock, 
  Sliders, 
  Cpu, 
  Target, 
  FileText,
  School,
  CheckCircle2
} from 'lucide-react';

/* ─── LIVE PROGRAM DATA ───────────────────────────────────────── */
const LIVE_PROGRAM = {
  id: 'ai-ml',
  badge: 'ON CAMPUS PROGRAM',
  status: 'LIVE SCHOOL PROGRAM',
  title: 'FOUNDATIONS OF\nAI & MACHINE\nLEARNING',
  description: 'A four month, mentor led program where students explore AI, Machine Learning and AI Innovation through practical learning and real projects.',
  pills: ['4 MONTHS', 'CLASSES 6 TO 12', 'PROJECT BASED'],
  image: '/images/courses/ai_ml_robot.png',
  imageAlt: 'Floyd Foundations of AI & Machine Learning',
  curriculumId: '1',
  category: 'AI & Machine Learning'
};

/* ─── UPCOMING PROGRAMS DATA ──────────────────────────────────── */
const UPCOMING_PROGRAMS = [
  {
    id: 'cybersecurity',
    badge: 'ON CAMPUS PROGRAM',
    status: 'UPCOMING SCHOOL PROGRAM',
    title: 'FOUNDATIONS OF\nCYBER\nSECURITY',
    description: 'A four month practical program introducing students to digital security, ethical cybersecurity and responsible technology practices.',
    pills: ['4 MONTHS', 'CLASSES 6 TO 12', 'PROJECT BASED'],
    image: '/images/courses/CYBER.png',
    imageAlt: 'Floyd Foundations of Cybersecurity',
    curriculumId: '4',
    category: 'Cybersecurity'
  },
  {
    id: 'web-dev',
    badge: 'ON CAMPUS PROGRAM',
    status: 'UPCOMING SCHOOL PROGRAM',
    title: 'FOUNDATIONS OF\nWEB\nDEVELOPMENT',
    description: 'A four month project based program where students learn to design, code and build modern websites and web applications.',
    pills: ['4 MONTHS', 'CLASSES 6 TO 12', 'PROJECT BASED'],
    image: '/images/courses/WEB DEV.png',
    imageAlt: 'Floyd Foundations of Web Development',
    curriculumId: '2',
    category: 'Web Development'
  },
  {
    id: 'iot-robotics',
    badge: 'ON CAMPUS PROGRAM',
    status: 'UPCOMING SCHOOL PROGRAM',
    title: 'FOUNDATIONS OF\nIoT &\nROBOTICS',
    description: 'A four month hands on program where students combine electronics, sensors, programming and robotics to build real systems.',
    pills: ['4 MONTHS', 'CLASSES 6 TO 12', 'PROJECT BASED'],
    image: '/images/courses/IOT.png',
    imageAlt: 'Floyd Foundations of IoT & Robotics',
    curriculumId: '3',
    category: 'IoT & Robotics'
  }
];

const OurBatchesSection = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('live'); // 'live' | 'upcoming'

  const scrollToPartnerForm = () => {
    document.getElementById('partner-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleViewCurriculum = (curriculumId = '1') => {
    navigate(`/course/${curriculumId}`);
  };

  return (
    <section id="online-focus" className="relative overflow-hidden py-24 lg:py-32 border-t border-white/5" style={{ background: 'linear-gradient(180deg, #000000 0%, #010c1f 40%, #021530 70%, #020b1a 100%)' }}>
      {/* Background Decorative Mesh */}
      <div
        className="absolute inset-0 pointer-events-none opacity-10"
        style={{ backgroundImage: 'radial-gradient(#4f88c7 1px, transparent 1px)', backgroundSize: '32px 32px' }}
      />
      <div className="absolute left-0 top-0 h-[600px] w-[600px] -ml-[300px] -mt-[300px] rounded-full bg-blue-600/15 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 h-[600px] w-[600px] -mr-[300px] -mb-[300px] rounded-full bg-blue-800/15 blur-[130px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[800px] w-[800px] rounded-full bg-indigo-900/10 blur-[160px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* ── 1. SECTION HEADER ── */}
        <div className="mb-14 text-center">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest mb-4 bg-purple-500/15 text-purple-300 border border-purple-500/30">
            <Sparkles size={13} className="text-pink-400" />
            ON CAMPUS OFFERINGS
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white">
            OUR SCHOOL PROGRAMS
          </h2>
          <p className="mt-4 text-slate-300 text-sm sm:text-base font-medium max-w-2xl mx-auto leading-relaxed">
            Practical technology education delivered directly on your school campus for Classes 6 to 12.
          </p>
        </div>

        {/* ── 2. TWO TABS: LIVE | UPCOMING ── */}
        <div className="mb-14 flex justify-center">
          <div className="flex items-center gap-2 bg-white/5 p-1.5 rounded-2xl border border-white/10 backdrop-blur-xl shadow-2xl">
            {[
              { id: 'live', label: 'LIVE' },
              { id: 'upcoming', label: 'UPCOMING' },
            ].map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => {
                    setActiveTab(tab.id);
                  }}
                  className={`relative px-7 py-3 rounded-xl text-xs sm:text-sm font-black uppercase tracking-widest transition-all duration-300 cursor-pointer ${
                    isActive
                      ? 'bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white shadow-lg shadow-purple-600/30 scale-102'
                      : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {tab.label}
                  {tab.id === 'live' && (
                    <span className="ml-2 inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* ── 3. TAB CONTENT ── */}
        <AnimatePresence mode="wait">
          
          {/* ── TAB 1: LIVE PROGRAM ── */}
          {activeTab === 'live' && (
            <motion.div
              key="live"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="max-w-5xl mx-auto"
            >
              <div className="group relative overflow-hidden rounded-[32px] border border-purple-500/30 bg-gradient-to-b from-[#0e1230] via-[#090b1e] to-[#060818] p-8 sm:p-12 shadow-[0_30px_90px_rgba(2,6,23,0.8)]">
                <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-blue-500 via-indigo-500 to-pink-500" />

                <div className="flex flex-col justify-between h-full">
                  {/* Top Row */}
                  <div className="flex items-center justify-between pb-8 border-b border-white/10 text-xs font-black uppercase tracking-[0.22em] text-slate-400">
                    <span className="opacity-90">FLOYD SCHOOL</span>
                    <span className="rounded-full bg-emerald-500/15 px-3.5 py-1 text-[11px] font-black text-emerald-400 border border-emerald-500/30 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      {LIVE_PROGRAM.status}
                    </span>
                  </div>

                  {/* Middle Main Content */}
                  <div className="py-8 grid lg:grid-cols-12 gap-8 items-center">
                    <div className="lg:col-span-7">
                      <div className="mb-4 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-purple-400">
                        <span className="inline-block h-2 w-2 rounded-full bg-purple-400 animate-pulse" />
                        {LIVE_PROGRAM.badge}
                      </div>

                      <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase leading-[1.08] tracking-tight text-white whitespace-pre-line mb-4">
                        {LIVE_PROGRAM.title}
                      </h3>

                      <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-medium mb-8 max-w-xl">
                        {LIVE_PROGRAM.description}
                      </p>

                      {/* Information Pills */}
                      <div className="flex flex-wrap gap-2.5">
                        {LIVE_PROGRAM.pills.map((pill, pIdx) => (
                          <span
                            key={pIdx}
                            className="px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider bg-purple-500/15 border border-purple-500/30 text-purple-200"
                          >
                            {pill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* AI Robot Graphic Image */}
                    <div className="lg:col-span-5">
                      <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-slate-900 shadow-2xl h-[260px] sm:h-[300px]">
                        <img
                          src={LIVE_PROGRAM.image}
                          alt={LIVE_PROGRAM.imageAlt}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[10px] font-bold text-white/90 uppercase tracking-widest bg-black/60 backdrop-blur-md px-3.5 py-1.5 rounded-lg border border-white/10">
                          <span>{LIVE_PROGRAM.category}</span>
                          <span className="text-emerald-400">Classes 6 to 12</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                    <button
                      type="button"
                      onClick={() => navigate(`/course/${LIVE_PROGRAM.curriculumId}`)}
                      className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 px-8 py-4 text-xs sm:text-sm font-black uppercase tracking-widest text-white shadow-xl shadow-purple-600/30 transition-all hover:scale-[1.02] cursor-pointer"
                    >
                      EXPLORE PROGRAM
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </button>

                    <button
                      type="button"
                      onClick={() => handleViewCurriculum(LIVE_PROGRAM.curriculumId)}
                      className="inline-flex items-center justify-center gap-2 text-xs sm:text-sm font-bold text-slate-300 hover:text-white px-4 py-3 rounded-xl hover:bg-white/5 transition-colors cursor-pointer"
                    >
                      VIEW CURRICULUM →
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* ── TAB 3: UPCOMING PROGRAMS ── */}
          {activeTab === 'upcoming' && (
            <motion.div
              key="upcoming"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {UPCOMING_PROGRAMS.map((prog) => (
                <div
                  key={prog.id}
                  className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-gradient-to-b from-[#0d1024] to-[#070918] p-7 shadow-2xl flex flex-col justify-between hover:border-indigo-500/40 transition-all"
                >
                  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-indigo-500 to-cyan-500" />

                  <div>
                    {/* Top Row */}
                    <div className="flex items-center justify-between pb-5 border-b border-white/10 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
                      <span>FLOYD SCHOOL</span>
                      <span className="rounded-full bg-cyan-500/15 px-2.5 py-0.5 text-[9px] font-black text-cyan-300 border border-cyan-500/30">
                        {prog.status}
                      </span>
                    </div>

                    {/* Image */}
                    <div className="relative my-5 rounded-2xl overflow-hidden border border-white/10 bg-slate-900 h-[180px]">
                      <img
                        src={prog.image}
                        alt={prog.imageAlt}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                      <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between text-[9px] font-bold text-white/90 uppercase tracking-widest bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/10">
                        <span>{prog.category}</span>
                        <span className="text-cyan-300">Upcoming</span>
                      </div>
                    </div>

                    <div className="mb-2 text-[9px] font-black uppercase tracking-[0.2em] text-indigo-400">
                      {prog.badge}
                    </div>

                    <h3 className="text-xl sm:text-2xl font-black uppercase leading-tight tracking-tight text-white whitespace-pre-line mb-3">
                      {prog.title}
                    </h3>

                    <p className="text-xs text-slate-300 leading-relaxed font-medium mb-6 line-clamp-3">
                      {prog.description}
                    </p>

                    {/* Information Pills */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {prog.pills.map((pill, pIdx) => (
                        <span
                          key={pIdx}
                          className="px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-white/5 border border-white/10 text-slate-300"
                        >
                          {pill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-5 border-t border-white/10 flex flex-col gap-2.5">
                    <button
                      type="button"
                      onClick={scrollToPartnerForm}
                      className="w-full py-3 rounded-xl font-black text-xs uppercase tracking-wider text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:scale-[1.01] transition-all shadow-md shadow-blue-600/30 cursor-pointer text-center"
                    >
                      REGISTER INTEREST
                    </button>

                    <button
                      type="button"
                      onClick={() => handleViewCurriculum(prog.curriculumId)}
                      className="text-center py-2 text-xs font-bold text-slate-400 hover:text-white transition-colors cursor-pointer"
                    >
                      VIEW CURRICULUM →
                    </button>
                  </div>
                </div>
              ))}
            </motion.div>
          )}

        </AnimatePresence>

      </div>
    </section>
  );
};

export default OurBatchesSection;
