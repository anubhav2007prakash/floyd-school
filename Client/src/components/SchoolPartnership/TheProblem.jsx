import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Layers, Users, BookOpen, Settings, CheckCircle, BarChart3,
  Cpu, Sparkles, ArrowRight, ShieldCheck, Award, Zap, Terminal, Activity
} from 'lucide-react';

/* ── Interactive Tech Stack Tags for Curriculum Card ── */
const TECH_TAGS = ['Python', 'Robotics & IoT', 'AI & Machine Learning', 'Cybersecurity', 'Web3 & Cloud'];

/* ── Live Operations Checklist for Operations Card ── */
const OPS_ITEMS = [
  'Certified Mentor Recruitment & Training',
  'Automated Attendance & Assessment Reports',
  'Hardware Maintenance & Upgrades',
  'Quarterly Student Exhibition Days',
];

const TheProblem = () => {
  const [activeTech, setActiveTech] = useState(0);

  return (
    <section id="why-us" className="py-28 px-6 lg:px-12 relative overflow-hidden bg-slate-950 text-white">
      {/* ── Dynamic Mesh Background ── */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-[-10%] left-[-5%] w-[600px] h-[600px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.25) 0%, transparent 70%)', filter: 'blur(90px)' }} />
        <div className="absolute bottom-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(236,72,153,0.2) 0%, transparent 70%)', filter: 'blur(90px)' }} />
        <div className="absolute top-[40%] right-[30%] w-[400px] h-[400px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(56,189,248,0.15) 0%, transparent 70%)', filter: 'blur(80px)' }} />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-10"
        style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.4) 1px, transparent 1px)', backgroundSize: '36px 36px' }} />

      <div className="max-w-[1240px] mx-auto relative z-10">

        {/* ── Section Header ── */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 backdrop-blur-md"
            style={{
              background: 'rgba(99,102,241,0.12)',
              border: '1px solid rgba(99,102,241,0.3)',
              boxShadow: '0 0 20px rgba(99,102,241,0.15)',
            }}
          >
            <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
            <span className="text-xs font-black uppercase tracking-[0.2em] text-indigo-300">Institutional Advantages</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.15] mb-6"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Why Top Schools Choose{' '}
            <span className="text-transparent bg-clip-text"
              style={{ backgroundImage: 'linear-gradient(135deg, #a78bfa 0%, #f472b6 50%, #38bdf8 100%)' }}>
              Floyd School
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-400 text-base md:text-lg leading-relaxed max-w-2xl mx-auto"
          >
            A turnkey tech ecosystem designed to transform school computer labs into future-ready STEM & AI centers without faculty burden.
          </motion.p>
        </div>

        {/* ── Bento Grid Showcase ── */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">

          {/* CARD 1: Turnkey Lab (Large 7 Columns) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-7 group relative rounded-3xl p-8 overflow-hidden backdrop-blur-xl transition-all duration-500 hover:border-indigo-500/50 flex flex-col justify-between"
            style={{
              background: 'linear-gradient(145deg, rgba(30,27,75,0.4) 0%, rgba(15,23,42,0.6) 100%)',
              border: '1px solid rgba(255,255,255,0.08)',
              boxShadow: '0 20px 50px rgba(0,0,0,0.3)',
            }}
          >
            <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-indigo-500/20 transition-all duration-500" />
            
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
                  <Layers size={24} />
                </div>
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300">01 / Turnkey Setup</span>
              </div>

              <h3 className="text-2xl md:text-3xl font-black text-white mb-3" style={{ fontFamily: "'Poppins', sans-serif" }}>
                Turnkey Lab Implementation
              </h3>
              <p className="text-slate-400 text-sm md:text-base leading-relaxed max-w-lg mb-8">
                We design, install, and maintain AI, Robotics & Coding labs on your campus. Zero hardware sourcing, setup, or technical hassle for your school.
              </p>
            </div>

            {/* Interactive Lab Hardware Visual Mock */}
            <div className="rounded-2xl p-5 border border-white/10 bg-slate-900/80 backdrop-blur-md relative overflow-hidden">
              <div className="flex items-center justify-between text-xs text-slate-400 mb-4 pb-3 border-b border-white/10">
                <div className="flex items-center gap-2 font-mono">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  <span className="text-emerald-400 font-bold">CAMPUS LAB ACTIVE</span>
                </div>
                <span className="text-slate-500">Hardware & Cloud Sync</span>
              </div>

              <div className="grid grid-cols-3 gap-3">
                {[
                  { title: 'AI Workstations', val: '25 Units', icon: Cpu, color: '#818cf8' },
                  { title: 'Robotics Kits', val: 'IoT & Sensors', icon: Terminal, color: '#f472b6' },
                  { title: '3D Printers', val: 'Rapid Proto', icon: Zap, color: '#38bdf8' },
                ].map((hw) => (
                  <div key={hw.title} className="p-3 rounded-xl bg-white/5 border border-white/5 flex flex-col justify-between">
                    <hw.icon size={18} style={{ color: hw.color }} className="mb-2" />
                    <div>
                      <div className="text-[11px] text-slate-400 font-medium">{hw.title}</div>
                      <div className="text-xs font-bold text-white mt-0.5">{hw.val}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* CARD 2: Expert Mentors (5 Columns) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-5 group relative rounded-3xl p-8 overflow-hidden backdrop-blur-xl transition-all duration-500 hover:border-sky-500/50 flex flex-col justify-between"
            style={{
              background: 'linear-gradient(145deg, rgba(14,165,233,0.08) 0%, rgba(15,23,42,0.6) 100%)',
              border: '1px solid rgba(255,255,255,0.08)',
              boxShadow: '0 20px 50px rgba(0,0,0,0.3)',
            }}
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-sky-500/20 border border-sky-500/30 flex items-center justify-center text-sky-400">
                  <Users size={24} />
                </div>
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-300">02 / Mentors</span>
              </div>

              <h3 className="text-2xl font-black text-white mb-3" style={{ fontFamily: "'Poppins', sans-serif" }}>
                Expert On-Campus Mentors
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Trained engineering professionals deliver live campus classes. We manage hiring, training, performance & replacements.
              </p>
            </div>

            {/* Mentor Badge Visual */}
            <div className="p-4 rounded-2xl bg-sky-950/40 border border-sky-500/20 space-y-3">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {['#818cf8', '#f472b6', '#38bdf8', '#4ade80'].map((c, idx) => (
                    <div key={idx} className="w-8 h-8 rounded-full border-2 border-slate-900 flex items-center justify-center text-white text-xs font-bold" style={{ background: c }}>
                      {String.fromCharCode(65 + idx)}
                    </div>
                  ))}
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Dedicated Trainers</div>
                  <div className="text-[10px] text-sky-300 font-medium">100% Industry Certified</div>
                </div>
              </div>
              <div className="w-full bg-sky-950/60 rounded-full h-2 overflow-hidden border border-sky-500/20">
                <div className="bg-sky-400 h-full w-[95%]" />
              </div>
            </div>
          </motion.div>

          {/* CARD 3: Industry Curriculum (5 Columns) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-5 group relative rounded-3xl p-8 overflow-hidden backdrop-blur-xl transition-all duration-500 hover:border-pink-500/50 flex flex-col justify-between"
            style={{
              background: 'linear-gradient(145deg, rgba(244,63,94,0.08) 0%, rgba(15,23,42,0.6) 100%)',
              border: '1px solid rgba(255,255,255,0.08)',
              boxShadow: '0 20px 50px rgba(0,0,0,0.3)',
            }}
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-pink-500/20 border border-pink-500/30 flex items-center justify-center text-pink-400">
                  <BookOpen size={24} />
                </div>
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-300">03 / Curriculum</span>
              </div>

              <h3 className="text-2xl font-black text-white mb-3" style={{ fontFamily: "'Poppins', sans-serif" }}>
                Industry-Aligned Syllabus
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Updated quarterly to mirror global tech breakthroughs — covering Python, Machine Learning, IoT, App Dev & Entrepreneurship.
              </p>
            </div>

            {/* Tech Tags Selector */}
            <div className="flex flex-wrap gap-2 pt-2">
              {TECH_TAGS.map((tag, idx) => (
                <button
                  key={tag}
                  onClick={() => setActiveTech(idx)}
                  className={`text-xs font-bold px-3 py-1.5 rounded-xl border transition-all duration-300 ${
                    activeTech === idx
                      ? 'bg-pink-500 text-white border-pink-400 shadow-lg shadow-pink-500/20 scale-105'
                      : 'bg-white/5 text-slate-400 border-white/10 hover:border-white/20'
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </motion.div>

          {/* CARD 4: End-to-End Operations (7 Columns) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="md:col-span-7 group relative rounded-3xl p-8 overflow-hidden backdrop-blur-xl transition-all duration-500 hover:border-amber-500/50 flex flex-col justify-between"
            style={{
              background: 'linear-gradient(145deg, rgba(245,158,11,0.08) 0%, rgba(15,23,42,0.6) 100%)',
              border: '1px solid rgba(255,255,255,0.08)',
              boxShadow: '0 20px 50px rgba(0,0,0,0.3)',
            }}
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400">
                  <Settings size={24} />
                </div>
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300">04 / Managed Operations</span>
              </div>

              <h3 className="text-2xl md:text-3xl font-black text-white mb-3" style={{ fontFamily: "'Poppins', sans-serif" }}>
                Zero-Burden Operations
              </h3>
              <p className="text-slate-400 text-sm md:text-base leading-relaxed mb-6">
                Scheduling, grading, hardware upkeep, parent reports & hackathons — handled 100% by Floyd School's specialized operational team.
              </p>
            </div>

            {/* Operations Checklist Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
              {OPS_ITEMS.map((item) => (
                <div key={item} className="flex items-center gap-2.5 p-3 rounded-xl bg-amber-950/30 border border-amber-500/20 text-xs font-bold text-amber-100">
                  <ShieldCheck size={16} className="text-amber-400 flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* CARD 5: NEP 2020 Compliance (6 Columns) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="md:col-span-6 group relative rounded-3xl p-8 overflow-hidden backdrop-blur-xl transition-all duration-500 hover:border-emerald-500/50 flex flex-col justify-between"
            style={{
              background: 'linear-gradient(145deg, rgba(16,185,129,0.08) 0%, rgba(15,23,42,0.6) 100%)',
              border: '1px solid rgba(255,255,255,0.08)',
              boxShadow: '0 20px 50px rgba(0,0,0,0.3)',
            }}
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                  <CheckCircle size={24} />
                </div>
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300">05 / NEP Alignment</span>
              </div>

              <h3 className="text-2xl font-black text-white mb-3" style={{ fontFamily: "'Poppins', sans-serif" }}>
                100% NEP 2020 Compliant
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Fulfills government vocational and experiential learning mandates seamlessly, giving your school a competitive accreditation edge.
              </p>
            </div>

            <div className="flex items-center gap-3 p-4 rounded-2xl bg-emerald-950/40 border border-emerald-500/20">
              <Award size={28} className="text-emerald-400 flex-shrink-0" />
              <div>
                <div className="text-xs font-bold text-white">National Skill Alignment</div>
                <div className="text-[11px] text-emerald-300 font-medium">Ready for CBSE, ICSE & State Boards</div>
              </div>
            </div>
          </motion.div>

          {/* CARD 6: Measurable Outcomes (6 Columns) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="md:col-span-6 group relative rounded-3xl p-8 overflow-hidden backdrop-blur-xl transition-all duration-500 hover:border-purple-500/50 flex flex-col justify-between"
            style={{
              background: 'linear-gradient(145deg, rgba(139,92,246,0.08) 0%, rgba(15,23,42,0.6) 100%)',
              border: '1px solid rgba(255,255,255,0.08)',
              boxShadow: '0 20px 50px rgba(0,0,0,0.3)',
            }}
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-purple-500/20 border border-purple-500/30 flex items-center justify-center text-purple-400">
                  <BarChart3 size={24} />
                </div>
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300">06 / Live Analytics</span>
              </div>

              <h3 className="text-2xl font-black text-white mb-3" style={{ fontFamily: "'Poppins', sans-serif" }}>
                Real-Time Skill Analytics
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Principals & parents receive automated monthly progress reports, student project portfolios & skill benchmark metrics.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-purple-950/40 border border-purple-500/20 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Activity size={22} className="text-purple-400" />
                <div>
                  <div className="text-xs font-bold text-white">Student Mastery Rate</div>
                  <div className="text-[10px] text-purple-300 font-medium">94.8% Project Completion</div>
                </div>
              </div>
              <span className="text-lg font-black text-purple-300">+34% YoY</span>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default TheProblem;
