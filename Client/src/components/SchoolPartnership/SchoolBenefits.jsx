import { motion } from 'framer-motion';
import { Check, ShieldAlert, Award, FileSpreadsheet } from 'lucide-react';

const NEP_POINTS = [
  {
    icon: Award,
    title: 'Vocational Subjects Integration',
    description: 'Structured modules covering AI, coding & hands-on robotics for middle school onward.',
    color: '#6C63FF',
    glow: 'rgba(108,99,255,0.2)',
    gradient: 'linear-gradient(135deg, #6C63FF, #818cf8)',
    bg: 'rgba(108,99,255,0.08)',
  },
  {
    icon: FileSpreadsheet,
    title: 'Skill Report Cards Mapping',
    description: 'Evaluation metrics for computational thinking, logical reasoning & design methodologies.',
    color: '#0ea5e9',
    glow: 'rgba(14,165,233,0.2)',
    gradient: 'linear-gradient(135deg, #0ea5e9, #38bdf8)',
    bg: 'rgba(14,165,233,0.08)',
  },
  {
    icon: ShieldAlert,
    title: 'Experiential Learning Focus',
    description: 'Active prototype-building satisfies the policy requirement for experiential STEM pedagogy.',
    color: '#f43f5e',
    glow: 'rgba(244,63,94,0.2)',
    gradient: 'linear-gradient(135deg, #f43f5e, #fb7185)',
    bg: 'rgba(244,63,94,0.08)',
  },
];

const COMPLIANCE_ITEMS = [
  'Matches CBSE vocational course standards',
  'Satisfies 10 bagless days requirement',
  'Provides structural progress data',
];

const SchoolBenefits = () => {
  return (
    <section id="nep-alignment" className="py-24 px-6 lg:px-12 relative overflow-hidden bg-slate-950 text-white">
      {/* Wavy top */}
      <div className="absolute top-0 left-0 right-0 pointer-events-none">
        <svg viewBox="0 0 1440 40" fill="none" className="w-full">
          <path d="M0 20 Q360 40 720 20 Q1080 0 1440 20 L1440 0 L0 0 Z" fill="#ffffff" />
        </svg>
      </div>

      {/* Orbs */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(108,99,255,0.06) 0%, transparent 70%)', filter: 'blur(60px)' }} />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(16,185,129,0.06) 0%, transparent 70%)', filter: 'blur(60px)' }} />

      <div className="max-w-[1200px] mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left */}
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-5 space-y-6">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full setu-body text-xs font-bold uppercase tracking-widest"
            style={{ background: 'linear-gradient(135deg, rgba(16,185,129,0.12), rgba(52,211,153,0.12))', border: '1px solid rgba(16,185,129,0.3)', color: '#10b981' }}>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Compliance &amp; Policy
          </span>

          <h2 className="setu-heading font-extrabold text-slate-900 leading-tight" style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)' }}>
            100% Aligned with{' '}
            <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(135deg, #6C63FF, #0ea5e9)' }}>
              NEP 2020 Guidelines
            </span>
          </h2>

          <p className="setu-body text-slate-500 leading-relaxed">
            NEP 2020 shifts focus from textbooks to skills. We ensure CBSE and state board compliance with zero friction.
          </p>

          <div className="space-y-3 pt-2">
            {COMPLIANCE_ITEMS.map((p, i) => (
              <motion.div key={p} initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="flex items-center gap-3 setu-body text-slate-700 text-sm">
                <div className="w-5 h-5 rounded-full flex items-center justify-center text-white flex-shrink-0"
                  style={{ background: 'linear-gradient(135deg, #10b981, #34d399)' }}>
                  <Check size={11} strokeWidth={3} />
                </div>
                {p}
              </motion.div>
            ))}
          </div>

          {/* NEP badge */}
          <motion.div whileHover={{ scale: 1.03 }}
            className="inline-flex items-center gap-3 p-4 rounded-2xl setu-body text-sm font-bold"
            style={{ background: 'linear-gradient(135deg, rgba(16,185,129,0.1), rgba(52,211,153,0.05))', border: '1px solid rgba(16,185,129,0.25)' }}>
            <span className="text-2xl">🏛️</span>
            <span className="text-emerald-700">Endorsed for NEP 2020 Vocational Track</span>
          </motion.div>
        </motion.div>

        {/* Right — policy cards */}
        <div className="lg:col-span-7 space-y-4">
          {NEP_POINTS.map((pt, idx) => (
            <motion.div key={pt.title}
              initial={{ opacity: 0, x: 28 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.55, delay: idx * 0.12, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4, boxShadow: `0 0 0 1px ${pt.color}20, 0 12px 30px ${pt.glow}` }}
              className="group p-6 rounded-3xl flex gap-5 bg-white overflow-hidden relative"
              style={{ border: '1px solid rgba(148,163,184,0.18)', transition: 'box-shadow 0.3s, transform 0.3s' }}
            >
              {/* Left colour accent */}
              <div className="absolute left-0 top-0 bottom-0 w-1 rounded-l-3xl" style={{ background: pt.gradient }} />

              {/* Hover wash */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 rounded-3xl pointer-events-none"
                style={{ background: pt.bg }} />

              <motion.div whileHover={{ scale: 1.1, rotate: -6 }} transition={{ duration: 0.3 }}
                className="relative z-10 w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0"
                style={{ background: pt.bg, border: `1px solid ${pt.color}20` }}>
                <pt.icon size={22} style={{ color: pt.color }} />
              </motion.div>

              <div className="relative z-10">
                <h3 className="setu-heading font-bold text-slate-900 text-base mb-1">{pt.title}</h3>
                <p className="setu-body text-slate-500 text-sm leading-relaxed">{pt.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Wavy bottom */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <svg viewBox="0 0 1440 40" fill="none" className="w-full">
          <path d="M0 20 Q360 0 720 20 Q1080 40 1440 20 L1440 40 L0 40 Z" fill="#ffffff" />
        </svg>
      </div>
    </section>
  );
};

export default SchoolBenefits;
