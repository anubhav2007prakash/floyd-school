import { motion } from 'framer-motion';
import { Check, ShieldAlert, Award, FileSpreadsheet, Sparkles } from 'lucide-react';

const NEP_POINTS = [
  {
    icon: Award,
    title: 'Vocational Subjects Integration',
    description: 'Structured modules covering AI, coding and hands-on robotics for middle school onward.',
    color: '#a78bfa',
    glow: 'rgba(167,139,250,0.25)',
    gradient: 'linear-gradient(135deg, #7c3aed, #a78bfa)',
    bg: 'rgba(167,139,250,0.12)',
  },
  {
    icon: FileSpreadsheet,
    title: 'Skill Report Cards Mapping',
    description: 'Evaluation metrics for computational thinking, logical reasoning and design methodologies.',
    color: '#38bdf8',
    glow: 'rgba(56,189,248,0.25)',
    gradient: 'linear-gradient(135deg, #0284c7, #38bdf8)',
    bg: 'rgba(56,189,248,0.12)',
  },
  {
    icon: ShieldAlert,
    title: 'Experiential Learning Focus',
    description: 'Active prototype-building satisfies the policy requirement for experiential STEM pedagogy.',
    color: '#fb7185',
    glow: 'rgba(251,113,133,0.25)',
    gradient: 'linear-gradient(135deg, #e11d48, #fb7185)',
    bg: 'rgba(251,113,133,0.12)',
  },
];

const COMPLIANCE_ITEMS = [
  'Matches CBSE vocational course standards',
  'Satisfies 10 bagless days requirement',
  'Provides structural progress data',
];

const SchoolBenefits = () => {
  return (
    <section
      id="nep-alignment"
      className="py-28 px-6 lg:px-12 relative overflow-hidden text-white"
      style={{
        background: 'linear-gradient(135deg, #0d0f2b 0%, #0f172a 40%, #0d1d2e 70%, #0a0f1d 100%)',
      }}
    >
      {/* Ambient glow orbs */}
      <div
        className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.15) 0%, transparent 65%)', filter: 'blur(80px)' }}
      />
      <div
        className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(16,185,129,0.12) 0%, transparent 65%)', filter: 'blur(80px)' }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(56,189,248,0.07) 0%, transparent 70%)', filter: 'blur(100px)' }}
      />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)', backgroundSize: '32px 32px' }}
      />

      {/* Top border glow */}
      <div
        className="absolute top-0 left-0 right-0 h-[2px]"
        style={{ background: 'linear-gradient(90deg, transparent, #7c3aed, #38bdf8, #10b981, transparent)' }}
      />

      <div className="max-w-[1200px] mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-14 items-center">

        {/* ── Left Panel ── */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-5 space-y-7"
        >
          {/* Eyebrow pill */}
          <span
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-black uppercase tracking-[0.2em]"
            style={{
              background: 'rgba(16,185,129,0.12)',
              border: '1px solid rgba(16,185,129,0.35)',
              color: '#34d399',
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            Compliance and Policy
          </span>

          {/* Highlighted heading */}
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-black leading-tight"
            style={{ fontSize: 'clamp(2.2rem, 3.8vw, 3rem)' }}
          >
            <span className="text-white">100% Aligned with </span>
            <span
              className="text-transparent bg-clip-text"
              style={{
                backgroundImage: 'linear-gradient(135deg, #a78bfa 0%, #38bdf8 50%, #34d399 100%)',
              }}
            >
              NEP 2020 Guidelines
            </span>
          </motion.h2>

          {/* Body text */}
          <p className="text-slate-300 leading-relaxed text-base md:text-lg">
            NEP 2020 shifts focus from textbooks to skills. We ensure CBSE and state board compliance with zero friction.
          </p>

          {/* Compliance checklist */}
          <div className="space-y-3 pt-1">
            {COMPLIANCE_ITEMS.map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="flex items-center gap-3 text-slate-200 text-sm font-medium"
              >
                <div
                  className="w-5 h-5 rounded-full flex items-center justify-center text-white flex-shrink-0"
                  style={{ background: 'linear-gradient(135deg, #10b981, #34d399)' }}
                >
                  <Check size={11} strokeWidth={3} />
                </div>
                {item}
              </motion.div>
            ))}
          </div>

          {/* NEP endorsement badge */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="inline-flex items-center gap-3 p-4 rounded-2xl text-sm font-bold"
            style={{
              background: 'linear-gradient(135deg, rgba(16,185,129,0.15), rgba(52,211,153,0.08))',
              border: '1px solid rgba(16,185,129,0.35)',
              boxShadow: '0 0 24px rgba(16,185,129,0.12)',
            }}
          >
            <span className="text-emerald-300">Endorsed for NEP 2020 Vocational Track</span>
          </motion.div>
        </motion.div>

        {/* ── Right Panel — Policy Cards ── */}
        <div className="lg:col-span-7 space-y-4">
          {NEP_POINTS.map((pt, idx) => {
            const Icon = pt.icon;
            return (
              <motion.div
                key={pt.title}
                initial={{ opacity: 0, x: 28 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: idx * 0.12, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -4, boxShadow: `0 0 0 1px ${pt.color}30, 0 20px 40px ${pt.glow}` }}
                className="group p-6 rounded-3xl flex gap-5 relative overflow-hidden"
                style={{
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  backdropFilter: 'blur(12px)',
                  transition: 'box-shadow 0.3s, transform 0.3s',
                }}
              >
                {/* Left colour accent bar */}
                <div className="absolute left-0 top-0 bottom-0 w-1 rounded-l-3xl" style={{ background: pt.gradient }} />

                {/* Hover wash */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl pointer-events-none"
                  style={{ background: pt.bg }}
                />

                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: -6 }}
                  transition={{ duration: 0.3 }}
                  className="relative z-10 w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0"
                  style={{ background: pt.bg, border: `1px solid ${pt.color}30` }}
                >
                  <Icon size={22} style={{ color: pt.color }} />
                </motion.div>

                {/* Text */}
                <div className="relative z-10">
                  <h3 className="font-bold text-white text-base mb-1">{pt.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{pt.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>

      {/* Bottom border glow */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[2px]"
        style={{ background: 'linear-gradient(90deg, transparent, #10b981, #38bdf8, #7c3aed, transparent)' }}
      />
    </section>
  );
};

export default SchoolBenefits;
